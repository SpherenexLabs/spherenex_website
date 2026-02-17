import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import '../styles/nav.css'
import logo from '../assets/images/SpherenexLogo.png'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="nav" role="banner">
      <div className="nav-container">
        <a className="brand" href="/" onClick={() => setIsMenuOpen(false)}>
          <img src={logo} alt="Spherenex Smart Technology" className="brand-logo" loading="eager" fetchPriority="high" />
        </a>
        
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className={`nav-right ${isMenuOpen ? 'nav-open' : ''}`}>
          <nav className="nav-links">
            <a href="/#hero" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="/#company" onClick={() => setIsMenuOpen(false)}>Company</a>
            <a href="/#services" onClick={() => setIsMenuOpen(false)}>Expertise</a>
            <a href="/#get-started" onClick={() => setIsMenuOpen(false)}>Case studies</a>
          </nav>
          <a className="solid" href="/#contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navigation
