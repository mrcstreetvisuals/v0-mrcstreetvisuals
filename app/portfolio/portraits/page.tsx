"use client"

import { Button } from "@/components/ui/button"
import { ImageViewer } from "@/components/image-viewer"
import { ArrowLeft, Instagram, Mail, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { GradualBlurWrapper } from "@/components/gradual-blur-wrapper"
import { InteractiveImageCard } from "@/components/interactive-image-card"

export default function PortraitsAlbum() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const portraitImages = [
    {
      src: "/images/portrait-nature.jpg",
      alt: "Natural outdoor portrait",
      caption: "Golden Hour Portrait",
      description:
        "A serene outdoor portrait captured during the golden hour, showcasing natural beauty and soft lighting.",
      category: "Outdoor",
    },
    {
      src: "/images/portraits/stylized-portrait-sunglasses.jpg",
      alt: "Stylized black and white portrait with selective color sunglasses",
      caption: "Urban Style",
      description:
        "Creative portrait with selective color processing, highlighting personality through fashion and artistic lighting.",
      category: "Fashion",
    },
    {
      src: "/images/portrait-blue.jpg",
      alt: "Creative portrait with blue lighting",
      caption: "Blue Hour Mood",
      description: "Dramatic portrait using creative blue lighting to create a moody and artistic atmosphere.",
      category: "Creative",
    },
    {
      src: "/images/portraits/reading-portrait-bw.jpg",
      alt: "Atmospheric black and white portrait of person reading",
      caption: "Literary Moment",
      description:
        "Contemplative black and white portrait captured in a library setting, showcasing the subject's intellectual side.",
      category: "Lifestyle",
    },
    {
      src: "/images/portraits/street-vendor-golden-hour.jpg",
      alt: "Candid street portrait of fruit vendor during golden hour",
      caption: "Street Life Stories",
      description:
        "Authentic documentary-style portrait capturing the essence of daily life with beautiful golden hour lighting and natural storytelling.",
      category: "Street",
    },
    {
      src: "/images/portraits/woman-sunglasses-warm-light.jpg",
      alt: "Stylish portrait of woman with sunglasses in warm lighting",
      caption: "Warm Elegance",
      description:
        "Fashion-forward portrait with stunning warm lighting and natural background, showcasing style and personality.",
      category: "Fashion",
    },
    {
      src: "/images/portraits/elderly-man-bougainvillea.jpg",
      alt: "Distinguished elderly man portrait with purple bougainvillea background",
      caption: "Timeless Dignity",
      description:
        "Classic environmental portrait showcasing character and wisdom, beautifully framed by vibrant bougainvillea flowers.",
      category: "Environmental",
    },
    {
      src: "/images/portraits/contemplative-woman-curly-hair.jpg",
      alt: "Intimate portrait of contemplative woman with curly hair",
      caption: "Quiet Contemplation",
      description:
        "Intimate and thoughtful portrait with soft natural lighting, capturing a moment of peaceful reflection in a natural setting.",
      category: "Intimate",
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
          <Image src="/images/portrait-nature.jpg" alt="Portraits hero" fill className="object-cover" priority />
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Portraits
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
              Intimate and creative portrait photography capturing personality, emotion, and the unique essence of each
              subject through artistic lighting and composition.
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
              <span>Portrait Photography</span>
              <span>•</span>
              <span>Creative Lighting</span>
              <span>•</span>
              <span>Emotional Storytelling</span>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Portrait Collection
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
                Explore my portrait photography collection showcasing diverse subjects and creative approaches. Each
                image tells a unique story through careful composition and lighting.
              </p>
              <p className="text-sm text-purple-400">
                💡 Click the eye icon on each photo to toggle information visibility
              </p>
            </GradualBlurWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portraitImages.map((image, index) => (
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
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Ready for Your Portrait Session?
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
              Let's create stunning portraits that capture your unique personality and style. Contact me to discuss your
              vision.
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
              href="https://wa.me/212643858432?text=Hi! I'm interested in booking a portrait photography session."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white transform hover:scale-105 transition-all duration-300"
              >
                Book Portrait Session
              </Button>
            </a>
          </GradualBlurWrapper>
        </div>
      </section>

      {/* Image Viewer Modal */}
      {selectedImageIndex !== null && (
        <ImageViewer
          images={portraitImages}
          initialIndex={selectedImageIndex}
          onClose={() => setSelectedImageIndex(null)}
        />
      )}
    </div>
  )
}
