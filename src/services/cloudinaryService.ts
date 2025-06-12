// Cloudinary Service
// Handles image uploads for the admission form

// Configuration from environment variables
const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_API_KEY = import.meta.env.VITE_CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET = import.meta.env.VITE_CLOUDINARY_API_SECRET;
const CLOUDINARY_UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || 'unsigned_uploads';

// Validate configuration
if (!CLOUDINARY_CLOUD_NAME) {
  console.error('Cloudinary configuration missing: VITE_CLOUDINARY_CLOUD_NAME is required');
}

// Upload response interface
export interface CloudinaryUploadResponse {
  public_id: string;
  secure_url: string;
  url: string;
  width: number;
  height: number;
  format: string;
  bytes: number;
  created_at: string;
  etag: string;
  resource_type: string;
  type: string;
  version: number;
  version_id: string;
}

/**
 * Generate signature for signed uploads (requires API secret)
 * This should ideally be done on the backend for security
 */
const generateSignature = (params: Record<string, any>): string => {
  if (!CLOUDINARY_API_SECRET) {
    throw new Error('CLOUDINARY_API_SECRET is required for signed uploads');
  }
  
  // Sort parameters
  const sortedParams = Object.keys(params)
    .sort()
    .map(key => `${key}=${params[key]}`)
    .join('&');
  
  // In a real implementation, you'd use crypto to generate SHA1 hash
  // For now, we'll use unsigned uploads
  return sortedParams + CLOUDINARY_API_SECRET;
};

/**
 * Upload image directly to Cloudinary using fetch API
 * This is the primary method for uploading student photos
 * 
 * @param file - The image file to upload
 * @param studentName - Student name for organizing uploads
 * @param onProgress - Optional progress callback
 * @returns Promise with Cloudinary response
 */
export const uploadStudentPhoto = async (
  file: File,
  studentName: string,
  onProgress?: (progress: number) => void
): Promise<CloudinaryUploadResponse> => {
  // Validate configuration
  if (!CLOUDINARY_CLOUD_NAME) {
    throw new Error('Cloudinary is not configured. Please set VITE_CLOUDINARY_CLOUD_NAME environment variable.');
  }

  // Validate file
  if (!file) {
    throw new Error('No file provided');
  }

  // Check file type
  if (!file.type.startsWith('image/')) {
    throw new Error('File must be an image');
  }

  // Check file size (5MB limit)
  const maxSize = 5 * 1024 * 1024; // 5MB
  if (file.size > maxSize) {
    throw new Error('File size must be less than 5MB');
  }

  // Create form data
  const formData = new FormData();
  formData.append('file', file);
  
  // Create a unique public_id based on student name and timestamp
  const sanitizedName = studentName.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
  const timestamp = Date.now();
  const publicId = `admission_photos/${sanitizedName}_${timestamp}`;
  
  // Add required fields for unsigned upload
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
  formData.append('public_id', publicId);
  
  // Debug logging
  console.log('Cloudinary Upload Configuration:', {
    cloudName: CLOUDINARY_CLOUD_NAME,
    uploadPreset: CLOUDINARY_UPLOAD_PRESET,
    publicId: publicId,
    fileSize: file.size,
    fileType: file.type
  });

  try {
    const xhr = new XMLHttpRequest();
    
    return new Promise((resolve, reject) => {
      // Set up progress tracking
      if (onProgress) {
        xhr.upload.addEventListener('progress', (event) => {
          if (event.lengthComputable) {
            const progress = (event.loaded / event.total) * 100;
            onProgress(progress);
          }
        });
      }

      // Set up response handling
      xhr.onload = () => {
        if (xhr.status === 200) {
          try {
            const response = JSON.parse(xhr.responseText) as CloudinaryUploadResponse;
            console.log('Cloudinary upload successful:', response);
            resolve(response);
          } catch (error) {
            console.error('Failed to parse Cloudinary response:', xhr.responseText);
            reject(new Error('Failed to parse upload response'));
          }
        } else {
          // Log detailed error information
          console.error('Cloudinary upload failed:', {
            status: xhr.status,
            statusText: xhr.statusText,
            response: xhr.responseText
          });
          
          let errorMessage = `Upload failed with status: ${xhr.status}`;
          
          // Try to parse error response for more details
          try {
            const errorResponse = JSON.parse(xhr.responseText);
            if (errorResponse.error && errorResponse.error.message) {
              errorMessage = `Cloudinary Error: ${errorResponse.error.message}`;
            }
          } catch (e) {
            // If we can't parse the error, use the status text
            if (xhr.statusText) {
              errorMessage += ` (${xhr.statusText})`;
            }
          }
          
          reject(new Error(errorMessage));
        }
      };

      xhr.onerror = () => {
        console.error('Network error during upload');
        reject(new Error('Upload failed - network error'));
      };

      // Send request
      const uploadUrl = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;
      console.log('Uploading to:', uploadUrl);
      xhr.open('POST', uploadUrl);
      xhr.send(formData);
    });
  } catch (error) {
    console.error('Upload setup error:', error);
    throw new Error(`Upload failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};

/**
 * Generate optimized image URL from Cloudinary
 * @param publicId - Cloudinary public ID
 * @param options - Transformation options
 */
export const generateImageUrl = (
  publicId: string,
  options: {
    width?: number;
    height?: number;
    crop?: 'fill' | 'fit' | 'scale' | 'limit';
    quality?: 'auto' | number;
    format?: 'auto' | 'jpg' | 'png' | 'webp';
  } = {}
): string => {
  if (!CLOUDINARY_CLOUD_NAME) {
    console.error('Cloudinary cloud name not configured');
    return '';
  }

  const {
    width = 400,
    height = 400,
    crop = 'fill',
    quality = 'auto',
    format = 'auto'
  } = options;

  const transformations = [
    `c_${crop}`,
    `w_${width}`,
    `h_${height}`,
    `q_${quality}`,
    `f_${format}`
  ].join(',');

  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${transformations}/${publicId}`;
};

/**
 * Delete image from Cloudinary
 * @param publicId - Cloudinary public ID to delete
 */
export const deleteImage = async (publicId: string): Promise<void> => {
  // Note: Deletion requires signed requests with API secret
  // For security, this should be implemented on the backend
  console.warn('Image deletion should be implemented on the backend for security');
  
  // Frontend can only mark for deletion or cleanup locally
  // The actual deletion should happen via backend API
};

/**
 * Open Cloudinary Upload Widget
 * Alternative upload method with more features
 */
export const openUploadWidget = (
  studentName: string,
  onSuccess: (result: CloudinaryUploadResponse) => void,
  onError: (error: string) => void
): void => {
  // Validate configuration
  if (!CLOUDINARY_CLOUD_NAME) {
    onError('Cloudinary is not configured. Please set VITE_CLOUDINARY_CLOUD_NAME environment variable.');
    return;
  }

  // Check if Cloudinary widget is loaded
  if (typeof window === 'undefined' || !window.cloudinary) {
    onError('Cloudinary widget not loaded');
    return;
  }

  const sanitizedName = studentName.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
  const timestamp = Date.now();
  const publicId = `admission_photos/${sanitizedName}_${timestamp}`;

  window.cloudinary.openUploadWidget(
    {
      cloudName: CLOUDINARY_CLOUD_NAME,
      uploadPreset: CLOUDINARY_UPLOAD_PRESET,
      publicId: publicId,
      folder: 'admission_photos',
      sources: ['local', 'camera'],
      multiple: false,
      maxFiles: 1,
      maxFileSize: 5000000, // 5MB
      clientAllowedFormats: ['jpg', 'jpeg', 'png', 'gif', 'webp'],
      showAdvancedOptions: false,
      showPoweredBy: false,
      showUploadMoreButton: false,
      eager: 'c_fill,h_400,w_400,q_auto,f_auto',
      styles: {
        palette: {
          window: '#ffffff',
          sourceBg: '#f4f4f5',
          windowBorder: '#90a0b3',
          tabIcon: '#0078ff',
          inactiveTabIcon: '#69778a',
          menuIcons: '#0078ff',
          link: '#0078ff',
          action: '#0078ff',
          inProgress: '#0078ff',
          complete: '#20b832',
          error: '#ea2727',
          textDark: '#000000',
          textLight: '#ffffff'
        }
      }
    },
    (error: any, result: any) => {
      if (error) {
        onError(error.message || 'Upload failed');
        return;
      }

      if (result.event === 'success') {
        onSuccess(result.info as CloudinaryUploadResponse);
      }
    }
  );
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    cloudinary?: {
      openUploadWidget: (config: any, callback: (error: any, result: any) => void) => void;
    };
  }
}

/**
 * Load Cloudinary Upload Widget script
 * Call this once in your app initialization
 */
export const loadCloudinaryWidget = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      reject(new Error('Window object not available'));
      return;
    }

    // Check if already loaded
    if (window.cloudinary) {
      resolve();
      return;
    }

    // Create script element
    const script = document.createElement('script');
    script.src = 'https://widget.cloudinary.com/v2.0/global/all.js';
    script.async = true;
    
    script.onload = () => {
      // Wait a bit for the library to initialize
      setTimeout(() => {
        if (window.cloudinary) {
          resolve();
        } else {
          reject(new Error('Cloudinary widget failed to initialize'));
        }
      }, 100);
    };
    
    script.onerror = () => {
      reject(new Error('Failed to load Cloudinary widget'));
    };

    document.head.appendChild(script);
  });
};

/**
 * Test Cloudinary configuration
 * This function helps debug configuration issues
 */
export const testCloudinaryConfig = async (): Promise<void> => {
  console.log('Testing Cloudinary Configuration...');
  
  // Check environment variables
  console.log('Environment Variables:', {
    VITE_CLOUDINARY_CLOUD_NAME: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
    VITE_CLOUDINARY_UPLOAD_PRESET: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
    hasApiKey: !!import.meta.env.VITE_CLOUDINARY_API_KEY,
    hasApiSecret: !!import.meta.env.VITE_CLOUDINARY_API_SECRET
  });
  
  // Check if required variables are set
  if (!CLOUDINARY_CLOUD_NAME) {
    console.error('❌ VITE_CLOUDINARY_CLOUD_NAME is not set');
    return;
  }
  
  if (!CLOUDINARY_UPLOAD_PRESET) {
    console.error('❌ VITE_CLOUDINARY_UPLOAD_PRESET is not set');
    return;
  }
  
  console.log('✅ Basic configuration looks good');
  console.log('Cloud Name:', CLOUDINARY_CLOUD_NAME);
  console.log('Upload Preset:', CLOUDINARY_UPLOAD_PRESET);
  
  // Test upload preset by making a simple request
  try {
    const testFormData = new FormData();
    testFormData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    
    const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, {
      method: 'POST',
      body: testFormData
    });
    
    const result = await response.text();
    
    if (response.status === 400) {
      console.error('❌ Upload preset test failed with 400:', result);
      try {
        const errorData = JSON.parse(result);
        if (errorData.error) {
          console.error('Error details:', errorData.error);
        }
      } catch (e) {
        console.error('Could not parse error response');
      }
    } else {
      console.log('✅ Upload preset is accessible (expected error due to no file)');
    }
  } catch (error) {
    console.error('❌ Network error testing upload preset:', error);
  }
};

export default {
  uploadStudentPhoto,
  generateImageUrl,
  deleteImage,
  openUploadWidget,
  loadCloudinaryWidget
}; 