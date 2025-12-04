'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ZoomIn, X } from 'lucide-react';

interface BlogImageProps {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
}

export function BlogImage({
  src,
  alt,
  caption,
  width = 800,
  height = 450,
  priority = false,
  className,
}: BlogImageProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <figure className={cn("my-8 not-prose", className)}>
        <div 
          className="relative group cursor-zoom-in overflow-hidden rounded-lg border border-gray-200 bg-gray-50"
          onClick={() => setIsZoomed(true)}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            className={cn(
              "w-full h-auto transition-all duration-300",
              isLoading ? "blur-sm scale-105" : "blur-0 scale-100",
              "group-hover:scale-[1.02]"
            )}
            onLoad={() => setIsLoading(false)}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
            <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 drop-shadow-lg" />
          </div>
        </div>
        {caption && (
          <figcaption className="mt-3 text-center text-sm text-gray-600 italic">
            {caption}
          </figcaption>
        )}
      </figure>

      {/* Lightbox */}
      {isZoomed && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setIsZoomed(false)}
        >
          <button
            onClick={() => setIsZoomed(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>
          <Image
            src={src}
            alt={alt}
            width={1600}
            height={900}
            className="max-w-full max-h-[90vh] object-contain"
          />
        </div>
      )}
    </>
  );
}

