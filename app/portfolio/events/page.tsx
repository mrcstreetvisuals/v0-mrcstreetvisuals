"use client"

import { Button } from "@/components/ui/button"
import { ImageViewer } from "@/components/image-viewer"
import { ArrowLeft, Instagram, Mail, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { GradualBlurWrapper } from "@/components/gradual-blur-wrapper"
import { InteractiveImageCard } from "@/components/interactive-image-card"

export default function EventsAlbum() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const eventImages = [
    {
      src: "/images/nightclub-red.jpg",
      alt: "Nightclub with dramatic red lighting",
      caption: "Electric Nightlife",
      description: "High-energy nightclub photography capturing the vibrant atmosphere and dynamic lighting.",
      category: "Nightlife",
    },
    {
      src: "/images/events/the-lost-haven-neon.jpg",
      alt: "The Lost Haven venue with neon signage and crowd",
      caption: "The Lost Haven",
      description:
        "Atmospheric venue photography showcasing neon branding and the electric energy of nightlife crowds.",
      category: "Venue",
    },
    {
      src: "/images/events/live-concert-blue-lights.jpg",
      alt: "Live concert performance with blue stage lighting",
      caption: "Concert Stage Magic",
      description:
        "Professional concert photography capturing a live performance with dramatic blue stage lighting and full band setup.",
      category: "Concert",
    },
    {
      src: "/images/nightclub-dance.jpg",
      alt: "People dancing with colorful lights",
      caption: "Dance Floor Energy",
      description: "Candid moments of joy and celebration on the dance floor with stunning light effects.",
      category: "Nightlife",
    },
    {
      src: "/images/events/traditional-cultural-ensemble.jpg",
      alt: "Traditional cultural ensemble performance",
      caption: "Cultural Heritage Ensemble",
      description:
        "Professional documentation of traditional cultural performers in authentic costumes with ceremonial instruments.",
      category: "Cultural",
    },
    {
      src: "/images/events/nightclub-dance-motion.jpg",
      alt: "Nightclub dancers with motion blur and colorful lighting",
      caption: "Motion & Light",
      description:
        "Creative motion blur photography capturing the dynamic movement and colorful lighting of the dance floor.",
      category: "Nightlife",
    },
    {
      src: "/images/dj-performance.jpg",
      alt: "DJ performing with atmospheric lighting",
      caption: "Behind the Decks",
      description: "Professional DJ performance captured with atmospheric lighting and smoke effects.",
      category: "DJ",
    },
    {
      src: "/images/events/cultural-performer-bw.jpg",
      alt: "Black and white cultural performer addressing audience",
      caption: "Traditional Storyteller",
      description:
        "Artistic black and white documentation of a cultural performer in traditional dress addressing the audience.",
      category: "Cultural",
    },
    {
      src: "/images/events/performer-silhouette-bw.jpg",
      alt: "Dramatic black and white performer silhouette",
      caption: "Performance Passion",
      description:
        "Powerful black and white silhouette capturing the emotional intensity and passion of live performance.",
      category: "Performance",
    },
    {
      src: "/images/cultural-performance-bw.jpg",
      alt: "Cultural performance in black and white",
      caption: "Cultural Heritage",
      description: "Traditional cultural performance documented in striking black and white photography.",
      category: "Cultural",
    },
    {
      src: "/images/events/musician-traditional-instrument.jpg",
      alt: "Musician playing traditional stringed instrument",
      caption: "Traditional Melodies",
      description:
        "Intimate portrait of a traditional musician with his instrument under atmospheric blue stage lighting.",
      category: "Music",
    },
    {
      src: "/images/events/band-performance-bw.jpg",
      alt: "Black and white full band performance",
      caption: "Rock Band Energy",
      description:
        "Dynamic black and white concert photography showcasing the full band with dramatic stage lighting and atmosphere.",
      category: "Concert",
    },
    {
      src: "/images/light-trails.jpg",
      alt: "Creative light trails and motion blur",
      caption: "Light in Motion",
      description: "Artistic capture of light trails and motion blur creating dynamic visual effects.",
      category: "Creative",
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
          <Image src="/images/nightclub-red.jpg" alt="Events hero" fill className="object-cover" priority />
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
              Events
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
              High-energy event photography capturing the electric atmosphere of nightlife, live concerts, cultural
              performances, and celebrations.
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
              <span>Event Photography</span>
              <span>•</span>
              <span>Live Concerts</span>
              <span>•</span>
              <span>Cultural Events</span>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                Event Photography Collection
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
                Experience the energy and atmosphere of live events through this collection. From nightclub scenes to
                cultural performances, each image tells a story of celebration and human connection.
              </p>
              <p className="text-sm text-purple-400">
                💡 Click the eye icon on each photo to toggle information visibility
              </p>
            </GradualBlurWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventImages.map((image, index) => (
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
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
              Need Event Photography?
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
              From nightlife to cultural events, concerts to celebrations - I capture the energy and atmosphere that
              makes your event unforgettable.
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
              href="https://wa.me/212643858432?text=Hi! I'm interested in booking event photography services."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white transform hover:scale-105 transition-all duration-300"
              >
                Book Event Photography
              </Button>
            </a>
          </GradualBlurWrapper>
        </div>
      </section>

      {/* Image Viewer Modal */}
      {selectedImageIndex !== null && (
        <ImageViewer
          images={eventImages}
          initialIndex={selectedImageIndex}
          onClose={() => setSelectedImageIndex(null)}
        />
      )}
    </div>
  )
}
