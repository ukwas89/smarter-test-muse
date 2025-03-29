
import { useEffect } from 'react';

const Preload = () => {
  useEffect(() => {
    // Preload critical images
    const preloadImages = [
      '/lovable-uploads/5eae210c-3b37-447e-bdfc-75f728932f7b.png'
    ];
    
    preloadImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
    
    // Preconnect to critical domains
    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://www.googletagmanager.com'
    ];
    
    preconnectDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }, []);
  
  return null;
};

export default Preload;
