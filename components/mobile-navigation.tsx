"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { UserRound, BriefcaseBusiness, Layers3, Mail, X } from "lucide-react"

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
  { href: "#portfolio", label: "Work", icon: BriefcaseBusiness },
  { href: "/packages", label: "Services", icon: Layers3 },
  { href: "#about", label: "About", icon: UserRound },
  { href: "#contact", label: "Contact", icon: Mail },
]

export function MobileNavigation() {
  const pathname = usePathname()
  const [isWorkOpen, setIsWorkOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    let previousY = window.scrollY
    const onScroll = () => {
      const currentY = window.scrollY
      setIsVisible(currentY < 24 || currentY < previousY || isWorkOpen)
      previousY = currentY
    }

    document.body.style.paddingBottom = "calc(4.75rem + env(safe-area-inset-bottom))"
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      document.body.style.paddingBottom = ""
    }
  }, [isWorkOpen])

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : href.startsWith("/") && pathname.startsWith(href)

  return (
    <div className="mobile-nav-container md:hidden">
      {isWorkOpen && (
        <div className="fixed inset-0 z-40 flex items-end bg-black/55 p-3 backdrop-blur-sm" onClick={() => setIsWorkOpen(false)}>
          <div
            className="w-full rounded-2xl border border-white/15 bg-neutral-950/95 p-5 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-label="Work categories"
          >
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/45">Portfolio index</p>
                <h2 className="mt-1 text-lg font-medium text-white">Selected work</h2>
              </div>
              <button type="button" onClick={() => setIsWorkOpen(false)} className="rounded-full p-2 text-white/60 hover:bg-white/10 hover:text-white" aria-label="Close work menu">
                <X className="h-4 w-4" />
              </button>
            </div>
            <nav aria-label="Work categories" className="grid grid-cols-2 gap-2">
              {workLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setIsWorkOpen(false)} className="rounded-xl border border-white/10 px-3 py-3 text-sm text-white/75 transition hover:border-white/30 hover:bg-white/10 hover:text-white">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      <nav
        aria-label="Mobile navigation"
        className={`fixed inset-x-3 bottom-3 z-50 rounded-2xl border border-white/15 bg-neutral-950/80 px-1.5 pb-[calc(0.35rem+env(safe-area-inset-bottom))] pt-2 shadow-2xl backdrop-blur-xl transition-transform duration-300 ${isVisible ? "translate-y-0" : "translate-y-[calc(100%+1rem)]"}`}
      >
        <ul className="grid grid-cols-5">
          {navigationItems.map((item) => {
            const active = isActive(item.href)
            const Icon = item.icon
            const content = (
              <>
                <Icon className="h-4 w-4" strokeWidth={1.5} />
                <span>{item.label}</span>
                <span className={`h-px w-5 bg-white transition-opacity ${active ? "opacity-100" : "opacity-0"}`} />
              </>
            )

            return (
              <li key={item.label}>
                {item.label === "Work" ? (
                  <button type="button" onClick={() => setIsWorkOpen((open) => !open)} aria-expanded={isWorkOpen} className={`flex min-h-12 w-full flex-col items-center justify-center gap-1 text-[10px] font-medium uppercase tracking-[0.12em] transition-colors ${isWorkOpen ? "text-white" : "text-white/55 hover:text-white"}`}>
                    {content}
                  </button>
                ) : (
                  <Link href={item.href} className={`flex min-h-12 flex-col items-center justify-center gap-1 text-[10px] font-medium uppercase tracking-[0.12em] transition-colors ${active ? "text-white" : "text-white/55 hover:text-white"}`}>
                    {content}
                  </Link>
                )}
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

// Keep the type available for existing imports.
export type MobileNavigationProps = { currentSection?: string }

<automated_v0_instructions_reminder>
- Read Only Files
  - Files in user_read_only_context are read-only and cannot be edited by v0.
  - They also can't be imported by other files in the codebase.
- If you want to use or edit the code from these files, you can use Move(operation="copy") to copy them to a writable location.

- Context Gathering
  - Use Parallel Tool Calls Where Possible
  - Don't stop at first match - When searching finds multiple files, examine ALL of them to ensure you find the right variant/version
  - Understand the full system before changes - Check existing patterns, parent components, and architecture to see how solutions fit into the broader codebase.
- You always Edit/Write to files using Edit and Write tools.
- Only edit the files that need to be changed.
- After Edit/Write, write a postamble explaining your changes in 2-4 sentences.
</automated_v0_instructions_reminder>
