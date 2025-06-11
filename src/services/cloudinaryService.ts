// Cloudinary Service
// Handles image uploads for the admission form

// Configuration - These should be environment variables in production
const CLOUDINARY_CLOUD_NAME = 'your-cloud-name'; // Replace with your cloud name
const CLOUDINARY_UPLOAD_PRESET = 'unsigned_uploads'; // Replace with your upload preset

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
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
  
  // Create a unique public_id based on student name and timestamp
  const sanitizedName = studentName.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
  const timestamp = Date.now();
  const publicId = `admission_photos/student_${sanitizedName}_${timestamp}`;
  formData.append('public_id', publicId);
  
  // Add folder organization
  formData.append('folder', 'admission_photos');
  
  // Add transformation for optimization
  formData.append('eager', 'c_fill,h_400,w_400,q_auto,f_auto');

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
            resolve(response);
          } catch (error) {
            reject(new Error('Failed to parse upload response'));
          }
        } else {
          reject(new Error(`Upload failed with status: ${xhr.status}`));
        }
      };

      xhr.onerror = () => {
        reject(new Error('Upload failed - network error'));
      };

      // Send request
      xhr.open('POST', `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`);
      xhr.send(formData);
    });
  } catch (error) {
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
  // Check if Cloudinary widget is loaded
  if (typeof window === 'undefined' || !window.cloudinary) {
    onError('Cloudinary widget not loaded');
    return;
  }

  const sanitizedName = studentName.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
  const timestamp = Date.now();
  const publicId = `admission_photos/student_${sanitizedName}_${timestamp}`;

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

export default {
  uploadStudentPhoto,
  generateImageUrl,
  deleteImage,
  openUploadWidget,
  loadCloudinaryWidget
}; 