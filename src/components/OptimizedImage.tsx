
import { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

const OptimizedImage = ({ src, alt, width, height, className = '' }: OptimizedImageProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoading(false);
  }, [src]);

  if (loading) {
    return <Skeleton className={`${className} rounded-lg`} style={{ width, height }} />;
  }

  return (
    <picture>
      <source
        type="image/webp"
        srcSet={`${src}?format=webp${width ? `&width=${width}` : ''}`}
      />
      <source
        type="image/avif"
        srcSet={`${src}?format=avif${width ? `&width=${width}` : ''}`}
      />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${className} w-full h-auto`}
        loading="lazy"
        decoding="async"
      />
    </picture>
  );
};

export default OptimizedImage;
