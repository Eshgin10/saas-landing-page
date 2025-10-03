import './Testimonials.css'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const TestimonialCard = ({ quote, author, role, avatar }) => {
  return (
    <div className="t-card">
      <p className="t-quote">“{quote}”</p>
      <div className="t-footer">
        <img className="t-avatar" src={avatar} alt={author} loading="lazy" />
        <div className="t-author">
          <span className="t-name">{author}</span>
          <span className="t-role">{role}</span>
        </div>
      </div>
    </div>
  )
}

const Testimonials = () => {
  const [sectionRef, isVisible] = useIntersectionObserver()

  const rowA = [
    { quote: 'Cut our PR review time by 60%.', author: 'Maya Chen', role: 'Staff Engineer, Orbit', avatar: 'https://i.pravatar.cc/80?img=1' },
    { quote: 'Finally, AI that understands our codebase.', author: 'Arman Sule', role: 'Tech Lead, Flowly', avatar: 'https://i.pravatar.cc/80?img=2' },
    { quote: 'Docs stay up to date automatically.', author: 'Ivy Park', role: 'Engineering Manager, Lumen', avatar: 'https://i.pravatar.cc/80?img=3' },
    { quote: 'Debugging across services is a breeze.', author: 'Diego Ruiz', role: 'SRE, Northwind', avatar: 'https://i.pravatar.cc/80?img=4' },
  ]
  const rowB = [
    { quote: 'The suggestions feel human and contextual.', author: 'Hiro Tanaka', role: 'Principal Engineer, Kano', avatar: 'https://i.pravatar.cc/80?img=5' },
    { quote: 'Onboarded juniors 2x faster.', author: 'Emma Walsh', role: 'Director of Eng, Alto', avatar: 'https://i.pravatar.cc/80?img=6' },
    { quote: 'Beautiful developer UX.', author: 'Samir Patel', role: 'CTO, Nova', avatar: 'https://i.pravatar.cc/80?img=7' },
    { quote: 'Code reviews are much more consistent.', author: 'Ava Rossi', role: 'Lead Dev, Arcadia', avatar: 'https://i.pravatar.cc/80?img=8' },
  ]

  // Duplicate arrays exactly 2x for perfect seamless loop
  // Animation will move exactly 50% then reset invisibly
  const loopA = [...rowA, ...rowA]
  const loopB = [...rowB, ...rowB]

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="t-section"
    >
      <div className="t-container">
        <header className={`t-header animate-header ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="t-title">Loved by engineering teams</h2>
          <p className="t-subtitle">What developers say about building with CodeFlow</p>
        </header>

        <div className={`t-marquee t-marquee-a animate-item-scale ${isVisible ? 'animate-in' : ''}`}>
          <div className="t-track">
            {loopA.map((t, i) => (
              <TestimonialCard key={`a-${i}`} quote={t.quote} author={t.author} role={t.role} avatar={t.avatar} />
            ))}
          </div>
        </div>

        <div className={`t-marquee t-marquee-b animate-item-scale ${isVisible ? 'animate-in' : ''}`}>
          <div className="t-track">
            {loopB.map((t, i) => (
              <TestimonialCard key={`b-${i}`} quote={t.quote} author={t.author} role={t.role} avatar={t.avatar} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials