"use client"

import type React from "react"
import { useGradualBlur } from "@/hooks/use-gradual-blur"
import type { JSX } from "react/jsx-runtime"

interface GradualBlurWrapperProps {
  children: React.ReactNode
  className?: string
  blurAmount?: number
  duration?: number
  delay?: number
  threshold?: number | number[]
  triggerOnce?: boolean
  reverseOnExit?: boolean
  exitDelay?: number
  easing?: "ease" | "ease-in" | "ease-out" | "ease-in-out" | "linear"
  staggerDelay?: number
  as?: keyof JSX.IntrinsicElements
  rootMargin?: string
  animationType?: "blur" | "blur-scale" | "blur-fade" | "blur-slide"
  direction?: "up" | "down" | "left" | "right"
}

export function GradualBlurWrapper({
  children,
  className = "",
  blurAmount = 6,
  duration = 300,
  delay = 0,
  threshold = 0.1,
  triggerOnce = false,
  reverseOnExit = true,
  exitDelay = 0,
  easing = "ease-out",
  staggerDelay = 0,
  as: Component = "div",
  rootMargin = "0px 0px -50px 0px",
  animationType = "blur-fade",
  direction = "up",
}: GradualBlurWrapperProps) {
  const { ref, isVisible, containerStyle } = useGradualBlur({
    blurAmount,
    duration,
    delay,
    threshold,
    triggerOnce,
    reverseOnExit,
    exitDelay,
    easing,
    staggerDelay,
  })

  const getAnimationStyles = () => {
    const additionalTransform = ""
    const additionalStyles = {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(10px)",
      transition: `opacity ${duration}ms ${easing}, transform ${duration}ms ${easing}`,
    }

    return {
      ...additionalStyles,
    }
  }

  const combinedStyles = {
    ...containerStyle,
    ...getAnimationStyles(),
  }

  return (
    <Component
      ref={ref}
      className={`reveal-container ${className}`} // Renamed for clarity
      style={combinedStyles}
    >
      {children}
    </Component>
  )
}
