"use client"

import { Button } from "@/components/ui/button"
import { ImageViewer } from "@/components/image-viewer"
import { ArrowLeft, Instagram, Mail, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { GradualBlurWrapper } from "@/components/gradual-blur-wrapper"
import { InteractiveImageCard } from "@/components/interactive-image-card"

export default function AutomotiveAlbum() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const automotiveImages = [
    {
      src: "/images/pink-car-automotive.jpg",
      alt: "Modified pink car with dramatic lighting",
      caption: "Pink Perfection",
      description:
        "Stunning automotive photography showcasing a modified car with dramatic lighting and urban backdrop.",
      category: "Custom",
    },
    {
      src: "/images/automotive/pink-audi-front-detail.jpg",
      alt: "Pink Audi RS5 front detail with LED headlights",
      caption: "LED Precision",
      description:
        "Close-up detail shot capturing the aggressive front design and LED headlight technology of the Audi RS5.",
      category: "Detail",
    },
    {
      src: "/images/automotive/black-bmw-side-profile.jpg",
      alt: "Black BMW 7 Series side profile in urban setting",
      caption: "Executive Elegance",
      description: "Professional side profile shot of a BMW 7 Series showcasing luxury sedan proportions and design.",
      category: "Luxury",
    },
    {
      src: "/images/automotive/black-bmw-front-detail.jpg",
      alt: "BMW front grille and wheel detail",
      caption: "German Engineering",
      description: "Detailed composition highlighting the iconic BMW kidney grille and premium wheel design.",
      category: "Detail",
    },
    {
      src: "/images/automotive/black-bmw-parking-lot.jpg",
      alt: "BMW 7 Series in parking lot setting",
      caption: "Urban Luxury",
      description: "Environmental automotive shot placing the BMW in its natural urban luxury context.",
      category: "Luxury",
    },
    {
      src: "/images/automotive/pink-audi-aerial-view.jpg",
      alt: "Aerial view of pink Audi RS5",
      caption: "Top Down Perspective",
      description: "Unique aerial perspective showcasing the Audi RS5's roof design and overall proportions.",
      category: "Aerial",
    },
    {
      src: "/images/automotive/pink-audi-interior.jpg",
      alt: "Pink Audi RS5 interior through window",
      caption: "Cockpit View",
      description: "Interior automotive photography capturing the sporty dashboard and premium cabin design.",
      category: "Interior",
    },
    {
      src: "/images/automotive/pink-audi-rear-detail.jpg",
      alt: "Audi RS5 rear taillight and badge detail",
      caption: "RS5 Performance",
      description: "Rear detail shot highlighting the distinctive RS5 badge and modern LED taillight design.",
      category: "Detail",
    },
    {
      src: "/images/automotive/pink-audi-golden-hour.jpg",
      alt: "Pink Audi RS5 during golden hour",
      caption: "Golden Hour Magic",
      description: "Dramatic golden hour photography showcasing the Audi RS5 with perfect natural lighting.",
      category: "Golden Hour",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white scroll-smooth">
      {/* Header */}
      <header className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-sm border-b border-gray-800 header-height">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2 hover:text-purple-400 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
          </div>
          <div className="flex items-center space-x-3">
            <Image
              src="/images/mrcstreetvisuals-logo.png"
              alt="mrcstreetvisuals logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-lg font-bold bg-gradient-to-r from-red-500 to-purple-400 bg-clip-text text-transparent">
              mrcstreetvisuals
            </span>
          </div>
        </div>
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
          <MessageCircle className="h-6 w-6 group-hover:animate-pulse" />
        </a>

        <a
          href="https://www.instagram.com/_mrcstreetvisuals_/?__pwa=1"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 group"
          title="Instagram"
        >
          <Instagram className="h-6 w-6 group-hover:animate-pulse" />
        </a>

        <a
          href="mailto:mrcstreetvisuals@gmail.com"
          className="bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 group"
          title="Email"
        >
          <Mail className="h-6 w-6 group-hover:animate-pulse" />
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-header-offset">
        <div className="absolute inset-0">
          <Image src="/images/pink-car-automotive.jpg" alt="Automotive hero" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <GradualBlurWrapper
            blurAmount={15}
            duration={1200}
            delay={200}
            animationType="blur-fade"
            threshold={0.1}
            triggerOnce={false}
            reverseOnExit={true}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
              Automotive
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
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Professional automotive photography showcasing luxury vehicles as works of art with dramatic lighting,
              detailed compositions, and creative perspectives.
            </p>
          </GradualBlurWrapper>

          <GradualBlurWrapper
            blurAmount={8}
            duration={800}
            delay={600}
            animationType="blur-scale"
            threshold={0.1}
            triggerOnce={false}
            reverseOnExit={true}
          >
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
              <span>Automotive Photography</span>
              <span>•</span>
              <span>Luxury Vehicles</span>
              <span>•</span>
              <span>Creative Perspectives</span>
            </div>
          </GradualBlurWrapper>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 pt-header-offset">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <GradualBlurWrapper
              blurAmount={12}
              duration={1000}
              delay={100}
              animationType="blur-fade"
              threshold={0.2}
              triggerOnce={false}
              reverseOnExit={true}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                Automotive Collection
              </h2>
            </GradualBlurWrapper>

            <GradualBlurWrapper
              blurAmount={10}
              duration={800}
              delay={300}
              animationType="blur-slide"
              direction="up"
              threshold={0.2}
              triggerOnce={false}
              reverseOnExit={true}
            >
              <p className="text-gray-400 max-w-2xl mx-auto mb-4">
                Discover automotive artistry through this collection. Each vehicle is captured with precision,
                showcasing the perfect blend of engineering excellence and aesthetic beauty.
              </p>
              <p className="text-sm text-purple-400">
                💡 Click the eye icon on each photo to toggle information visibility
              </p>
            </GradualBlurWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automotiveImages.map((image, index) => (
              <GradualBlurWrapper
                key={index}
                blurAmount={12}
                duration={1000}
                delay={100 + index * 100}
                animationType="blur-slide"
                direction={index % 2 === 0 ? "up" : "left"}
                threshold={0.15}
                triggerOnce={false}
                reverseOnExit={true}
                exitDelay={50}
              >
                <InteractiveImageCard
                  src={image.src}
                  alt={image.alt}
                  caption={image.caption}
                  description={image.description}
                  category={image.category}
                  onClick={() => setSelectedImageIndex(index)}
                />
              </GradualBlurWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gray-900 pt-header-offset">
        <div className="container mx-auto text-center">
          <GradualBlurWrapper
            blurAmount={12}
            duration={1000}
            delay={100}
            animationType="blur-fade"
            threshold={0.2}
            triggerOnce={false}
            reverseOnExit={true}
          >
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
              Showcase Your Vehicle
            </h2>
          </GradualBlurWrapper>

          <GradualBlurWrapper
            blurAmount={10}
            duration={800}
            delay={300}
            animationType="blur-slide"
            direction="up"
            threshold={0.2}
            triggerOnce={false}
            reverseOnExit={true}
          >
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Transform your car into a work of art with professional automotive photography that captures every detail.
            </p>
          </GradualBlurWrapper>

          <GradualBlurWrapper
            blurAmount={8}
            duration={800}
            delay={500}
            animationType="blur-scale"
            threshold={0.2}
            triggerOnce={false}
            reverseOnExit={true}
          >
            <a
              href="https://wa.me/212643858432?text=Hi! I'm interested in booking automotive photography services."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white transform hover:scale-105 transition-all duration-300"
              >
                Book Automotive Photography
              </Button>
            </a>
          </GradualBlurWrapper>
        </div>
      </section>

      {/* Image Viewer Modal */}
      {selectedImageIndex !== null && (
        <ImageViewer
          images={automotiveImages}
          initialIndex={selectedImageIndex}
          onClose={() => setSelectedImageIndex(null)}
        />
      )}
    </div>
  )
}
