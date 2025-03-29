
import { useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const Preload = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    // Critical resources to preload
    const logoImage = '/lovable-uploads/5eae210c-3b37-447e-bdfc-75f728932f7b.png';
    
    // Preload critical images with priority
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = logoImage;
    link.fetchPriority = 'high';
    document.head.appendChild(link);

    // Only preconnect to non-critical domains on desktop or if not on slow connection
    if (!isMobile || (navigator.connection && !(navigator.connection as any).saveData)) {
      // Preconnect to critical domains
      const preconnectDomains = [
        'https://fonts.googleapis.com',
        'https://www.googletagmanager.com'
      ];
      
      preconnectDomains.forEach(domain => {
        const preconnectLink = document.createElement('link');
        preconnectLink.rel = 'preconnect';
        preconnectLink.href = domain;
        preconnectLink.crossOrigin = 'anonymous';
        document.head.appendChild(preconnectLink);
      });
    }

    // Detect slow connections and inform the app
    if ('connection' in navigator) {
      const connection = navigator.connection as any;
      if (connection && (connection.saveData || connection.effectiveType.includes('2g'))) {
        document.documentElement.classList.add('slow-connection');
      }
    }
  }, [isMobile]);
  
  return null;
};

export default Preload;
