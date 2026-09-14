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

    // This browser diagnostic is emitted as a window error rather than a console error.
    // It is benign when an observer finishes a layout pass with a queued notification.
    const handleResizeObserverError = (event: ErrorEvent) => {
      const message = event.message || event.error?.message || ""
      if (
        message.includes("ResizeObserver loop completed with undelivered notifications") ||
        message.includes("ResizeObserver loop limit exceeded")
      ) {
        event.preventDefault()
        event.stopImmediatePropagation()
      }
    }

    // Capture the browser diagnostic before framework/dev-overlay listeners receive it.
    window.addEventListener("error", handleResizeObserverError, true)

    return () => {
      document.documentElement.style.scrollBehavior = ""
      window.removeEventListener("error", handleResizeObserverError, true)
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
