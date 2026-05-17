'use client'

import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'
import { useState, useEffect, useRef } from 'react'
import { Send, X, MessageCircle, AlertCircle } from 'lucide-react'

interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  parts?: Array<{ type: string; text: string }>
}

const MAX_INPUT_LENGTH = 500
const RATE_LIMIT_MESSAGES = 20
const RATE_LIMIT_WINDOW = 3600000 // 1 hour in milliseconds

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [localInput, setLocalInput] = useState('')
  const [mounted, setMounted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [messageCount, setMessageCount] = useState(0)
  const [lastResetTime, setLastResetTime] = useState(Date.now())
  const messagesEndRef = useRef<HTMLDivElement>(null)
  
  // Ensure component is mounted before rendering to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Auto-scroll to bottom of messages when new messages arrive or status changes
  useEffect(() => {
    const timer = setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, 0)
    return () => clearTimeout(timer)
  }, [messages, status])

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
    }),
    initialMessages: [
      {
        id: '1',
        role: 'assistant',
        parts: [
          {
            type: 'text',
            text: 'Hello! I\'m here to help you with any questions about mrcstreetvisuals. Feel free to ask about my services, portfolio, or photography journey!',
          },
        ],
      },
    ],
    onError: (error) => {
      console.error('[v0] Chat error:', error)
      setError('Failed to send message. Please try again.')
    },
    onFinish: () => {
      // Clear error when message completes successfully
      if (status !== 'error') {
        setError(null)
      }
    },
  })

  // Helper function to extract text from UIMessage parts
  const getMessageText = (message: ChatMessage): string => {
    if (!message.parts || !Array.isArray(message.parts)) return ''
    return message.parts
      .filter((p) => p.type === 'text')
      .map((p) => p.text)
      .join('')
  }

  // Validate and handle input submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Input validation
    if (!localInput || !localInput.trim()) {
      setError('Please enter a message')
      return
    }

    if (localInput.length > MAX_INPUT_LENGTH) {
      setError(`Message must be ${MAX_INPUT_LENGTH} characters or less`)
      return
    }

    // Rate limiting check
    const now = Date.now()
    if (now - lastResetTime > RATE_LIMIT_WINDOW) {
      setMessageCount(0)
      setLastResetTime(now)
    }

    if (messageCount >= RATE_LIMIT_MESSAGES) {
      setError('Too many messages. Please wait a moment before sending another.')
      return
    }

    // Clear validation errors before sending
    setError(null)
    
    // Send message and update counter
    sendMessage({ text: localInput })
    setLocalInput('')
    setMessageCount(messageCount + 1)
  }

  // Handle input change with validation
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value.length <= MAX_INPUT_LENGTH) {
      setLocalInput(value)
      setError(null) // Clear error when user starts typing
    }
  }

  if (!mounted) return null

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 p-3 sm:p-4 rounded-full bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          aria-label="Open AI chat assistant"
          title="Chat with our AI assistant"
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div 
          className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 w-full sm:w-96 max-w-[calc(100vw-1rem)] h-[500px] sm:h-[600px] max-h-[calc(100vh-2rem)] bg-slate-900 border border-slate-700 rounded-lg shadow-2xl flex flex-col overflow-hidden"
          role="dialog"
          aria-labelledby="chat-header"
          aria-modal="true"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-red-500 to-purple-600 p-3 sm:p-4 flex items-center justify-between flex-shrink-0">
            <div>
              <h3 id="chat-header" className="font-bold text-white text-sm sm:text-base">mrcstreetvisuals</h3>
              <p className="text-xs text-red-100">AI Assistant</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 p-1 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close chat"
              title="Close chat (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-4" role="log" aria-live="polite" aria-label="Chat messages">
            {messages.length === 0 && (
              <div className="text-center text-gray-400 text-xs sm:text-sm mt-6 sm:mt-8 px-2">
                <p className="font-semibold text-white mb-2">Welcome to mrcstreetvisuals!</p>
                <p className="leading-relaxed">Ask me about our photography services, packages, or photography journey.</p>
              </div>
            )}
            
            {messages.map((message: ChatMessage) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs sm:max-w-sm px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm break-words ${
                    message.role === 'user'
                      ? 'bg-red-500 text-white rounded-br-none'
                      : 'bg-slate-700 text-gray-100 rounded-bl-none'
                  }`}
                  role={message.role === 'user' ? 'region' : 'region'}
                  aria-label={message.role === 'user' ? 'Your message' : 'Assistant message'}
                >
                  {getMessageText(message)}
                </div>
              </div>
            ))}
            
            {status === 'streaming' && (
              <div className="flex justify-start">
                <div className="bg-slate-700 text-gray-100 px-3 sm:px-4 py-2 rounded-lg rounded-bl-none">
                  <div className="flex gap-2" aria-label="Assistant is typing">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  </div>
                </div>
              </div>
            )}
            
            {/* Error Message Display - Only for API/request errors */}
            {error && status !== 'submitted' && !localInput && (
              <div 
                className="bg-red-900/30 border border-red-500/50 rounded-lg px-3 sm:px-4 py-2 flex items-start gap-2 text-xs sm:text-sm"
                role="alert"
              >
                <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-red-200">{error}</p>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Section */}
          <form
            onSubmit={handleSubmit}
            className="border-t border-slate-700 p-3 sm:p-4 flex gap-2 bg-slate-800 flex-shrink-0"
          >
            <div className="flex-1 flex flex-col gap-1">
              <input
                type="text"
                value={localInput}
                onChange={handleInputChange}
                placeholder="Ask something..."
                maxLength={MAX_INPUT_LENGTH}
                disabled={status === 'streaming'}
                className="w-full bg-slate-700 text-white placeholder-gray-400 rounded-lg px-3 sm:px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Message input"
                autoComplete="off"
              />
              {localInput.length > 0 && (
                <span className="text-xs text-gray-400 text-right">
                  {localInput.length}/{MAX_INPUT_LENGTH}
                </span>
              )}
            </div>
            <button
              type="submit"
              disabled={status === 'streaming' || !localInput?.trim()}
              className="bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white rounded-lg px-3 sm:px-4 py-2 transition-all flex items-center gap-2 flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:cursor-not-allowed"
              aria-label={status === 'streaming' ? 'Waiting for response...' : 'Send message'}
              title={status === 'streaming' ? 'Waiting for AI response...' : 'Send message (Enter or click button)'}
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  )
}
