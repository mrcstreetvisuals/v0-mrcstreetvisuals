"use client"

import { useEffect, useRef, useState, useCallback } from "react"

interface UseGradualBlurOptions {
  threshold?: number
  rootMargin?: string
  blurAmount?: number
  duration?: number
  delay?: number
  triggerOnce?: boolean
  reverseOnExit?: boolean
  exitDelay?: number
  easing?: "ease" | "ease-in" | "ease-out" | "ease-in-out" | "linear"
  staggerDelay?: number
}

export function useGradualBlur({
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
  blurAmount = 0, // Set default blur to 0
  duration = 500, // Reduced duration for faster response
  delay = 0,
  triggerOnce = true, // Default to triggering once for stability
  reverseOnExit = false, // Disable reverse animation
  exitDelay = 0,
  easing = "ease-out",
  staggerDelay = 0,
}: UseGradualBlurOptions = {}) {
  const [isVisible, setIsVisible] = useState(true) // Start as visible
  const [isBlurred, setIsBlurred] = useState(false) // Start as not blurred
  const [isAnimating, setIsAnimating] = useState(false)
  const elementRef = useRef<HTMLElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const animationRef = useRef<number | null>(null)

  // Clear timeouts on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  const animateBlur = useCallback(
    (targetBlur: number, animationDelay = 0) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      setIsAnimating(true)

      timeoutRef.current = setTimeout(() => {
        setIsBlurred(targetBlur > 0)

        // Use requestAnimationFrame for smoother animations
        animationRef.current = requestAnimationFrame(() => {
          setTimeout(() => {
            setIsAnimating(false)
          }, duration)
        })
      }, animationDelay + staggerDelay)
    },
    [duration, staggerDelay],
  )

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      setIsBlurred(false)
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      {
        threshold: Array.isArray(threshold) ? threshold : [threshold],
        rootMargin,
      },
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, delay, triggerOnce, reverseOnExit, exitDelay, blurAmount, animateBlur])

  const blurStyle = {
    filter: "none", // Hardcoded to none
    transition: `opacity ${duration}ms ${easing}, transform ${duration}ms ${easing}`,
    willChange: "opacity, transform",
    opacity: isVisible ? 1 : 0,
    transform: "scale(1)", // Remove scale effect
  }

  const containerStyle = {
    overflow: "hidden",
    backfaceVisibility: "hidden" as const,
    WebkitBackfaceVisibility: "hidden" as const,
    transform: "translateZ(0)",
    WebkitTransform: "translateZ(0)",
  }

  return {
    ref: elementRef,
    isVisible,
    isBlurred,
    isAnimating,
    blurStyle,
    containerStyle,
  }
}
