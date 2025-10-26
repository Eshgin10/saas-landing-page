import './Pricing.css'
import { useState, useEffect } from 'react'
import terminalIcon from '../assets/terminal.png'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const PricingCard = ({ title, description, price, period, features, ctaText, isHighlighted, isEnterprise }) => {
  return (
    <div className={`pricing-card ${isHighlighted ? 'pricing-card-highlighted' : ''}`}>
      <div className="pricing-card-header">
        <h3 className="pricing-card-title">{title}</h3>
        <p className="pricing-card-desc">{description}</p>
      </div>
      
      <div className="pricing-card-price">
        {price ? (
          <>
            <div className="pricing-amount">{price}</div>
            <div className="pricing-period">{period}</div>
          </>
        ) : (
          <div className="pricing-quote">Get quote</div>
        )}
      </div>

      <div className="pricing-card-divider"></div>

      <ul className="pricing-features">
        {features.map((feature, idx) => (
          <li key={idx} className="pricing-feature">
            <svg className="pricing-check" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button className="pricing-cta">
        <span>{ctaText}</span>
        {isEnterprise ? (
          <svg className="pricing-phone-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.5953 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.89384 7.65088C9.81403 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5864 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.186 16.3491 14.1062C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          <img src={terminalIcon} alt="Terminal" className="pricing-btn-icon" />
        )}
      </button>
    </div>
  )
}

const Pricing = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false
    return window.matchMedia('(max-width: 768px)').matches
  })
  const [sectionRef, isVisible] = useIntersectionObserver({ trackOnce: !isSmallScreen })
  const [isYearly, setIsYearly] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) {
      return
    }

    const mediaQuery = window.matchMedia('(max-width: 768px)')
    const handleChange = event => setIsSmallScreen(event.matches)

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    }

    mediaQuery.addListener(handleChange)
    return () => mediaQuery.removeListener(handleChange)
  }, [])

  const plans = [
    {
      title: 'Starter',
      description: 'Perfect for individual developers',
      price: isYearly ? '$9' : '$12',
      period: isYearly ? 'per month, billed yearly' : 'per month',
      features: [
        'AI-powered code suggestions',
        'Basic context awareness',
        'Up to 500 completions/month',
        'Standard support',
        'Community access'
      ],
      ctaText: 'Start free trial',
      isHighlighted: false
    },
    {
      title: 'Growth',
      description: 'For growing teams',
      price: isYearly ? '$29' : '$39',
      period: isYearly ? 'per user/month, billed yearly' : 'per user/month',
      features: [
        'Everything in Starter',
        'Advanced contextual suggestions',
        'Unlimited completions',
        'Automated documentation',
        'Intelligent debugging',
        'Code review automation',
        'Priority support',
        'Team analytics'
      ],
      ctaText: 'Start free trial',
      isHighlighted: true
    },
    {
      title: 'Enterprise',
      description: 'Custom solutions at scale',
      price: null,
      period: 'Custom pricing',
      features: [
        'Everything in Growth',
        'Self-hosted deployment',
        'Custom AI model training',
        'Advanced security & compliance',
        'Dedicated support',
        'SLA guarantee',
        'Custom integrations',
        'Onboarding & training'
      ],
      ctaText: 'Contact sales',
      isHighlighted: false,
      isEnterprise: true
    }
  ]

  return (
    <section 
      ref={sectionRef}
      id="pricing" 
      className="pricing-section"
    >
      <div className="pricing-container">
        <div className={`pricing-intro animate-header ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="pricing-main-title">Simple, transparent pricing</h2>
          <p className="pricing-subtitle">Choose the plan that fits your team's needs. All plans include a 14-day free trial.</p>
        </div>

        <div className={`pricing-toggle-wrapper animate-item ${isVisible ? 'animate-in' : ''}`}>
          <button 
            className={`pricing-toggle-btn ${isYearly ? 'active' : ''}`}
            onClick={() => setIsYearly(true)}
          >
            <span>Yearly</span>
            <span className="pricing-badge">Save 25%</span>
          </button>
          <button 
            className={`pricing-toggle-btn ${!isYearly ? 'active' : ''}`}
            onClick={() => setIsYearly(false)}
          >
            Monthly
          </button>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, idx) => (
            <div key={idx} className={`animate-item-scale ${isVisible ? 'animate-in' : ''}`}>
              <PricingCard {...plan} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing

