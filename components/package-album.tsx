"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronDown, ChevronLeft, ChevronRight, Check, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

type PackageItem = {
  id: string
  name: string
  price: string
  duration: string
  image?: string
  features: string[]
  popular?: boolean
  color: string
}

type AlbumSection = {
  id: string
  eyebrow: string
  title: string
  description: string
  image: string
  packages: PackageItem[]
}

export function PackageAlbum({ sections, onBook }: { sections: AlbumSection[]; onBook: (name: string, price: string) => void }) {
  const [activeSection, setActiveSection] = useState(0)
  const [activePackage, setActivePackage] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const section = sections[activeSection]
  const item = section.packages[activePackage]

  const changeSection = (index: number) => {
    setActiveSection(index)
    setActivePackage(0)
    setExpanded(false)
  }

  return (
    <section className="relative overflow-hidden bg-zinc-950 px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32" aria-label="Photography package album">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,.16),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,.1),transparent_38%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2 scrollbar-none" role="tablist" aria-label="Package categories">
          {sections.map((chapter, index) => (
            <button
              key={chapter.id}
              type="button"
              role="tab"
              aria-selected={index === activeSection}
              onClick={() => changeSection(index)}
              className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition-colors sm:px-5 sm:text-sm ${index === activeSection ? "border-fuchsia-400 bg-fuchsia-400 text-zinc-950" : "border-zinc-700 bg-zinc-900/70 text-zinc-300 hover:border-fuchsia-400"}`}
            >
              {chapter.eyebrow}
            </button>
          ))}
        </div>

        <div className="grid overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/80 shadow-2xl lg:grid-cols-[1.05fr_.95fr]">
          <div className="relative min-h-[300px] sm:min-h-[430px] lg:min-h-[620px]">
            <Image src={item.image || section.image} alt={item.name} fill className="object-cover transition-transform duration-700 hover:scale-105" sizes="(max-width: 1024px) 100vw, 52vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-black/20" />
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-fuchsia-300">Chapter {String(activeSection + 1).padStart(2, "0")}</p>
              <h2 className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">{section.title}</h2>
            </div>
          </div>

          <div className="flex min-w-0 flex-col p-5 sm:p-8 lg:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">{section.eyebrow} / mrcstreetvisuals</p>
            <p className="mt-4 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg">{section.description}</p>

            <div className="mt-8 flex items-center justify-between gap-3">
              <button type="button" onClick={() => setActivePackage((activePackage - 1 + section.packages.length) % section.packages.length)} className="rounded-full border border-zinc-700 p-2 text-zinc-300 hover:border-fuchsia-400" aria-label="Previous package"><ChevronLeft className="h-5 w-5" /></button>
              <div className="flex min-w-0 flex-1 gap-2 overflow-x-auto pb-1" role="tablist" aria-label={`${section.title} packages`}>
                {section.packages.map((pkg, index) => (
                  <button key={pkg.id} type="button" role="tab" aria-selected={index === activePackage} onClick={() => setActivePackage(index)} className={`min-w-[130px] rounded-xl border p-3 text-left transition-colors sm:min-w-[160px] ${index === activePackage ? "border-fuchsia-400 bg-fuchsia-400/10" : "border-zinc-800 bg-zinc-950/50"}`}>
                    <span className="block truncate text-sm font-semibold text-white">{pkg.name}</span>
                    <span className="mt-1 block text-xs text-zinc-400">{pkg.price}</span>
                  </button>
                ))}
              </div>
              <button type="button" onClick={() => setActivePackage((activePackage + 1) % section.packages.length)} className="rounded-full border border-zinc-700 p-2 text-zinc-300 hover:border-fuchsia-400" aria-label="Next package"><ChevronRight className="h-5 w-5" /></button>
            </div>

            <Card className="mt-6 flex-1 border-zinc-800 bg-zinc-950/80">
              <CardContent className="p-5 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div><p className="mb-2 text-sm text-zinc-400">{item.duration}</p><h3 className="text-2xl font-bold text-white sm:text-3xl">{item.name}</h3></div>
                  {item.popular && <Badge className="shrink-0 bg-fuchsia-500 text-white">Featured</Badge>}
                </div>
                <p className="mt-4 text-3xl font-bold text-white sm:text-4xl">{item.price}</p>
                <button type="button" onClick={() => setExpanded(!expanded)} className="mt-5 flex w-full items-center justify-between border-t border-zinc-800 pt-4 text-left text-sm font-semibold text-zinc-200" aria-expanded={expanded}>What&apos;s included <ChevronDown className={`h-5 w-5 transition-transform ${expanded ? "rotate-180" : ""}`} /></button>
                <div className={`${expanded ? "mt-4 grid" : "hidden"} gap-3`}>
                  {item.features.map((feature) => <div key={feature} className="flex gap-2 text-sm leading-6 text-zinc-300"><Check className="mt-1 h-4 w-4 shrink-0 text-emerald-400" />{feature}</div>)}
                </div>
                <Button onClick={() => onBook(item.name, item.price)} className="mt-6 w-full bg-fuchsia-500 text-zinc-950 hover:bg-fuchsia-400"><Sparkles className="mr-2 h-4 w-4" /> Let&apos;s create something</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
