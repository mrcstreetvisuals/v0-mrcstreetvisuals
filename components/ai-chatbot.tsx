'use client'

import { useChat } from 'ai/react'
import { useState } from 'react'
import { Send, X, MessageCircle } from 'lucide-react'

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
  })

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-1.5rem)] h-[600px] max-h-[calc(100vh-3rem)] bg-slate-900 border border-slate-700 rounded-lg shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-500 to-purple-600 p-4 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-white">mrcstreetvisuals</h3>
              <p className="text-xs text-red-100">AI Assistant</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 p-1 rounded transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <div className="text-center text-gray-400 text-sm mt-8">
                <p className="font-semibold text-white mb-2">Welcome to mrcstreetvisuals!</p>
                <p>Ask me about our photography services, packages, or portfolio.</p>
              </div>
            )}
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-red-500 text-white rounded-br-none'
                      : 'bg-slate-700 text-gray-100 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-700 text-gray-100 px-4 py-2 rounded-lg rounded-bl-none">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce delay-100" />
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="border-t border-slate-700 p-4 flex gap-2 bg-slate-800"
          >
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Ask something..."
              className="flex-1 bg-slate-700 text-white placeholder-gray-400 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-red-500 transition-all"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white rounded-lg px-4 py-2 transition-all flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  )
}
