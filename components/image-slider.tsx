"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useEffect, useState, useCallback } from "react"

interface SlideImage {
  src: string
  alt: string
  title?: string
  description?: string
}

interface ImageSliderProps {
  images: SlideImage[]
  autoPlay?: boolean
  interval?: number
  showControls?: boolean
  showIndicators?: boolean
  className?: string
  aspectRatio?: "video" | "square" | "portrait" | "wide"
  fullScreen?: boolean // New prop for full-screen mode
}

export function ImageSlider({
  images,
  autoPlay = true,
  interval = 5000,
  showControls = true,
  showIndicators = true,
  className = "",
  aspectRatio = "video",
  fullScreen = false, // Default to false
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [isLoaded, setIsLoaded] = useState(false)

  const aspectRatioClasses = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    wide: "aspect-[21/9]",
  }

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  const togglePlayPause = useCallback(() => {
    setIsPlaying(!isPlaying)
  }, [isPlaying])

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || images.length <= 1) return

    const timer = setInterval(nextSlide, interval)
    return () => clearInterval(timer)
  }, [isPlaying, interval, nextSlide, images.length])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowLeft":
          prevSlide()
          break
        case "ArrowRight":
          nextSlide()
          break
        case " ":
          e.preventDefault()
          togglePlayPause()
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [nextSlide, prevSlide, togglePlayPause])

  // Add error boundary and memory optimization
  useEffect(() => {
    const preloadImages = async () => {
      try {
        // Only preload first 3 images to reduce memory usage on iOS
        const imagesToPreload = images.slice(0, Math.min(3, images.length))
        const imagePromises = imagesToPreload.map((img) => {
          return new Promise((resolve) => {
            const image = new window.Image()
            image.onload = resolve
            image.onerror = resolve
            image.src = img.src
          })
        })

        await Promise.all(imagePromises)
        setIsLoaded(true)
      } catch (error) {
        console.warn("Image preloading failed:", error)
        setIsLoaded(true) // Still show the component
      }
    }

    preloadImages()
  }, [images])

  if (!isLoaded) {
    return (
      <div
        className={`${fullScreen ? "w-full h-full" : aspectRatioClasses[aspectRatio]} bg-gray-800 animate-pulse rounded-lg ${className}`}
      >
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative group overflow-hidden rounded-lg ${className}`} role="region" aria-label="Image carousel">
      {/* Main Image Container */}
      <div
        className={`relative ${fullScreen ? "w-full h-full ios-vh-fix" : aspectRatioClasses[aspectRatio]} overflow-hidden`}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            {/* Add iOS Safari transform optimization */}
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover optimized-image"
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{
                WebkitTransform: "translateZ(0)",
                transform: "translateZ(0)",
              }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Image Info */}
            {(image.title || image.description) && (
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                {image.title && <h3 className="text-lg sm:text-xl font-bold mb-2">{image.title}</h3>}
                {image.description && (
                  <p className="text-sm sm:text-base text-gray-200 line-clamp-2">{image.description}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Controls */}
      {showControls && images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 text-white hover:bg-black/60"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 text-white hover:bg-black/60"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </>
      )}

      {/* Indicators */}
      {showIndicators && images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`w-2.5 h-2.5 rounded-full ${
                idx === currentIndex ? "bg-white" : "bg-white/40"
              } transition-colors`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  NEW EXPORTS  */
/* ------------------------------------------------------------------ */ // named export (for `{ ImageSlider }` imports)
export default ImageSlider // default export (in case of `import ImageSlider`)
