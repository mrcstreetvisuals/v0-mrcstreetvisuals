'use client'

import { useEffect } from 'react'

export function ElfsightChatbot() {
  useEffect(() => {
    // Load Elfsight platform script
    const script = document.createElement('script')
    script.src = 'https://elfsightcdn.com/platform.js'
    script.async = true
    script.defer = true
    document.body.appendChild(script)

    return () => {
      // Cleanup: remove script if component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return (
    <div 
      className="elfsight-app-00902436-61ad-4803-bf9e-1d69aeec61d5" 
      data-elfsight-app-lazy
    />
  )
}
