"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Instagram, Mail, MessageCircle, X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GradualBlurWrapper } from "@/components/gradual-blur-wrapper"
import { ResponsiveContainer } from "@/components/responsive-container"

interface RealEstateImage {
  src: string
  title: string
  category: string
}

export default function RealEstatePage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const realEstateImages: RealEstateImage[] = [
    {
      src: "/images/real-estate/rustic-bedroom-pallet-bed.jpg",
      title: "Rustic Bedroom with Pallet Bed",
      category: "Interior Design",
    },
    {
      src: "/images/real-estate/blue-bedroom-moroccan-decor.jpg",
      title: "Blue Bedroom with Moroccan Decor",
      category: "Interior Design",
    },
    {
      src: "/images/real-estate/bedroom-white-curtains-netting.jpg",
      title: "Bedroom with White Curtains",
      category: "Interior Design",
    },
    {
      src: "/images/real-estate/interior-details-mirror-rack.jpg",
      title: "Interior Details - Mirror & Rack",
      category: "Detail Shots",
    },
    {
      src: "/images/real-estate/outdoor-terrace-seating-area.jpg",
      title: "Outdoor Terrace Seating Area",
      category: "Exterior",
    },
    {
      src: "/images/real-estate/twin-bedroom-wooden-furniture.jpg",
      title: "Twin Bedroom with Wooden Furniture",
      category: "Interior Design",
    },
    {
      src: "/images/real-estate/rustic-bar-thatched-ceiling.jpg",
      title: "Tropical Bar & Lounge",
      category: "Commercial Interior",
    },
    {
      src: "/images/real-estate/minimalist-bedroom-yellow-pillows.jpg",
      title: "Contemporary Minimalist Bedroom",
      category: "Interior Design",
    },
    {
      src: "/images/real-estate/rooftop-terrace-sunset-chairs.jpg",
      title: "Sunset Rooftop Lounge",
      category: "Exterior",
    },
    {
      src: "/images/real-estate/rustic-furniture-detail-sunlight.jpg",
      title: "Artisan Craftsmanship Details",
      category: "Detail Shots",
    },
    {
      src: "/images/real-estate/rooftop-hammock-city-view.jpg",
      title: "Urban Rooftop Retreat",
      category: "Exterior",
    },
    {
      src: "/images/real-estate/bedroom-blue-wall-decorative.jpg",
      title: "Bohemian Bedroom Suite",
      category: "Interior Design",
    },
    {
      src: "/images/real-estate/rooftop-hammock-moonlight.jpg",
      title: "Moonlit Rooftop Sanctuary",
      category: "Exterior",
    },
    {
      src: "/images/real-estate/twin-bedroom-checkered-floor.jpg",
      title: "Designer Twin Bedroom",
      category: "Interior Design",
    },
  ]

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? realEstateImages.length - 1 : selectedImage - 1)
    }
  }

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === realEstateImages.length - 1 ? 0 : selectedImage + 1)
    }
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImage === null) return
    if (e.key === "ArrowLeft") handlePrevious()
    if (e.key === "ArrowRight") handleNext()
    if (e.key === "Escape") setSelectedImage(null)
  }

  if (typeof window !== "undefined") {
    window.addEventListener("keydown", handleKeyDown)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-40 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <ResponsiveContainer maxWidth="full" padding="md">
          <div className="flex items-center justify-between py-3 sm:py-4">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3 hover:text-purple-400 transition-colors">
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm sm:text-base">Back to Home</span>
            </Link>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Image
                src="/images/mrcstreetvisuals-logo.png"
                alt="mrcstreetvisuals logo"
                width={32}
                height={32}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full"
              />
              <span className="text-sm sm:text-base md:text-lg font-bold bg-gradient-to-r from-red-500 to-purple-400 bg-clip-text text-transparent">
                mrcstreetvisuals
              </span>
            </div>
          </div>
        </ResponsiveContainer>
      </header>

      {/* Floating Contact Buttons */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 flex flex-col space-y-3">
        <a
          href="https://wa.me/212643858432"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 group"
          title="WhatsApp"
        >
          <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 group-hover:animate-pulse" />
        </a>

        <a
          href="https://www.instagram.com/_mrcstreetvisuals_/?__pwa=1"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 group"
          title="Instagram"
        >
          <Instagram className="h-5 w-5 sm:h-6 sm:w-6 group-hover:animate-pulse" />
        </a>

        <a
          href="mailto:mrcstreetvisuals@gmail.com"
          className="bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 group"
          title="Email"
        >
          <Mail className="h-5 w-5 sm:h-6 sm:w-6 group-hover:animate-pulse" />
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/real-estate/outdoor-terrace-seating-area.jpg"
            alt="Real Estate Photography"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        </div>

        <ResponsiveContainer maxWidth="2xl" className="relative z-10 text-center px-4">
          <GradualBlurWrapper
            blurAmount={15}
            duration={1200}
            delay={200}
            animationType="blur-fade"
            threshold={0.1}
            triggerOnce={false}
            reverseOnExit={true}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500 bg-clip-text text-transparent mb-4 sm:mb-6 py-1.5">
              Real Estate Photography
            </h1>
          </GradualBlurWrapper>

          <GradualBlurWrapper
            blurAmount={12}
            duration={1000}
            delay={400}
            animationType="blur-slide"
            direction="up"
            threshold={0.1}
            triggerOnce={false}
            reverseOnExit={true}
          >
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Professional property photography that showcases spaces at their finest
            </p>
          </GradualBlurWrapper>
        </ResponsiveContainer>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <ResponsiveContainer maxWidth="2xl" padding="md">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {realEstateImages.map((image, index) => (
              <GradualBlurWrapper
                key={index}
                blurAmount={10}
                duration={1000}
                delay={100 + index * 50}
                animationType="blur-slide"
                direction="up"
                threshold={0.1}
                triggerOnce={false}
                reverseOnExit={true}
              >
                <div
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                      <p className="text-xs sm:text-sm text-orange-400 mb-1 sm:mb-2">{image.category}</p>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">{image.title}</h3>
                    </div>
                  </div>
                </div>
              </GradualBlurWrapper>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Image Viewer Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            onClick={handlePrevious}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <ChevronLeft className="h-12 w-12" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <ChevronRight className="h-12 w-12" />
          </button>

          <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-8">
            <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
              <Image
                src={realEstateImages[selectedImage].src || "/placeholder.svg"}
                alt={realEstateImages[selectedImage].title}
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="absolute bottom-8 left-0 right-0 text-center">
            <p className="text-sm text-orange-400 mb-2">{realEstateImages[selectedImage].category}</p>
            <h3 className="text-xl font-bold text-white">{realEstateImages[selectedImage].title}</h3>
            <p className="text-sm text-gray-400 mt-2">
              {selectedImage + 1} / {realEstateImages.length}
            </p>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="relative py-16 sm:py-20 md:py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/real-estate/blue-bedroom-moroccan-decor.jpg"
            alt="Contact background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        </div>

        <ResponsiveContainer maxWidth="xl" className="relative z-10 text-center px-4">
          <GradualBlurWrapper
            blurAmount={12}
            duration={1000}
            delay={100}
            animationType="blur-fade"
            threshold={0.2}
            triggerOnce={false}
            reverseOnExit={true}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
              Need Professional Property Photography?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto">
              Let's showcase your property in the best light. Get in touch to discuss your real estate photography
              needs.
            </p>
            <a
              href="https://wa.me/212643858432?text=Hi! I'm interested in your real estate photography services."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white transform hover:scale-105 transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
              >
                <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                Contact Me on WhatsApp
              </Button>
            </a>
          </GradualBlurWrapper>
        </ResponsiveContainer>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 border-t border-gray-800 bg-black">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
            <Image
              src="/images/mrcstreetvisuals-logo.png"
              alt="mrcstreetvisuals logo"
              width={32}
              height={32}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full"
            />
            <span className="text-base sm:text-lg font-semibold bg-gradient-to-r from-red-500 to-purple-400 bg-clip-text text-transparent">
              mrcstreetvisuals
            </span>
          </div>
          <p className="text-sm sm:text-base text-gray-400">
            © {new Date().getFullYear()} mrcstreetvisuals. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
