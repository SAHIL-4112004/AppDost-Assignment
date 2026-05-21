"use client"

import { useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HelpingBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Array<{ type: "user" | "bot"; text: string }>>([
    { type: "bot", text: "Hi! 👋 How can I help you today?" },
  ])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { type: "user", text: input }])
      setInput("")
      // Simulate bot response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            text: "Thanks for your message! Our team will get back to you shortly. 🚀",
          },
        ])
      }, 500)
    }
  }

  return (
    <>
      {/* Floating Bot Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 left-8 z-40 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center text-primary-foreground animate-bounce-slow group"
        aria-label="Open help chat"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-20 blur-lg transition-opacity"></div>
        {isOpen ? (
          <X className="w-6 h-6 relative z-10" />
        ) : (
          <>
            <MessageCircle className="w-6 h-6 relative z-10 animate-float" />
            {/* Notification dot */}
            <div className="absolute top-2 right-2 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
          </>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 left-8 z-40 w-96 max-w-[calc(100vw-2rem)] bg-card border border-border/50 rounded-2xl shadow-2xl backdrop-blur-sm overflow-hidden animate-slide-in-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-accent p-6 text-primary-foreground">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold">AppDost Support</h3>
                  <p className="text-xs opacity-90">Always here to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-primary-foreground/20 rounded-lg transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4 bg-background/50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"} animate-slide-in-up`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.type === "user"
                      ? "bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-br-none"
                      : "bg-muted text-foreground rounded-bl-none"
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-border/30 p-4 bg-card/50 backdrop-blur-sm">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 rounded-lg bg-background border border-border/50 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 transition"
              />
              <Button
                onClick={handleSend}
                size="sm"
                className="bg-gradient-to-r from-primary to-accent hover:shadow-lg text-primary-foreground"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
