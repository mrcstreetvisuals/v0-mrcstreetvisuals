"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface BackgroundImageProps {
  src: string
  alt: string
  opacity?: number
  className?: string
  priority?: boolean
  fadeInDuration?: number
  fadeOutDuration?: number
  quality?: number
  objectPosition?: string
}

export function BackgroundImage({
  src,
  alt,
  opacity = 0.3,
  className = "",
  priority = false,
  fadeInDuration = 1000,
  fadeOutDuration = 800,
  quality = 85,
  objectPosition = "center",
}: BackgroundImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentOpacity, setCurrentOpacity] = useState(0)

  useEffect(() => {
    if (isLoaded) {
      // Fade in
      const fadeInTimer = setTimeout(() => {
        setCurrentOpacity(opacity)
      }, 50)

      return () => clearTimeout(fadeInTimer)
    }
  }, [isLoaded, opacity])

  return (
    <div className={cn("absolute inset-0 overflow-hidden w-full h-full pointer-events-none", className)}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        priority={priority}
        quality={quality}
        className="object-cover"
        style={{
          opacity: currentOpacity,
          transition: `opacity ${fadeInDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
          objectPosition,
        }}
        onLoadingComplete={() => setIsLoaded(true)}
        sizes="100vw"
      />
    </div>
  )
}

interface BackgroundSliderProps {
  images: string[]
  interval?: number
  opacity?: number
  className?: string
  priority?: boolean
  fadeInDuration?: number
  fadeOutDuration?: number
  crossfadeDuration?: number
  quality?: number
  objectPosition?: string
}

export function BackgroundSlider({
  images,
  interval = 8000,
  opacity = 0.3,
  className = "",
  priority = false,
  fadeInDuration = 1500,
  fadeOutDuration = 1500,
  crossfadeDuration = 2000,
  quality = 85,
  objectPosition = "center",
}: BackgroundSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    if (images.length <= 1) return

    const timer = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
        setIsTransitioning(false)
      }, crossfadeDuration / 2)
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval, crossfadeDuration])

  if (images.length === 0) return null

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {images.map((src, index) => {
        const isActive = index === currentIndex
        const isPrevious = index === (currentIndex - 1 + images.length) % images.length

        return (
          <div
            key={`${src}-${index}`}
            className="absolute inset-0"
            style={{
              opacity: isActive ? (isTransitioning ? 0 : opacity) : isPrevious && isTransitioning ? opacity : 0,
              transition: `opacity ${crossfadeDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
              pointerEvents: "none",
            }}
          >
            <Image
              src={src || "/placeholder.svg"}
              alt={`Background ${index + 1}`}
              fill
              priority={priority && index === 0}
              quality={quality}
              className="object-cover"
              style={{
                objectPosition,
              }}
              sizes="100vw"
            />
          </div>
        )
      })}
    </div>
  )
}
