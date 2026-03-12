"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Instagram, Mail, MessageCircle, Palette, Award, Truck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { shopProducts } from "@/lib/shop-data"
import { ProductCard } from "@/components/product-card"
import { ShopImageViewer } from "@/components/shop-image-viewer"
import { GradualBlurWrapper } from "@/components/gradual-blur-wrapper"

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [fullscreenProductId, setFullscreenProductId] = useState<string | null>(null)

  const categories = ["All", "Beach Life", "Surf Culture", "Cultural Heritage", "Seascapes", "Skateboarding"]

  const filteredProducts =
    selectedCategory === "All" ? shopProducts : shopProducts.filter((product) => product.category === selectedCategory)

  const handleViewFullscreen = (productId: string) => {
    setFullscreenProductId(productId)
  }

  const handleCloseFullscreen = () => {
    setFullscreenProductId(null)
  }

  const fullscreenProductIndex = fullscreenProductId
    ? filteredProducts.findIndex((product) => product.id === fullscreenProductId)
    : -1

  return (
    <div className="min-h-screen bg-black text-white scroll-smooth">
      {/* Header */}
      <header className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-sm border-b border-gray-800 header-height">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2 hover:text-purple-400 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="hidden sm:inline">Back to Home</span>
              <span className="sm:hidden">Back</span>
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
            <span className="text-lg font-bold bg-gradient-to-r from-red-500 to-purple-400 bg-clip-text text-transparent hidden sm:inline">
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
          <Image
            src="/images/shop/beach-aerial-crowd.jpg"
            alt="Beach Mosaic - Aerial view of crowded beach life"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Print Shop
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
              Limited edition fine art prints from my photography collection. Each print is carefully selected and
              limited to only 5 copies worldwide.
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
              <span>Limited Edition</span>
              <span>•</span>
              <span>High Quality Prints</span>
              <span>•</span>
              <span>Worldwide Shipping</span>
            </div>
          </GradualBlurWrapper>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 bg-gray-900/50 pt-header-offset">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Award,
                title: "Limited Edition",
                description: "Only 5 prints of each image will ever be made",
                color: "text-yellow-400",
              },
              {
                icon: Palette,
                title: "Premium Quality",
                description: "Professional printing on archival paper",
                color: "text-purple-400",
              },
              {
                icon: Truck,
                title: "Secure Shipping",
                description: "Carefully packaged and insured delivery",
                color: "text-green-400",
              },
            ].map((feature, index) => (
              <GradualBlurWrapper
                key={feature.title}
                blurAmount={10}
                duration={800}
                delay={200 + index * 150}
                animationType="blur-scale"
                threshold={0.2}
                triggerOnce={false}
                reverseOnExit={true}
              >
                <Card className="bg-gray-800/50 border-gray-700 text-center p-6">
                  <CardContent className="flex flex-col items-center">
                    <feature.icon className={`h-12 w-12 ${feature.color} mb-4`} />
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </GradualBlurWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 pt-header-offset">
        <div className="container mx-auto">
          <GradualBlurWrapper
            blurAmount={8}
            duration={800}
            delay={100}
            animationType="blur-fade"
            threshold={0.2}
            triggerOnce={false}
            reverseOnExit={true}
          >
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700"
                      : "border-gray-600 text-gray-300 hover:bg-gray-800"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </GradualBlurWrapper>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 px-4 pt-header-offset">
        <div className="container mx-auto">
          {filteredProducts.length === 0 ? (
            <GradualBlurWrapper
              blurAmount={10}
              duration={800}
              delay={200}
              animationType="blur-fade"
              threshold={0.2}
              triggerOnce={false}
              reverseOnExit={true}
            >
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No products found in this category.</p>
              </div>
            </GradualBlurWrapper>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <GradualBlurWrapper
                  key={product.id}
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
                  <ProductCard product={product} onViewFullscreen={handleViewFullscreen} />
                </GradualBlurWrapper>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Copyright Notice */}
      <section className="py-8 px-4 bg-gray-900/50 pt-header-offset">
        <div className="container mx-auto text-center">
          <GradualBlurWrapper
            blurAmount={8}
            duration={800}
            delay={200}
            animationType="blur-fade"
            threshold={0.2}
            triggerOnce={false}
            reverseOnExit={true}
          >
            <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-white mb-3">📸 Image Protection Notice</h3>
              <p className="text-gray-400 text-sm">
                All images displayed in this shop are protected by copyright and watermarked to prevent unauthorized
                use. The watermarks will not appear on purchased prints. By viewing these images, you agree to respect
                the intellectual property rights of mrcstreetvisuals.
              </p>
            </div>
          </GradualBlurWrapper>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-4 bg-gray-900 pt-header-offset">
        <div className="container mx-auto text-center max-w-4xl">
          <GradualBlurWrapper
            blurAmount={12}
            duration={1000}
            delay={100}
            animationType="blur-fade"
            threshold={0.2}
            triggerOnce={false}
            reverseOnExit={true}
          >
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              About These Prints
            </h2>
          </GradualBlurWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <GradualBlurWrapper
              blurAmount={10}
              duration={800}
              delay={300}
              animationType="blur-slide"
              direction="left"
              threshold={0.2}
              triggerOnce={false}
              reverseOnExit={true}
            >
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Print Specifications</h3>
                <ul className="text-gray-400 space-y-2">
                  <li>• Size: 30x60cm (12"x23")</li>
                  <li>• Paper: Premium archival matte</li>
                  <li>• Signature: Hand-signed by the artist</li>
                  <li>• Quality: Museum-grade, watermark-free</li>
                </ul>
              </div>
            </GradualBlurWrapper>

            <GradualBlurWrapper
              blurAmount={10}
              duration={800}
              delay={500}
              animationType="blur-slide"
              direction="right"
              threshold={0.2}
              triggerOnce={false}
              reverseOnExit={true}
            >
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Framing Options</h3>
                <ul className="text-gray-400 space-y-2">
                  <li>• Frame: Premium black wooden frame</li>
                  <li>• Ready to hang with wire backing</li>
                  <li>• Professional gallery presentation</li>
                  <li>• UV-protective glass included</li>
                </ul>
              </div>
            </GradualBlurWrapper>
          </div>

          <GradualBlurWrapper
            blurAmount={8}
            duration={800}
            delay={700}
            animationType="blur-scale"
            threshold={0.2}
            triggerOnce={false}
            reverseOnExit={true}
          >
            <div className="mt-12 p-6 bg-gray-800/50 rounded-lg border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-3">🎨 Certificate of Authenticity</h3>
              <p className="text-gray-400">
                Each print comes with a signed certificate of authenticity, including the edition number, print date,
                and artist signature. This ensures the value and provenance of your artwork. Final prints are delivered
                without watermarks in pristine condition.
              </p>
            </div>
          </GradualBlurWrapper>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 pt-header-offset">
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
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Questions About Prints?
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
              Have questions about sizing, framing, or shipping? I'm here to help you find the perfect piece for your
              space.
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
              href="https://wa.me/212643858432?text=Hi! I have questions about your print collection."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white transform hover:scale-105 transition-all duration-300"
              >
                Contact About Prints
              </Button>
            </a>
          </GradualBlurWrapper>
        </div>
      </section>

      {/* Full-screen Image Viewer */}
      {fullscreenProductId && fullscreenProductIndex !== -1 && (
        <ShopImageViewer
          products={filteredProducts}
          initialIndex={fullscreenProductIndex}
          onClose={handleCloseFullscreen}
        />
      )}
    </div>
  )
}
