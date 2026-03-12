"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { useGradualBlur } from "@/hooks/use-gradual-blur"

interface BlurRevealImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  blurAmount?: number
  duration?: number
  delay?: number
  priority?: boolean
  sizes?: string
  triggerOnce?: boolean
  reverseOnExit?: boolean
  exitDelay?: number
  easing?: "ease" | "ease-in" | "ease-out" | "ease-in-out" | "linear"
  animationType?: "blur" | "blur-scale" | "blur-fade" | "blur-slide"
  direction?: "up" | "down" | "left" | "right"
  threshold?: number | number[]
  rootMargin?: string
  onLoad?: () => void
  onError?: () => void
}

export function BlurRevealImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className = "",
  blurAmount = 0, // Default to 0 blur
  duration = 400,
  delay = 0,
  priority = false,
  sizes,
  triggerOnce = false,
  reverseOnExit = true,
  exitDelay = 100,
  easing = "ease-out",
  animationType = "blur-fade",
  direction = "up",
  threshold = 0.15,
  rootMargin = "0px 0px -100px 0px",
  onLoad,
  onError,
}: BlurRevealImageProps) {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageLoadProgress, setImageLoadProgress] = useState(0)

  const { ref, isVisible, isBlurred, isAnimating, blurStyle, containerStyle } = useGradualBlur({
    blurAmount,
    duration,
    delay,
    threshold,
    triggerOnce,
    reverseOnExit,
    exitDelay,
    easing,
  })

  const handleImageError = () => {
    setImageError(true)
    setImageLoaded(true)
    onError?.()
  }

  const handleImageLoad = () => {
    setImageLoaded(true)
    setImageLoadProgress(100)
    onLoad?.()
  }

  // Simulate loading progress for better UX
  useEffect(() => {
    if (!imageLoaded && !imageError) {
      const interval = setInterval(() => {
        setImageLoadProgress((prev) => {
          if (prev >= 90) {
            clearInterval(interval)
            return prev
          }
          return prev + Math.random() * 15
        })
      }, 100)

      return () => clearInterval(interval)
    }
  }, [imageLoaded, imageError])

  const getEnhancedStyles = () => {
    return {
      opacity: imageLoaded ? 1 : 0,
      transform: "scale(1)",
      transition: `opacity ${duration}ms ${easing}`,
    }
  }

  // Use placeholder if image fails to load
  const imageSrc = imageError ? "/placeholder.svg?height=400&width=600&text=Image+Not+Found" : src

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`} style={containerStyle}>
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center z-20 backdrop-blur-sm">
          <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <div style={getEnhancedStyles()}>
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          fill={fill}
          className={`object-cover transition-opacity duration-300 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
          priority={priority}
          sizes={sizes}
          onError={handleImageError}
          onLoad={handleImageLoad}
          unoptimized={imageError}
          style={{
            filter: "none", // Removed blur
          }}
        />
      </div>

      {/* Blur State Indicator (for debugging - can be removed) */}
      {process.env.NODE_ENV === "development" && (
        <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded z-30">
          {isBlurred ? "Blurred" : "Clear"} | {isVisible ? "Visible" : "Hidden"} |{" "}
          {isAnimating ? "Animating" : "Static"}
        </div>
      )}
    </div>
  )
}
