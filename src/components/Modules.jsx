import '../styles/sections.css'
import { Lightbulb, Layers, FileCode, Wrench, Rocket } from 'lucide-react'

function Modules() {
  const workflow = [
    { 
      icon: Lightbulb,
      label: '1. Discovery & Planning', 
      summary: 'We analyze your requirements, define project scope, and create a detailed technical roadmap.' 
    },
    { 
      icon: Layers,
      label: '2. Prototyping', 
      summary: 'We rapidly prototype hardware and software to validate feasibility and user experience before full build.' 
    },
    { 
      icon: FileCode,
      label: '3. Design & Development', 
      summary: 'Our team designs and develops your solution with iterative prototyping and continuous feedback.' 
    },
    { 
      icon: Wrench,
      label: '4. Testing & Refinement', 
      summary: 'Comprehensive testing and optimization ensure your product meets all specifications and quality standards.' 
    },
    { 
      icon: Rocket,
      label: '5. Production & Delivery', 
      summary: 'We manage manufacturing, quality control, and deliver your finished smart technology solution ready for deployment.' 
    },
  ]

  return (
    <section className="workflow-section container" id="process">
      <div className="panel-header-center">
        <h2>How We Work</h2>
        <p className="subtitle">Our proven process for delivering successful smart technology projects</p>
      </div>
      <div className="workflow-grid">
        {workflow.map((step) => {
          const Icon = step.icon
          return (
            <div key={step.label} className="workflow-card">
              <div className="workflow-icon">
                <Icon size={36} strokeWidth={1.5} />
              </div>
              <h3>{step.label}</h3>
              <p>{step.summary}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Modules
