"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  priority?: boolean
  className?: string
  sizes?: string
  quality?: number
  loading?: "lazy" | "eager"
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down"
  onLoad?: () => void
  onError?: () => void
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  quality = 75,
  loading = "lazy",
  objectFit = "cover",
  onLoad,
  onError,
}: OptimizedImageProps) {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [loadProgress, setLoadProgress] = useState(0)

  useEffect(() => {
    if (!imageLoaded && !imageError && !priority) {
      const interval = setInterval(() => {
        setLoadProgress((prev) => {
          if (prev >= 90) {
            clearInterval(interval)
            return prev
          }
          return prev + Math.random() * 15
        })
      }, 100)

      return () => clearInterval(interval)
    }
  }, [imageLoaded, imageError, priority])

  const handleImageError = () => {
    setImageError(true)
    setImageLoaded(true)
    onError?.()
  }

  const handleImageLoad = () => {
    setImageLoaded(true)
    setLoadProgress(100)
    onLoad?.()
  }

  const imageSrc = imageError ? "/placeholder.svg?height=400&width=600&text=Image+Not+Found" : src

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Loading skeleton */}
      {!imageLoaded && !priority && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center z-10">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin mb-2"></div>
            <div className="w-24 h-1.5 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-red-500 rounded-full transition-all duration-300"
                style={{ width: `${loadProgress}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Optimized Image */}
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        priority={priority}
        quality={quality}
        sizes={sizes}
        loading={loading}
        className={`${imageLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
        style={{
          objectFit: objectFit,
          // Force hardware acceleration
          transform: "translateZ(0)",
          WebkitTransform: "translateZ(0)",
          willChange: imageLoaded ? "auto" : "opacity",
        }}
        onLoad={handleImageLoad}
        onError={handleImageError}
        unoptimized={imageError}
        placeholder="empty"
      />
    </div>
  )
}
