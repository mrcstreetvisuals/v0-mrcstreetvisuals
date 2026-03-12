"use client"

import type React from "react"
import { GradualBlurWrapper } from "@/components/gradual-blur-wrapper"
import { GradualBlurAdvanced } from "@/components/gradual-blur-advanced"
import type { GradualBlurProps } from "@/components/gradual-blur-advanced"

interface UnifiedBlurProps {
  // Choose blur type
  type?: "reveal" | "advanced" | "backdrop"

  // Common props
  children: React.ReactNode
  className?: string

  // Reveal blur props (from existing system)
  blurAmount?: number
  duration?: number
  delay?: number
  threshold?: number | number[]
  triggerOnce?: boolean
  reverseOnExit?: boolean
  exitDelay?: number
  easing?: "ease" | "ease-in" | "ease-out" | "ease-in-out" | "linear"
  animationType?: "blur" | "blur-scale" | "blur-fade" | "blur-slide"
  direction?: "up" | "down" | "left" | "right"
  rootMargin?: string

  // Advanced blur props (from new system)
  position?: "top" | "bottom" | "left" | "right"
  strength?: number
  height?: string
  width?: string
  divCount?: number
  exponential?: boolean
  zIndex?: number
  animated?: boolean | "scroll" | "hover"
  opacity?: number
  curve?: "linear" | "bezier" | "ease-in" | "ease-out" | "ease-in-out"
  responsive?: boolean
  target?: "parent" | "page"
  hoverIntensity?: number
  preset?: string
  onAnimationComplete?: () => void
}

export function UnifiedBlurSystem({
  type = "reveal",
  children,
  className = "",
  // Reveal blur props
  blurAmount = 8,
  duration = 1000,
  delay = 0,
  threshold = 0.1,
  triggerOnce = false,
  reverseOnExit = true,
  exitDelay = 0,
  easing = "ease-out",
  animationType = "blur-fade",
  direction = "up",
  rootMargin = "0px 0px -50px 0px",
  // Advanced blur props
  position = "bottom",
  strength = 2,
  height = "6rem",
  width,
  divCount = 5,
  exponential = false,
  zIndex = 1000,
  animated = false,
  opacity = 1,
  curve = "linear",
  responsive = false,
  target = "parent",
  hoverIntensity,
  preset,
  onAnimationComplete,
}: UnifiedBlurProps) {
  // Render reveal blur (existing system)
  if (type === "reveal") {
    return (
      <GradualBlurWrapper
        className={className}
        blurAmount={blurAmount}
        duration={duration}
        delay={delay}
        threshold={threshold}
        triggerOnce={triggerOnce}
        reverseOnExit={reverseOnExit}
        exitDelay={exitDelay}
        easing={easing}
        animationType={animationType}
        direction={direction}
        rootMargin={rootMargin}
      >
        {children}
      </GradualBlurWrapper>
    )
  }

  // Render advanced blur (new system)
  if (type === "advanced" || type === "backdrop") {
    const advancedProps: GradualBlurProps = {
      className,
      position,
      strength,
      height,
      width,
      divCount,
      exponential,
      zIndex,
      animated,
      duration: `${duration}ms`,
      easing,
      opacity,
      curve,
      responsive,
      target,
      hoverIntensity,
      preset: preset as any,
      onAnimationComplete,
    }

    return (
      <div className="relative">
        {children}
        <GradualBlurAdvanced {...advancedProps} />
      </div>
    )
  }

  // Fallback to children only
  return <div className={className}>{children}</div>
}

// Preset configurations for common use cases
export const BlurPresets = {
  // Hero section blur
  heroFade: {
    type: "advanced" as const,
    preset: "hero-fade",
    animated: "scroll" as const,
    responsive: true,
  },

  // Section transitions
  sectionTransition: {
    type: "advanced" as const,
    preset: "section-transition",
    animated: true,
    duration: 800,
  },

  // Gallery overlays
  galleryOverlay: {
    type: "advanced" as const,
    preset: "gallery-overlay",
    hoverIntensity: 1.5,
  },

  // Mobile header
  mobileHeader: {
    type: "advanced" as const,
    preset: "mobile-header",
    responsive: true,
    animated: "scroll" as const,
  },

  // Content reveal
  contentReveal: {
    type: "reveal" as const,
    animationType: "blur-fade" as const,
    duration: 1200,
    reverseOnExit: true,
  },

  // Image reveal
  imageReveal: {
    type: "reveal" as const,
    animationType: "blur-slide" as const,
    direction: "up" as const,
    duration: 1500,
    blurAmount: 15,
  },

  // Staggered reveal
  staggeredReveal: {
    type: "reveal" as const,
    animationType: "blur-scale" as const,
    duration: 800,
    triggerOnce: false,
  },
} as const

// Helper function to apply presets
export function useBlurPreset(presetName: keyof typeof BlurPresets) {
  return BlurPresets[presetName]
}
