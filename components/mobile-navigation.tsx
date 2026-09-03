"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { UserRound, BriefcaseBusiness, Layers3, Mail, X, ShoppingBag, Menu } from "lucide-react"

const workLinks = [
  { href: "/portfolio/sports", label: "Surf & Sports" },
  { href: "/portfolio/portraits", label: "Portraits" },
  { href: "/portfolio/events", label: "Events" },
  { href: "/portfolio/products", label: "Product" },
  { href: "/portfolio/real-estate", label: "Real Estate" },
  { href: "/portfolio/automotive", label: "Automotive" },
]

const navigationItems = [
  { href: "/", label: "Home", icon: Layers3 },
  { href: "#portfolio", label: "Portfolio", icon: BriefcaseBusiness },
  { href: "/packages", label: "Packages", icon: Layers3 },
  { href: "/shop", label: "Shop", icon: ShoppingBag },
  { href: "#about", label: "About", icon: UserRound },
  { href: "#contact", label: "Contact", icon: Mail },
]

export function MobileNavigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isWorkOpen, setIsWorkOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : href.startsWith("/") && pathname.startsWith(href)

  return (
    <div className="md:hidden">
      {isOpen && (
        <div className="fixed inset-0 z-[60] bg-black/70 p-4 backdrop-blur-md" onClick={() => setIsOpen(false)}>
          <div className="mx-auto mt-16 max-w-sm rounded-3xl border border-white/15 bg-neutral-950/95 p-5 shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/45">Navigation</p>
                <p className="mt-1 text-lg font-medium text-white">mrcstreetvisuals</p>
              </div>
              <button type="button" onClick={() => setIsOpen(false)} className="rounded-full p-2 text-white/65 hover:bg-white/10 hover:text-white" aria-label="Close navigation">
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav aria-label="Mobile navigation">
              <ul className="grid grid-cols-2 gap-2">
                {navigationItems.map((item) => {
                  const Icon = item.icon
                  return <li key={item.label}><Link href={item.href} onClick={() => setIsOpen(false)} className={`flex min-h-14 items-center gap-3 rounded-2xl border px-3 text-sm transition ${isActive(item.href) ? "border-white/35 bg-white/10 text-white" : "border-white/10 text-white/65 hover:border-white/25 hover:text-white"}`}><Icon className="h-4 w-4" strokeWidth={1.6} />{item.label}</Link></li>
                })}
              </ul>
              <div className="mt-5 border-t border-white/10 pt-4">
                <button type="button" onClick={() => setIsWorkOpen((open) => !open)} aria-expanded={isWorkOpen} className="flex w-full items-center justify-between px-1 text-left text-xs font-medium uppercase tracking-[0.2em] text-white/70"><span>Portfolio categories</span><span aria-hidden="true">{isWorkOpen ? "−" : "+"}</span></button>
                {isWorkOpen && <div className="mt-3 grid grid-cols-2 gap-2">{workLinks.map((link) => <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="rounded-xl border border-white/10 px-3 py-3 text-xs text-white/65 hover:border-white/25 hover:text-white">{link.label}</Link>)}</div>}
              </div>
            </nav>
          </div>
        </div>
      )}
      <button type="button" onClick={() => setIsOpen(true)} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white shadow-lg backdrop-blur-md transition hover:border-white/45 hover:bg-white/10" aria-label="Open navigation" aria-expanded={isOpen}><Menu className="h-5 w-5" /></button>
    </div>
  )
}

export type MobileNavigationProps = { currentSection?: string }
