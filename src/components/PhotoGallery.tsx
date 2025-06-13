import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { useLanguage } from '@/context/LanguageContext';

interface Photo {
  src: string;
  alt: {
    en: string;
    pt: string;
  };
  width?: number;
  height?: number;
}

interface PhotoGalleryProps {
  photos: Photo[];
  showTitle?: boolean;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos, showTitle = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const { language, t } = useLanguage();

  // Convert photos to lightbox format
  const lightboxSlides = photos.map(photo => ({
    src: photo.src,
    alt: photo.alt[language],
    width: photo.width,
    height: photo.height,
  }));

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  if (!photos || photos.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      {showTitle && (
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          {t('news.photoGallery')}
        </h3>
      )}
      
      {/* Photo Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={() => openLightbox(index)}
            title={t('news.viewPhoto')}
          >
            <img
              src={photo.src}
              alt={photo.alt[language]}
              className="w-full h-32 sm:h-40 object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={photoIndex}
        slides={lightboxSlides}
        carousel={{
          finite: true,
        }}
        render={{
          buttonPrev: photos.length <= 1 ? () => null : undefined,
          buttonNext: photos.length <= 1 ? () => null : undefined,
        }}
        controller={{
          closeOnBackdropClick: true,
          closeOnPullDown: true,
          closeOnPullUp: true,
        }}
        animation={{
          fade: 300,
          swipe: 500,
        }}
      />
    </div>
  );
};

export default PhotoGallery; 