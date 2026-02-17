import '../styles/sections.css'
import '../styles/responsive.css'
import companyImage from '../assets/images/about.png'

function Process() {
  return (
    <section className="panel container" id="company">
      <div className="company-section">
        <div className="company-content">
          <h2>Your Trusted Smart Technology Partner</h2>
          <p>
            We provide comprehensive smart technology development services to companies worldwide—delivering expert solutions across software, hardware, prototyping, and production.
          </p>
          <p className="watchword">
            Our approach? <strong>Full-Service Excellence:</strong> We handle every aspect of your smart technology project so you can focus on your business.
          </p>
          <div className="ceo-signature">
            <p className="ceo-name">FOUNDER, CEO</p>
            <p className="company-name">Spherenex </p>
          </div>
          <a className="ghost" href="#services">
            Learn About Our Services
          </a>
        </div>
        <div className="company-image">
          <img src={companyImage} alt="Spherenex Smart Technology" loading="lazy" />
        </div>
      </div>
    </section>
  )
}

export default Process
