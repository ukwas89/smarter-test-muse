
import { useState, useEffect, memo } from 'react';

interface BlurImageProps {
  src: string;
  alt: string;
  className?: string;
}

const BlurImage = ({ src, alt, className = '' }: BlurImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoaded(true);
    };
    
    return () => {
      img.onload = null;
    };
  }, [src]);
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div 
        className={`w-full h-full bg-slate-100 absolute inset-0 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        } transition-opacity duration-300 ease-in-out`}
      />
      <img 
        src={src} 
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`w-full h-full object-cover transition-opacity duration-300 ease-in-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};

// Memoize component to prevent unnecessary re-renders
export default memo(BlurImage);
