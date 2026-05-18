'use client'

import { useEffect } from 'react'

export function BotpressChatbot() {
  useEffect(() => {
    // Load Botpress webchat script
    const script = document.createElement('script')
    script.src = 'https://cdn.botpress.cloud/webchat/v3.6/shareable.html?configUrl=https://files.bpcontent.cloud/2026/05/18/16/20260518161558-DGJV5Q7D.json'
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

  return null
}
