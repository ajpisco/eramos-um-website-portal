import React, { useState, useRef, useCallback } from 'react';
import { Camera, Upload, X, Image as ImageIcon, Loader2, Check, AlertCircle } from 'lucide-react';
import { uploadStudentPhoto, CloudinaryUploadResponse, generateImageUrl, testCloudinaryConfig } from '@/services/cloudinaryService';

interface PhotoUploadProps {
  studentName: string;
  onPhotoUpload: (url: string, publicId: string) => void;
  onPhotoRemove: () => void;
  currentPhoto?: {
    url: string;
    publicId: string;
  };
  className?: string;
}

export const PhotoUpload: React.FC<PhotoUploadProps> = ({
  studentName,
  onPhotoUpload,
  onPhotoRemove,
  currentPhoto,
  className = ""
}) => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [previewUrl, setPreviewUrl] = useState<string | null>(currentPhoto?.url || null);
  const [error, setError] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle file selection
  const handleFileSelect = useCallback(async (file: File) => {
    if (!file) return;

    setError(null);
    setIsUploading(true);
    setUploadProgress(0);

    // Create preview URL
    const preview = URL.createObjectURL(file);
    setPreviewUrl(preview);

    try {
      // Upload to Cloudinary
      const result = await uploadStudentPhoto(
        file,
        studentName,
        (progress) => setUploadProgress(progress)
      );

      // Clean up preview URL
      URL.revokeObjectURL(preview);

      // Use raw Cloudinary URL (no transformations)
      const rawUrl = result.secure_url || result.url;

      // Update with raw Cloudinary URL
      setPreviewUrl(rawUrl);
      onPhotoUpload(rawUrl, result.public_id);

      // Debug: Log successful upload
      console.log('Photo upload successful:', {
        rawUrl,
        publicId: result.public_id,
        originalResult: result
      });

    } catch (err) {
      console.error('Upload error:', err);
      setError(err instanceof Error ? err.message : 'Upload failed');
      
      // Clean up preview URL on error
      URL.revokeObjectURL(preview);
      setPreviewUrl(currentPhoto?.url || null);
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  }, [studentName, onPhotoUpload, currentPhoto?.url]);

  // Handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  // Handle drag events
  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  }, [handleFileSelect]);

  // Handle photo removal
  const handleRemove = () => {
    setPreviewUrl(null);
    setError(null);
    onPhotoRemove();
    
    // Clear file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Trigger file input
  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={`w-full max-w-md mx-auto ${className}`}>
      {/* Upload Area */}
      <div
        className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-all duration-200 ${
          dragActive
            ? 'border-school-blue bg-blue-50'
            : isUploading
            ? 'border-yellow-400 bg-yellow-50'
            : error
            ? 'border-red-400 bg-red-50'
            : previewUrl
            ? 'border-green-400 bg-green-50'
            : 'border-gray-300 hover:border-gray-400'
        } ${!isUploading && !previewUrl ? 'cursor-pointer' : ''}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={!isUploading && !previewUrl ? triggerFileInput : undefined}
      >
        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleInputChange}
          className="hidden"
          disabled={isUploading}
        />

        {/* Preview Image */}
        {previewUrl && !isUploading && (
          <div className="relative">
            <img
              src={previewUrl}
              alt="Student photo preview"
              className="w-32 h-32 object-cover rounded-lg mx-auto mb-4 border-2 border-white shadow-lg"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleRemove();
              }}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
              title="Remove photo"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* Upload Progress */}
        {isUploading && (
          <div className="space-y-4">
            <div className="flex justify-center">
              <Loader2 className="h-8 w-8 text-school-blue animate-spin" />
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Uploading photo...</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-school-blue h-2 rounded-full transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
              <p className="text-xs text-gray-500">{Math.round(uploadProgress)}%</p>
            </div>
          </div>
        )}

        {/* Upload UI */}
        {!previewUrl && !isUploading && (
          <div className="space-y-4">
            <div className="flex justify-center">
              <div className="p-3 bg-gray-100 rounded-full">
                <Camera className="h-8 w-8 text-gray-500" />
              </div>
            </div>
            <div>
              <p className="text-lg font-medium text-gray-700 mb-2">
                Add Student Photo
              </p>
              <p className="text-sm text-gray-500 mb-3">
                Drag and drop a photo here, or click to browse
              </p>
              <div className="flex justify-center space-x-2">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    triggerFileInput();
                  }}
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Browse Files
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Success State */}
        {previewUrl && !isUploading && !error && (
          <div className="space-y-2">
            <div className="flex items-center justify-center">
              <Check className="h-5 w-5 text-green-600 mr-2" />
              <p className="text-sm font-medium text-green-700">Photo uploaded successfully</p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                triggerFileInput();
              }}
              className="text-sm text-school-blue hover:text-school-blue-dark transition-colors"
            >
              Replace photo
            </button>
          </div>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-md">
          <div className="flex items-center">
            <AlertCircle className="h-5 w-5 text-red-400 mr-2" />
            <p className="text-sm text-red-700">{error}</p>
          </div>
        </div>
      )}

      {/* Upload Guidelines */}
      {!previewUrl && !isUploading && (
        <div className="mt-4 text-xs text-gray-500 text-center space-y-1">
          <p>• Maximum file size: 5MB</p>
          <p>• Supported formats: JPG, PNG, GIF, WebP</p>
          <p>• Recommended: Square photos for best results</p>
        </div>
      )}
    </div>
  );
}; 
 