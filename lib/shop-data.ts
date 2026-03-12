export interface PrintProduct {
  id: string
  title: string
  description: string
  image: string
  category: "Beach Life" | "Surf Culture" | "Cultural Heritage" | "Seascapes" | "Skateboarding"
  printPrice: number
  framedPrice: number
  totalStock: number
  remainingStock: number
  size: string
  isLimitedEdition: boolean
}

export const shopProducts: PrintProduct[] = [
  // NEW FEATURED PRINTS - Added at the top for prominence
  {
    id: "surf-wipeout-dramatic",
    title: "Gravity's Dance",
    description:
      "A powerful black and white surf photography capturing the dramatic moment of a wipeout, with the surfboard suspended in mid-air and explosive water spray - a testament to the raw power of the ocean.",
    image: "/images/shop/surf-wipeout-dramatic.jpg",
    category: "Surf Culture",
    printPrice: 30,
    framedPrice: 45,
    totalStock: 5,
    remainingStock: 5,
    size: "30x60cm",
    isLimitedEdition: true,
  },
  {
    id: "traditional-horsemen-ceremony",
    title: "Royal Riders",
    description:
      "Magnificent cultural photography showcasing traditional Moroccan horsemen in ceremonial white robes on beautifully decorated horses, capturing the elegance and heritage of equestrian traditions.",
    image: "/images/shop/traditional-horsemen-ceremony.jpg",
    category: "Cultural Heritage",
    printPrice: 30,
    framedPrice: 45,
    totalStock: 5,
    remainingStock: 5,
    size: "30x60cm",
    isLimitedEdition: true,
  },
  {
    id: "surf-lineup-turquoise",
    title: "Turquoise Dreams",
    description:
      "Serene surf photography capturing surfers scattered across crystal clear turquoise waters, showcasing the peaceful beauty of waiting for the perfect wave in paradise.",
    image: "/images/shop/surf-lineup-turquoise.jpg",
    category: "Surf Culture",
    printPrice: 30,
    framedPrice: 45,
    totalStock: 5,
    remainingStock: 5,
    size: "30x60cm",
    isLimitedEdition: true,
  },
  {
    id: "horseman-dust-action",
    title: "Thunder & Dust",
    description:
      "Dynamic black and white action photography capturing a traditional horseman at full gallop with dramatic dust clouds, embodying the fierce spirit of Moroccan equestrian culture.",
    image: "/images/shop/horseman-dust-action.jpg",
    category: "Cultural Heritage",
    printPrice: 30,
    framedPrice: 45,
    totalStock: 5,
    remainingStock: 5,
    size: "30x60cm",
    isLimitedEdition: true,
  },
  {
    id: "moroccan-village-landscape",
    title: "Atlas Village",
    description:
      "Breathtaking landscape photography showcasing a traditional Moroccan village nestled in rolling hills with majestic mountains in the distance, capturing the timeless beauty of rural Morocco.",
    image: "/images/shop/moroccan-village-landscape.jpg",
    category: "Cultural Heritage",
    printPrice: 30,
    framedPrice: 45,
    totalStock: 5,
    remainingStock: 5,
    size: "30x60cm",
    isLimitedEdition: true,
  },

  // SKATEBOARDING COLLECTION - New dedicated category
  {
    id: "silhouette-crowd-hilltop",
    title: "Skate Congregation",
    description:
      "Iconic black and white composition capturing a large gathering of skateboarding enthusiasts silhouetted against the sky on a hilltop. This powerful image conveys the unity, passion, and collective energy of the skateboarding community united by their shared love of the sport.",
    image: "/images/shop/silhouette-crowd-hilltop.jpg",
    category: "Skateboarding",
    printPrice: 30,
    framedPrice: 45,
    totalStock: 5,
    remainingStock: 5,
    size: "30x60cm",
    isLimitedEdition: true,
  },
  {
    id: "skate-park-colorful-ramp",
    title: "Ramp Sessions - Colors",
    description:
      "Vibrant action photography showcasing skateboarders riding a colorful ramp at Taghazout skate park. With striking graffiti art and a stunning mountain and coastal backdrop, this print captures the raw energy, creativity, and fearless spirit of skateboarding culture.",
    image: "/images/shop/skate-park-colorful-ramp.jpg",
    category: "Skateboarding",
    printPrice: 30,
    framedPrice: 45,
    totalStock: 5,
    remainingStock: 5,
    size: "30x60cm",
    isLimitedEdition: true,
  },
  {
    id: "skate-park-bw-palm-tree",
    title: "Ramp Sessions - Motion",
    description:
      "Dynamic black and white documentary-style photograph capturing skateboarding action in motion at Taghazout skatepark. The artistic graffiti, motion blur, and mountain landscape create an authentic snapshot of skateboarding lifestyle and technical skill in perfect harmony.",
    image: "/images/shop/skate-park-bw-palm-tree.jpg",
    category: "Skateboarding",
    printPrice: 30,
    framedPrice: 45,
    totalStock: 5,
    remainingStock: 5,
    size: "30x60cm",
    isLimitedEdition: true,
  },
  {
    id: "coastal-skate-mural-ocean",
    title: "Coastal Skate Canvas",
    description:
      "Stunning color photograph of a large-scale artistic mural at Taghazout skate park overlooking pristine ocean waters and mountains. This striking image celebrates skateboarding's artistic expression through its wave-inspired design, merging sport, art, and nature into one breathtaking composition.",
    image: "/images/shop/coastal-skate-mural-ocean.jpg",
    category: "Skateboarding",
    printPrice: 30,
    framedPrice: 45,
    totalStock: 5,
    remainingStock: 5,
    size: "30x60cm",
    isLimitedEdition: true,
  },

  // EXISTING PRINTS - No duplicates
  {
    id: "beach-aerial-crowd",
    title: "Beach Mosaic",
    description:
      "A captivating black and white aerial view of beach life, showcasing the beautiful chaos of summer with umbrellas, swimmers, and the timeless rhythm of coastal living.",
    image: "/images/shop/beach-aerial-crowd.jpg",
    category: "Beach Life",
    printPrice: 30,
    framedPrice: 45,
    totalStock: 5,
    remainingStock: 4,
    size: "30x60cm",
    isLimitedEdition: true,
  },
  {
    id: "surf-lineup-dynamic",
    title: "The Lineup",
    description:
      "Dynamic surf photography capturing the raw power of the ocean with surfers waiting in the lineup and a surfboard flying through the air, showcasing the eternal dance between human and nature.",
    image: "/images/shop/surf-lineup-dynamic.jpg",
    category: "Surf Culture",
    printPrice: 30,
    framedPrice: 45,
    totalStock: 5,
    remainingStock: 4,
    size: "30x60cm",
    isLimitedEdition: true,
  },
  {
    id: "surf-action-turquoise",
    title: "Crystal Waters",
    description:
      "Stunning surf action photography showcasing a surfer carving through crystal clear turquoise waters with spectacular spray, capturing the raw energy and skill of surfing.",
    image: "/images/shop/surf-action-turquoise.jpg",
    category: "Surf Culture",
    printPrice: 30,
    framedPrice: 45,
    totalStock: 5,
    remainingStock: 5,
    size: "30x60cm",
    isLimitedEdition: true,
  },
  {
    id: "camel-caravan-beach-contrast",
    title: "Two Worlds",
    description:
      "A striking black and white composition where traditional camel caravan meets modern beach culture, capturing the unique cultural landscape where desert meets ocean.",
    image: "/images/shop/camel-caravan-beach-contrast.jpg",
    category: "Cultural Heritage",
    printPrice: 30,
    framedPrice: 45,
    totalStock: 5,
    remainingStock: 5,
    size: "30x60cm",
    isLimitedEdition: true,
  },
  {
    id: "seascape-dusk-waves",
    title: "Ocean Serenity",
    description:
      "Serene seascape during golden hour, capturing the eternal rhythm of gentle waves with mountains in the distance, perfect for meditation and contemplation.",
    image: "/images/shop/seascape-dusk-waves.jpg",
    category: "Seascapes",
    printPrice: 30,
    framedPrice: 45,
    totalStock: 5,
    remainingStock: 5,
    size: "30x60cm",
    isLimitedEdition: true,
  },
  {
    id: "lone-surfer-blue-board",
    title: "Solitude",
    description:
      "Minimalist surf photography featuring a lone surfer with a blue board and perfect reflections on wet sand, embodying the peaceful moments between sessions.",
    image: "/images/shop/lone-surfer-blue-board.jpg",
    category: "Surf Culture",
    printPrice: 30,
    framedPrice: 45,
    totalStock: 5,
    remainingStock: 5,
    size: "30x60cm",
    isLimitedEdition: true,
  },
  {
    id: "couple-sunset-surfboards",
    title: "Golden Connection",
    description:
      "Romantic golden hour silhouette of two souls sharing a perfect sunset moment, with surfboards as witnesses to their coastal love story.",
    image: "/images/shop/couple-sunset-surfboards.jpg",
    category: "Beach Life",
    printPrice: 30,
    framedPrice: 45,
    totalStock: 5,
    remainingStock: 4,
    size: "30x60cm",
    isLimitedEdition: true,
  },
  {
    id: "camel-rider-golden-beach",
    title: "Sahara Sunset",
    description:
      "Magical golden hour moment where desert traditions meet the Atlantic coast, featuring a camel and rider silhouetted against a spectacular sunset.",
    image: "/images/shop/camel-rider-golden-beach.jpg",
    category: "Cultural Heritage",
    printPrice: 30,
    framedPrice: 45,
    totalStock: 5,
    remainingStock: 4,
    size: "30x60cm",
    isLimitedEdition: true,
  },
  {
    id: "surfer-contemplation-mist",
    title: "Misty Contemplation",
    description:
      "Atmospheric surf photography capturing a moment of quiet reflection, with a surfer sitting peacefully in the misty morning light with their board.",
    image: "/images/shop/surfer-contemplation-mist.jpg",
    category: "Surf Culture",
    printPrice: 30,
    framedPrice: 45,
    totalStock: 5,
    remainingStock: 5,
    size: "30x60cm",
    isLimitedEdition: true,
  },
  {
    id: "harbor-fishermen-bw",
    title: "Harbor Life",
    description:
      "Documentary-style black and white photography capturing the authentic daily life of local fishermen against the backdrop of traditional Moroccan architecture.",
    image: "/images/shop/harbor-fishermen-bw.jpg",
    category: "Cultural Heritage",
    printPrice: 30,
    framedPrice: 45,
    totalStock: 5,
    remainingStock: 5,
    size: "30x60cm",
    isLimitedEdition: true,
  },
]

// Debug function to check image paths
if (typeof window !== "undefined") {
  console.log(
    "Shop products image paths:",
    shopProducts.map((p) => ({ id: p.id, image: p.image })),
  )
}

export function generateWhatsAppMessage(product: PrintProduct, isFramed: boolean, quantity = 1): string {
  const price = isFramed ? product.framedPrice : product.printPrice
  const total = price * quantity

  const frameStatus = isFramed ? "with frame" : "print only"

  const message = `Hi! I'd like to order:

📸 Print: "${product.title}"
📏 Size: ${product.size}
🖼️ Option: ${frameStatus}
📦 Quantity: ${quantity}
💰 Total: ${total} EUR

🎨 Limited Edition: Only ${product.remainingStock} remaining out of ${product.totalStock} total prints.

Please confirm availability and provide payment details. Thank you!`

  return encodeURIComponent(message)
}
