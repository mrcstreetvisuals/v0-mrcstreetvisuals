"use client"

import { useEffect } from "react"

export function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window === "undefined" || process.env.NODE_ENV !== "production") {
      return
    }

    // Report Web Vitals
    const reportWebVitals = (metric: any) => {
      // Log to console in development
      if (process.env.NODE_ENV === "development") {
        console.log(metric)
      }

      // Send to analytics in production
      if (window.gtag) {
        window.gtag("event", metric.name, {
          value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
          event_label: metric.id,
          non_interaction: true,
        })
      }
    }

    // Observe performance metrics
    if ("PerformanceObserver" in window) {
      try {
        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          reportWebVitals({
            name: "LCP",
            value: lastEntry.startTime,
            id: `v3-${Date.now()}-${Math.random()}`,
          })
        })
        lcpObserver.observe({ type: "largest-contentful-paint", buffered: true })

        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry: any) => {
            reportWebVitals({
              name: "FID",
              value: entry.processingStart - entry.startTime,
              id: `v3-${Date.now()}-${Math.random()}`,
            })
          })
        })
        fidObserver.observe({ type: "first-input", buffered: true })

        // Cumulative Layout Shift
        let clsValue = 0
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value
              reportWebVitals({
                name: "CLS",
                value: clsValue,
                id: `v3-${Date.now()}-${Math.random()}`,
              })
            }
          })
        })
        clsObserver.observe({ type: "layout-shift", buffered: true })
      } catch (e) {
        console.error("Performance monitoring error:", e)
      }
    }
  }, [])

  return null
}
