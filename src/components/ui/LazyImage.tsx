
import { useState, useEffect, useRef, memo } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholderColor?: string;
}

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholderColor = 'bg-slate-100' 
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Skip if already loaded or no ref
    if (isLoaded || !imgRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px 0px', // Start loading 200px before it comes into view
        threshold: 0.01
      }
    );
    
    observer.observe(imgRef.current);
    
    return () => {
      if (imgRef.current) {
        observer.disconnect();
      }
    };
  }, [isLoaded]);
  
  useEffect(() => {
    if (!isInView) return;
    
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoaded(true);
    };
    
    return () => {
      img.onload = null;
    };
  }, [src, isInView]);
  
  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      <div 
        className={`w-full h-full ${placeholderColor} absolute inset-0 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        } transition-opacity duration-300 ease-in-out`}
      />
      {isInView && (
        <img 
          src={src} 
          alt={alt}
          loading="lazy"
          decoding="async"
          className={`w-full h-full object-cover transition-opacity duration-300 ease-in-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          width="100%"
          height="auto"
        />
      )}
    </div>
  );
};

// Memoize component to prevent unnecessary re-renders
export default memo(LazyImage);
