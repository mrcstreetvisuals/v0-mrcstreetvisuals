"use client"

import type React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Frame, ImageIcon, ShoppingCart, Maximize2 } from "lucide-react"
import { useState, useCallback } from "react"
import type { PrintProduct } from "@/lib/shop-data"
import { generateWhatsAppMessage, shopProducts } from "@/lib/shop-data"
import { WatermarkOverlay } from "@/components/watermark-overlay"

interface ProductCardProps {
  product: PrintProduct
  onViewFullscreen: (productId: string) => void
}

export function ProductCard({ product, onViewFullscreen }: ProductCardProps) {
  const [selectedOption, setSelectedOption] = useState<"print" | "framed">("print")
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  // Check if this is a new print (first 5 products in the array)
  const isNewPrint = shopProducts.findIndex((p) => p.id === product.id) < 5

  const handlePurchase = useCallback(() => {
    const isFramed = selectedOption === "framed"
    const message = generateWhatsAppMessage(product, isFramed)
    const whatsappUrl = `https://wa.me/212643858432?text=${message}`
    window.open(whatsappUrl, "_blank")
  }, [product, selectedOption])

  const handleImageClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      e.stopPropagation()
      if (!imageError && imageLoaded) {
        onViewFullscreen(product.id)
      }
    },
    [imageError, imageLoaded, onViewFullscreen, product.id],
  )

  const handleImageError = () => {
    console.log("Product image error:", product.image)
    setImageError(true)
    setImageLoaded(true)
  }

  const handleImageLoad = () => {
    console.log("Product image loaded:", product.image)
    setImageLoaded(true)
    setImageError(false)
  }

  const currentPrice = selectedOption === "framed" ? product.framedPrice : product.printPrice

  return (
    <Card className="bg-gray-900 border-gray-800 overflow-hidden group hover:scale-105 transition-all duration-300 relative">
      <CardContent className="p-0">
        {/* NEW Sticker - Only for new prints */}
        {isNewPrint && (
          <div className="absolute -top-3 -right-3 z-50">
            <div className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold shadow-lg mx-[21px] my-14">NEW</div>
          </div>
        )}

        {/* Image with Watermark */}
        <div className="relative aspect-[4/3] overflow-hidden">
          {/* Loading state */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center z-20">
              <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {/* Main Image */}
          <button
            onClick={handleImageClick}
            className="w-full h-full relative block cursor-pointer group/image"
            aria-label={`View ${product.title} in full screen`}
            disabled={imageError || !imageLoaded}
          >
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              fill
              className={`object-cover transition-all duration-500 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              } ${!imageError ? "group-hover/image:scale-110" : ""}`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={handleImageError}
              onLoad={handleImageLoad}
              priority={false}
            />

            {/* Watermark Overlay - only show when image is loaded and not an error */}
            {imageLoaded && !imageError && (
              <WatermarkOverlay variant="text" position="diagonal" opacity={0.15} size="sm" />
            )}

            {/* Full-screen indicator overlay */}
            {imageLoaded && !imageError && (
              <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover/image:opacity-100 z-40">
                <div className="bg-white/95 text-black px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 transform scale-90 group-hover/image:scale-100 transition-transform duration-300">
                  <Maximize2 className="h-4 w-4" />
                  <span>View Full Screen</span>
                </div>
              </div>
            )}

            {/* Error state */}
            {imageError && (
              <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <div className="text-4xl mb-2">📷</div>
                  <p className="text-sm">Image not available</p>
                </div>
              </div>
            )}
          </button>

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2 pointer-events-none z-40">
            <Badge variant="secondary" className="bg-red-500/90 text-white border-0">
              Limited Edition
            </Badge>
            <Badge variant="outline" className="bg-black/50 text-white border-gray-600">
              {product.remainingStock}/{product.totalStock} left
            </Badge>
          </div>
          <div className="absolute top-4 right-4 pointer-events-none z-40">
            <Badge variant="outline" className="bg-black/50 text-white border-gray-600">
              {product.category}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-3">{product.description}</p>

          <div className="mb-4">
            <p className="text-gray-300 text-sm mb-2">Size: {product.size}</p>
          </div>

          {/* Options */}
          <div className="space-y-3 mb-6">
            <div className="flex gap-2">
              <Button
                variant={selectedOption === "print" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedOption("print")}
                className={`flex-1 ${
                  selectedOption === "print"
                    ? "bg-purple-600 hover:bg-purple-700"
                    : "border-gray-600 text-gray-300 hover:bg-gray-800"
                }`}
              >
                <ImageIcon className="h-4 w-4 mr-2" />
                Print Only - {product.printPrice}€
              </Button>
            </div>
            <div className="flex gap-2">
              <Button
                variant={selectedOption === "framed" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedOption("framed")}
                className={`flex-1 ${
                  selectedOption === "framed"
                    ? "bg-purple-600 hover:bg-purple-700"
                    : "border-gray-600 text-gray-300 hover:bg-gray-800"
                }`}
              >
                <Frame className="h-4 w-4 mr-2" />
                With Frame - {product.framedPrice}€
              </Button>
            </div>
          </div>

          {/* Purchase */}
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">{currentPrice}€</div>
            <Button
              onClick={handlePurchase}
              disabled={product.remainingStock === 0}
              className="bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white transform hover:scale-105 transition-all duration-300"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              {product.remainingStock === 0 ? "Sold Out" : "Order Now"}
            </Button>
          </div>

          {product.remainingStock <= 2 && product.remainingStock > 0 && (
            <p className="text-red-400 text-xs mt-2 text-center">
              ⚡ Only {product.remainingStock} left - Limited time!
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
