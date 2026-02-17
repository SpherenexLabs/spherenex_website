import { Routes, Route } from 'react-router-dom'
import './styles/layout.css'
import './styles/typography.css'
import './styles/buttons.css'
import './styles/work.css'
import './styles/blog.css'
import './styles/newsletter.css'
import './styles/improvements.css'
import './styles/legal.css'
import LandingPage from './LandingPage'
import ServicePage from './pages/ServicePage'
import WorkPage from './pages/WorkPage'
import BlogPage from './pages/BlogPage'
import NewsletterPage from './pages/NewsletterPage'
import SupportPage from './pages/SupportPage'
import TermsOfServicePage from './pages/TermsOfServicePage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/services/:slug" element={<ServicePage />} />
      <Route path="/services" element={<LandingPage />} />
      <Route path="/work" element={<WorkPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/newsletter" element={<NewsletterPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/terms-of-service" element={<TermsOfServicePage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
    </Routes>
  )
}

export default App
