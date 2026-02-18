import { Link } from 'react-router-dom'
import '../styles/footer.css'
import logo from '../assets/images/SpherenexLogo.png'
import { Mail, Phone, Download, Instagram, Linkedin } from 'lucide-react'

function Footer() {
  const socialLinks = [
    { title: 'INSTAGRAM', link: 'https://www.instagram.com/spherenex_india?igsh=M3hzZjVpNnd5cXYw' },
    { title: 'LINKEDIN', link: 'https://www.linkedin.com/company/spherenex/' }
  ]

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        <div className="footer-brand">
          <img src={logo} alt="Spherenex" className="footer-logo" loading="eager" fetchPriority="high" />
          <p className="footer-tagline">Professional smart technology services—software, hardware, prototyping, and production. Based in Austin, serving clients globally.</p>
          
          <div className="footer-social">
            <a 
              href={socialLinks[0].link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href={socialLinks[1].link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <Link to="/blog" className="footer-link">Blog</Link>
          <Link to="/newsletter" className="footer-link">Newsletter</Link>
          <Link to="/support" className="footer-link">Support</Link>
          <Link to="/terms-of-service" className="footer-link">Terms of Service</Link>
          <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
        </div>
                <div className="footer-contact">
          <a href="mailto:connects@spherenex.com" className="footer-link">
            <Mail size={18} />
            connects@spherenex.com
          </a>
          {/* <a href="tel:+918861938913" className="footer-link">
            <Phone size={18} />
            +91 8861938913
          </a> */}
          <a className="ghost" href="mailto:connects@spherenex.com?subject=Spherenex%20Deck%20Request">
            <Download size={18} />
            Download deck
          </a>
        </div>
      </div>
      
      <div className="footer-copyright">
        <p>© 2025 Spherenex A Unit of NexSpyder Technologies Pvt. Ltd.</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
