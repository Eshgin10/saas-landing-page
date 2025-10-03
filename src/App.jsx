import Hero from './components/Hero'
import LayoutBuilder from './components/LayoutBuilder'
import Testimonials from './components/Testimonials'
import Benefits from './components/Benefits'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Hero />
      <LayoutBuilder />
      <Benefits />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
