export const editorialImages = {
  hero: {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BA9A1450.jpg",
    alt: "Skateboarder rising into a clear blue sky",
  },
  about: {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BA9A8996.jpg",
    alt: "Portrait of a creative in a dark studio",
  },
  portraits: {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BA9A6019.jpg",
    alt: "Portrait of a woman in warm interior light",
  },
  events: {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BA9A6761.jpg",
    alt: "Editorial portrait in a colorful arcade",
  },
  products: {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BA9A6875.jpg",
    alt: "Abstract blue light and reflection study",
  },
  lifestyle: {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BA9A6861.jpg",
    alt: "Lifestyle portrait in a red cap and white shirt",
  },
  action: {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSCF7287.jpg",
    alt: "Dynamic outdoor action portrait with a bicycle",
  },
  street: {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSCF7086.JPG.jpeg",
    alt: "Street portrait with a bicycle and urban architecture",
  },
  details: {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BA9A6227.jpg",
    alt: "Night portrait framed by chain-link texture and light",
  },
  closing: {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BA9A8951.jpg",
    alt: "Skateboarder and bicycle beneath green trees",
  },
} as const

export const editorialImageMap = [
  { id: "01", placement: "Hero / Home", image: editorialImages.hero, role: "Full-width opening image" },
  { id: "02", placement: "About / Story", image: editorialImages.about, role: "Personal editorial portrait" },
  { id: "03", placement: "Portfolio / Portraits", image: editorialImages.portraits, role: "Portrait thumbnail" },
  { id: "04", placement: "Portfolio / Events", image: editorialImages.events, role: "Event and nightlife thumbnail" },
  { id: "05", placement: "Portfolio / Products", image: editorialImages.products, role: "Atmospheric product detail" },
  { id: "06", placement: "Services", image: editorialImages.lifestyle, role: "Lifestyle service image" },
  { id: "07", placement: "Portfolio / Sports", image: editorialImages.action, role: "Action feature image" },
  { id: "08", placement: "Featured work", image: editorialImages.street, role: "Street feature image" },
  { id: "09", placement: "Pricing / Packages", image: editorialImages.details, role: "Moody package background" },
  { id: "10", placement: "Contact / CTA", image: editorialImages.closing, role: "Closing CTA image" },
] as const
