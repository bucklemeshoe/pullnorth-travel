import Image from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  priority?: boolean
  fill?: boolean
  sizes?: string
}

export default function OptimizedImage({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  fill = false,
  sizes,
  ...props
}: OptimizedImageProps) {
  const [imageSrc, setImageSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  // Convert to WebP if available
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp')
  
  const handleError = () => {
    if (!hasError && imageSrc === webpSrc) {
      // Fallback to original format if WebP fails
      setImageSrc(src)
      setHasError(true)
    }
  }

  return (
    <Image
      src={imageSrc}
      alt={alt}
      className={className}
      width={width}
      height={height}
      priority={priority}
      fill={fill}
      sizes={sizes}
      onError={handleError}
      {...props}
    />
  )
} 