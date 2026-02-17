import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { services } from '../data/content'

function ServicePage() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  const getImagePath = (imageName) => {
    if (!imageName) return null
    try {
      return new URL(`../assets/images/${imageName}`, import.meta.url).href
    } catch {
      return null
    }
  }

  return (
    <div className="page-shell">
      <div className="bg-wrap">
        <div className="bg-grid" aria-hidden="true" />
        <div className="bg-gradient" aria-hidden="true" />
        <div className="bg-radial" aria-hidden="true" />
      </div>

      <Navigation />

      <main className="main container" role="main" style={{ gap: '48px', paddingTop: '140px' }}>
        {!service && (
          <div className="panel">
            <h1>Service not found</h1>
            <p>Return to the services list to choose another option.</p>
            <Link className="solid" to="/">Back to Home</Link>
          </div>
        )}

        {service && (
          <>
            <div className="panel" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div className="panel-header-center" style={{ textAlign: 'left', maxWidth: '100%' }}>
                <p className="subtitle">Service detail</p>
                <h1 style={{ margin: '0 0 16px 0', fontSize: 'clamp(32px, 5vw, 48px)' }}>{service.title}</h1>
                <p style={{ margin: 0, fontSize: '18px', lineHeight: '1.7' }}>{service.description}</p>
                <div style={{ display: 'flex', gap: '12px', marginTop: '24px', flexWrap: 'wrap' }}>
                  <Link className="solid" to="/#services">All Services</Link>
                  <Link className="ghost" to="/">Back to Home</Link>
                  <Link className="ghost" to="/#contact">Talk to us</Link>
                </div>
              </div>

              {service.image && (
                <div style={{ 
                  borderRadius: '16px', 
                  overflow: 'hidden', 
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.4)'
                }}>
                  <img 
                    src={getImagePath(service.image)} 
                    alt={service.title}
                    style={{ 
                      width: '100%', 
                      height: 'auto',
                      maxHeight: '500px',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </div>
              )}
            </div>

            {service.detailedDescription && (
              <div className="panel" style={{ padding: '32px', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h2 style={{ margin: '0 0 16px 0', fontSize: '28px' }}>Overview</h2>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '17px', lineHeight: '1.8' }}>
                  {service.detailedDescription}
                </p>
              </div>
            )}

            {service.keyFeatures && (
              <div className="panel" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h2 style={{ margin: '0 0 8px 0', fontSize: '28px' }}>Key Features</h2>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                  gap: '20px' 
                }}>
                  {service.keyFeatures.map((feature) => (
                    <div 
                      key={feature.title}
                      style={{ 
                        padding: '24px',
                        background: 'rgba(255,255,255,0.02)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '12px'
                      }}
                    >
                      <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', color: 'var(--accent)' }}>
                        {feature.title}
                      </h3>
                      <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '15px', lineHeight: '1.6' }}>
                        {feature.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {service.details && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
                <div style={{ 
                  padding: '32px', 
                  background: 'rgba(255,255,255,0.02)', 
                  borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.08)'
                }}>
                  <h3 style={{ margin: '0 0 20px 0', fontSize: '24px' }}>What you get</h3>
                  <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                    {service.details.whatYouGet.map((item) => (
                      <li key={item} style={{ marginBottom: '12px' }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ 
                  padding: '32px', 
                  background: 'rgba(255,255,255,0.02)', 
                  borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.08)'
                }}>
                  <h3 style={{ margin: '0 0 20px 0', fontSize: '24px' }}>Why Spherenex</h3>
                  <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                    {service.details.whyUs.map((item) => (
                      <li key={item} style={{ marginBottom: '12px' }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            <div style={{ 
              padding: '48px 32px', 
              textAlign: 'center',
              background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(7, 12, 22, 0.5) 100%)',
              borderRadius: '16px',
              border: '1px solid rgba(34, 197, 94, 0.2)'
            }}>
              <h2 style={{ margin: '0 0 12px 0', fontSize: '32px' }}>Ready to get started?</h2>
              <p style={{ margin: '0 0 24px 0', color: 'var(--text-muted)', fontSize: '18px' }}>
                Let's discuss how we can help bring your project to life.
              </p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a className="solid large" href="/#contact">Schedule a consultation</a>
                <Link className="ghost large" to="/">View all services</Link>
              </div>
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default ServicePage
