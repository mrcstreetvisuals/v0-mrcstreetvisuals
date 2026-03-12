"use client"

import { UnifiedBlurSystem, BlurPresets } from "@/components/unified-blur-system"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useState } from "react"

export function IntegratedBlurShowcase() {
  const [activeDemo, setActiveDemo] = useState<"reveal" | "advanced" | "combined">("reveal")
  const [isInteractive, setIsInteractive] = useState(false)

  const demoSections = [
    {
      id: "reveal",
      title: "Reveal Blur System",
      description: "Scroll-based blur reveals with bidirectional transitions",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "advanced",
      title: "Advanced Backdrop Blur",
      description: "Sophisticated backdrop blur with mathematical curves",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "combined",
      title: "Combined Effects",
      description: "Unified system showcasing both approaches",
      color: "from-red-500 to-orange-500",
    },
  ]

  const portfolioImages = [
    "/images/surfer-wave-action.jpg",
    "/images/portrait-nature.jpg",
    "/images/nightclub-red.jpg",
    "/images/pink-car-automotive.jpg",
  ]

  return (
    <div className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <UnifiedBlurSystem type="reveal" animationType="blur-fade" duration={1200} delay={200}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-400 to-red-500 bg-clip-text text-transparent">
              Integrated Blur System
            </h2>
          </UnifiedBlurSystem>

          <UnifiedBlurSystem type="reveal" animationType="blur-slide" direction="up" duration={1000} delay={400}>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience the power of our unified blur system combining scroll-based reveals with advanced backdrop blur
              effects for a premium visual experience.
            </p>
          </UnifiedBlurSystem>

          {/* Demo Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {demoSections.map((section, index) => (
              <UnifiedBlurSystem key={section.id} type="reveal" animationType="blur-scale" delay={600 + index * 100}>
                <Button
                  variant={activeDemo === section.id ? "default" : "outline"}
                  onClick={() => setActiveDemo(section.id as any)}
                  className={`${
                    activeDemo === section.id
                      ? `bg-gradient-to-r ${section.color} hover:opacity-90`
                      : "border-gray-600 text-gray-300 hover:bg-gray-800"
                  } transition-all duration-300`}
                >
                  {section.title}
                </Button>
              </UnifiedBlurSystem>
            ))}
          </div>
        </div>

        {/* Reveal Blur Demo */}
        {activeDemo === "reveal" && (
          <div className="space-y-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-white mb-4">Scroll-Based Reveal System</h3>
              <p className="text-gray-400">
                Elements blur in and out as you scroll, with smooth bidirectional transitions
              </p>
            </div>

            {/* Image Grid with Reveal Blur */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {portfolioImages.map((src, index) => (
                <UnifiedBlurSystem
                  key={src}
                  type="reveal"
                  animationType="blur-slide"
                  direction={index % 2 === 0 ? "up" : "left"}
                  duration={1200}
                  delay={index * 200}
                  blurAmount={15}
                  reverseOnExit={true}
                  exitDelay={100}
                >
                  <Card className="bg-gray-800 border-gray-700 overflow-hidden group hover:scale-105 transition-transform duration-300">
                    <CardContent className="p-0">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={src || "/placeholder.svg"}
                          alt={`Portfolio image ${index + 1}`}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </CardContent>
                  </Card>
                </UnifiedBlurSystem>
              ))}
            </div>

            {/* Text Content with Staggered Reveals */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Smooth Transitions",
                  desc: "Bidirectional blur effects that work seamlessly in both directions",
                },
                { title: "Performance Optimized", desc: "GPU-accelerated animations with reduced motion support" },
                {
                  title: "Highly Configurable",
                  desc: "Multiple animation types, easing functions, and timing controls",
                },
              ].map((item, index) => (
                <UnifiedBlurSystem
                  key={item.title}
                  type="reveal"
                  animationType="blur-fade"
                  duration={1000}
                  delay={index * 300}
                  threshold={0.2}
                >
                  <Card className="bg-gray-800/50 border-gray-700 p-6 text-center">
                    <CardContent>
                      <h4 className="text-lg font-semibold text-white mb-3">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </CardContent>
                  </Card>
                </UnifiedBlurSystem>
              ))}
            </div>
          </div>
        )}

        {/* Advanced Blur Demo */}
        {activeDemo === "advanced" && (
          <div className="space-y-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-white mb-4">Advanced Backdrop Blur System</h3>
              <p className="text-gray-400">Sophisticated backdrop blur effects with mathematical precision</p>
            </div>

            {/* Hero Section with Advanced Blur */}
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="/images/surfer-wave-action.jpg"
                alt="Hero background"
                fill
                className="object-cover"
                priority
              />

              <UnifiedBlurSystem type="advanced" preset="hero-fade" animated="scroll" responsive={true}>
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <h4 className="text-3xl font-bold mb-4">Advanced Blur Overlay</h4>
                    <p className="text-lg opacity-90">Mathematical curve-based blur progression</p>
                  </div>
                </div>
              </UnifiedBlurSystem>
            </div>

            {/* Preset Showcase */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { preset: "subtle", name: "Subtle", desc: "Light blur for minimal distraction" },
                { preset: "intense", name: "Intense", desc: "Heavy blur with exponential curve" },
                { preset: "smooth", name: "Smooth", desc: "Bezier curve for natural progression" },
                { preset: "sharp", name: "Sharp", desc: "Linear progression for clean edges" },
                { preset: "header", name: "Header", desc: "Perfect for navigation overlays" },
                { preset: "footer", name: "Footer", desc: "Ideal for bottom content fades" },
              ].map((item, index) => (
                <div key={item.preset} className="relative h-48 rounded-lg overflow-hidden bg-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-60" />

                  <UnifiedBlurSystem type="advanced" preset={item.preset} animated="hover" hoverIntensity={1.5}>
                    <div className="relative z-10 h-full flex flex-col items-center justify-center text-white p-4">
                      <Badge variant="secondary" className="mb-2 bg-white/20 text-white border-0">
                        {item.name}
                      </Badge>
                      <p className="text-sm text-center opacity-90">{item.desc}</p>
                    </div>
                  </UnifiedBlurSystem>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Combined Effects Demo */}
        {activeDemo === "combined" && (
          <div className="space-y-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-white mb-4">Unified Blur System</h3>
              <p className="text-gray-400">Combining both systems for maximum visual impact</p>

              <Button
                onClick={() => setIsInteractive(!isInteractive)}
                className="mt-4 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600"
              >
                {isInteractive ? "Disable" : "Enable"} Interactive Mode
              </Button>
            </div>

            {/* Complex Layout with Multiple Blur Types */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Reveal Blur */}
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-white">Reveal Blur Effects</h4>

                {[1, 2, 3].map((item, index) => (
                  <UnifiedBlurSystem
                    key={item}
                    type="reveal"
                    animationType="blur-slide"
                    direction="right"
                    duration={1000}
                    delay={index * 200}
                    threshold={isInteractive ? 0 : 0.2}
                    reverseOnExit={!isInteractive}
                  >
                    <Card className="bg-gray-800 border-gray-700 p-6">
                      <CardContent>
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">{item}</span>
                          </div>
                          <div>
                            <h5 className="text-white font-semibold">Reveal Item {item}</h5>
                            <p className="text-gray-400 text-sm">Smooth scroll-based reveal</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </UnifiedBlurSystem>
                ))}
              </div>

              {/* Right Column - Advanced Blur */}
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-white">Advanced Backdrop Blur</h4>

                <div className="relative h-80 rounded-lg overflow-hidden">
                  <Image src="/images/nightclub-red.jpg" alt="Background" fill className="object-cover" />

                  <UnifiedBlurSystem
                    type="advanced"
                    position="bottom"
                    height="8rem"
                    strength={3}
                    curve="bezier"
                    divCount={8}
                    animated={isInteractive ? "hover" : "scroll"}
                    hoverIntensity={isInteractive ? 2 : undefined}
                    responsive={true}
                  >
                    <div className="relative z-10 h-full flex items-end p-6">
                      <div className="text-white">
                        <h5 className="text-lg font-semibold mb-2">Advanced Blur Overlay</h5>
                        <p className="text-sm opacity-90">
                          {isInteractive ? "Hover to intensify blur" : "Scroll-activated backdrop blur"}
                        </p>
                      </div>
                    </div>
                  </UnifiedBlurSystem>
                </div>

                {/* Preset Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(BlurPresets)
                    .slice(0, 4)
                    .map(([key, preset]) => (
                      <UnifiedBlurSystem key={key} {...preset} threshold={isInteractive ? 0 : 0.3}>
                        <Button
                          variant="outline"
                          className="w-full border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                        >
                          {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                        </Button>
                      </UnifiedBlurSystem>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Performance Info */}
        <UnifiedBlurSystem type="reveal" animationType="blur-fade" duration={1200} delay={800}>
          <div className="mt-16 p-6 bg-gray-800/50 rounded-lg border border-gray-700">
            <h4 className="text-lg font-semibold text-white mb-3">🚀 Performance Features</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-400">
              <div>
                <strong className="text-white">GPU Acceleration:</strong> Hardware-accelerated transforms and filters
              </div>
              <div>
                <strong className="text-white">Reduced Motion:</strong> Respects user accessibility preferences
              </div>
              <div>
                <strong className="text-white">Memory Optimized:</strong> Efficient cleanup and resource management
              </div>
            </div>
          </div>
        </UnifiedBlurSystem>
      </div>
    </div>
  )
}
