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
import { GradualBlurWrapper } from "@/components/gradual-blur-wrapper"
import { BackgroundImage } from "@/components/background-image"
import { InstagramCarousel } from "@/components/instagram-carousel"
import { editorialImages } from "@/lib/editorial-image-map"
import { getPackageSections } from "@/lib/package-catalog"

export default function Portfolio() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0)
  const [activePortfolioCategory, setActivePortfolioCategory] = useState("All")
  const [activePackageCategory, setActivePackageCategory] = useState("All")
  const [portfolioVisibleCount, setPortfolioVisibleCount] = useState(10)
  const [packageVisibleCount, setPackageVisibleCount] = useState(6)

  const heroSliderImages = [
    {
      src: editorialImages.hero.src,
      alt: editorialImages.hero.alt,
    },
    {
      src: editorialImages.about.src,
      alt: editorialImages.about.alt,
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
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BA9A1471-A9uaj6D85IDGuOWPNMB7Ec1I6DO.jpg",
      alt: "Man driving van with tattooed arms",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BA9A4859-uq3opqs6yFmOAMQNioB0jdAznZY9lT.jpg",
      alt: "People holding Palmer Skateboard Company flag at sunset",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BA9A4822-rYld5gINmmCf1QgoPPVNnY28ypxvNI.jpg",
      alt: "DJ at turntables with ocean backdrop",
    },
  ]

  const instagramPosts = [
    { id: "35146", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/35146.jpg-C3DcsJbzhUFiP8sYfWh20EtuFZbj1N.jpeg", alt: "Close-up portrait of a person applying blue face paint", caption: "Texture and instinct.", permalink: "https://www.instagram.com/mrcstreetvisuals/" },
    { id: "30834", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/30834.jpg-PC3nJTkg1Uz0lvh4003bv7Kiq1Jkj6.jpeg", alt: "Portrait of a person standing among desert cacti", caption: "Portraits in the wild.", permalink: "https://www.instagram.com/mrcstreetvisuals/" },
    { id: "31389", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/31389.jpg-LFsiF4G2mqHiOMyY7o7ZiLbW1rv064.jpeg", alt: "Portrait of a person sitting beside a glowing fire at night", caption: "After dark.", permalink: "https://www.instagram.com/mrcstreetvisuals/" },
    { id: "31417", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/31417.jpg-HT3xChwrlEqod20DGJmclLrYIq6rcI.jpeg", alt: "Motocross rider raising a gloved hand beneath a blue sky", caption: "Motion, framed low.", permalink: "https://www.instagram.com/mrcstreetvisuals/" },
    { id: "66557", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/66557.jpg-CX3V5sdVB5oALSItdI4TLsQTK53xy6.jpeg", alt: "Colorful shared meal photographed in warm restaurant light", caption: "A table tells a story.", permalink: "https://www.instagram.com/mrcstreetvisuals/" },
    { id: "dscf9220", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSCF9220.JPG-tIljrZNPUxotDh3ec33uqp6oInFpcd.jpeg", alt: "Motocross rider raising a gloved hand beneath a blue sky", caption: "Field notes.", permalink: "https://www.instagram.com/mrcstreetvisuals/" },
    { id: "ba9a1523", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BA9A1523-uc5OYHNf8bPyZXYIH22IpfR2ipZImE.jpg", alt: "Motocross rider raising a gloved hand beneath a blue sky", caption: "Ride close.", permalink: "https://www.instagram.com/mrcstreetvisuals/" },
  ]

  const portfolioCategories = [
    {
      title: "Portraits",
      description: "Intimate and creative portrait photography capturing personality and emotion",
      thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BA9A3944-GfqQNH81A3efSkcwdQcyyNGgb4AnSB.jpg",
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

  const packageSections = getPackageSections()
  const packageCatalog = packageSections.flatMap((section) =>
    section.packages.map((pkg) => ({ ...pkg, category: section.eyebrow }))
  )
  const packageCategories = ["All", ...packageSections.map((section) => section.eyebrow)]
  const filteredPackages = activePackageCategory === "All"
    ? packageCatalog
    : packageCatalog.filter((pkg) => pkg.category === activePackageCategory)
  const visiblePackages = filteredPackages.slice(0, packageVisibleCount)
  const hasMorePackages = packageVisibleCount < filteredPackages.length

  const portfolioFilters = ["All", ...portfolioCategories.map((category) => category.title)]
  const portfolioPhotos = [
    ["Portraits", ["/images/portraits/studio-portrait-bw.jpg", "/images/portraits/fashion-night-portrait.jpg", "/images/portraits/cultural-headdress-bw.jpg", "/images/nightclub-red.jpg", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BA9A3946-H0mbL25fuw7YkkBJ5cmFJNsNMRmT96.jpg", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BA9A3900-uwDvdhTQfi6ZqLLIbBtXBdAi6Yk0Qd.jpg", "/images/portrait-nature.jpg", "/images/portraits/stylized-portrait-sunglasses.jpg", "/images/portrait-blue.jpg", "/images/portraits/reading-portrait-bw.jpg", "/images/portraits/street-vendor-golden-hour.jpg", "/images/portraits/woman-sunglasses-warm-light.jpg", "/images/portraits/elderly-man-bougainvillea.jpg", "/images/portraits/contemplative-woman-curly-hair.jpg"]],
    ["Events", ["/images/events/cultural-performers-bw.jpg", "/images/events/night-musicians-rooftop.jpg", "/images/events/indoor-party-neon.jpg", "/images/events/performance-stage-blue.jpg", "/images/nightclub-red.jpg", "/images/events/the-lost-haven-neon.jpg", "/images/events/live-concert-blue-lights.jpg", "/images/nightclub-dance.jpg", "/images/events/traditional-cultural-ensemble.jpg", "/images/events/nightclub-dance-motion.jpg", "/images/dj-performance.jpg", "/images/cultural-performance-bw.jpg", "/images/events/musician-traditional-instrument.jpg", "/images/events/band-performance-bw.jpg", "/images/light-trails.jpg"]],
    ["Surf & Skate", ["/images/sports/skateboard-trick-sky.jpg", "/images/surfer-wave-action.jpg", "/images/sports/surf-powerful-wave.jpg", "/images/sports/skateboard-bowl-colorful.jpg", "/images/surfer-action.jpg", "/images/sports/surf-wave-bw.jpg", "/images/sports/female-surfer-golden-hour.jpg", "/images/sports/surf-lineup-turquoise.jpg", "/images/surfers-bw-silhouette.jpg", "/images/sports/skateboard-park-action.jpg", "/images/sports/surf-wipeout-bw.jpg", "/images/sports/skateboard-street-celebration.jpg", "/images/sports/surf-silhouette-sparkling.jpg", "/images/surfers-lifestyle.jpg"]],
    ["Automotive", ["/images/pink-car-automotive.jpg", "/images/automotive/pink-audi-front-detail.jpg", "/images/automotive/black-bmw-side-profile.jpg", "/images/automotive/black-bmw-front-detail.jpg", "/images/automotive/black-bmw-parking-lot.jpg", "/images/automotive/pink-audi-aerial-view.jpg", "/images/automotive/pink-audi-interior.jpg", "/images/automotive/pink-audi-rear-detail.jpg", "/images/automotive/pink-audi-golden-hour.jpg"]],
    ["Products", ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BA9A1471-A9uaj6D85IDGuOWPNMB7Ec1I6DO.jpg", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BA9A1523-TQSmvXleYQm2qlm3DieHXAuSQCUYc9.jpg", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BA9A4334-b81QLuGRcKsfWKuX2suJCkAibxGvLx.jpg", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BA9A4800-UVA2awRrjfbBluKKQhLdXbONTMKxpy.jpg", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BA9A4859-uq3opqs6yFmOAMQNioB0jdAznZY9lT.jpg", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BA9A3246-dxK3uh69xQYNVzL05fkLaWB5CvAMGT.jpg", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BA9A2954-yXkJ3UOn8xEFMRqSkNac2PF4K5j8kx.jpg", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BA9A4822-rYld5gINmmCf1QgoPPVNnY28ypxvNI.jpg", "/images/product-nafa-single.jpg", "/images/product-nafa-duo.jpg"]],
    ["Real Estate", ["/images/real-estate/rustic-bedroom-pallet-bed.jpg", "/images/real-estate/blue-bedroom-moroccan-decor.jpg", "/images/real-estate/bedroom-white-curtains-netting.jpg", "/images/real-estate/interior-details-mirror-rack.jpg", "/images/real-estate/outdoor-terrace-seating-area.jpg", "/images/real-estate/twin-bedroom-wooden-furniture.jpg", "/images/real-estate/rustic-bar-thatched-ceiling.jpg", "/images/real-estate/minimalist-bedroom-yellow-pillows.jpg", "/images/real-estate/rooftop-terrace-sunset-chairs.jpg", "/images/real-estate/rustic-furniture-detail-sunlight.jpg", "/images/real-estate/rooftop-hammock-city-view.jpg", "/images/real-estate/bedroom-blue-wall-decorative.jpg", "/images/real-estate/rooftop-hammock-moonlight.jpg", "/images/real-estate/twin-bedroom-checkered-floor.jpg"]],
  ].flatMap(([category, sources]) => (sources as string[]).map((src, index) => ({ src, category: category as string, alt: `${category} photograph ${index + 1}` })))
  const filteredPortfolioPhotos = activePortfolioCategory === "All" ? portfolioPhotos : portfolioPhotos.filter((photo) => photo.category === activePortfolioCategory)
  const visiblePortfolioPhotos = filteredPortfolioPhotos.slice(0, portfolioVisibleCount)
  const hasMorePortfolioPhotos = portfolioVisibleCount < filteredPortfolioPhotos.length

  useEffect(() => {
    let lastScrollY = window.scrollY
    let ticking = false

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (Math.abs(currentScrollY - lastScrollY) < 5) {
        ticking = false
        return
      }

      const scrollDirection = currentScrollY > lastScrollY ? "down" : "up"
      document.body.setAttribute("data-scroll-direction", scrollDirection)
      lastScrollY = currentScrollY
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(handleScroll)
        ticking = true
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
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
      <header className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-gray-800/30 header-height">
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
<a href="#packages" className="hover:text-purple-400 transition-colors text-sm lg:text-base">
  Packages
</a>
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

      {/* Hero Section with Image Slider */}
      <section id="home" className="relative h-screen ios-vh-fix flex items-center justify-center overflow-hidden editorial-hero">
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
            <h1 className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-32 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-white via-purple-400 to-red-500 bg-clip-text text-transparent mobile-heading-adjust drop-shadow-lg">
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
      <section id="portfolio" className="section-padding relative editorial-archive">
        <ResponsiveContainer maxWidth="full" className="content-spacing-lg relative z-10 editorial-portfolio-shell">
          <div className="editorial-portfolio-heading">
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
Portfolio
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
                A direct edit of photographs across portraits, events, action, automotive, products, and spaces.
              </p>
            </GradualBlurWrapper>
          </div>

          <nav className="editorial-portfolio-filters" aria-label="Portfolio categories">
            {portfolioFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`editorial-portfolio-filter ${activePortfolioCategory === filter ? "is-active" : ""}`}
                aria-pressed={activePortfolioCategory === filter}
                onClick={() => { setActivePortfolioCategory(filter); setPortfolioVisibleCount(10) }}
              >
                {filter}
              </button>
            ))}
          </nav>

          <div className="editorial-photo-grid">
            {visiblePortfolioPhotos.map((photo, index) => (
              <figure key={`${photo.src}-${index}`} className={`editorial-photo editorial-photo-${index % 8} group`}>
                <div className="editorial-photo-frame">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.04] group-hover:brightness-110"
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 48vw, 34vw"
                    priority={index < 4}
                  />
                  <figcaption className="editorial-photo-caption">{photo.category}</figcaption>
                </div>
              </figure>
            ))}
          </div>
          {filteredPortfolioPhotos.length > 10 && (
            <div className="mt-12 text-center">
              <button type="button" className="editorial-reveal-button" onClick={() => setPortfolioVisibleCount(hasMorePortfolioPhotos ? portfolioVisibleCount + 10 : 10)}>
                {hasMorePortfolioPhotos ? "Show more →" : "Show less"}
              </button>
            </div>
          )}
        </ResponsiveContainer>
      </section>

      {/* Packages Section */}
      <section id="packages" className="section-padding relative overflow-hidden">
        <BackgroundImage
          src={editorialImages.products.src}
          alt={editorialImages.products.alt}
          opacity={0.2}
          fadeInDuration={2000}
        />
        <ResponsiveContainer maxWidth="5xl" className="relative z-10">
          <div className="editorial-packages-heading">
            <div>
              <span className="eyebrow">Services / Packages</span>
              <h2>Packages</h2>
            </div>
            <p>Actual sessions, deliverables, and pricing from the full Packages page.</p>
          </div>

          <nav className="editorial-portfolio-filters" aria-label="Package categories">
            {packageCategories.map((category) => (
              <button
                key={category}
                type="button"
                className={`editorial-portfolio-filter ${activePackageCategory === category ? "is-active" : ""}`}
                aria-pressed={activePackageCategory === category}
                onClick={() => { setActivePackageCategory(category); setPackageVisibleCount(6) }}
              >
                {category}
              </button>
            ))}
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {visiblePackages.map((pkg, index) => (
              <GradualBlurWrapper key={pkg.id} blurAmount={10} duration={700} delay={index * 80} animationType="blur-scale" threshold={0.1} triggerOnce={false} reverseOnExit={true}>
                <article className="editorial-package-card group">
                  <div className="relative aspect-[4/3] overflow-hidden bg-white/[0.04]">
                    <Image src={pkg.image} alt={`${pkg.name} package`} fill className="object-cover transition duration-700 group-hover:scale-[1.04]" sizes="(max-width: 768px) 100vw, 33vw" />
                    {pkg.popular && <span className="absolute left-4 top-4 bg-white text-black px-3 py-1 text-[10px] uppercase tracking-[0.18em]">Popular</span>}
                  </div>
                  <div className="pt-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">{pkg.category}</p>
                        <h3 className="mt-2 text-xl font-semibold tracking-tight text-white">{pkg.name}</h3>
                      </div>
                      <span className="text-lg font-semibold text-white">{pkg.price}</span>
                    </div>
                    <p className="mt-2 text-sm text-white/45">{pkg.duration}</p>
                    <ul className="mt-5 space-y-2 border-t border-white/10 pt-4">
                      {pkg.features.map((feature) => <li key={feature} className="text-sm text-white/65">{feature}</li>)}
                    </ul>
                    <Button asChild variant="link" className="mt-4 h-auto p-0 text-xs uppercase tracking-[0.18em] text-white/60 hover:text-white"><a href="#contact">Get Started <span aria-hidden="true">↗</span></a></Button>
                  </div>
                </article>
              </GradualBlurWrapper>
            ))}
          </div>
          {filteredPackages.length > 6 && (
            <div className="mt-14 text-center">
              <button type="button" className="editorial-reveal-button" onClick={() => setPackageVisibleCount(hasMorePackages ? packageVisibleCount + 6 : 6)}>
                {hasMorePackages ? "Show more →" : "Show less"}
              </button>
            </div>
          )}
        </ResponsiveContainer>
      </section>

      {/* About Me Section */}
      <section id="about" className="section-padding relative overflow-hidden">
        <BackgroundImage
          src={editorialImages.about.src}
          alt={editorialImages.about.alt}
          opacity={0.18}
          fadeInDuration={2000}
          quality={85}
          objectPosition="center"
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
                {/* Decorative accent behind image - Hidden */}
                <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-br from-red-500/15 to-purple-500/15 rounded-lg sm:rounded-2xl blur-xl hidden" />
                
                {/* Main image container - responsive heights with pill-shaped rounded corners */}
                <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] rounded-[50px] sm:rounded-[78px] overflow-hidden shadow-2xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/30847.jpg-WI78D63irUi3diHbjsgrpveyZlkgkn.jpeg"
                    alt="Photographer capturing landscape with camera"
                    fill
                    className="object-cover object-center hover:scale-105 transition-transform duration-500"
                    style={{
                      marginTop: "-2px",
                      marginRight: "-27px",
                      marginLeft: "1px",
                      paddingTop: "-117px",
                      paddingBottom: "-71px",
                      paddingLeft: "-134px",
                      paddingRight: "-52px",
                    }}
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

      {/* Instagram Section */}
      <section id="instagram" className="section-padding relative overflow-hidden editorial-feed-section">
        <ResponsiveContainer maxWidth="5xl" className="relative z-10">
          <div className="editorial-section-heading">
            <span className="eyebrow">Instagram / @mrcstreetvisuals</span>
            <h2>From the feed</h2>
            <p>Seven selected frames from <span className="text-white">@mrcstreetvisuals</span> — kept separate from the website portfolio archive.</p>
          </div>
          <InstagramCarousel posts={instagramPosts} className="editorial-instagram-carousel" />
        </ResponsiveContainer>
      </section>

      {/* Let's Create Together Section */}
      <section id="contact" className="section-padding relative overflow-hidden">
        <BackgroundImage
          src={editorialImages.closing.src}
          alt={editorialImages.closing.alt}
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
      <footer className="py-6 sm:py-8 px-4 sm:px-6 md:px-8 lg:px-12 border-t border-gray-800 bg-gray-900">
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
