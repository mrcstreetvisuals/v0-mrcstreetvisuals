"use client"

import { Instagram, Mail, MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"

export function FloatingContactButtons() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Hide buttons when near footer (last 200px)
      const nearFooter = currentScrollY + windowHeight > documentHeight - 200

      // Hide on scroll down, show on scroll up (but not at very top)
      const scrollingDown = currentScrollY > lastScrollY
      const notAtTop = currentScrollY > 100

      if (nearFooter) {
        setIsVisible(false)
      } else if (scrollingDown && notAtTop) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    // Throttle scroll events
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledScroll, { passive: true })
    return () => window.removeEventListener("scroll", throttledScroll)
  }, [lastScrollY])

  const contactButtons = [
    {
      href: "https://wa.me/212643858432",
      icon: MessageCircle,
      className: "bg-green-500 hover:bg-green-600",
      title: "WhatsApp",
      external: true,
    },
    {
      href: "https://www.instagram.com/_mrcstreetvisuals_/?__pwa=1",
      icon: Instagram,
      className: "bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045]", // Refined Instagram gradient
      title: "Instagram",
      external: true,
    },
    {
      href: "mailto:mrcstreetvisuals@gmail.com",
      icon: Mail,
      className: "bg-red-500 hover:bg-red-600", // Changed email icon to professional red/gmail style
      title: "Email",
      external: false,
    },
  ]

  return (
    <div
      className={`floating-contacts transition-all duration-300 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8" // Refined entrance animation
      }`}
      role="complementary"
      aria-label="Contact options"
    >
      {contactButtons.map((button, index) => {
        const Icon = button.icon
        const ButtonComponent = button.external ? "a" : "a"
        const buttonProps = button.external ? { target: "_blank", rel: "noopener noreferrer" } : {}

        return (
          <ButtonComponent
            key={button.title}
            href={button.href}
            className={`contact-btn group text-white ${button.className}`}
            title={button.title}
            aria-label={`Contact via ${button.title}`}
            style={{ animationDelay: `${index * 100}ms` }}
            {...buttonProps}
          >
            <Icon className="contact-btn-icon" />
          </ButtonComponent>
        )
      })}
    </div>
  )
}
