import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { services } from '../data/content'
import { Clock, TrendingUp, BarChart3, CheckCircle } from 'lucide-react'

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
                  <a className="solid" href="/#services" onClick={() => { window.location.href = '/#services'; setTimeout(() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>All Services</a>
                  <Link className="ghost" to="/">Back to Home</Link>
                  <Link className="ghost" to="/support">Talk to us</Link>
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

            {service.stats && (
              <div className="panel" style={{ padding: '32px', background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.05) 0%, rgba(7, 12, 22, 0.3) 100%)', borderRadius: '16px', border: '1px solid rgba(34, 197, 94, 0.15)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
                  <BarChart3 size={28} style={{ color: '#22c55e' }} />
                  <h2 style={{ margin: 0, fontSize: '28px' }}>Performance Metrics</h2>
                </div>
                
                <div style={{ 
                  padding: '40px 32px',
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '32px'
                }}>
                  {(() => {
                    const colors = ['#22c55e', '#3b82f6', '#f59e0b', '#ec4899'];
                    const size = 300;
                    const center = size / 2;
                    const radius = 120;
                    const innerRadius = 70;
                    
                    const data = service.stats.map((stat, index) => {
                      const percentage = stat.value.includes('%') ? parseInt(stat.value) : 
                                        stat.value.includes('/') ? (parseFloat(stat.value.split('/')[0]) / parseFloat(stat.value.split('/')[1])) * 100 : 
                                        stat.value.includes('+') ? 85 : 75;
                      return {
                        label: stat.label,
                        value: stat.value,
                        percentage,
                        color: colors[index % colors.length]
                      };
                    });
                    
                    const total = data.reduce((sum, item) => sum + item.percentage, 0);
                    let currentAngle = -90;
                    
                    const segments = data.map((item, index) => {
                      const angle = (item.percentage / total) * 360;
                      const startAngle = currentAngle;
                      const endAngle = currentAngle + angle;
                      currentAngle = endAngle;
                      
                      const startRad = (startAngle * Math.PI) / 180;
                      const endRad = (endAngle * Math.PI) / 180;
                      
                      const x1 = center + radius * Math.cos(startRad);
                      const y1 = center + radius * Math.sin(startRad);
                      const x2 = center + radius * Math.cos(endRad);
                      const y2 = center + radius * Math.sin(endRad);
                      
                      const x1Inner = center + innerRadius * Math.cos(startRad);
                      const y1Inner = center + innerRadius * Math.sin(startRad);
                      const x2Inner = center + innerRadius * Math.cos(endRad);
                      const y2Inner = center + innerRadius * Math.sin(endRad);
                      
                      const largeArc = angle > 180 ? 1 : 0;
                      
                      const pathData = [
                        `M ${x1} ${y1}`,
                        `A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`,
                        `L ${x2Inner} ${y2Inner}`,
                        `A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${x1Inner} ${y1Inner}`,
                        'Z'
                      ].join(' ');
                      
                      return {
                        ...item,
                        pathData,
                        midAngle: startAngle + angle / 2,
                        percentage: ((item.percentage / total) * 100).toFixed(1)
                      };
                    });
                    
                    return (
                      <>
                        <div style={{ position: 'relative' }}>
                          <svg width={size} height={size} style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.4))' }}>
                            <defs>
                              {segments.map((segment, idx) => (
                                <linearGradient key={idx} id={`pieGradient${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                  <stop offset="0%" stopColor={segment.color} stopOpacity="1" />
                                  <stop offset="100%" stopColor={segment.color} stopOpacity="0.7" />
                                </linearGradient>
                              ))}
                            </defs>
                            
                            {segments.map((segment, idx) => (
                              <g key={idx}>
                                <path
                                  d={segment.pathData}
                                  fill={`url(#pieGradient${idx})`}
                                  stroke="rgba(0,0,0,0.2)"
                                  strokeWidth="2"
                                  style={{
                                    animation: `fadeIn 0.8s ease-out ${idx * 0.1}s forwards`,
                                    opacity: 0,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.filter = 'brightness(1.2)';
                                    e.currentTarget.style.transform = 'scale(1.05)';
                                    e.currentTarget.style.transformOrigin = 'center';
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.filter = 'brightness(1)';
                                    e.currentTarget.style.transform = 'scale(1)';
                                  }}
                                />
                                
                                {/* Percentage labels */}
                                <text
                                  x={center + (radius - 25) * Math.cos((segment.midAngle * Math.PI) / 180)}
                                  y={center + (radius - 25) * Math.sin((segment.midAngle * Math.PI) / 180)}
                                  textAnchor="middle"
                                  dominantBaseline="middle"
                                  fill="#fff"
                                  fontSize="16"
                                  fontWeight="bold"
                                  style={{
                                    animation: `fadeIn 0.8s ease-out ${idx * 0.1 + 0.5}s forwards`,
                                    opacity: 0,
                                    pointerEvents: 'none'
                                  }}
                                >
                                  {segment.percentage}%
                                </text>
                              </g>
                            ))}
                            
                            {/* Center circle */}
                            <circle
                              cx={center}
                              cy={center}
                              r={innerRadius}
                              fill="rgba(7, 12, 22, 0.95)"
                              stroke="rgba(255,255,255,0.1)"
                              strokeWidth="2"
                            />
                            
                            {/* Center text */}
                            <text
                              x={center}
                              y={center - 10}
                              textAnchor="middle"
                              fill="rgba(255,255,255,0.6)"
                              fontSize="12"
                              fontWeight="500"
                            >
                              TOTAL
                            </text>
                            <text
                              x={center}
                              y={center + 15}
                              textAnchor="middle"
                              fill="#22c55e"
                              fontSize="24"
                              fontWeight="bold"
                            >
                              {service.stats.length}
                            </text>
                            <text
                              x={center}
                              y={center + 32}
                              textAnchor="middle"
                              fill="rgba(255,255,255,0.5)"
                              fontSize="11"
                            >
                              METRICS
                            </text>
                          </svg>
                        </div>
                        
                        <div style={{ 
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                          gap: '16px',
                          width: '100%',
                          maxWidth: '600px'
                        }}>
                          {segments.map((segment, idx) => (
                            <div
                              key={idx}
                              style={{
                                padding: '16px 20px',
                                background: 'rgba(255,255,255,0.03)',
                                borderRadius: '10px',
                                border: `2px solid ${segment.color}40`,
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = segment.color;
                                e.currentTarget.style.background = `${segment.color}10`;
                                e.currentTarget.style.transform = 'translateY(-2px)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = `${segment.color}40`;
                                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                                e.currentTarget.style.transform = 'translateY(0)';
                              }}
                            >
                              <div style={{
                                width: '16px',
                                height: '16px',
                                borderRadius: '4px',
                                background: segment.color,
                                boxShadow: `0 0 12px ${segment.color}60`,
                                flexShrink: 0
                              }} />
                              <div style={{ flex: 1 }}>
                                <div style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
                                  {segment.label}
                                </div>
                                <div style={{ fontSize: '20px', color: segment.color, fontWeight: 'bold' }}>
                                  {segment.value}
                                </div>
                              </div>
                              <div style={{ fontSize: '14px', color: segment.color, fontWeight: '600' }}>
                                {segment.percentage}%
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <style>{`
                          @keyframes fadeIn {
                            to { opacity: 1; }
                          }
                        `}</style>
                      </>
                    );
                  })()}
                </div>
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
                <a className="solid large" href="/support">Schedule a consultation</a>
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
