"use client"

import Image from "next/image"

interface WatermarkOverlayProps {
  variant?: "text" | "logo" | "subtle"
  position?: "center" | "bottom-right" | "bottom-left" | "top-right" | "top-left" | "diagonal"
  opacity?: number
  size?: "sm" | "md" | "lg"
}

export function WatermarkOverlay({
  variant = "subtle",
  position = "diagonal",
  opacity = 0.15,
  size = "md",
}: WatermarkOverlayProps) {
  const getPositionClasses = () => {
    switch (position) {
      case "center":
        return "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      case "bottom-right":
        return "bottom-4 right-4"
      case "bottom-left":
        return "bottom-4 left-4"
      case "top-right":
        return "top-4 right-4"
      case "top-left":
        return "top-4 left-4"
      case "diagonal":
        return "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45"
      default:
        return "bottom-4 right-4"
    }
  }

  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "text-xs"
      case "md":
        return "text-sm"
      case "lg":
        return "text-base"
      default:
        return "text-sm"
    }
  }

  const getLogoSize = () => {
    switch (size) {
      case "sm":
        return { width: 24, height: 24 }
      case "md":
        return { width: 32, height: 32 }
      case "lg":
        return { width: 40, height: 40 }
      default:
        return { width: 32, height: 32 }
    }
  }

  if (variant === "logo") {
    const logoSize = getLogoSize()
    return (
      <div className={`absolute pointer-events-none select-none z-30 ${getPositionClasses()}`} style={{ opacity }}>
        <Image
          src="/images/mrcstreetvisuals-logo.png"
          alt="mrcstreetvisuals watermark"
          width={logoSize.width}
          height={logoSize.height}
          className="rounded-full"
          draggable={false}
        />
      </div>
    )
  }

  return (
    <div className={`absolute pointer-events-none select-none z-30 ${getPositionClasses()}`} style={{ opacity }}>
      <div
        className={`font-bold text-white ${getSizeClasses()} tracking-wider`}
        style={{
          textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
          fontFamily: "monospace",
          letterSpacing: "0.1em",
        }}
      >
        MRCSTREETVISUALS
      </div>
    </div>
  )
}
