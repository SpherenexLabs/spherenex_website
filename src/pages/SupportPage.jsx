import { useEffect, useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react'

function SupportPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all fields')
      return
    }

    setIsSubmitting(true)
    
    try {
      // Simulate form submission (replace with actual backend call)
      console.log('Support form submitted:', formData)
      
      // Show success message
      setSubmitted(true)

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    } catch (error) {
      console.error('Error submitting support form:', error)
      alert('There was an error submitting your form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="app">
      <Navigation />
      
      <div className="support-page-container">
        <div className="support-container">
          <h1 className="support-page-title">Support</h1>

          <div className="support-content-grid">
            {/* Support Information Cards */}
            <div className="support-info-section">
              {/* Address Card */}
              <div className="support-info-card">
                <div className="support-icon">
                  <MapPin size={28} />
                </div>
                <h3 className="support-info-title">Address</h3>
                <p className="support-info-text">48/58, 1st floor, Chunchghatta Main Rd,</p>
                <p className="support-info-text">JP Nagar 7th Phase, Konanakunte,</p>
                <p className="support-info-text">Bangalore, Karnataka - 560062</p>
              </div>

              {/* Call Us Card */}
              <div className="support-info-card">
                <div className="support-icon">
                  <Phone size={28} />
                </div>
                <h3 className="support-info-title">Call Us</h3>
                <p className="support-info-text">
                  <a href="tel:+918861938913">+91 88619 38913</a>
                </p>
                <p className="support-info-text">
                  <a href="tel:+916360655852">+91 6360655852</a>
                </p>
              </div>

              {/* Email Us Card */}
              <div className="support-info-card">
                <div className="support-icon">
                  <Mail size={28} />
                </div>
                <h3 className="support-info-title">Email Us</h3>
                <p className="support-info-text">
                  <a href="mailto:tanush.bd@spherenex.com">tanush.bd@spherenex.com</a>
                </p>
                <p className="support-info-text">
                  <a href="mailto:connects@spherenex.com">connects@spherenex.com</a>
                </p>
              </div>

              {/* Support Hours Card */}
              <div className="support-info-card">
                <div className="support-icon">
                  <Clock size={28} />
                </div>
                <h3 className="support-info-title">Support Hours</h3>
                <p className="support-info-text">Monday - Friday</p>
                <p className="support-info-text">9:00 AM - 05:00 PM</p>
                <p className="support-info-text">Saturday - Sunday: Closed</p>
              </div>
            </div>

            {/* Support Form */}
            <div className="support-form-section">
              {submitted && (
                <div className="support-success-message">
                  <CheckCircle size={20} style={{ marginRight: '8px' }} /> 
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="support-form-row">
                  <div className="support-form-group">
                    <label className="support-form-label">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="support-form-input"
                      required
                    />
                  </div>

                  <div className="support-form-group">
                    <label className="support-form-label">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="support-form-input"
                      required
                    />
                  </div>
                </div>

                <div className="support-form-group">
                  <label className="support-form-label">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="support-form-input"
                    required
                  />
                </div>

                <div className="support-form-group">
                  <label className="support-form-label">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    className="support-form-textarea"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="support-submit-button" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          {/* Google Map */}
          <div className="support-map-section">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.4647895842824!2d77.5667!3d12.8831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUyJzU5LjIiTiA3N8KwMzQnMDAuMSJF!5e0!3m2!1sen!2sin!4v1234567890"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Spherenex Location"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default SupportPage
