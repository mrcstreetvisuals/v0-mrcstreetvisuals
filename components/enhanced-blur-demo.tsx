"use client"

import { GradualBlurWrapper } from "@/components/gradual-blur-wrapper"
import { BlurRevealImage } from "@/components/blur-reveal-image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function EnhancedBlurDemo() {
  const [demoMode, setDemoMode] = useState<"scroll" | "toggle">("scroll")
  const [manualToggle, setManualToggle] = useState(false)

  const demoImages = [
    "/images/surfer-wave-action.jpg",
    "/images/portrait-nature.jpg",
    "/images/nightclub-red.jpg",
    "/images/pink-car-automotive.jpg",
  ]

  const animationTypes = [
    { type: "blur-fade" as const, name: "Blur Fade" },
    { type: "blur-scale" as const, name: "Blur Scale" },
    { type: "blur-slide" as const, name: "Blur Slide" },
    { type: "blur" as const, name: "Pure Blur" },
  ]

  return (
    <div className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Enhanced Blur Effects Demo
          </h2>
          <p className="text-gray-400 mb-6">
            Experience smooth bidirectional blur transitions with various animation types
          </p>

          <div className="flex justify-center space-x-4 mb-8">
            <Button
              variant={demoMode === "scroll" ? "default" : "outline"}
              onClick={() => setDemoMode("scroll")}
              className="bg-purple-600 hover:bg-purple-700"
            >
              Scroll Demo
            </Button>
            <Button
              variant={demoMode === "toggle" ? "default" : "outline"}
              onClick={() => setDemoMode("toggle")}
              className="bg-purple-600 hover:bg-purple-700"
            >
              Toggle Demo
            </Button>
          </div>

          {demoMode === "toggle" && (
            <Button
              onClick={() => setManualToggle(!manualToggle)}
              className="mb-8 bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700"
            >
              {manualToggle ? "Hide Elements" : "Show Elements"}
            </Button>
          )}
        </div>

        {/* Animation Type Demos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {animationTypes.map((anim, index) => (
            <GradualBlurWrapper
              key={anim.type}
              blurAmount={12}
              duration={1200}
              delay={index * 200}
              triggerOnce={demoMode === "scroll"}
              reverseOnExit={demoMode === "scroll"}
              exitDelay={100}
              animationType={anim.type}
              direction="up"
              threshold={demoMode === "toggle" ? (manualToggle ? 0 : 1) : 0.2}
              className="h-64"
            >
              <Card className="bg-gray-800 border-gray-700 h-full">
                <CardContent className="p-6 h-full flex flex-col justify-center items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{anim.name}</h3>
                  <p className="text-gray-400 text-center">
                    Smooth {anim.type.replace("-", " ")} animation with bidirectional support
                  </p>
                </CardContent>
              </Card>
            </GradualBlurWrapper>
          ))}
        </div>

        {/* Image Blur Demo */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Enhanced Image Blur Reveals</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {demoImages.map((src, index) => (
              <BlurRevealImage
                key={src}
                src={src}
                alt={`Demo image ${index + 1}`}
                width={300}
                height={200}
                className="rounded-lg"
                blurAmount={15}
                duration={1500}
                delay={index * 300}
                triggerOnce={demoMode === "scroll"}
                reverseOnExit={demoMode === "scroll"}
                exitDelay={50}
                animationType="blur-slide"
                direction={index % 2 === 0 ? "up" : "left"}
                threshold={demoMode === "toggle" ? (manualToggle ? 0 : 1) : 0.3}
              />
            ))}
          </div>
        </div>

        {/* Staggered Animation Demo */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-white">Staggered Blur Animations</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Array.from({ length: 12 }, (_, i) => (
              <GradualBlurWrapper
                key={i}
                blurAmount={10}
                duration={800}
                delay={0}
                staggerDelay={i * 100}
                triggerOnce={demoMode === "scroll"}
                reverseOnExit={demoMode === "scroll"}
                animationType="blur-scale"
                threshold={demoMode === "toggle" ? (manualToggle ? 0 : 1) : 0.1}
                className="aspect-square"
              >
                <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{i + 1}</span>
                </div>
              </GradualBlurWrapper>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
