import './Hero.css'
import terminalIcon from '../assets/terminal.png'
import heroImage from '../assets/hero-image.png'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="home" className="hero">
      {/* Full-width header */}
      <header className="hero-header">
        <div className="hero-header-container">
          {/* Logo placeholder on far left */}
          <div className="hero-logo">
            <a href="#home" className="logo-placeholder">CodeFlow</a>
          </div>
          
          {/* Navigation menu centered */}
          <nav className="hero-nav">
            <a href="#features" className="nav-link">Features</a>
            <a href="#benefits" className="nav-link">Benefits</a>
            <a href="#about" className="nav-link">Testimonials</a>
            <a href="#pricing" className="nav-link">Pricing</a>
          </nav>
          
          {/* CTA button on far right */}
          <div className="hero-header-cta">
            <button className="hero-btn hero-btn-primary">
              Get Started
              <img src={terminalIcon} alt="Terminal" className="btn-icon" />
            </button>
          </div>
        </div>
      </header>

      {/* Main content - single center-aligned column */}
      <div className="hero-main">
        <div className="hero-main-container">
          {/* Social proof section */}
          <div className={`hero-proof-badge animate-item ${isVisible ? 'animate-in' : ''}`}>
            <span className="proof-text">
              <span className="proof-number">2,400+</span> developers currently using it daily
            </span>
            <span className="proof-divider">•</span>
            <span className="proof-text">
              <span className="proof-number">47</span> companies testing it
            </span>
          </div>
          
          {/* Large multi-line heading */}
          <h1 className={`hero-title animate-item ${isVisible ? 'animate-in' : ''}`}>
          An AI Teammate That Knows Your Code as Well as You Do
          </h1>
          
          {/* Subheading */}
          <h2 className={`hero-subheading animate-item ${isVisible ? 'animate-in' : ''}`}>
            Debug, refactor, and document with an AI that truly understands your codebase.
          </h2>
          
          {/* Centered CTA button */}
          <div className={`hero-main-cta animate-item ${isVisible ? 'animate-in' : ''}`}>
            <button className="hero-btn hero-btn-primary">
              Start Coding Smarter
              <img src={terminalIcon} alt="Terminal" className="btn-icon" />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className={`hero-image-container animate-item ${isVisible ? 'animate-in' : ''}`}>
        <img src={heroImage} alt="CodeFlow Dashboard" className="hero-image" />
      </div>
    </section>
  )
}

export default Hero
