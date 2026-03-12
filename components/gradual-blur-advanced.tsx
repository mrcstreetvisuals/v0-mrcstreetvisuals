"use client"

import React, { useEffect, useRef, useState, useMemo, useCallback } from "react"

interface GradualBlurConfig {
  position?: "top" | "bottom" | "left" | "right"
  strength?: number
  height?: string
  width?: string
  divCount?: number
  exponential?: boolean
  zIndex?: number
  animated?: boolean | "scroll" | "hover"
  duration?: string
  easing?: "ease" | "ease-in" | "ease-out" | "ease-in-out" | "linear"
  opacity?: number
  curve?: "linear" | "bezier" | "ease-in" | "ease-out" | "ease-in-out"
  responsive?: boolean
  target?: "parent" | "page"
  className?: string
  style?: React.CSSProperties
  hoverIntensity?: number
  onAnimationComplete?: () => void
  preset?: keyof typeof PRESETS
  // Responsive breakpoint overrides
  mobileHeight?: string
  tabletHeight?: string
  desktopHeight?: string
  mobileWidth?: string
  tabletWidth?: string
  desktopWidth?: string
}

interface GradualBlurProps extends GradualBlurConfig {
  children?: React.ReactNode
}

const DEFAULT_CONFIG: Required<
  Omit<
    GradualBlurConfig,
    | "preset"
    | "onAnimationComplete"
    | "hoverIntensity"
    | "mobileHeight"
    | "tabletHeight"
    | "desktopHeight"
    | "mobileWidth"
    | "tabletWidth"
    | "desktopWidth"
  >
> = {
  position: "bottom",
  strength: 2,
  height: "6rem",
  width: "100%",
  divCount: 5,
  exponential: false,
  zIndex: 1000,
  animated: false,
  duration: "0.3s",
  easing: "ease-out",
  opacity: 1,
  curve: "linear",
  responsive: false,
  target: "parent",
  className: "",
  style: {},
}

const PRESETS = {
  top: { position: "top" as const, height: "6rem" },
  bottom: { position: "bottom" as const, height: "6rem" },
  left: { position: "left" as const, height: "6rem" },
  right: { position: "right" as const, height: "6rem" },
  subtle: { height: "4rem", strength: 1, opacity: 0.8, divCount: 3 },
  intense: { height: "10rem", strength: 4, divCount: 8, exponential: true },
  smooth: { height: "8rem", curve: "bezier" as const, divCount: 10 },
  sharp: { height: "5rem", curve: "linear" as const, divCount: 4 },
  header: { position: "top" as const, height: "8rem", curve: "ease-out" as const },
  footer: { position: "bottom" as const, height: "8rem", curve: "ease-out" as const },
  sidebar: { position: "left" as const, height: "6rem", strength: 2.5 },
  "page-header": { position: "top" as const, height: "10rem", target: "page" as const, strength: 3 },
  "page-footer": { position: "bottom" as const, height: "10rem", target: "page" as const, strength: 3 },
  // Portfolio-specific presets
  "hero-fade": { position: "bottom" as const, height: "12rem", strength: 3, curve: "bezier" as const, divCount: 8 },
  "section-transition": { position: "top" as const, height: "8rem", strength: 2, opacity: 0.9 },
  "gallery-overlay": { position: "bottom" as const, height: "6rem", strength: 1.5, animated: "hover" as const },
  "mobile-header": { position: "top" as const, height: "4rem", strength: 2, responsive: true },
}

const CURVE_FUNCTIONS = {
  linear: (p: number) => p,
  bezier: (p: number) => p * p * (3 - 2 * p),
  "ease-in": (p: number) => p * p,
  "ease-out": (p: number) => 1 - Math.pow(1 - p, 2),
  "ease-in-out": (p: number) => (p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2),
}

const mergeConfigs = (...configs: Partial<GradualBlurConfig>[]): GradualBlurConfig =>
  configs.reduce((acc, c) => ({ ...acc, ...c }), {})

const getGradientDirection = (position: string) =>
  ({
    top: "to top",
    bottom: "to bottom",
    left: "to left",
    right: "to right",
  })[position] || "to bottom"

const debounce = (fn: Function, wait: number) => {
  let timeout: NodeJS.Timeout
  return (...args: any[]) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => fn(...args), wait)
  }
}

const useResponsiveDimension = (responsive: boolean, config: GradualBlurConfig, key: "height" | "width") => {
  const [value, setValue] = useState(config[key])

  useEffect(() => {
    if (!responsive) return

    const calculateValue = () => {
      const width = window.innerWidth
      let newValue = config[key]

      if (width <= 480 && config[`mobile${key.charAt(0).toUpperCase() + key.slice(1)}` as keyof GradualBlurConfig]) {
        newValue = config[`mobile${key.charAt(0).toUpperCase() + key.slice(1)}` as keyof GradualBlurConfig] as string
      } else if (
        width <= 768 &&
        config[`tablet${key.charAt(0).toUpperCase() + key.slice(1)}` as keyof GradualBlurConfig]
      ) {
        newValue = config[`tablet${key.charAt(0).toUpperCase() + key.slice(1)}` as keyof GradualBlurConfig] as string
      } else if (
        width <= 1024 &&
        config[`desktop${key.charAt(0).toUpperCase() + key.slice(1)}` as keyof GradualBlurConfig]
      ) {
        newValue = config[`desktop${key.charAt(0).toUpperCase() + key.slice(1)}` as keyof GradualBlurConfig] as string
      }

      setValue(newValue)
    }

    const debouncedCalculate = debounce(calculateValue, 100)
    calculateValue()
    window.addEventListener("resize", debouncedCalculate)
    return () => window.removeEventListener("resize", debouncedCalculate)
  }, [responsive, config, key])

  return responsive ? value : config[key]
}

const useIntersectionObserver = (ref: React.RefObject<HTMLElement>, shouldObserve = false) => {
  const [isVisible, setIsVisible] = useState(!shouldObserve)

  useEffect(() => {
    if (!shouldObserve || !ref.current) return

    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    })

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref, shouldObserve])

  return isVisible
}

function GradualBlurAdvanced(props: GradualBlurProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Handle client-side mounting
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const config = useMemo(() => {
    const presetConfig = props.preset && PRESETS[props.preset] ? PRESETS[props.preset] : {}
    return mergeConfigs(DEFAULT_CONFIG, presetConfig, props)
  }, [props])

  const responsiveHeight = useResponsiveDimension(config.responsive || false, config, "height")
  const responsiveWidth = useResponsiveDimension(config.responsive || false, config, "width")

  const isVisible = useIntersectionObserver(containerRef, config.animated === "scroll")

  const handleMouseEnter = useCallback(() => {
    if (config.hoverIntensity) {
      setIsHovered(true)
    }
  }, [config.hoverIntensity])

  const handleMouseLeave = useCallback(() => {
    if (config.hoverIntensity) {
      setIsHovered(false)
    }
  }, [config.hoverIntensity])

  const blurDivs = useMemo(() => {
    if (!isMounted) return []

    const divs = []
    const increment = 100 / (config.divCount || DEFAULT_CONFIG.divCount)
    const currentStrength =
      isHovered && config.hoverIntensity
        ? (config.strength || DEFAULT_CONFIG.strength) * config.hoverIntensity
        : config.strength || DEFAULT_CONFIG.strength

    const curveFunc = CURVE_FUNCTIONS[config.curve || DEFAULT_CONFIG.curve] || CURVE_FUNCTIONS.linear

    for (let i = 1; i <= (config.divCount || DEFAULT_CONFIG.divCount); i++) {
      let progress = i / (config.divCount || DEFAULT_CONFIG.divCount)
      progress = curveFunc(progress)

      let blurValue: number
      if (config.exponential) {
        blurValue = Math.pow(2, progress * 4) * 0.0625 * currentStrength
      } else {
        blurValue = 0.0625 * (progress * (config.divCount || DEFAULT_CONFIG.divCount) + 1) * currentStrength
      }

      const p1 = Math.round((increment * i - increment) * 10) / 10
      const p2 = Math.round(increment * i * 10) / 10
      const p3 = Math.round((increment * i + increment) * 10) / 10
      const p4 = Math.round((increment * i + increment * 2) * 10) / 10

      let gradient = `transparent ${p1}%, rgba(0,0,0,0.8) ${p2}%`
      if (p3 <= 100) gradient += `, rgba(0,0,0,0.8) ${p3}%`
      if (p4 <= 100) gradient += `, transparent ${p4}%`

      const direction = getGradientDirection(config.position || DEFAULT_CONFIG.position)

      const divStyle: React.CSSProperties = {
        position: "absolute",
        inset: "0",
        maskImage: `linear-gradient(${direction}, ${gradient})`,
        WebkitMaskImage: `linear-gradient(${direction}, ${gradient})`,
        backdropFilter: `blur(${blurValue.toFixed(3)}rem)`,
        WebkitBackdropFilter: `blur(${blurValue.toFixed(3)}rem)`,
        opacity: config.opacity || DEFAULT_CONFIG.opacity,
        transition:
          config.animated && config.animated !== "scroll"
            ? `backdrop-filter ${config.duration || DEFAULT_CONFIG.duration} ${config.easing || DEFAULT_CONFIG.easing}, opacity ${config.duration || DEFAULT_CONFIG.duration} ${config.easing || DEFAULT_CONFIG.easing}`
            : undefined,
        pointerEvents: "none",
        willChange: config.animated ? "backdrop-filter, opacity" : "auto",
      }

      divs.push(<div key={i} style={divStyle} />)
    }

    return divs
  }, [config, isHovered, isMounted])

  const containerStyle = useMemo(() => {
    const isVertical = ["top", "bottom"].includes(config.position || DEFAULT_CONFIG.position)
    const isHorizontal = ["left", "right"].includes(config.position || DEFAULT_CONFIG.position)
    const isPageTarget = config.target === "page"

    const baseStyle: React.CSSProperties = {
      position: isPageTarget ? "fixed" : "absolute",
      pointerEvents: config.hoverIntensity ? "auto" : "none",
      opacity: isVisible ? config.opacity || DEFAULT_CONFIG.opacity : 0,
      transition: config.animated
        ? `opacity ${config.duration || DEFAULT_CONFIG.duration} ${config.easing || DEFAULT_CONFIG.easing}`
        : undefined,
      zIndex: isPageTarget ? (config.zIndex || DEFAULT_CONFIG.zIndex) + 100 : config.zIndex || DEFAULT_CONFIG.zIndex,
      ...config.style,
    }

    if (isVertical) {
      baseStyle.height = responsiveHeight
      baseStyle.width = responsiveWidth || "100%"
      baseStyle[config.position || DEFAULT_CONFIG.position] = 0
      baseStyle.left = 0
      baseStyle.right = 0
    } else if (isHorizontal) {
      baseStyle.width = responsiveWidth || responsiveHeight
      baseStyle.height = "100%"
      baseStyle[config.position || DEFAULT_CONFIG.position] = 0
      baseStyle.top = 0
      baseStyle.bottom = 0
    }

    return baseStyle
  }, [config, responsiveHeight, responsiveWidth, isVisible])

  // Handle animation completion callback
  useEffect(() => {
    if (isVisible && config.animated === "scroll" && config.onAnimationComplete) {
      const duration = Number.parseFloat(config.duration || DEFAULT_CONFIG.duration) * 1000
      const timeout = setTimeout(() => config.onAnimationComplete?.(), duration)
      return () => clearTimeout(timeout)
    }
  }, [isVisible, config.animated, config.onAnimationComplete, config.duration])

  if (!isMounted) {
    return null
  }

  return (
    <div
      ref={containerRef}
      className={`gradual-blur-advanced ${
        config.target === "page" ? "gradual-blur-page" : "gradual-blur-parent"
      } ${config.className || ""}`}
      style={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-blur-position={config.position}
      data-blur-strength={config.strength}
    >
      <div
        className="gradual-blur-inner"
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        {blurDivs}
      </div>
      {props.children}
    </div>
  )
}

const GradualBlurAdvancedMemo = React.memo(GradualBlurAdvanced)
GradualBlurAdvancedMemo.displayName = "GradualBlurAdvanced"

export { GradualBlurAdvancedMemo as GradualBlurAdvanced, PRESETS, CURVE_FUNCTIONS }
export type { GradualBlurProps, GradualBlurConfig }
