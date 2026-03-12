"use client"

import type React from "react"

import { Suspense, lazy, type ComponentType } from "react"

interface DynamicLoaderProps {
  loader: () => Promise<{ default: ComponentType<any> }>
  fallback?: React.ReactNode
  [key: string]: any
}

export function DynamicLoader({ loader, fallback, ...props }: DynamicLoaderProps) {
  const Component = lazy(loader)

  return (
    <Suspense
      fallback={
        fallback || (
          <div className="flex items-center justify-center py-12">
            <div className="w-12 h-12 border-3 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )
      }
    >
      <Component {...props} />
    </Suspense>
  )
}
