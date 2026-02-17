import '../styles/sections.css'
import { CheckCircle2 } from 'lucide-react'

function Industries() {
  const benefits = [
    { title: 'End-to-End Solutions', detail: 'From initial concept to final production, we handle every stage of your smart technology project.' },
    { title: 'Expert Team', detail: 'Our engineers specialize in both hardware and software, providing complete technical expertise.' },
    { title: 'Fast Turnaround', detail: 'We adapt quickly to your needs with efficient workflows and agile development processes.' },
    { title: 'Quality Assurance', detail: 'Rigorous testing and validation at every stage ensure reliable, production-ready solutions.' },
    { title: 'Flexible Engagement', detail: 'Work with us on single services or full-stack development—we scale to your needs.' },
    { title: 'Ongoing Support', detail: 'We build long-term partnerships, providing continuous optimization and technical support.' },
  ]

  return (
    <section className="why-us-section container" id="why-us">
      <div className="panel-header-center">
        <h2>Why Choose Spherenex</h2>
        <p className="subtitle">The advantages of partnering with us for smart technology development</p>
      </div>
      <div className="benefits-grid">
        {benefits.map((benefit) => (
          <div key={benefit.title} className="benefit-card">
            <div className="benefit-icon">
              <CheckCircle2 size={28} strokeWidth={2} />
            </div>
            <div className="benefit-content">
              <h3>{benefit.title}</h3>
              <p>{benefit.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Industries
