import { Link } from 'react-router-dom'
import '../styles/sections.css'
import { ArrowRight } from 'lucide-react'

function CaseStudies() {
  return (
    <section className="cta-section" id="get-started">
      <div className="cta-container">
        <div className="cta-content">
          <h2>Ready to Start Your Smart Technology Project?</h2>
          <p className="cta-description">
            Let's discuss how our services can bring your vision to life. Schedule a free consultation with our engineering team.
          </p>
          <div className="cta-buttons">
            <a className="solid large" href="/support">
              Get Started
              <ArrowRight size={20} />
            </a>
            <Link className="ghost large" to="/work">
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
