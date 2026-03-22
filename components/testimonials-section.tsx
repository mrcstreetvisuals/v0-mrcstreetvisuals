"use client"

import { useEffect } from "react"
import { GradualBlurWrapper } from "@/components/gradual-blur-wrapper"
import { ResponsiveContainer } from "@/components/responsive-container"
import { BackgroundImage } from "@/components/background-image"

export function TestimonialsSection() {
  useEffect(() => {
    // Ensure Elfsight widget loads properly
    if (typeof window !== "undefined" && (window as any).ElfSightWidget) {
      ;(window as any).ElfSightWidget.init()
    }
  }, [])

  return (
    <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
      <BackgroundImage
        src="/images/nightclub-dance.jpg"
        alt="Photography reviews background"
        opacity={0.15}
        fadeInDuration={2000}
        className="z-0"
      />
      <ResponsiveContainer maxWidth="2xl" className="content-spacing-lg relative z-10 w-full">
        <div className="text-center mb-12 sm:mb-16">
          <GradualBlurWrapper
            blurAmount={15}
            duration={1200}
            delay={100}
            animationType="blur-fade"
            threshold={0.2}
            triggerOnce={false}
            reverseOnExit={true}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-red-500 to-purple-400 bg-clip-text text-transparent mobile-heading-adjust">
              Reviews
            </h2>
          </GradualBlurWrapper>

          <GradualBlurWrapper
            blurAmount={12}
            duration={1000}
            delay={300}
            animationType="blur-slide"
            direction="up"
            threshold={0.2}
            triggerOnce={false}
            reverseOnExit={true}
          >
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mobile-body-adjust">
              See what my clients say about their experience working with me
            </p>
          </GradualBlurWrapper>
        </div>

        <GradualBlurWrapper
          blurAmount={10}
          duration={1000}
          delay={500}
          animationType="blur-fade"
          threshold={0.2}
          triggerOnce={false}
          reverseOnExit={true}
        >
          <div className="w-full flex justify-center">
            {/* Elfsight Google Reviews Widget */}
            <div className="elfsight-app-f87d232c-8173-4b1a-a1e4-a6cb527721a4" data-elfsight-app-lazy></div>
          </div>
        </GradualBlurWrapper>
      </ResponsiveContainer>
    </section>
  )
}
