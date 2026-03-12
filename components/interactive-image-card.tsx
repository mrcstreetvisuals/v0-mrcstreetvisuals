"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, EyeOff } from "lucide-react"
import { cn } from "@/lib/utils"

interface InteractiveImageCardProps {
  src: string
  alt: string
  caption: string
  description: string
  category?: string
  onClick?: () => void
  className?: string
}

export function InteractiveImageCard({
  src,
  alt,
  caption,
  description,
  category,
  onClick,
  className,
}: InteractiveImageCardProps) {
  const [showInfo, setShowInfo] = useState(true)

  const handleToggleInfo = (e: React.MouseEvent) => {
    e.stopPropagation()
    setShowInfo(!showInfo)
  }

  const handleCardClick = () => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <Card
      className={cn(
        "bg-gray-900 border-gray-800 overflow-hidden group hover:scale-105 transition-all duration-300 cursor-pointer relative",
        className,
      )}
      onClick={handleCardClick}
    >
      <CardContent className="p-0 relative">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Toggle Button */}
          <button
            onClick={handleToggleInfo}
            className={cn(
              "absolute top-3 right-3 z-20 p-2 rounded-full backdrop-blur-md transition-all duration-300",
              "hover:scale-110 active:scale-95 shadow-lg",
              showInfo ? "bg-black/50 hover:bg-black/70 text-white" : "bg-white/90 hover:bg-white text-gray-900",
            )}
            aria-label={showInfo ? "Hide image information" : "Show image information"}
            title={showInfo ? "Hide info" : "Show info"}
          >
            {showInfo ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>

          {/* Overlay Information */}
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 ease-in-out",
              showInfo ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none",
            )}
          >
            <div className="absolute bottom-0 left-0 right-0 p-4 transform transition-all duration-500">
              {category && (
                <span
                  className={cn(
                    "inline-block text-xs font-semibold px-2 py-1 rounded-full mb-2 transition-all duration-500",
                    "bg-gradient-to-r from-purple-500/80 to-pink-500/80 text-white",
                    showInfo ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
                  )}
                >
                  {category}
                </span>
              )}
              <h3
                className={cn(
                  "text-white font-semibold text-base mb-1 transition-all duration-500 delay-75",
                  showInfo ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
                )}
              >
                {caption}
              </h3>
              <p
                className={cn(
                  "text-gray-300 text-sm line-clamp-2 transition-all duration-500 delay-100",
                  showInfo ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
                )}
              >
                {description}
              </p>
            </div>
          </div>

          {/* Hover State Indicator */}
          <div
            className={cn(
              "absolute inset-0 ring-2 ring-purple-500/0 group-hover:ring-purple-500/50 transition-all duration-300 pointer-events-none",
              !showInfo && "ring-0",
            )}
          />
        </div>
      </CardContent>
    </Card>
  )
}
