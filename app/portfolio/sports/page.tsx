"use client"

import { Button } from "@/components/ui/button"
import { ImageViewer } from "@/components/image-viewer"
import { ArrowLeft, Instagram, Mail, MessageCircle, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { GradualBlurWrapper } from "@/components/gradual-blur-wrapper"
import { InteractiveImageCard } from "@/components/interactive-image-card"

export default function SportsAlbum() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const sportsImages = [
    {
      src: "/images/surfer-wave-action.jpg",
      alt: "Surfer riding a powerful wave",
      caption: "Wave Rider",
      description: "Dynamic action shot capturing a surfer riding a powerful wave with perfect timing and composition.",
      category: "Surfing",
    },
    {
      src: "/images/sports/surf-powerful-wave.jpg",
      alt: "Surfer on powerful wave with dramatic water spray",
      caption: "Ocean Power",
      description:
        "Spectacular surf photography showcasing the raw power and beauty of ocean waves with perfect water texture.",
      category: "Surfing",
    },
    {
      src: "/images/sports/skateboard-bowl-colorful.jpg",
      alt: "Skateboarder performing tricks in colorful concrete bowl",
      caption: "Bowl Session",
      description:
        "Creative skateboarding photography in a vibrant painted concrete bowl with tropical palm tree backdrop.",
      category: "Skateboarding",
    },
    {
      src: "/images/surfer-action.jpg",
      alt: "Action sports photography - surfer on wave",
      caption: "Perfect Form",
      description: "Classic surf action shot demonstrating perfect form and technique on a clean wave face.",
      category: "Surfing",
    },
    {
      src: "/images/sports/surf-wave-bw.jpg",
      alt: "Black and white surfer riding wave",
      caption: "Timeless Surf",
      description: "Artistic black and white surf photography capturing the timeless beauty and grace of wave riding.",
      category: "Surfing",
    },
    {
      src: "/images/sports/female-surfer-golden-hour.jpg",
      alt: "Female surfer during golden hour lighting",
      caption: "Golden Hour Grace",
      description:
        "Beautiful portrait of a female surfer captured during golden hour with soft, warm lighting and perfect wave.",
      category: "Surfing",
    },
    {
      src: "/images/sports/surf-lineup-turquoise.jpg",
      alt: "Multiple surfers in crystal clear turquoise water",
      caption: "The Lineup",
      description:
        "Wide-angle shot showcasing the surf community in crystal clear turquoise waters, waiting for the perfect wave.",
      category: "Surfing",
    },
    {
      src: "/images/surfers-bw-silhouette.jpg",
      alt: "Black and white surfer silhouettes",
      caption: "Surf Silhouettes",
      description: "Artistic black and white composition of surfers silhouetted against crashing waves.",
      category: "Surfing",
    },
    {
      src: "/images/sports/skateboard-park-action.jpg",
      alt: "Skateboarding action at concrete skate park",
      caption: "Skate Park Flow",
      description:
        "Dynamic skateboarding action captured at a concrete skate park with spectators and urban atmosphere.",
      category: "Skateboarding",
    },
    {
      src: "/images/sports/surf-wipeout-bw.jpg",
      alt: "Dramatic black and white surf wipeout",
      caption: "Wipeout Drama",
      description:
        "Dramatic black and white capture of a surf wipeout, showing the raw power and unpredictability of the ocean.",
      category: "Surfing",
    },
    {
      src: "/images/sports/skateboard-street-celebration.jpg",
      alt: "Street skateboarding with celebration pose",
      caption: "Street Victory",
      description: "Urban skateboarding photography capturing a moment of triumph and celebration on city streets.",
      category: "Skateboarding",
    },
    {
      src: "/images/sports/surf-silhouette-sparkling.jpg",
      alt: "Surfer silhouette against sparkling water",
      caption: "Sparkling Silhouette",
      description:
        "Artistic surf photography with surfer silhouetted against sparkling, sunlit water creating magical atmosphere.",
      category: "Surfing",
    },
    {
      src: "/images/surfers-lifestyle.jpg",
      alt: "Surfers at the beach lifestyle shot",
      caption: "Beach Life",
      description: "Lifestyle photography capturing the authentic surf culture and beach atmosphere.",
      category: "Surfing",
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
          <Image src="/images/surfer-wave-action.jpg" alt="Sports hero" fill className="object-cover" priority />
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Surf & Skate
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
              Dynamic action photography capturing the power, grace, and intensity of athletic moments across surfing
              and skateboarding disciplines.
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
              <span>Action Photography</span>
              <span>•</span>
              <span>Ocean & Street Sports</span>
              <span>•</span>
              <span>Perfect Timing</span>
            </div>
          </GradualBlurWrapper>
        </div>
      </section>

      {/* Gallery Section with Interactive Cards */}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Surf & Skate Photography Collection
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
                Experience the thrill and intensity of action sports through this collection. Each image captures the
                perfect moment where skill, timing, and natural elements converge.
              </p>
              <p className="text-sm text-purple-400 flex items-center justify-center gap-2">
                <Eye className="h-4 w-4" />
                Click the eye icon on each photo to toggle information visibility
              </p>
            </GradualBlurWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sportsImages.map((image, index) => (
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
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Capture Your Athletic Moments
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
              From surf competitions to skate sessions, I specialize in capturing the intensity, beauty, and raw energy
              of action sports.
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
              href="https://wa.me/212643858432?text=Hi! I'm interested in booking sports photography services."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white transform hover:scale-105 transition-all duration-300"
              >
                Book Surf & Skate Photography
              </Button>
            </a>
          </GradualBlurWrapper>
        </div>
      </section>

      {/* Image Viewer Modal */}
      {selectedImageIndex !== null && (
        <ImageViewer
          images={sportsImages}
          initialIndex={selectedImageIndex}
          onClose={() => setSelectedImageIndex(null)}
        />
      )}
    </div>
  )
}
