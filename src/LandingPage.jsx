import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Capabilities from './components/Capabilities'
import Industries from './components/Industries'
import Modules from './components/Modules'
import Process from './components/Process'
import CaseStudies from './components/CaseStudies'
import CTA from './components/CTA'
import Footer from './components/Footer'

function LandingPage() {
  return (
    <div className="page-shell">
      <div className="bg-wrap">
        <div className="bg-grid" aria-hidden="true" />
        <div className="bg-gradient" aria-hidden="true" />
        <div className="bg-radial" aria-hidden="true" />
      </div>

      <Navigation />

      <main className="main" role="main">
        <Hero />
        <Capabilities />
        <Industries />
        <Modules />
        <Process />
        <CaseStudies />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}

export default LandingPage
