import '../styles/hero.css'
import heroVideo from '../assets/robo1.mp4'

function Hero() {
  return (
    <section className="hero" id="hero">
      <video className="hero-bg-video" src={heroVideo} autoPlay muted loop playsInline aria-label="Spherenex smart technology in action" />
      <div className="hero-overlay" />
      <div className="hero-content container">
        <div className="hero-copy">
          <h1>Your Complete Smart Technology Partner</h1>
          <p className="lede">
            We provide end-to-end smart technology development—from software and hardware engineering to prototyping and mass production. Your vision, our expertise.
          </p>
          <div className="hero-actions">
            <a className="solid large" href="#services">
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
