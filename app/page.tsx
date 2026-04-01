"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Mail, MessageCircle, Camera, Users, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { MobileNavigation } from "@/components/mobile-navigation"
import { ImageSlider } from "@/components/image-slider"
import { ResponsiveContainer } from "@/components/responsive-container"
import { FloatingContactButtons } from "@/components/floating-contact-buttons"
import { GradualBlurWrapper } from "@/components/gradual-blur-wrapper"
import { BackgroundImage } from "@/components/background-image"

export default function Portfolio() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0)

  const heroSliderImages = [
    {
      src: "/images/surfer-wave-action.jpg",
      alt: "Surfer riding a powerful wave",
    },
    {
      src: "/images/sunset-couple-silhouette.jpg",
      alt: "Couple silhouette at sunset",
    },
    {
      src: "/images/surfers-bw-silhouette.jpg",
      alt: "Surfers silhouette in black and white",
    },
    {
      src: "/images/cultural-performance-bw.jpg",
      alt: "Cultural performance in black and white",
    },
    {
      src: "/images/pink-car-automotive.jpg",
      alt: "Modified pink car with dramatic lighting",
    },
    {
      src: "/images/nightclub-red.jpg",
      alt: "Nightclub with dramatic red lighting",
    },
    {
      src: "/images/portrait-nature.jpg",
      alt: "Natural outdoor portrait",
    },
    {
      src: "/images/real-estate/outdoor-terrace-seating-area.jpg",
      alt: "Outdoor terrace with comfortable seating and mountain views",
    },
    {
      src: "/images/shop/beach-crowd-bw.jpg",
      alt: "Black and white aerial view of beach life",
    },
  ]

  const portfolioCategories = [
    {
      title: "Portraits",
      description: "Intimate and creative portrait photography capturing personality and emotion",
      thumbnail: "/images/portrait-nature.jpg",
      href: "/portfolio/portraits",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Events",
      description: "High-energy event photography from nightlife to cultural performances",
      thumbnail: "/images/nightclub-red.jpg",
      href: "/portfolio/events",
      color: "from-red-500 to-orange-500",
    },
    {
      title: "Surf & Skate",
      description: "Dynamic action photography capturing the power and grace of athletic moments",
      thumbnail: "/images/surfer-wave-action.jpg",
      href: "/portfolio/sports",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Automotive",
      description: "Stunning automotive photography showcasing vehicles as works of art",
      thumbnail: "/images/pink-car-automotive.jpg",
      href: "/portfolio/automotive",
      color: "from-pink-500 to-purple-500",
    },
    {
      title: "Products",
      description: "Professional product photography with perfect lighting and composition",
      thumbnail: "/images/product-nafa-single.jpg",
      href: "/portfolio/products",
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Real Estate",
      description: "Professional real estate and hospitality photography showcasing properties beautifully",
      thumbnail: "/images/real-estate/outdoor-terrace-seating-area.jpg",
      href: "/portfolio/real-estate",
      color: "from-amber-500 to-orange-500",
    },
  ]

  const packages = [
    {
      title: "Starter Session",
      description: "Perfect for individuals and small projects",
      icon: Camera,
      features: ["1 hour session", "20 edited photos", "Online gallery"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Professional Package",
      description: "Ideal for events and commercial work",
      icon: Users,
      features: ["3 hour session", "50 edited photos", "Print rights"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Premium Experience",
      description: "Complete coverage for your special moments",
      icon: Sparkles,
      features: ["Full day coverage", "100+ edited photos", "Premium album"],
      gradient: "from-red-500 to-orange-500",
    },
  ]

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollDirection = currentScrollY > lastScrollY ? "down" : "up"

      document.body.setAttribute("data-scroll-direction", scrollDirection)
      lastScrollY = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll(".fade-in-on-scroll")
    animatedElements.forEach((el) => observer.observe(el))

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white scroll-smooth">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-transparent border-b border-transparent header-height">
        <ResponsiveContainer maxWidth="full" padding="md">
          <div className="flex items-center justify-between py-3 sm:py-4">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="relative flex-shrink-0 z-20 pt-2 my-[-16px] mx-0 md:pt-[13px]">
                <Image
                  src="/images/mrcstreetvisuals-logo.png"
                  alt="mrcstreetvisuals logo"
                  width={48}
                  height={48}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full logo-static transition-none"
                  priority
                />
              </div>
              <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold bg-gradient-to-r from-red-500 to-purple-400 bg-clip-text text-transparent mobile-text-adjust">
                mrcstreetvisuals
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-4 lg:space-x-6 xl:space-x-8">
              <Link href="#home" className="hover:text-purple-400 transition-colors text-sm lg:text-base">
                Home
              </Link>
              <Link href="#portfolio" className="hover:text-purple-400 transition-colors text-sm lg:text-base">
                Portfolio
              </Link>
              <Link href="/packages" className="hover:text-purple-400 transition-colors text-sm lg:text-base">
                Packages
              </Link>
              <Link href="/shop" className="hover:text-purple-400 transition-colors text-sm lg:text-base">
                Shop
              </Link>
              <Link href="#about" className="hover:text-purple-400 transition-colors text-sm lg:text-base">
                About
              </Link>
              <Link href="#contact" className="hover:text-purple-400 transition-colors text-sm lg:text-base">
                Contact
              </Link>
            </nav>

            {/* Mobile Navigation */}
            <MobileNavigation />
          </div>
        </ResponsiveContainer>
      </header>

      {/* Floating Contact Buttons */}
      <FloatingContactButtons />

      {/* Hero Section with Image Slider */}
      <section id="home" className="relative h-screen ios-vh-fix flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageSlider
            images={heroSliderImages}
            autoPlay
            interval={8000}
            showControls
            showIndicators
            fullScreen
            className="w-full h-full"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

        <ResponsiveContainer
          maxWidth="2xl"
          className="relative z-10 text-center content-spacing-lg pt-header-offset pb-16 sm:pb-20 md:pb-24 lg:pb-32"
        >
          <GradualBlurWrapper
            blurAmount={12}
            duration={1500}
            delay={200}
            animationType="blur-fade"
            threshold={0.1}
            triggerOnce={false}
            reverseOnExit={true}
          >
            <h1 className="!mt-[150px] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-white via-purple-400 to-red-500 bg-clip-text text-transparent mobile-heading-adjust drop-shadow-lg">
              mrcstreetvisuals
            </h1>
          </GradualBlurWrapper>

          <GradualBlurWrapper
            className="!mt-[40px]"
            blurAmount={10}
            duration={1200}
            delay={400}
            animationType="blur-slide"
            direction="up"
            threshold={0.1}
            triggerOnce={false}
            reverseOnExit={true}
          >
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 text-gray-300 mobile-text-adjust">
              Professional Photographer | Capturing Life's Dynamic Moments
            </p>
          </GradualBlurWrapper>

          <GradualBlurWrapper
            className="!mt-[0px]"
            blurAmount={8}
            duration={1000}
            delay={600}
            animationType="blur-fade"
            threshold={0.1}
            triggerOnce={false}
            reverseOnExit={true}
          >
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mobile-body-adjust">
              From high-energy events to intimate portraits, product photography to automotive shoots - I bring creative
              vision and technical expertise to every frame.
            </p>
          </GradualBlurWrapper>

          <GradualBlurWrapper
            className="!mt-[0px]"
            blurAmount={10}
            duration={1200}
            delay={800}
            animationType="blur-scale"
            threshold={0.1}
            triggerOnce={false}
            reverseOnExit={true}
          >
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 justify-center items-center mt-8 sm:mt-10 md:mt-12 mb-8 sm:mb-12 md:mb-16 lg:mb-20">
              <Link href="#portfolio">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white transform hover:scale-105 transition-all duration-300 shadow-brand text-sm sm:text-base px-6 sm:px-8 md:px-10 py-3 sm:py-4 min-h-[48px] min-w-[160px]"
                >
                  View Portfolio
                </Button>
              </Link>
              <a
                href="https://wa.me/212643858432?text=Hi! I'd like to discuss a photography project with you."
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black transform hover:scale-105 transition-all duration-300 w-full sm:w-auto bg-transparent text-sm sm:text-base px-6 sm:px-8 md:px-10 py-3 sm:py-4 border-2 min-h-[48px] min-w-[160px]"
                >
                  Get In Touch
                </Button>
              </a>
            </div>
          </GradualBlurWrapper>
        </ResponsiveContainer>
      </section>

      {/* Portfolio Albums Section */}
      <section id="portfolio" className="section-padding relative">
        <BackgroundImage
          src="/images/surfer-wave-action.jpg"
          alt="Surfer wave action background"
          opacity={0.3}
          priority={false}
          fadeInDuration={1500}
        />
        <ResponsiveContainer maxWidth="2xl" className="content-spacing-lg relative z-10">
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
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-red-500 to-purple-400 bg-clip-text text-transparent mobile-heading-adjust">
                Portfolio Albums
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
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto mobile-body-adjust">
                Explore my diverse photography work organized by specialty. Each album showcases a unique aspect of my
                creative vision and technical expertise.
              </p>
            </GradualBlurWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {portfolioCategories.map((category, index) => (
              <GradualBlurWrapper
                key={category.title}
                blurAmount={12}
                duration={1200}
                delay={200 + index * 150}
                animationType="blur-slide"
                direction={index % 2 === 0 ? "up" : "left"}
                threshold={0.15}
                triggerOnce={false}
                reverseOnExit={true}
                exitDelay={50}
              >
                <Link href={category.href}>
                  <Card className="bg-gray-900 border-gray-800 overflow-hidden group hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer h-full">
                    <CardContent className="p-0 relative h-full flex flex-col">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={category.thumbnail || "/placeholder.svg"}
                          alt={category.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={index < 3}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      </div>
                      <div className="p-4 sm:p-6 flex-1 flex flex-col">
                        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-red-500 to-purple-400 bg-clip-text text-transparent mobile-heading-adjust">
                          {category.title}
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-3 sm:mb-4 line-clamp-2 flex-1 mobile-body-adjust">
                          {category.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs sm:text-sm text-gray-500">Click to explore</span>
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-red-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg
                              className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </GradualBlurWrapper>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Packages Section */}
      <section id="packages" className="section-padding relative overflow-hidden">
        <BackgroundImage
          src="/images/nightclub-dance.jpg"
          alt="Packages background"
          opacity={0.2}
          fadeInDuration={2000}
        />
        <ResponsiveContainer maxWidth="5xl" className="relative z-10">
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
                Photography Packages
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
                Choose the perfect package for your photography needs
              </p>
            </GradualBlurWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {packages.map((pkg, index) => (
              <GradualBlurWrapper
                key={pkg.title}
                blurAmount={10}
                duration={1000}
                delay={500 + index * 200}
                animationType="blur-scale"
                threshold={0.2}
                triggerOnce={false}
                reverseOnExit={true}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-colors h-full">
                  <CardContent className="p-6 sm:p-8">
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${pkg.gradient} mb-4`}>
                      <pkg.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{pkg.title}</h3>
                    <p className="text-sm sm:text-base text-gray-400 mb-6">{pkg.description}</p>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-sm sm:text-base text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-red-500 to-purple-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white font-semibold">
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </GradualBlurWrapper>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* About Me Section */}
      <section id="about" className="section-padding relative overflow-hidden">
        <BackgroundImage
          src="/images/skate-park-colorful-ramp.jpg"
          alt="Skateboard park background"
          opacity={0.15}
          fadeInDuration={2000}
        />
        
        <ResponsiveContainer maxWidth="5xl" className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Image Side - Mobile responsive */}
            <GradualBlurWrapper
              blurAmount={12}
              duration={1200}
              delay={200}
              animationType="blur-slide"
              direction="left"
              threshold={0.2}
              triggerOnce={false}
              reverseOnExit={true}
            >
              <div className="relative">
                {/* Decorative accent behind image */}
                <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-br from-red-500/15 to-purple-500/15 rounded-lg sm:rounded-2xl blur-xl" />
                
                {/* Main image container - responsive heights */}
                <div className="relative h-64 sm:h-96 md:h-[500px] lg:h-[600px] rounded-lg sm:rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/skate-park-action.jpg"
                    alt="Photographer at skate park with camera"
                    fill
                    className="object-cover object-center hover:scale-105 transition-transform duration-500 mt-24"
                    priority
                  />
                </div>
              </div>
            </GradualBlurWrapper>

            {/* Content Side - Mobile optimized spacing */}
            <div className="flex flex-col justify-center space-y-6 sm:space-y-8">
              <div>
                <GradualBlurWrapper
                  blurAmount={15}
                  duration={1200}
                  delay={100}
                  animationType="blur-fade"
                  threshold={0.2}
                  triggerOnce={false}
                  reverseOnExit={true}
                >
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="h-0.5 sm:h-1 w-8 sm:w-12 bg-gradient-to-r from-red-500 to-purple-500" />
                    <span className="text-xs sm:text-sm font-semibold text-red-500 uppercase tracking-wider">About</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-red-500 to-purple-400 bg-clip-text text-transparent mobile-heading-adjust">
                    Capturing Moments, Creating Stories
                  </h2>
                </GradualBlurWrapper>
              </div>

              <div className="space-y-3 sm:space-y-5 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mobile-body-adjust">
                <GradualBlurWrapper
                  blurAmount={10}
                  duration={1000}
                  delay={300}
                  animationType="blur-slide"
                  direction="up"
                  threshold={0.2}
                  triggerOnce={false}
                  reverseOnExit={true}
                >
                  <p>
                    Before becoming a visual storyteller, I was a kid with a skateboard. On cracked sidewalks and empty parking lots, I learned the importance of balance, patience, and resilience. Skateboarding was more than an after-school activity; it shaped my character. Fall, get up, and try again became my rhythm.
                  </p>
                </GradualBlurWrapper>

                <GradualBlurWrapper
                  blurAmount={10}
                  duration={1000}
                  delay={400}
                  animationType="blur-slide"
                  direction="up"
                  threshold={0.2}
                  triggerOnce={false}
                  reverseOnExit={true}
                >
                  <p>
                    With my board under my arm and a borrowed camera in my bag, I began filming my friends, chasing motion, speed, and freedom. Those early skate sessions became my first studio, my first classroom. I learned how to frame movement, how to follow rhythm, how to turn chaos into composition.
                  </p>
                </GradualBlurWrapper>

                <GradualBlurWrapper
                  blurAmount={10}
                  duration={1000}
                  delay={500}
                  animationType="blur-slide"
                  direction="up"
                  threshold={0.2}
                  triggerOnce={false}
                  reverseOnExit={true}
                >
                  <p>
                    Skate culture taught me discipline without rules, creativity without limits, and loyalty to this community. These values would later define Mrcstreetvisuals as it is today.
                  </p>
                </GradualBlurWrapper>

                <GradualBlurWrapper
                  blurAmount={10}
                  duration={1000}
                  delay={600}
                  animationType="blur-slide"
                  direction="up"
                  threshold={0.2}
                  triggerOnce={false}
                  reverseOnExit={true}
                >
                  <p>
                    Today, in every video I direct and every photo I take, there is still something of the skater: the search for flow, the love of risk, the refusal to stand still.
                  </p>
                </GradualBlurWrapper>
              </div>

              {/* Highlights Grid - Mobile responsive */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 sm:pt-6">
                {[
                  { label: "Disciplines", value: "5+" },
                  { label: "Projects", value: "100+" },
                  { label: "Years", value: "10+" },
                ].map((item, index) => (
                  <GradualBlurWrapper
                    key={item.label}
                    blurAmount={8}
                    duration={800}
                    delay={700 + index * 150}
                    animationType="blur-scale"
                    threshold={0.2}
                    triggerOnce={false}
                    reverseOnExit={true}
                  >
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-2 sm:p-4 text-center hover:bg-white/10 transition-colors">
                      <p className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-red-500 to-purple-400 bg-clip-text text-transparent">
                        {item.value}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-400 mt-0.5 sm:mt-1 uppercase tracking-wider">{item.label}</p>
                    </div>
                  </GradualBlurWrapper>
                ))}
              </div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="section-padding relative overflow-hidden">
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

      {/* Let's Create Together Section */}
      <section id="contact" className="section-padding relative overflow-hidden">
        <BackgroundImage
          src="/images/cultural-performance-bw.jpg"
          alt="Let's create together background"
          opacity={0.2}
          fadeInDuration={2000}
        />
        <ResponsiveContainer maxWidth="xl" className="text-center px-4 relative z-10">
          <div className="text-center">
            <GradualBlurWrapper
              blurAmount={15}
              duration={1200}
              delay={100}
              animationType="blur-fade"
              threshold={0.2}
              triggerOnce={false}
              reverseOnExit={true}
            >
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-red-500 to-purple-400 bg-clip-text text-transparent mobile-heading-adjust">
                Let's Create Together
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
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto mobile-body-adjust">
                Ready to bring your vision to life? Get in touch to discuss your project and let's create something
                extraordinary together.
              </p>
            </GradualBlurWrapper>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              {[
                {
                  href: "mailto:mrcstreetvisuals@gmail.com",
                  icon: Mail,
                  title: "Email",
                  content: "mrcstreetvisuals@gmail.com",
                  hoverColor: "hover:text-purple-400",
                  iconColor: "text-purple-400",
                  groupHoverColor: "group-hover:text-purple-300",
                },
                {
                  href: "https://wa.me/212643858432",
                  icon: MessageCircle,
                  title: "WhatsApp",
                  content: "+212 643-858432",
                  hoverColor: "hover:text-green-400",
                  iconColor: "text-green-400",
                  groupHoverColor: "group-hover:text-green-300",
                },
                {
                  href: "https://www.instagram.com/_mrcstreetvisuals_/?__pwa=1",
                  icon: Instagram,
                  title: "Instagram",
                  content: "@_mrcstreetvisuals_",
                  hoverColor: "hover:text-pink-400",
                  iconColor: "text-pink-400",
                  groupHoverColor: "group-hover:text-pink-300",
                },
              ].map((contact, index) => (
                <GradualBlurWrapper
                  key={contact.title}
                  blurAmount={10}
                  duration={800}
                  delay={500 + index * 200}
                  animationType="blur-scale"
                  threshold={0.2}
                  triggerOnce={false}
                  reverseOnExit={true}
                >
                  <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-800 p-4 sm:p-6 transform hover:scale-105 transition-all duration-300 group">
                    <CardContent className="text-center">
                      <a
                        href={contact.href}
                        target={contact.href.startsWith("http") ? "_blank" : undefined}
                        rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className={`block ${contact.hoverColor} transition-colors`}
                      >
                        <contact.icon
                          className={`h-10 w-10 sm:h-12 sm:w-12 ${contact.iconColor} mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}
                        />
                        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-1 sm:mb-2 text-white mobile-heading-adjust">
                          {contact.title}
                        </h3>
                        <p
                          className={`text-sm sm:text-base text-gray-400 ${contact.groupHoverColor} transition-colors ${contact.title === "Email" ? "break-all" : ""} mobile-body-adjust`}
                        >
                          {contact.content}
                        </p>
                      </a>
                    </CardContent>
                  </Card>
                </GradualBlurWrapper>
              ))}
            </div>

            <GradualBlurWrapper
              blurAmount={8}
              duration={1000}
              delay={1100}
              animationType="blur-scale"
              threshold={0.2}
              triggerOnce={false}
              reverseOnExit={true}
            >
              <a
                href="https://wa.me/212643858432?text=Hi! I'm interested in booking a photography session. Can we discuss the details?"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white transform hover:scale-105 transition-all duration-300 shadow-brand text-sm sm:text-base px-6 sm:px-8"
                >
                  Book Your Session
                </Button>
              </a>
            </GradualBlurWrapper>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Scroll Indicator */}
      <ScrollIndicator />

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-responsive-md border-t border-gray-800 bg-gray-900">
        <ResponsiveContainer maxWidth="full">
          <GradualBlurWrapper
            blurAmount={6}
            duration={800}
            delay={100}
            animationType="blur-fade"
            threshold={0.3}
            triggerOnce={false}
            reverseOnExit={true}
          >
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                <Image
                  src="/images/mrcstreetvisuals-logo.png"
                  alt="mrcstreetvisuals logo"
                  width={32}
                  height={32}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full logo-static transition-none"
                  priority
                />
                <span className="text-base sm:text-lg font-semibold bg-gradient-to-r from-red-500 to-purple-400 bg-clip-text text-transparent mobile-text-adjust">
                  mrcstreetvisuals
                </span>
              </div>
              <p className="text-sm sm:text-base text-gray-400 mobile-body-adjust">
                © {new Date().getFullYear()} mrcstreetvisuals. All rights reserved.
              </p>
            </div>
          </GradualBlurWrapper>
        </ResponsiveContainer>
      </footer>
    </div>
  )
}
