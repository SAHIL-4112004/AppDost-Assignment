"use client"

import { useEffect, useState } from "react"
import { Code2 } from "lucide-react"

export default function WelcomeAnimation() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-background flex items-center justify-center overflow-hidden animate-fade-out">
      {/* Background animated elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-bounce-slow"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Welcome content */}
      <div className="relative z-10 text-center space-y-8 px-4">
        {/* Logo animation */}
        <div className="flex justify-center">
          <div className="w-24 h-24 bg-gradient-to-br from-primary via-primary to-accent rounded-2xl flex items-center justify-center shadow-2xl animate-welcome-scale">
            <Code2 className="w-12 h-12 text-primary-foreground animate-welcome-spin" />
          </div>
        </div>

        {/* Welcome text */}
        <div className="space-y-4">
          <h1
            className="text-5xl md:text-6xl font-bold text-foreground animate-welcome-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Welcome to
          </h1>
          <div className="space-y-2">
            <p
              className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent animate-welcome-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              AppDost
            </p>
            <p className="text-xl text-accent font-semibold animate-welcome-fade-in" style={{ animationDelay: "0.7s" }}>
              Complete IT Solution
            </p>
          </div>
        </div>

        {/* Subtitle */}
        <p
          className="text-lg text-muted-foreground max-w-md mx-auto animate-welcome-fade-in"
          style={{ animationDelay: "0.9s" }}
        >
          Transform Your Business Into Digital Reality
        </p>

        {/* Loading dots */}
        <div className="flex justify-center gap-2 pt-4 animate-welcome-fade-in" style={{ animationDelay: "1.1s" }}>
          <div className="w-3 h-3 bg-primary rounded-full animate-welcome-bounce"></div>
          <div
            className="w-3 h-3 bg-accent rounded-full animate-welcome-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-3 h-3 bg-primary rounded-full animate-welcome-bounce"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
      </div>
    </div>
  )
}
