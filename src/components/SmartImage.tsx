'use client';

import React, { useState, useEffect } from 'react';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackSrc: string;
}

export default function SmartImage({ src, fallbackSrc, alt, ...props }: SmartImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    // Reset to src if the prop changes
    setCurrentSrc(src);
  }, [src]);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={currentSrc}
      alt={alt}
      onError={() => {
        if (currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc);
        }
      }}
      {...props}
    />
  );
}
