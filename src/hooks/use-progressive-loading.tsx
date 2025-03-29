import { useState, useEffect } from 'react';

interface ProgressiveLoadingOptions {
  lowQualityURL?: string;
  delayMs?: number;
  retryInterval?: number;
  maxRetries?: number;
}

export function useProgressiveLoading(
  highQualityURL: string, 
  options: ProgressiveLoadingOptions = {}
) {
  const {
    lowQualityURL,
    delayMs = 0,
    retryInterval = 5000,
    maxRetries = 3
  } = options;
  
  const [currentSrc, setCurrentSrc] = useState<string>(lowQualityURL || '');
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [retries, setRetries] = useState<number>(0);
  
  useEffect(() => {
    setIsLoaded(false);
    setError(false);
    setRetries(0);
    
    if (!highQualityURL) {
      setError(true);
      return;
    }
    
    // If we have a lowQualityURL, use it immediately
    if (lowQualityURL) {
      setCurrentSrc(lowQualityURL);
    }
    
    // Add delay if specified (useful for non-critical images)
    const timeoutId = setTimeout(() => {
      const img = new Image();
      
      img.onload = () => {
        setCurrentSrc(highQualityURL);
        setIsLoaded(true);
      };
      
      img.onerror = () => {
        // Retry logic for poor connections
        if (retries < maxRetries) {
          const retryId = setTimeout(() => {
            setRetries(r => r + 1);
            img.src = highQualityURL + '?retry=' + (retries + 1);
          }, retryInterval);
          
          return () => clearTimeout(retryId);
        } else {
          setError(true);
          // Keep the low quality image if we have it
          if (!lowQualityURL) {
            setCurrentSrc('');
          }
        }
      };
      
      img.src = highQualityURL;
      
      return () => {
        img.onload = null;
        img.onerror = null;
      };
    }, delayMs);
    
    return () => clearTimeout(timeoutId);
  }, [highQualityURL, lowQualityURL, delayMs, retries, retryInterval, maxRetries]);
  
  return { src: currentSrc, isLoaded, error };
}
