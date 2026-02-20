import '../styles/sections.css'
import { Mail, Phone } from 'lucide-react'

function CTA() {
  return (
    <section className="contact-section container" id="contact">
      <div className="contact-header">
        <h2>Let's Talk About Your Project</h2>
        <p>Get in touch with our team to discuss your smart technology needs</p>
      </div>
      <div className="contact-methods">
        <a href="mailto:connect@spherenex.com" className="contact-card">
          <Mail size={32} />
          <span className="contact-label">Email Us</span>
          <span className="contact-value">connect@spherenex.com</span>
        </a>
      </div>
    </section>
  )
}

export default CTA
