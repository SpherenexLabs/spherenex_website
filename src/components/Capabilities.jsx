import { Link } from 'react-router-dom'
import '../styles/sections.css'
import { services } from '../data/content'
import * as Icons from 'lucide-react'

function Capabilities() {

  return (
    <section className="panel container" id="services">
      <div className="panel-header-center">
        <h2>Our Services</h2>
        <p className="subtitle">Complete smart technology services tailored to your project needs</p>
      </div>

      <div className="card-grid">
        {services.map((service) => {
          const Icon = Icons[service.icon]
          return (
            <article key={service.title} className="card">
              <div className="card-icon">
                <Icon size={32} strokeWidth={1.5} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to={service.link} className="card-link">
                View details →
              </Link>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Capabilities
