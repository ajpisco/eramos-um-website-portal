// Image configuration
const IMAGE_CONFIG = {
  // Set to 'local' for local images, 'backend' for backend images
  // Can be overridden by VITE_IMAGE_SOURCE environment variable
  source: (import.meta.env.VITE_IMAGE_SOURCE as 'local' | 'backend') || 'local',
  // Backend API base URL (will be used when source is 'backend')
  backendUrl: import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001',
  // Local images base path (from public folder) - includes app base path
  localBasePath: '/eramos-um-website-portal/images',
};

/**
 * Gets the appropriate image URL based on current configuration
 * @param category - Image category (e.g., 'activities', 'news', 'team')
 * @param imageName - Image filename without extension
 * @param extension - Image file extension (default: 'png')
 * @returns Complete image URL
 */
export const getImageUrl = (
  category: string, 
  imageName: string, 
  extension: string = 'png'
): string => {
  if (IMAGE_CONFIG.source === 'backend') {
    // Backend URL format: http://localhost:3001/api/images/activities/swimming.png
    return `${IMAGE_CONFIG.backendUrl}/api/images/${category}/${imageName}.${extension}`;
  } else {
    // Local URL format: /eramos-um-website-portal/images/activities/swimming.png
    return `${IMAGE_CONFIG.localBasePath}/${category}/${imageName}.${extension}`;
  }
};

/**
 * Gets activity image URL
 * @param imageName - Activity image name
 * @returns Activity image URL
 */
export const getActivityImage = (imageName: string): string => {
  return getImageUrl('activities', imageName);
};

/**
 * Gets news image URL
 * @param imageName - News image name
 * @returns News image URL
 */
export const getNewsImage = (imageName: string): string => {
  return getImageUrl('news', imageName);
};

/**
 * Gets team member image URL
 * @param imageName - Team member image name
 * @returns Team member image URL
 */
export const getTeamImage = (imageName: string): string => {
  return getImageUrl('team', imageName);
};

/**
 * Switch image source configuration (useful for development/testing)
 * @param source - 'local' or 'backend'
 */
export const setImageSource = (source: 'local' | 'backend'): void => {
  IMAGE_CONFIG.source = source;
};

/**
 * Get current image source configuration
 * @returns Current image source
 */
export const getImageSource = (): string => {
  return IMAGE_CONFIG.source;
}; 