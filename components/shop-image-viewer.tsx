"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, X, ShoppingCart, Frame, ImageIcon, Maximize2 } from "lucide-react"
import Image from "next/image"
import { useEffect, useState, useCallback } from "react"
import { WatermarkOverlay } from "@/components/watermark-overlay"
import type { PrintProduct } from "@/lib/shop-data"
import { generateWhatsAppMessage } from "@/lib/shop-data"

interface ShopImageViewerProps {
  products: PrintProduct[]
  initialIndex: number
  onClose: () => void
}

export function ShopImageViewer({ products, initialIndex, onClose }: ShopImageViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [isLoading, setIsLoading] = useState(true)
  const [imageError, setImageError] = useState(false)
  const [selectedOption, setSelectedOption] = useState<"print" | "framed">("print")
  const [showProductInfo, setShowProductInfo] = useState(true)

  const currentProduct = products[currentIndex]

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % products.length)
    setIsLoading(true)
    setImageError(false)
  }, [products.length])

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)
    setIsLoading(true)
    setImageError(false)
  }, [products.length])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight") nextImage()
      if (e.key === "ArrowLeft") prevImage()
      if (e.key === "i" || e.key === "I") setShowProductInfo(!showProductInfo)
    },
    [onClose, nextImage, prevImage, showProductInfo],
  )

  const handlePurchase = useCallback(() => {
    const isFramed = selectedOption === "framed"
    const message = generateWhatsAppMessage(currentProduct, isFramed)
    const whatsappUrl = `https://wa.me/212643858432?text=${message}`
    window.open(whatsappUrl, "_blank")
  }, [currentProduct, selectedOption])

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

  // Reset states when image changes
  useEffect(() => {
    setIsLoading(true)
    setImageError(false)
    setSelectedOption("print")
  }, [currentIndex])

  const handleImageError = () => {
    setImageError(true)
    setIsLoading(false)
  }

  const handleImageLoad = () => {
    setIsLoading(false)
    setImageError(false)
  }

  const currentPrice = selectedOption === "framed" ? currentProduct.framedPrice : currentProduct.printPrice

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      {/* Background overlay - clicking closes modal */}
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} aria-label="Close viewer" />

      {/* Top Controls Bar */}
      <div className="absolute top-0 left-0 right-0 z-60 bg-gradient-to-b from-black/80 to-transparent p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 bg-black/50 backdrop-blur-sm"
              onClick={onClose}
              aria-label="Close viewer"
            >
              <X className="h-6 w-6" />
            </Button>
            <div className="text-white">
              <h2 className="text-lg font-semibold">{currentProduct.title}</h2>
              <p className="text-sm text-gray-300">{currentProduct.category}</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 bg-black/50 backdrop-blur-sm"
              onClick={() => setShowProductInfo(!showProductInfo)}
              aria-label="Toggle product info"
            >
              <Maximize2 className="h-4 w-4 mr-2" />
              {showProductInfo ? "Hide Info" : "Show Info"}
            </Button>
            <div className="text-white text-sm bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
              {currentIndex + 1} / {products.length}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      {products.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-60 text-white hover:bg-white/20 bg-black/50 backdrop-blur-sm"
            onClick={prevImage}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-60 text-white hover:bg-white/20 bg-black/50 backdrop-blur-sm"
            onClick={nextImage}
            aria-label="Next image"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </>
      )}

      {/* Main Image Container */}
      <div className="relative max-w-[95vw] max-h-[90vh] mx-4 flex items-center justify-center">
        {isLoading && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 rounded-lg z-50">
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
          <div className="relative">
            <Image
              src={currentProduct.image || "/placeholder.svg"}
              alt={currentProduct.title}
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

            {/* Watermark for full view - only show when image is loaded and not an error */}
            {!isLoading && !imageError && <WatermarkOverlay variant="logo" position="center" opacity={0.2} size="lg" />}

            {/* Image badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2 z-50">
              <Badge variant="secondary" className="bg-red-500/90 text-white border-0">
                Limited Edition
              </Badge>
              <Badge variant="outline" className="bg-black/70 text-white border-gray-600">
                {currentProduct.remainingStock}/{currentProduct.totalStock} left
              </Badge>
            </div>
          </div>
        )}
      </div>

      {/* Product Info Panel - Slide in from bottom */}
      <div
        className={`absolute bottom-0 left-0 right-0 z-60 bg-gradient-to-t from-black via-black/95 to-transparent transition-transform duration-300 ease-in-out ${
          showProductInfo ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="p-6 pt-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Product Details */}
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">{currentProduct.title}</h3>
                <p className="text-gray-300 mb-4">{currentProduct.description}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                  <span>Size: {currentProduct.size}</span>
                  <span>•</span>
                  <span>Category: {currentProduct.category}</span>
                </div>
                {currentProduct.remainingStock <= 2 && currentProduct.remainingStock > 0 && (
                  <p className="text-red-400 text-sm mb-4">
                    ⚡ Only {currentProduct.remainingStock} left - Limited time!
                  </p>
                )}
              </div>

              {/* Purchase Options */}
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-4">
                <h4 className="text-white font-semibold mb-4">Purchase Options</h4>

                {/* Option Buttons */}
                <div className="space-y-3 mb-4">
                  <Button
                    variant={selectedOption === "print" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedOption("print")}
                    className={`w-full justify-start ${
                      selectedOption === "print"
                        ? "bg-purple-600 hover:bg-purple-700"
                        : "border-gray-600 text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    <ImageIcon className="h-4 w-4 mr-2" />
                    Print Only - {currentProduct.printPrice}€
                  </Button>
                  <Button
                    variant={selectedOption === "framed" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedOption("framed")}
                    className={`w-full justify-start ${
                      selectedOption === "framed"
                        ? "bg-purple-600 hover:bg-purple-700"
                        : "border-gray-600 text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    <Frame className="h-4 w-4 mr-2" />
                    With Frame - {currentProduct.framedPrice}€
                  </Button>
                </div>

                {/* Price and Purchase */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-white">{currentPrice}€</div>
                  <Button
                    onClick={handlePurchase}
                    disabled={currentProduct.remainingStock === 0}
                    className="bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white transform hover:scale-105 transition-all duration-300"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {currentProduct.remainingStock === 0 ? "Sold Out" : "Order Now"}
                  </Button>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            {products.length > 1 && (
              <div className="flex justify-center mt-6 space-x-2">
                {products.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"
                    }`}
                    aria-label={`Go to product ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Keyboard shortcuts hint */}
      <div className="absolute bottom-4 left-4 text-white/60 text-xs bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
        Press 'I' to toggle info • ESC to close • ← → to navigate
      </div>

      {/* Copyright notice */}
      <div className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-full text-xs z-50">
        © mrcstreetvisuals - All rights reserved
      </div>
    </div>
  )
}
