"use client"

import { useEffect, Suspense } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { PerformanceMonitor } from "@/components/performance-monitor"
import { Analytics } from "@vercel/analytics/next"
import { ElfsightChatbot } from "@/components/elfsight-chatbot"
import type React from "react"

function AnalyticsTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname) {
      const url = `${pathname}${searchParams?.toString() ? `?${searchParams.toString()}` : ""}`
      // Track page view
      if (typeof window !== "undefined" && (window as any).gtag) {
        ;(window as any).gtag("config", "G-XXXXXXXXXX", {
          page_path: url,
        })
      }
    }
  }, [pathname, searchParams])

  return null
}

export function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth"

    // Suppress ResizeObserver loop errors
    const originalError = console.error
    console.error = function (...args: any[]) {
      if (
        args[0] &&
        typeof args[0] === "string" &&
        args[0].includes("ResizeObserver loop completed with undelivered notifications")
      ) {
        return
      }
      originalError.apply(console, args)
    }

    // Clean up on unmount
    return () => {
      document.documentElement.style.scrollBehavior = ""
      console.error = originalError
    }
  }, [])

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <PerformanceMonitor />
        <AnalyticsTracker />
        {children}
      </Suspense>
      <Analytics />
      <ElfsightChatbot />
    </>
  )
}
