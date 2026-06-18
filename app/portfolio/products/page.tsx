"use client"

import { Button } from "@/components/ui/button"
import { ImageViewer } from "@/components/image-viewer"
import { ArrowLeft, Instagram, Mail, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { GradualBlurWrapper } from "@/components/gradual-blur-wrapper"
import { InteractiveImageCard } from "@/components/interactive-image-card"

export default function ProductsAlbum() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const productImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BA9A1471-A9uaj6D85IDGuOWPNMB7Ec1I6DO.jpg",
      alt: "Man driving van with tattooed arms wearing checkered beanie",
      caption: "Street Culture Automotive",
      description:
        "Dynamic portrait of tattooed driver in van setting, capturing street culture and lifestyle aesthetic with authentic styling.",
      category: "Lifestyle",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BA9A1523-TQSmvXleYQm2qlm3DieHXAuSQCUYc9.jpg",
      alt: "Motocross rider in red helmet with colorful gloves raised",
      caption: "Victory Moment Motocross",
      description:
        "Action-packed moment celebrating motocross achievement with vibrant helmet colors and dynamic pose against clear sky.",
      category: "Sports",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BA9A4334-b81QLuGRcKsfWKuX2suJCkAibxGvLx.jpg",
      alt: "Skateboarder performing airborne trick",
      caption: "Aerial Skateboard Trick",
      description:
        "High-energy skateboarding action shot capturing mid-air trick with dramatic sky and motion-filled composition.",
      category: "Sports",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BA9A4800-UVA2awRrjfbBluKKQhLdXbONTMKxpy.jpg",
      alt: "Person holding spray paint cans against graffiti wall",
      caption: "Street Art Expression",
      description:
        "Creative street art photography showing artist with spray cans against vibrant graffiti backdrop, capturing urban culture.",
      category: "Street Art",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BA9A4859-uq3opqs6yFmOAMQNioB0jdAznZY9lT.jpg",
      alt: "Two people holding Palmer Skateboard Company flag at sunset",
      caption: "Brand Heritage Sunset",
      description:
        "Golden hour portrait of brand ambassadors celebrating Palmer Skateboard Company with flag in scenic field setting.",
      category: "Brand",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BA9A3246-dxK3uh69xQYNVzL05fkLaWB5CvAMGT.jpg",
      alt: "Person with Palmer flag on snowy mountain peak",
      caption: "Summit Brand Adventure",
      description:
        "Epic mountain photography featuring Palmer Skateboard Company flag at snowy peak with dramatic alpine landscape backdrop.",
      category: "Adventure",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BA9A2954-yXkJ3UOn8xEFMRqSkNac2PF4K5j8kx.jpg",
      alt: "Two people on beach with ocean backdrop",
      caption: "Coastal Brand Moments",
      description:
        "Vibrant beach portrait featuring brand ambassadors with dynamic energy and ocean backdrop, capturing lifestyle and community.",
      category: "Lifestyle",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BA9A4822-rYld5gINmmCf1QgoPPVNnY28ypxvNI.jpg",
      alt: "Person at DJ turntables with red cap against ocean",
      caption: "Ocean DJ Performance",
      description:
        "Professional DJ portrait with turntables against dramatic ocean and sunset backdrop, showcasing music production lifestyle.",
      category: "Music",
    },
    {
      src: "/images/product-nafa-single.jpg",
      alt: "NAFA cosmetic bottle with natural lighting",
      caption: "NAFA Hair Oil",
      description:
        "Professional product photography showcasing NAFA cosmetic bottle with beautiful natural lighting and bokeh background.",
      category: "Cosmetics",
    },
    {
      src: "/images/product-nafa-duo.jpg",
      alt: "Two NAFA bottles with natural background",
      caption: "NAFA Product Line",
      description:
        "Elegant product photography featuring dual NAFA bottles with natural textures and perfect lighting composition.",
      category: "Cosmetics",
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
          <Image src="/images/products-cover.jpg" alt="Products hero" fill className="object-cover" priority />
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
              Products
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
              Professional product photography with meticulous attention to lighting, composition, and detail that makes
              products shine and stand out in the market.
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
              <span>Product Photography</span>
              <span>•</span>
              <span>Studio Lighting</span>
              <span>•</span>
              <span>Perfect Composition</span>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
                Product Photography Collection
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
                Experience professional product photography that showcases meticulous attention to lighting,
                composition, and detail that makes products shine and appeal to customers.
              </p>
              <p className="text-sm text-purple-400">
                💡 Click the eye icon on each photo to toggle information visibility
              </p>
            </GradualBlurWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {productImages.map((image, index) => (
              <GradualBlurWrapper
                key={index}
                blurAmount={12}
                duration={1000}
                delay={100 + index * 200}
                animationType="blur-slide"
                direction={index % 2 === 0 ? "left" : "right"}
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
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
              Elevate Your Product Images
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
              Professional product photography that makes your products stand out with perfect lighting and composition.
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
              href="https://wa.me/212643858432?text=Hi! I'm interested in booking product photography services."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white transform hover:scale-105 transition-all duration-300"
              >
                Book Product Photography
              </Button>
            </a>
          </GradualBlurWrapper>
        </div>
      </section>

      {/* Image Viewer Modal */}
      {selectedImageIndex !== null && (
        <ImageViewer
          images={productImages}
          initialIndex={selectedImageIndex}
          onClose={() => setSelectedImageIndex(null)}
        />
      )}
    </div>
  )
}
