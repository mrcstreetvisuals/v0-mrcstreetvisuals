"use client"

import Image from "next/image"
import { WatermarkOverlay } from "@/components/watermark-overlay"
import { useState } from "react"

interface WatermarkedImageProps {
  src: string
  alt: string
  fill?: boolean
  width?: number
  height?: number
  className?: string
  sizes?: string
  priority?: boolean
  watermarkVariant?: "text" | "logo" | "subtle"
  watermarkPosition?: "center" | "bottom-right" | "bottom-left" | "top-right" | "top-left" | "diagonal"
  watermarkOpacity?: number
  watermarkSize?: "sm" | "md" | "lg"
  onLoad?: () => void
  onError?: () => void
}

export function WatermarkedImage({
  src,
  alt,
  fill = false,
  width,
  height,
  className = "",
  sizes,
  priority = false,
  watermarkVariant = "subtle",
  watermarkPosition = "diagonal",
  watermarkOpacity = 0.15,
  watermarkSize = "md",
  onLoad,
  onError,
}: WatermarkedImageProps) {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleImageError = () => {
    console.log("Image error for:", src)
    setImageError(true)
    setImageLoaded(true)
    onError?.()
  }

  const handleImageLoad = () => {
    console.log("Image loaded:", src)
    setImageLoaded(true)
    onLoad?.()
  }

  // Use placeholder if image fails to load
  const imageSrc = imageError ? "/placeholder.svg?height=400&width=600&text=Image+Not+Found" : src

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Loading state */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center z-20">
          <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Main Image */}
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        className={`object-cover transition-opacity duration-300 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
        sizes={sizes}
        priority={priority}
        onError={handleImageError}
        onLoad={handleImageLoad}
        unoptimized={imageError} // Use unoptimized for placeholder
      />

      {/* Watermark Overlay - only show when image is loaded and not an error */}
      {imageLoaded && !imageError && (
        <WatermarkOverlay
          variant={watermarkVariant}
          position={watermarkPosition}
          opacity={watermarkOpacity}
          size={watermarkSize}
        />
      )}

      {/* Additional protection overlay for right-click prevention */}
      <div
        className="absolute inset-0 z-30 pointer-events-none"
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
        style={{
          WebkitUserSelect: "none",
          MozUserSelect: "none",
          msUserSelect: "none",
          userSelect: "none",
        }}
      />
    </div>
  )
}
