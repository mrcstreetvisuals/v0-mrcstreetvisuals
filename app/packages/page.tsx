"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Instagram,
  Mail,
  MessageCircle,
  Check,
  Camera,
  Film,
  Users,
  Sparkles,
  Home,
  PartyPopper,
  Package,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { GradualBlurWrapper } from "@/components/gradual-blur-wrapper"
import { ResponsiveContainer } from "@/components/responsive-container"

export default function PackagesPage() {
  const surfPackages = [
    {
      id: "wave-starter",
      name: "Wave Starter",
      price: "30€",
      duration: "30-45 min",
      icon: Camera,
      image: "/images/sports/female-surfer-golden-hour.jpg",
      features: [
        "30-45 min session (shore only)",
        "5 edited high-res surf shots",
        "Basic color correction",
        "Delivery same day",
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "ride-session",
      name: "Ride Session",
      price: "70€",
      duration: "1-1.5 hours",
      icon: Film,
      image: "/images/sports/surf-wave-bw.jpg",
      features: [
        "1-1.5 hours shooting (shore + drone video)",
        "15 edited surf photos",
        "Short 20-30 sec highlight video",
        "Color corrected",
        "Delivery within 24h",
      ],
      popular: true,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "pro-wave-edit",
      name: "Pro Wave Edit",
      price: "100€-120€",
      duration: "2-3 hours",
      icon: Sparkles,
      image: "/images/sports/surf-powerful-wave.jpg",
      features: [
        "2-3 hour session (shore + drone optional)",
        "30+ edited photos",
        "Full 1-2 min cinematic surf video",
        "Music + slow-mo + color grade",
        "Priority delivery (same day or next morning)",
      ],
      popular: false,
      color: "from-orange-500 to-red-500",
    },
    {
      id: "group-surf-pack",
      name: "Group Surf Pack",
      price: "From 100€",
      duration: "Group session",
      icon: Users,
      image: "/images/sports/surf-lineup-turquoise.jpg",
      features: [
        "For 2-5 surfers in one session",
        "10 edited photos per person",
        "Optional team highlight video",
        "Discount for groups",
        "From 20€ per person",
      ],
      popular: false,
      color: "from-green-500 to-teal-500",
    },
  ]

  const portraitPackages = [
    {
      id: "beach-portrait-mini",
      name: "Beach Portrait Mini",
      price: "30€",
      duration: "20 minutes",
      icon: Camera,
      image: "/images/portraits/woman-sunglasses-warm-light.jpg",
      features: ["20-minute shoot (after surf or sunset)", "5 edited portraits", "Natural light only"],
      popular: false,
      color: "from-pink-500 to-rose-500",
    },
    {
      id: "golden-hour-session",
      name: "Golden Hour Session",
      price: "50€",
      duration: "45 minutes",
      icon: Camera,
      image: "/images/portrait-nature.jpg",
      features: [
        "45-minute beach or village shoot",
        "10 edited portraits",
        "Color-graded for warm sunset tones",
        "Optional outfit change",
      ],
      popular: true,
      color: "from-amber-500 to-orange-500",
    },
    {
      id: "lifestyle-portrait-story",
      name: "Lifestyle Portrait Story",
      price: "80€-100€",
      duration: "1.5 hours",
      icon: Sparkles,
      image: "/images/portraits/stylized-portrait-sunglasses.jpg",
      features: [
        "1.5-hour creative session",
        "20+ edited photos",
        "You choose: beach, surfboard, or street style",
        "Includes artistic color grading + retouching",
      ],
      popular: false,
      color: "from-purple-500 to-indigo-500",
    },
  ]

  const comboPackages = [
    {
      id: "classic-combo",
      name: "The Classic Combo",
      price: "60€-70€",
      duration: "1.5 hours",
      icon: Camera,
      image: "/images/sports/surf-silhouette-sparkling.jpg",
      features: [
        "1.5-hour total (surf + mini portrait after)",
        "10 surf photos + 5 portraits",
        "Basic color correction",
        "Delivery in 24h",
      ],
      popular: false,
      color: "from-blue-500 to-purple-500",
    },
    {
      id: "ocean-story",
      name: "The Ocean Story",
      price: "100€-120€",
      duration: "2-2.5 hours",
      icon: Film,
      image: "/images/surfer-action.jpg",
      features: [
        "2-2.5 hours (surf session + lifestyle portraits)",
        "20+ edited photos",
        "Short highlight video (1 min)",
        "Both shore + portraits at golden hour",
      ],
      popular: true,
      color: "from-cyan-500 to-blue-500",
    },
    {
      id: "the-experience",
      name: "The Experience",
      price: "180€-250€",
      duration: "3-4 hours",
      icon: Sparkles,
      image: "/images/shop/sunset-couple-surfboards.jpg",
      features: [
        "3-4 hours full coverage (surf, water, drone, portraits)",
        "40+ edited photos",
        "Cinematic video (1-2 min, graded + music)",
        "Private gallery delivery",
        "Option to include prints",
      ],
      popular: false,
      color: "from-red-500 to-pink-500",
    },
  ]

  const realEstatePackages = [
    {
      id: "basic-listing",
      name: "Basic Listing Package",
      price: "60€",
      duration: "1-2 hours",
      icon: Home,
      image: "/images/real-estate/minimalist-bedroom-yellow-pillows.jpg",
      features: [
        "Interior + exterior coverage",
        "10-15 edited photos",
        "Professional color correction",
        "Fast turnaround (24-48h)",
      ],
      popular: false,
      color: "from-orange-500 to-amber-500",
    },
    {
      id: "premium-real-estate",
      name: "Premium Package",
      price: "90€",
      duration: "2-3 hours",
      icon: Sparkles,
      image: "/images/real-estate/rooftop-terrace-sunset-chairs.jpg",
      features: [
        "Wide-angle detailed coverage",
        "Drone photos included",
        "20+ edited images",
        "Twilight/golden hour shots available",
        "Priority editing and delivery",
      ],
      popular: true,
      color: "from-amber-500 to-yellow-500",
    },
  ]

  const eventPackages = [
    {
      id: "small-event",
      name: "Small Event",
      price: "80€",
      duration: "1-2 hours",
      icon: PartyPopper,
      image: "/images/events/nightclub-red.jpg",
      features: [
        "1-2 hour coverage",
        "30+ edited high-res photos",
        "Key moments captured",
        "Online gallery delivery",
        "Fast turnaround (48h)",
      ],
      popular: false,
      color: "from-pink-500 to-purple-500",
    },
    {
      id: "half-day-event",
      name: "Half-Day Event",
      price: "130€",
      duration: "3-4 hours",
      icon: Camera,
      image: "/images/events/traditional-cultural-ensemble.jpg",
      features: [
        "3-4 hour full coverage",
        "60+ edited high-res photos",
        "Highlight selection",
        "Multiple angles captured",
        "Full color correction",
        "Priority delivery",
      ],
      popular: true,
      color: "from-purple-500 to-indigo-500",
    },
  ]

  const productPackages = [
    {
      id: "simple-pack",
      name: "Simple Pack",
      price: "25€",
      duration: "Per Product",
      icon: Package,
      image: "/images/product-nafa-single.jpg",
      features: [
        "3-5 high-res shots per product",
        "White or creative background",
        "Professional lighting setup",
        "E-commerce optimized",
      ],
      popular: false,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "brand-collection",
      name: "Brand Collection",
      price: "80€",
      duration: "Full Brand Session",
      icon: Sparkles,
      image: "/images/product-nafa-duo.jpg",
      features: [
        "Up to 5 products included",
        "20+ lifestyle/creative shots",
        "Social media ready sizes",
        "Brand style consistency",
      ],
      popular: true,
      color: "from-emerald-500 to-teal-500",
    },
  ]

  const addOns = [
    {
      name: "Drone Footage",
      price: "+20€",
      description: "Aerial perspectives and cinematic angles",
      icon: Film,
    },
    {
      name: "Printed Photos",
      price: "+15€-45€",
      description: "Physical prints or small photobook",
      icon: Camera,
    },
    {
      name: "Custom Video with Music",
      price: "+20€",
      description: "Personalized soundtrack and editing",
      icon: Sparkles,
    },
  ]

  const handleBooking = (packageName: string, packagePrice: string) => {
    const message = `Hi! I'm interested in booking the "${packageName}" package (${packagePrice}). Can we discuss the details and availability?`
    const whatsappUrl = `https://wa.me/212643858432?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-black text-white scroll-smooth">
      {/* Header */}
      <header className="fixed top-0 w-full z-40 bg-black/90 backdrop-blur-md border-b border-gray-800 header-height">
        <ResponsiveContainer maxWidth="full" padding="md">
          <div className="flex items-center justify-between py-3 sm:py-4">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3 hover:text-purple-400 transition-colors">
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm sm:text-base">Back to Home</span>
            </Link>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Image
                src="/images/mrcstreetvisuals-logo.png"
                alt="mrcstreetvisuals logo"
                width={32}
                height={32}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full logo-static transition-none"
              />
              <span className="text-sm sm:text-base md:text-lg font-bold bg-gradient-to-r from-red-500 to-purple-400 bg-clip-text text-transparent">
                mrcstreetvisuals
              </span>
            </div>
          </div>
        </ResponsiveContainer>
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
          <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 group-hover:animate-pulse" />
        </a>

        <a
          href="https://www.instagram.com/_mrcstreetvisuals_/?__pwa=1"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 group"
          title="Instagram"
        >
          <Instagram className="h-5 w-5 sm:h-6 sm:w-6 group-hover:animate-pulse" />
        </a>

        <a
          href="mailto:mrcstreetvisuals@gmail.com"
          className="bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 group"
          title="Email"
        >
          <Mail className="h-5 w-5 sm:h-6 sm:w-6 group-hover:animate-pulse" />
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative h-[70vh] sm:h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/surfer-wave-action.jpg"
            alt="Photography packages hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        </div>

        <ResponsiveContainer maxWidth="2xl" className="relative z-10 text-center pt-header-offset px-4">
          <GradualBlurWrapper
            blurAmount={15}
            duration={1200}
            delay={200}
            animationType="blur-fade"
            threshold={0.1}
            triggerOnce={false}
            reverseOnExit={true}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-6 sm:mb-8 py-1.5">
              Photography Packages
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
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Choose the perfect photography package for your needs. From surf sessions to events, real estate, and
              products.
            </p>
          </GradualBlurWrapper>

          <GradualBlurWrapper
            blurAmount={10}
            duration={800}
            delay={600}
            animationType="blur-scale"
            threshold={0.1}
            triggerOnce={false}
            reverseOnExit={true}
          >
            <a
              href="#surf-packages"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Explore Packages
            </a>
          </GradualBlurWrapper>
        </ResponsiveContainer>
      </section>

      {/* Surf Photography Packages */}
      <section id="surf-packages" className="relative py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
          <Image
            src="/images/sports/surf-lineup-turquoise.jpg"
            alt="Surf background"
            fill
            className="object-cover opacity-20"
          />
        </div>

        <ResponsiveContainer maxWidth="2xl" className="relative z-20 px-4">
          <div className="text-center mb-12 sm:mb-16">
            <GradualBlurWrapper
              blurAmount={12}
              duration={1000}
              delay={100}
              animationType="blur-fade"
              threshold={0.2}
              triggerOnce={false}
              reverseOnExit={true}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent py-1.5">
                Surf Photography Packages
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                Capture your best waves with professional surf photography
              </p>
            </GradualBlurWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {surfPackages.map((pkg, index) => (
              <GradualBlurWrapper
                key={pkg.id}
                blurAmount={10}
                duration={1000}
                delay={200 + index * 100}
                animationType="blur-slide"
                direction="up"
                threshold={0.15}
                triggerOnce={false}
                reverseOnExit={true}
              >
                <Card
                  className={`bg-gray-900/95 backdrop-blur-sm border-gray-800 overflow-hidden group hover:scale-105 transition-all duration-300 relative h-full flex flex-col ${
                    pkg.popular ? "ring-2 ring-purple-500" : ""
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-purple-500 text-white text-xs sm:text-sm">Most Popular</Badge>
                    </div>
                  )}

                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={pkg.image || "/placeholder.svg"}
                      alt={pkg.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>

                  <CardContent className="p-4 sm:p-6 flex flex-col flex-1">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r ${pkg.color} flex items-center justify-center mb-3 sm:mb-4`}
                    >
                      <pkg.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{pkg.price}</div>
                    <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6">{pkg.duration}</p>
                    <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 flex-1">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-xs sm:text-sm text-gray-300">
                          <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      onClick={() => handleBooking(pkg.name, pkg.price)}
                      className={`w-full bg-gradient-to-r ${pkg.color} hover:opacity-90 text-white transform hover:scale-105 transition-all duration-300 text-sm sm:text-base`}
                    >
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              </GradualBlurWrapper>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Portrait Packages */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gray-950">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-transparent to-gray-950 z-10" />
          <Image
            src="/images/portraits/street-vendor-golden-hour.jpg"
            alt="Portrait background"
            fill
            className="object-cover opacity-15"
          />
        </div>

        <ResponsiveContainer maxWidth="2xl" className="relative z-20 px-4">
          <div className="text-center mb-12 sm:mb-16">
            <GradualBlurWrapper
              blurAmount={12}
              duration={1000}
              delay={100}
              animationType="blur-fade"
              threshold={0.2}
              triggerOnce={false}
              reverseOnExit={true}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent py-1.5">
                Portrait Packages
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                Professional portraits that capture your unique personality
              </p>
            </GradualBlurWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {portraitPackages.map((pkg, index) => (
              <GradualBlurWrapper
                key={pkg.id}
                blurAmount={10}
                duration={1000}
                delay={200 + index * 100}
                animationType="blur-slide"
                direction="up"
                threshold={0.15}
                triggerOnce={false}
                reverseOnExit={true}
              >
                <Card
                  className={`bg-gray-900/95 backdrop-blur-sm border-gray-800 overflow-hidden group hover:scale-105 transition-all duration-300 relative h-full flex flex-col ${
                    pkg.popular ? "ring-2 ring-amber-500" : ""
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-amber-500 text-white text-xs sm:text-sm">Most Popular</Badge>
                    </div>
                  )}

                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={pkg.image || "/placeholder.svg"}
                      alt={pkg.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                    />
                  </div>

                  <CardContent className="p-4 sm:p-6 flex flex-col flex-1">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r ${pkg.color} flex items-center justify-center mb-3 sm:mb-4`}
                    >
                      <pkg.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{pkg.price}</div>
                    <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6">{pkg.duration}</p>
                    <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 flex-1">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-xs sm:text-sm text-gray-300">
                          <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      onClick={() => handleBooking(pkg.name, pkg.price)}
                      className={`w-full bg-gradient-to-r ${pkg.color} hover:opacity-90 text-white transform hover:scale-105 transition-all duration-300 text-sm sm:text-base`}
                    >
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              </GradualBlurWrapper>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Combo Packages */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
          <Image
            src="/images/shop/sunset-couple-surfboards.jpg"
            alt="Combo background"
            fill
            className="object-cover opacity-20"
          />
        </div>

        <ResponsiveContainer maxWidth="2xl" className="relative z-20 px-4">
          <div className="text-center mb-12 sm:mb-16">
            <GradualBlurWrapper
              blurAmount={12}
              duration={1000}
              delay={100}
              animationType="blur-fade"
              threshold={0.2}
              triggerOnce={false}
              reverseOnExit={true}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent py-1.5">
                Surf + Portrait Combo Packages
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                Get the best of both worlds with our combo packages
              </p>
            </GradualBlurWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {comboPackages.map((pkg, index) => (
              <GradualBlurWrapper
                key={pkg.id}
                blurAmount={10}
                duration={1000}
                delay={200 + index * 100}
                animationType="blur-slide"
                direction="up"
                threshold={0.15}
                triggerOnce={false}
                reverseOnExit={true}
              >
                <Card
                  className={`bg-gray-900/95 backdrop-blur-sm border-gray-800 overflow-hidden group hover:scale-105 transition-all duration-300 relative h-full flex flex-col ${
                    pkg.popular ? "ring-2 ring-cyan-500" : ""
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-cyan-500 text-white text-xs sm:text-sm">Best Value</Badge>
                    </div>
                  )}

                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={pkg.image || "/placeholder.svg"}
                      alt={pkg.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                    />
                  </div>

                  <CardContent className="p-4 sm:p-6 flex flex-col flex-1">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r ${pkg.color} flex items-center justify-center mb-3 sm:mb-4`}
                    >
                      <pkg.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{pkg.price}</div>
                    <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6">{pkg.duration}</p>
                    <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 flex-1">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-xs sm:text-sm text-gray-300">
                          <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      onClick={() => handleBooking(pkg.name, pkg.price)}
                      className={`w-full bg-gradient-to-r ${pkg.color} hover:opacity-90 text-white transform hover:scale-105 transition-all duration-300 text-sm sm:text-base`}
                    >
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              </GradualBlurWrapper>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Real Estate & Rentals Packages */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gray-950">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-transparent to-gray-950 z-10" />
          <Image
            src="/images/real-estate/rooftop-terrace-sunset-chairs.jpg"
            alt="Real Estate background"
            fill
            className="object-cover opacity-15"
          />
        </div>

        <ResponsiveContainer maxWidth="2xl" className="relative z-20 px-4">
          <div className="text-center mb-12 sm:mb-16">
            <GradualBlurWrapper
              blurAmount={12}
              duration={1000}
              delay={100}
              animationType="blur-fade"
              threshold={0.2}
              triggerOnce={false}
              reverseOnExit={true}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent py-1.5">
                Real Estate & Rentals
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                Professional property photography that sells and rents faster
              </p>
            </GradualBlurWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {realEstatePackages.map((pkg, index) => (
              <GradualBlurWrapper
                key={pkg.id}
                blurAmount={10}
                duration={1000}
                delay={200 + index * 100}
                animationType="blur-slide"
                direction="up"
                threshold={0.15}
                triggerOnce={false}
                reverseOnExit={true}
              >
                <Card
                  className={`bg-gray-900/95 backdrop-blur-sm border-gray-800 overflow-hidden group hover:scale-105 transition-all duration-300 relative h-full flex flex-col ${
                    pkg.popular ? "ring-2 ring-amber-500" : ""
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-amber-500 text-white text-xs sm:text-sm">Most Popular</Badge>
                    </div>
                  )}

                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={pkg.image || "/placeholder.svg"}
                      alt={pkg.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    />
                  </div>

                  <CardContent className="p-4 sm:p-6 flex flex-col flex-1">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r ${pkg.color} flex items-center justify-center mb-3 sm:mb-4`}
                    >
                      <pkg.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{pkg.price}</div>
                    <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6">{pkg.duration}</p>
                    <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 flex-1">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-xs sm:text-sm text-gray-300">
                          <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      onClick={() => handleBooking(pkg.name, pkg.price)}
                      className={`w-full bg-gradient-to-r ${pkg.color} hover:opacity-90 text-white transform hover:scale-105 transition-all duration-300 text-sm sm:text-base`}
                    >
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              </GradualBlurWrapper>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Events Packages */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
          <Image
            src="/images/events/traditional-cultural-ensemble.jpg"
            alt="Events background"
            fill
            className="object-cover opacity-20"
          />
        </div>

        <ResponsiveContainer maxWidth="2xl" className="relative z-20 px-4">
          <div className="text-center mb-12 sm:mb-16">
            <GradualBlurWrapper
              blurAmount={12}
              duration={1000}
              delay={100}
              animationType="blur-fade"
              threshold={0.2}
              triggerOnce={false}
              reverseOnExit={true}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent py-1.5">
                Events Photography
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                Capture every special moment of your event professionally
              </p>
            </GradualBlurWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {eventPackages.map((pkg, index) => (
              <GradualBlurWrapper
                key={pkg.id}
                blurAmount={10}
                duration={1000}
                delay={200 + index * 100}
                animationType="blur-slide"
                direction="up"
                threshold={0.15}
                triggerOnce={false}
                reverseOnExit={true}
              >
                <Card
                  className={`bg-gray-900/95 backdrop-blur-sm border-gray-800 overflow-hidden group hover:scale-105 transition-all duration-300 relative h-full flex flex-col ${
                    pkg.popular ? "ring-2 ring-purple-500" : ""
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-purple-500 text-white text-xs sm:text-sm">Most Popular</Badge>
                    </div>
                  )}

                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={pkg.image || "/placeholder.svg"}
                      alt={pkg.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    />
                  </div>

                  <CardContent className="p-4 sm:p-6 flex flex-col flex-1">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r ${pkg.color} flex items-center justify-center mb-3 sm:mb-4`}
                    >
                      <pkg.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{pkg.price}</div>
                    <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6">{pkg.duration}</p>
                    <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 flex-1">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-xs sm:text-sm text-gray-300">
                          <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      onClick={() => handleBooking(pkg.name, pkg.price)}
                      className={`w-full bg-gradient-to-r ${pkg.color} hover:opacity-90 text-white transform hover:scale-105 transition-all duration-300 text-sm sm:text-base`}
                    >
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              </GradualBlurWrapper>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Product Photography Packages */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gray-950">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-transparent to-gray-950 z-10" />
          <Image src="/images/product-nafa-duo.jpg" alt="Product background" fill className="object-cover opacity-15" />
        </div>

        <ResponsiveContainer maxWidth="2xl" className="relative z-20 px-4">
          <div className="text-center mb-12 sm:mb-16">
            <GradualBlurWrapper
              blurAmount={12}
              duration={1000}
              delay={100}
              animationType="blur-fade"
              threshold={0.2}
              triggerOnce={false}
              reverseOnExit={true}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent py-1.5">
                Product Photography
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                High-quality product photos that boost sales and engagement
              </p>
            </GradualBlurWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {productPackages.map((pkg, index) => (
              <GradualBlurWrapper
                key={pkg.id}
                blurAmount={10}
                duration={1000}
                delay={200 + index * 100}
                animationType="blur-slide"
                direction="up"
                threshold={0.15}
                triggerOnce={false}
                reverseOnExit={true}
              >
                <Card
                  className={`bg-gray-900/95 backdrop-blur-sm border-gray-800 overflow-hidden group hover:scale-105 transition-all duration-300 relative h-full flex flex-col ${
                    pkg.popular ? "ring-2 ring-emerald-500" : ""
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-emerald-500 text-white text-xs sm:text-sm">Most Popular</Badge>
                    </div>
                  )}

                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={pkg.image || "/placeholder.svg"}
                      alt={pkg.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    />
                  </div>

                  <CardContent className="p-4 sm:p-6 flex flex-col flex-1">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r ${pkg.color} flex items-center justify-center mb-3 sm:mb-4`}
                    >
                      <pkg.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{pkg.price}</div>
                    <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6">{pkg.duration}</p>
                    <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 flex-1">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-xs sm:text-sm text-gray-300">
                          <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      onClick={() => handleBooking(pkg.name, pkg.price)}
                      className={`w-full bg-gradient-to-r ${pkg.color} hover:opacity-90 text-white transform hover:scale-105 transition-all duration-300 text-sm sm:text-base`}
                    >
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              </GradualBlurWrapper>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Add-ons Section */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-black">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
          <Image
            src="/images/sports/skateboard-bowl-colorful.jpg"
            alt="Add-ons background"
            fill
            className="object-cover opacity-10"
          />
        </div>

        <ResponsiveContainer maxWidth="xl" className="relative z-20 px-4">
          <div className="text-center mb-12 sm:mb-16">
            <GradualBlurWrapper
              blurAmount={12}
              duration={1000}
              delay={100}
              animationType="blur-fade"
              threshold={0.2}
              triggerOnce={false}
              reverseOnExit={true}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Add-ons
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                Enhance your package with these premium extras
              </p>
            </GradualBlurWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {addOns.map((addon, index) => (
              <GradualBlurWrapper
                key={addon.name}
                blurAmount={10}
                duration={800}
                delay={200 + index * 100}
                animationType="blur-scale"
                threshold={0.2}
                triggerOnce={false}
                reverseOnExit={true}
              >
                <Card className="bg-gray-900/95 backdrop-blur-sm border-gray-800 overflow-hidden group hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                      <addon.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">{addon.name}</h3>
                    <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-3 sm:mb-4">{addon.price}</div>
                    <p className="text-sm sm:text-base text-gray-400">{addon.description}</p>
                  </CardContent>
                </Card>
              </GradualBlurWrapper>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-20 md:py-24">
        <div className="absolute inset-0">
          <Image src="/images/surfer-wave-action.jpg" alt="CTA background" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
        </div>

        <ResponsiveContainer maxWidth="xl" className="relative z-10 text-center px-4">
          <GradualBlurWrapper
            blurAmount={12}
            duration={1000}
            delay={100}
            animationType="blur-fade"
            threshold={0.2}
            triggerOnce={false}
            reverseOnExit={true}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
              Ready to Book Your Session?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto">
              Get in touch to discuss your needs and find the perfect package for you
            </p>
            <a
              href="https://wa.me/212643858432?text=Hi! I'd like to discuss your photography packages and book a session."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white transform hover:scale-105 transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
              >
                <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                Contact Me on WhatsApp
              </Button>
            </a>
          </GradualBlurWrapper>
        </ResponsiveContainer>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 border-t border-gray-800 bg-black">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
            <Image
              src="/images/mrcstreetvisuals-logo.png"
              alt="mrcstreetvisuals logo"
              width={32}
              height={32}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full"
            />
            <span className="text-base sm:text-lg font-semibold bg-gradient-to-r from-red-500 to-purple-400 bg-clip-text text-transparent">
              mrcstreetvisuals
            </span>
          </div>
          <p className="text-sm sm:text-base text-gray-400">
            © {new Date().getFullYear()} mrcstreetvisuals. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
