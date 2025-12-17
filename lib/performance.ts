/**
 * Performance Optimization Utilities
 * This file contains utilities to improve website performance
 */

// Preload critical images
export const preloadImages = (images: string[]) => {
  if (typeof window === 'undefined') return;
  
  images.forEach((src) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

// Lazy load images with intersection observer
export const lazyLoadImage = (img: HTMLImageElement) => {
  const src = img.dataset.src;
  if (!src) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        img.src = src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });

  observer.observe(img);
};

// Debounce function for scroll events
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Check if user prefers reduced motion
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Get optimal image format support
export const supportsWebP = (): boolean => {
  if (typeof window === 'undefined') return false;
  const elem = document.createElement('canvas');
  if (elem.getContext && elem.getContext('2d')) {
    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  return false;
};

// Critical resources to preload
export const CRITICAL_IMAGES = [
  '/pic/isawebdev.svg', // Logo
  '/pic/1.webp', // Hero background
];

// Optimize framer motion variants based on user preferences
export const getMotionConfig = () => {
  const reduced = prefersReducedMotion();
  return {
    initial: reduced ? {} : { opacity: 0, y: 20 },
    animate: reduced ? {} : { opacity: 1, y: 0 },
    transition: reduced ? { duration: 0 } : { duration: 0.5 },
  };
};
