"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useEffect } from "react"

interface MobileNavigationProps {
  currentSection?: string
}

export function MobileNavigation({ currentSection }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navigationItems = [
    { href: "#home", label: "Home" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "/packages", label: "Packages" },
    { href: "/shop", label: "Shop" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ]

  // Close mobile menu when clicking outside or on link
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isOpen && !target.closest(".mobile-nav-container")) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <div className="mobile-nav-container md:hidden">
      {/* Hamburger Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className={`relative z-50 text-white hover:bg-white/10 mobile-touch-target transition-all duration-300 ${
          isOpen ? "bg-white/10 rotate-90" : ""
        }`}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center">
          <span
            className={`hamburger-line w-6 h-0.5 bg-current transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-1.5" : "mb-1.5"
            }`}
          ></span>
          <span
            className={`hamburger-line w-6 h-0.5 bg-current transition-all duration-300 ${
              isOpen ? "opacity-0" : "mb-1.5"
            }`}
          ></span>
          <span
            className={`hamburger-line w-6 h-0.5 bg-current transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </div>
      </Button>

      <div
        className={`fixed inset-0 bg-black/60 z-40 backdrop-blur-md transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-gray-950/95 border-l border-white/10 z-40 transform transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20">
          {" "}
          {/* Added top padding for header space */}
          {/* Navigation Links */}
          <nav className="flex-1 px-6 py-4">
            <ul className="space-y-2">
              {navigationItems.map((item, index) => (
                <li
                  key={item.href}
                  className={`transform transition-all duration-500 delay-[${index * 50}ms] ${
                    isOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                  }`}
                >
                  <Link
                    href={item.href}
                    onClick={handleLinkClick}
                    className={`block py-3 px-4 rounded-xl text-lg font-medium transition-all duration-300 ${
                      currentSection === item.href.replace("#", "")
                        ? "bg-purple-500/20 text-purple-400"
                        : "text-white/80 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* Footer */}
          <div className="p-4 sm:p-6 border-t border-gray-800">
            <p className="text-xs sm:text-sm text-gray-400 text-center mobile-body-adjust">
              © {new Date().getFullYear()} mrcstreetvisuals
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
