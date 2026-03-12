"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import Image from "next/image"
import { useEffect, useState, useCallback } from "react"

interface ImageViewerProps {
  images: Array<{
    src: string
    alt: string
    caption?: string
    description?: string
  }>
  initialIndex: number
  onClose: () => void
}

export function ImageViewer({ images, initialIndex, onClose }: ImageViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [isLoading, setIsLoading] = useState(true)
  const [imageError, setImageError] = useState(false)

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
    setIsLoading(true)
    setImageError(false)
  }, [images.length])

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    setIsLoading(true)
    setImageError(false)
  }, [images.length])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight") nextImage()
      if (e.key === "ArrowLeft") prevImage()
    },
    [onClose, nextImage, prevImage],
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  const currentImage = images[currentIndex]

  const handleImageError = () => {
    setImageError(true)
    setIsLoading(false)
  }

  const handleImageLoad = () => {
    setIsLoading(false)
    setImageError(false)
  }

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
      {/* Background overlay - clicking closes modal */}
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} aria-label="Close image viewer" />

      {/* Close Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 z-10 text-white hover:bg-white/20 bg-black/50"
        onClick={onClose}
        aria-label="Close image viewer"
      >
        <X className="h-6 w-6" />
      </Button>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:bg-white/20 bg-black/50"
            onClick={prevImage}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:bg-white/20 bg-black/50"
            onClick={nextImage}
            aria-label="Next image"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </>
      )}

      {/* Image Container */}
      <div className="relative max-w-[95vw] max-h-[90vh] mx-4 flex items-center justify-center">
        {isLoading && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 rounded-lg">
            <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {imageError ? (
          <div className="flex flex-col items-center justify-center p-8 bg-gray-800 rounded-lg">
            <div className="text-gray-400 text-center">
              <div className="text-6xl mb-4">📷</div>
              <h3 className="text-xl font-semibold mb-2">Image Not Available</h3>
              <p className="text-sm">Sorry, this image could not be loaded.</p>
            </div>
          </div>
        ) : (
          <Image
            src={currentImage.src || "/placeholder.svg"}
            alt={currentImage.alt}
            width={1200}
            height={800}
            className="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-lg"
            priority
            onLoad={handleImageLoad}
            onError={handleImageError}
            style={{
              maxWidth: "95vw",
              maxHeight: "80vh",
            }}
          />
        )}

        {/* Image Info */}
        {!imageError && (currentImage.caption || currentImage.description) && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 sm:p-6 rounded-b-lg">
            {currentImage.caption && (
              <h3 className="text-white text-lg sm:text-xl font-semibold mb-2">{currentImage.caption}</h3>
            )}
            {currentImage.description && (
              <p className="text-gray-300 text-sm sm:text-base">{currentImage.description}</p>
            )}
          </div>
        )}
      </div>

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  )
}
