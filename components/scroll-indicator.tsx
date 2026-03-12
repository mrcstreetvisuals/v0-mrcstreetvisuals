"use client"

import { useEffect, useState } from "react"

export function ScrollIndicator() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY
    let ticking = false

    const updateScrollDirection = () => {
      const scrollY = window.scrollY

      if (Math.abs(scrollY - lastScrollY) < 10) {
        ticking = false
        return
      }

      const direction = scrollY > lastScrollY ? "down" : "up"
      setScrollDirection(direction)
      setIsVisible(true)

      // Hide indicator after 2 seconds of no scrolling
      setTimeout(() => {
        setIsVisible(false)
      }, 2000)

      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollDirection)
        ticking = true
      }
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!isVisible || !scrollDirection) return null

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-30 pointer-events-none">
      <div className="flex flex-col items-center space-y-2">
        <div className="w-1 h-16 bg-gradient-to-b from-transparent via-purple-500/50 to-transparent rounded-full" />
        <div
          className={`text-purple-400 text-lg transition-all duration-300 ${
            scrollDirection === "down" ? "animate-bounce translate-y-1" : "animate-bounce -translate-y-1"
          }`}
        >
          {scrollDirection === "down" ? "↓" : "↑"}
        </div>
      </div>
    </div>
  )
}
