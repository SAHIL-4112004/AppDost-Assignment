"use client"

import { useState, useEffect } from "react"
import { ChevronRight, Code2, Smartphone, Zap, Shield, Users, ArrowRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import HelpingBot from "@/components/helping-bot"
import WelcomeAnimation from "@/components/welcome-animation"

export default function Home() {
  const [showModal, setShowModal] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <WelcomeAnimation />

      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-bounce-slow"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary via-primary to-accent rounded-xl flex items-center justify-center shadow-lg animate-glow">
              <Code2 className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AppDost
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {["Home", "About", "Services", "Portfolio", "Careers", "Blog", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-40">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 relative z-10 animate-slide-in-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full backdrop-blur-sm hover:bg-accent/15 transition-colors">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-accent">✨ Digital Transformation</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-foreground leading-tight tracking-tight">
                Transform Your{" "}
                <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                  Business
                </span>{" "}
                Into Digital Reality
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Your trusted partner for comprehensive IT solutions. From mobile apps to enterprise software, we bring
                innovation and excellence to every project with our expert team of developers.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setShowModal(true)}
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 text-primary-foreground font-semibold transition-all duration-300"
              >
                Start Your Project <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border/50 hover:bg-muted/50 bg-transparent backdrop-blur-sm"
              >
                Explore Our Services
              </Button>
            </div>
            <div className="flex items-center gap-12 pt-8 border-t border-border/30">
              {[
                { value: "100%", label: "Client Satisfaction" },
                { value: "24/7", label: "Support" },
                { value: "∞", label: "Scalability" },
              ].map((stat, idx) => (
                <div key={idx} className="group">
                  <p className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-96 md:h-full min-h-96 animate-slide-in-right">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 border border-primary/20 backdrop-blur-sm h-full flex flex-col justify-between overflow-hidden group hover:border-primary/40 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="space-y-4 relative z-10">
                <div className="h-40 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl animate-pulse"></div>
                <div
                  className="h-28 bg-gradient-to-br from-accent/30 to-primary/30 rounded-2xl animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-24 bg-primary/20 rounded-xl animate-pulse" style={{ animationDelay: "1s" }}></div>
                  <div className="h-24 bg-accent/20 rounded-xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="space-y-24">
          {/* Main About Content */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full backdrop-blur-sm">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span className="text-sm font-medium text-accent">About AppDost</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Your Trusted Partner for{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Digital Excellence
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                AppDost is your trusted partner for complete digital transformation. We are a dynamic, innovation-driven
                IT solutions provider specializing in turning visionary ideas into powerful, market-ready products. Our
                mission is to empower businesses with cutting-edge technology solutions that drive growth, enhance user
                experiences, and create lasting digital impact.
              </p>
              <div className="space-y-4 pt-4">
                {[
                  { icon: Shield, text: "Secure & Scalable Solutions" },
                  { icon: Users, text: "24/7 Priority Support" },
                  { icon: Zap, text: "100% Client Satisfaction" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center group-hover:from-primary/40 group-hover:to-accent/40 transition-all duration-300 animate-glow">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <span className="text-foreground font-semibold group-hover:text-primary transition-colors">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96 animate-slide-in-right">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl p-8 border border-accent/20 backdrop-blur-sm h-full flex flex-col justify-between group hover:border-accent/40 transition-all duration-500">
                <div className="space-y-4">
                  <div className="h-48 bg-gradient-to-br from-accent/30 to-primary/30 rounded-2xl group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-500"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-28 bg-primary/20 rounded-xl"></div>
                    <div className="h-28 bg-accent/20 rounded-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 rounded-3xl p-16 backdrop-blur-sm animate-slide-in-up">
            <h3 className="text-4xl font-bold text-foreground mb-16 text-center">Our Core Values</h3>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  title: "Innovation",
                  description:
                    "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.",
                  icon: "💡",
                },
                {
                  title: "Integrity",
                  description: "Transparency and honesty guide every decision we make with our clients and partners.",
                  icon: "🤝",
                },
                {
                  title: "Excellence",
                  description: "We're committed to delivering exceptional quality in every project we undertake.",
                  icon: "⭐",
                },
                {
                  title: "Collaboration",
                  description: "We work closely with our clients to understand their vision and bring it to life.",
                  icon: "🚀",
                },
              ].map((value, idx) => (
                <div
                  key={idx}
                  className="text-center space-y-4 p-6 rounded-2xl bg-background/50 border border-border/30 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group cursor-pointer animate-bounce-slow"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="text-5xl group-hover:scale-125 transition-transform duration-300">{value.icon}</div>
                  <h4 className="text-xl font-bold text-foreground">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose AppDost */}
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h3 className="text-4xl md:text-5xl font-bold text-foreground">Why Choose AppDost?</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We combine technical expertise with strategic thinking to deliver solutions that truly matter
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Complete Lifecycle Expertise", description: "From ideation to deployment and beyond" },
                { title: "Cutting-Edge Technology Stack", description: "We work with the latest tools and frameworks" },
                {
                  title: "Agile Development Process",
                  description: "Fast iterations, continuous feedback, rapid delivery",
                },
                { title: "Quality-First Approach", description: "Rigorous testing and code reviews ensure excellence" },
                { title: "Scalable Solutions", description: "Built to grow with your business" },
                { title: "Client-Centric Focus", description: "Your success is our success" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-2xl border border-border/50 hover:border-primary/50 bg-card/50 hover:bg-primary/5 transition-all duration-300 group cursor-pointer backdrop-blur-sm animate-slide-in-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-primary/40 group-hover:to-accent/40 transition-all">
                    <ChevronRight className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full backdrop-blur-sm mb-6">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            <span className="text-sm font-medium text-accent">What We Do</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Our Core Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Code2,
              title: "Web Development",
              description: "Responsive and scalable web applications tailored to your business needs.",
              stats: "10+ Projects",
            },
            {
              icon: Smartphone,
              title: "Android App Development",
              description:
                "Custom Android applications built with the latest technologies to bring your ideas to life.",
              stats: "4+ Apps",
            },
            {
              icon: Zap,
              title: "UI/UX Development",
              description: "Beautiful, intuitive user interfaces that enhance user experience and engagement.",
              stats: "1 CRM Project",
            },
            {
              icon: Zap,
              title: "CRM Software",
              description: "Comprehensive CRM solutions to manage customer relationships and boost productivity.",
              stats: "1 CRM Project",
            },
            {
              icon: Zap,
              title: "Cloud Solutions",
              description: "Scalable cloud infrastructure and migration services for modern businesses.",
              stats: "1 CRM Project",
            },
            {
              icon: Zap,
              title: "Cybersecurity",
              description: "Protect your business with robust security solutions and best practices.",
              stats: "1 CRM Project",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-2xl border border-border/50 hover:border-primary/50 bg-card/50 hover:bg-primary/5 transition-all duration-300 cursor-pointer backdrop-blur-sm overflow-hidden relative animate-slide-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg animate-glow">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <div className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                  <span>{service.stats}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Development Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full backdrop-blur-sm mb-6">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            <span className="text-sm font-medium text-accent">How We Work</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Our Development Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven methodology to deliver exceptional results every time
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              stage: "01",
              title: "Discovery & Planning",
              description:
                "We deep dive into your requirements, understand your business goals, analyze competitors, and create a comprehensive project roadmap with clear milestones.",
              icon: "🔍",
            },
            {
              stage: "02",
              title: "Design & Prototype",
              description:
                "Our design team creates intuitive wireframes, stunning UI mockups, and interactive prototypes that bring your vision to life before development begins.",
              icon: "🎨",
            },
            {
              stage: "03",
              title: "Development & Testing",
              description:
                "Expert developers write clean, scalable code while our QA team performs rigorous testing to ensure flawless functionality across all devices and platforms.",
              icon: "⚙️",
            },
            {
              stage: "04",
              title: "Deployment & Support",
              description:
                "We handle the complete deployment process and provide ongoing maintenance, updates, and 24/7 technical support to keep your solution running smoothly.",
              icon: "🚀",
            },
          ].map((process, idx) => (
            <div key={idx} className="relative group animate-bounce-slow" style={{ animationDelay: `${idx * 0.15}s` }}>
              {idx < 3 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[40%] h-1 bg-gradient-to-r from-primary/50 to-transparent group-hover:from-primary transition-all duration-300"></div>
              )}
              <div className="relative p-8 rounded-2xl border border-border/50 hover:border-primary/50 bg-card/50 hover:bg-primary/5 transition-all duration-300 h-full backdrop-blur-sm group-hover:shadow-lg group-hover:shadow-primary/20">
                <div className="absolute -top-5 -left-5 w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center border-4 border-background shadow-lg animate-pulse">
                  <span className="text-sm font-bold text-primary-foreground">{process.stage}</span>
                </div>
                <div className="pt-6 space-y-4">
                  <div className="text-5xl">{process.icon}</div>
                  <h3 className="text-xl font-bold text-foreground">{process.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{process.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden flex justify-center items-center gap-2 mt-12">
          {[1, 2, 3, 4].map((dot) => (
            <div key={dot} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse"></div>
              {dot < 4 && <div className="w-6 h-0.5 bg-primary/30"></div>}
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full backdrop-blur-sm mb-6">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            <span className="text-sm font-medium text-accent">Portfolio</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Our Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real solutions for real businesses - explore our successful projects
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              emoji: "🤖",
              title: "BEU Mate - Bihar Engineering",
              subtitle: "AI-Powered Educational Platform",
              description:
                "An AI-powered study companion for B.Tech students offering personalized learning, career guidance, and placement preparation.",
              tags: ["React Native", "Node.js", "AI/ML"],
            },
            {
              emoji: "📚",
              title: "Devskillquest",
              subtitle: "Interactive Learning Platform",
              description:
                "An interactive learning platform designed for aspiring developers to master coding skills through hands-on projects and challenges.",
              tags: ["Next.js", "TypeScript", "PostgreSQL"],
            },
            {
              emoji: "💍",
              title: "The Weddings Chapter",
              subtitle: "Wedding Planning Portal",
              description:
                "A premium wedding planning platform connecting couples with top vendors, venues, and services. Features vendor portfolios and booking management.",
              tags: ["PHP", "Laravel", "MySQL"],
            },
          ].map((project, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border border-border/50 hover:border-primary/50 bg-card/50 hover:bg-primary/5 transition-all duration-300 overflow-hidden backdrop-blur-sm hover:shadow-lg hover:shadow-primary/20 animate-slide-in-up"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="h-56 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                <div className="text-8xl group-hover:scale-110 transition-transform duration-300 animate-float">
                  {project.emoji}
                </div>
              </div>
              <div className="p-8 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{project.title}</h3>
                  <p className="text-sm text-accent font-semibold">{project.subtitle}</p>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 hover:bg-primary/20 text-primary text-xs font-medium rounded-full transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-4 border-t border-border/30">
                  <a
                    href="#"
                    className="flex-1 px-3 py-2 bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium rounded-lg transition text-center"
                  >
                    📱 Play Store
                  </a>
                  <a
                    href="#"
                    className="flex-1 px-3 py-2 bg-accent/10 hover:bg-accent/20 text-accent text-sm font-medium rounded-lg transition text-center"
                  >
                    🌐 Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 text-primary-foreground font-semibold"
          >
            View All Projects <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* Technologies */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full backdrop-blur-sm mb-6">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            <span className="text-sm font-medium text-accent">Tech Stack</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Technologies We Master</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build robust, scalable, and innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "React", icon: "⚛️" },
            { name: "Node.js", icon: "🟢" },
            { name: "Python", icon: "🐍" },
            { name: "MongoDB", icon: "🍃" },
            { name: "AWS", icon: "☁️" },
            { name: "Docker", icon: "🐳" },
            { name: "Kotlin", icon: "📱" },
            { name: "TypeScript", icon: "💙" },
          ].map((tech, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl border border-border/50 hover:border-primary/50 bg-card/50 hover:bg-primary/5 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center space-y-3 group backdrop-blur-sm hover:shadow-lg hover:shadow-primary/20 animate-slide-in-up"
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              <div className="text-6xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 animate-rotate-slow">
                {tech.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 rounded-2xl border border-border/50 bg-gradient-to-r from-primary/5 to-accent/5 backdrop-blur-sm animate-slide-in-up">
          <div className="text-center space-y-4">
            <h3 className="text-3xl font-bold text-foreground">Always Learning, Always Growing</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our team stays updated with the latest technologies and best practices to deliver future-proof solutions
              that scale with your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-3xl p-16 backdrop-blur-sm">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            {[
              { number: "10+", label: "Web Projects", icon: "🌐" },
              { number: "4+", label: "Android Apps", icon: "📱" },
              { number: "1", label: "CRM Project", icon: "🎯" },
              { number: "2025", label: "Founded Year", icon: "🚀" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="space-y-3 group animate-bounce-slow"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <p className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  {stat.number}
                </p>
                <p className="text-muted-foreground font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-gradient-to-r from-primary via-primary to-accent rounded-3xl p-16 md:p-20 text-center text-primary-foreground relative overflow-hidden group animate-slide-in-up">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-accent/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto">
              Let's discuss how AppDost can help you achieve your digital goals
            </p>
            <Button
              onClick={() => setShowModal(true)}
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Get Free Consultation <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-4 gap-16 mb-16">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="font-bold text-lg text-foreground">AppDost</span>
              </div>
              <p className="text-sm text-muted-foreground font-medium">Complete IT Solution</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Delivering innovative IT solutions since 2025. We transform ideas into powerful digital experiences with
                cutting-edge technology and expert craftsmanship.
              </p>
              <div className="space-y-2 pt-4 border-t border-border/30">
                {[
                  { value: "10+", label: "Web Projects" },
                  { value: "4+", label: "Android Apps" },
                  { value: "1", label: "CRM System" },
                ].map((stat, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {[
              { title: "Quick Links", links: ["Home", "Services", "Careers", "Blog", "Contact"] },
              {
                title: "Our Services",
                links: [
                  "Android App Development",
                  "Web Development",
                  "UI/UX Design",
                  "CRM Software",
                  "Cloud Solutions",
                  "Cybersecurity",
                ],
              },
            ].map((section, idx) => (
              <div key={idx}>
                <h4 className="font-semibold text-foreground mb-6">{section.title}</h4>
                <ul className="space-y-3 text-sm">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform">→</span> {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h4 className="font-semibold text-foreground mb-6">Contact Info</h4>
              <div className="space-y-4 text-sm">
                <p className="text-muted-foreground hover:text-primary transition cursor-pointer">contact@appdost.in</p>
                <div className="space-y-1">
                  <p className="text-muted-foreground">
                    <a href="tel:+917635075422" className="hover:text-primary transition">
                      +91 76350 75422
                    </a>
                  </p>
                  <p className="text-muted-foreground">/</p>
                  <p className="text-muted-foreground">
                    <a href="tel:+911169290750" className="hover:text-primary transition">
                      +91 11 6929 0750
                    </a>
                  </p>
                </div>
                <div className="text-muted-foreground text-xs">
                  <p className="font-medium">Mon - Sat: 9:00 AM - 6:00 PM IST</p>
                  <p className="mt-2">3 Offices: Banka (HQ), Motihari, Patna</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border/30 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>© 2025 AppDost - Complete IT Solution. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-foreground transition">
                  Privacy Policy
                </a>
                <span>•</span>
                <a href="#" className="hover:text-foreground transition">
                  Terms of Service
                </a>
                <span>•</span>
                <a href="#" className="hover:text-foreground transition">
                  Sitemap
                </a>
              </div>
            </div>
            <div className="text-center mt-6 text-sm text-muted-foreground">
              <p>Built with ❤️ in India</p>
            </div>
          </div>
        </div>
      </footer>

      <HelpingBot />

      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-card rounded-3xl p-8 max-w-md w-full relative animate-in zoom-in-95 border border-border/50 backdrop-blur-sm shadow-2xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-2 hover:bg-muted rounded-lg transition"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>

            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                <span className="text-xs font-bold text-accent uppercase tracking-wider">LIMITED TIME OFFER</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-foreground">🎯 Wait! Don't Leave Yet!</h3>
                <p className="text-lg font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Get 10% OFF on Your First Project
                </p>
              </div>

              <p className="text-muted-foreground">
                Transform your business with professional IT solutions. Limited time offer for new clients!
              </p>

              <div className="space-y-3 bg-muted/30 rounded-xl p-4 border border-border/30">
                {[
                  "Free consultation worth ₹5,000",
                  "10% discount on first project",
                  "Priority support for 3 months",
                  "Free maintenance for 1 month",
                ].map((benefit, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 animate-slide-in-left"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <span className="text-accent text-lg mt-0.5">✓</span>
                    <span className="text-sm text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 text-primary-foreground h-12 font-semibold">
                Claim Your Offer <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <button
                onClick={() => setShowModal(false)}
                className="w-full text-muted-foreground hover:text-foreground transition text-sm font-medium"
              >
                No thanks, I'll pay full price
              </button>

              <p className="text-xs text-accent font-semibold">⏰ Offer expires in 24 hours!</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
