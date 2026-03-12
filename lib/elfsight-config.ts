// Elfsight Widget Configuration
export const ELFSIGHT_CONFIG = {
  // Widget ID for Google Reviews
  GOOGLE_REVIEWS_WIDGET_ID: "f87d232c-8173-4b1a-a1e4-a6cb527721a4",

  // CDN URL
  PLATFORM_URL: "https://elfsightcdn.com/platform.js",

  // Widget settings (customizable in Elfsight dashboard)
  settings: {
    theme: "dark",
    layout: "slider", // or 'grid', 'list', 'masonry'
    reviewsPerPage: 3,
    showAvatar: true,
    showDate: true,
    showRating: true,
    autoplay: true,
    autoplayDelay: 5000,
  },

  // Custom CSS class for targeting
  containerClass: "elfsight-reviews-container",
}

// Helper function to initialize Elfsight widget
export function initElfsightWidget() {
  if (typeof window !== "undefined" && (window as any).ElfSightWidget) {
    try {
      ;(window as any).ElfSightWidget.init()
    } catch (error) {
      console.warn("Elfsight widget initialization failed:", error)
    }
  }
}

// Helper to check if Elfsight is loaded
export function isElfsightLoaded(): boolean {
  return typeof window !== "undefined" && !!(window as any).ElfSightWidget
}
