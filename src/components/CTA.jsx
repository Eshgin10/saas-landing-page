import './CTA.css'
import terminalIcon from '../assets/terminal.png'
import codingCTAIcon from '../assets/codingCTA.png'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const CTA = () => {
  const [sectionRef, isVisible] = useIntersectionObserver()

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="cta-section"
    >
      <div className="cta-wrapper">
        <div className={`cta-box ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="cta-heading">
            Ready to{' '}
            <span className="cta-heading-icon">
              <img src={codingCTAIcon} alt="Code icon" />
            </span>{' '}
            transform your workflow?
          </h2>
          <p className="cta-text">
            Join thousands of developers who are already building faster with AI-powered assistance. 
            Start your free 14-day trial today—no credit card required.
          </p>
          <button className="cta-button">
            <span>Start Free Trial</span>
            <img src={terminalIcon} alt="Terminal" className="cta-btn-icon" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTA

