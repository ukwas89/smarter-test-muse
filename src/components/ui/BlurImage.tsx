
import { useState, useEffect } from 'react';

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
  }, [src]);
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div 
        className={`w-full h-full bg-slate-100 absolute inset-0 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        } transition-opacity duration-500 ease-in-out`}
      />
      <img 
        src={src} 
        alt={alt} 
        className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};

export default BlurImage;
