import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ClientLayout } from "@/components/client-layout"
import Script from "next/script"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "mrcstreetvisuals - Professional Photography",
  description:
    "Professional photographer capturing life's dynamic moments - from events to portraits, automotive to sports photography.",
  keywords: "photography, professional photographer, events, portraits, automotive, sports, Morocco",
  authors: [{ name: "mrcstreetvisuals" }],
  creator: "mrcstreetvisuals",
  publisher: "mrcstreetvisuals",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "umCXGcNJCQlVI5dcJJTKQz3NGwASt0di5GHzxCuHI3k",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "mrcstreetvisuals",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: "/images/mrcstreetvisuals-logo.png",
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
  },
    generator: 'v0.app'
}

// Fixed: Move viewport to separate export
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
  themeColor: "#000000",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://elfsightcdn.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://elfsightcdn.com" />
      </head>
      <body className={`${inter.variable} ${inter.className} antialiased`}>
        <ClientLayout>{children}</ClientLayout>

        {/* Elfsight Platform Script */}
        <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" async />
      </body>
    </html>
  )
}
