"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Instagram as InstagramIcon } from "lucide-react"

export interface InstagramPost {
  id: string
  src: string
  alt: string
  caption: string
  permalink: string
  isVideo?: boolean
}

interface InstagramCarouselProps {
  posts: InstagramPost[]
  autoplayInterval?: number
  showFollowButton?: boolean
  className?: string
}

export function InstagramCarousel({
  posts,
  autoplayInterval = 5000,
  showFollowButton = true,
  className = "",
}: InstagramCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const minSwipeDistance = 50

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % posts.length)
  }, [posts.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length)
  }, [posts.length])

  // Autoplay
  useEffect(() => {
    if (!isAutoPlaying || posts.length <= 1) return

    const timer = setInterval(nextSlide, autoplayInterval)
    return () => clearInterval(timer)
  }, [isAutoPlaying, autoplayInterval, nextSlide, posts.length])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide()
      if (e.key === "ArrowRight") nextSlide()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [nextSlide, prevSlide])

  // Swipe handling
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX)
    handleSwipe()
  }

  const handleSwipe = useCallback(() => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
  }, [touchStart, touchEnd, nextSlide, prevSlide])

  // Load check
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!isLoaded || posts.length === 0) {
    return (
      <div className={`w-full aspect-square sm:aspect-video bg-gray-900 rounded-2xl animate-pulse ${className}`} />
    )
  }

  const currentPost = posts[currentIndex]

  return (
    <div
      className={`relative w-full ${className}`}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Main carousel */}
      <div className="relative w-full aspect-square sm:aspect-video rounded-2xl overflow-hidden bg-black">
        {/* Current slide */}
        <Link href={currentPost.permalink} target="_blank" rel="noopener noreferrer">
          <div className="relative w-full h-full cursor-pointer group">
            <Image
              src={currentPost.src}
              alt={currentPost.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={currentIndex === 0}
            />

            {/* Video indicator */}
            {currentPost.isVideo && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                  <div className="w-0 h-0 border-l-8 border-l-white border-t-5 border-t-transparent border-b-5 border-b-transparent ml-1" />
                </div>
              </div>
            )}

            {/* Instagram icon overlay */}
            <div className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-md p-2 rounded-full group-hover:bg-white/20 transition-colors">
              <InstagramIcon className="w-5 h-5 text-white" />
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Caption */}
            {currentPost.caption && (
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                <p className="text-sm sm:text-base line-clamp-2 text-gray-100">{currentPost.caption}</p>
              </div>
            )}
          </div>
        </Link>

        {/* Navigation buttons */}
        {posts.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white backdrop-blur-md rounded-full w-10 h-10 sm:w-12 sm:h-12 transition-all"
              onClick={prevSlide}
              aria-label="Previous post"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white backdrop-blur-md rounded-full w-10 h-10 sm:w-12 sm:h-12 transition-all"
              onClick={nextSlide}
              aria-label="Next post"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
          </>
        )}

        {/* Indicators */}
        {posts.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {posts.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to post ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Follow button */}
      {showFollowButton && (
        <div className="mt-6 flex justify-center">
          <Link href="https://www.instagram.com/_mrcstreetvisuals_/" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full flex items-center gap-2 transition-all hover:scale-105">
              <InstagramIcon className="w-5 h-5" />
              Follow on Instagram
            </Button>
          </Link>
        </div>
      )}
    </div>
  )
}
