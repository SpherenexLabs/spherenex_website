import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

function WorkPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const projects = [
    {
      id: 1,
      title: 'Smart Robotics Solution',
      category: 'Robotic Design',
      image: 'robotics.jpg',
      description: 'Advanced robotic system designed for industrial automation and precision manufacturing.',
    },
    {
      id: 2,
      title: 'Hardware Integration Platform',
      category: 'Hardware Engineering',
      image: 'expertise.png',
      description: 'Custom hardware solution integrating multiple sensors and control systems.',
    },
    {
      id: 3,
      title: 'Embedded Control System',
      category: 'Software Development',
      image: 'image1.jpg',
      description: 'Real-time embedded software for precision control and automation.',
    },
    {
      id: 4,
      title: 'Production Ready Prototype',
      category: 'Prototyping Services',
      image: 'about.png',
      description: 'Rapid prototyping and validation for next-generation smart technology.',
    },
    {
      id: 5,
      title: 'Industrial Product Design',
      category: 'Industrial Design',
      image: 'image3.png',
      description: 'User-centered industrial design combining aesthetics with functionality.',
    },
    {
      id: 6,
      title: 'Manufacturing Excellence',
      category: 'Production Management',
      image: 'image2.png',
      description: 'End-to-end production management ensuring quality and scalability.',
    },
  ]

  const getImagePath = (imageName) => {
    try {
      return new URL(`../assets/images/${imageName}`, import.meta.url).href
    } catch {
      return ''
    }
  }

  return (
    <div className="app">
      <Navigation />
      
      <section className="work-hero">
        <div className="container">
          <h1>Our Work</h1>
          <p className="lead">
            Explore our portfolio of smart technology solutions across robotics, 
            hardware engineering, software development, and production management.
          </p>
        </div>
      </section>

      <section className="work-gallery">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img 
                    src={getImagePath(project.image)} 
                    alt={project.title}
                    loading="lazy"
                  />
                  <div className="project-overlay">
                    <span className="project-category">{project.category}</span>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="work-cta">
        <div className="container">
          <h2>Ready to Start Your Project?</h2>
          <p>Let's discuss how we can bring your smart technology vision to life.</p>
          <a href="/#contact" className="solid large">Contact Us</a>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default WorkPage
