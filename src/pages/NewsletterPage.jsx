import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Calendar, ArrowRight, Tag } from 'lucide-react'

function NewsletterPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [selectedCategory, setSelectedCategory] = useState('all')

  const newsletters = [
    {
      id: 1,
      title: 'Spherenex Expands Smart Manufacturing Solutions',
      date: 'February 15, 2026',
      category: 'Company News',
      excerpt: 'Announcing our new production management services and strategic partnerships with leading manufacturers in Asia and Europe. This expansion marks a significant milestone in our journey to become a comprehensive smart technology solutions provider.',
      author: 'Spherenex Team',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'How We Designed a Custom Robotic System for Precision Assembly',
      date: 'February 10, 2026',
      category: 'Case Study',
      excerpt: 'Behind-the-scenes look at our recent project developing a specialized robotic arm for micro-electronics assembly. Learn about the challenges we faced and innovative solutions we implemented.',
      author: 'Engineering Team',
      readTime: '8 min read',
    },
    {
      id: 3,
      title: 'Spherenex Q4 2025 Highlights & 2026 Roadmap',
      date: 'January 30, 2026',
      category: 'Company Update',
      excerpt: 'Review of our achievements in Q4 2025, client success stories, and exciting plans for the upcoming year. We are committed to pushing the boundaries of smart technology innovation.',
      author: 'Management Team',
      readTime: '6 min read',
    },
    {
      id: 4,
      title: 'Technical Deep Dive: Optimizing Embedded Firmware for Power Efficiency',
      date: 'January 20, 2026',
      category: 'Technical Article',
      excerpt: 'Our engineering team shares techniques for reducing power consumption in embedded systems without sacrificing performance. Essential reading for hardware developers.',
      author: 'Hardware Team',
      readTime: '10 min read',
    },
    {
      id: 5,
      title: 'Client Success Story: From Concept to Market in 6 Months',
      date: 'January 5, 2026',
      category: 'Case Study',
      excerpt: 'How we helped a startup bring their smart home device from initial prototype to production launch in record time. A testament to our efficient development process.',
      author: 'Project Team',
      readTime: '7 min read',
    },
    {
      id: 6,
      title: 'Spherenex Team Grows: Welcome Our New Engineers',
      date: 'December 28, 2025',
      category: 'Company News',
      excerpt: 'Meet the talented engineers who recently joined our hardware and software development teams. Their expertise will drive our next generation of innovations.',
      author: 'HR Team',
      readTime: '4 min read',
    },
  ]

  const categories = ['all', 'Company News', 'Case Study', 'Company Update', 'Technical Article']

  const filteredNewsletters = selectedCategory === 'all' 
    ? newsletters 
    : newsletters.filter(n => n.category === selectedCategory)

  return (
    <div className="app">
      <Navigation />
      
      <section className="newsletter-hero">
        <div className="container">
          <h1>Latest News & Articles</h1>
          <p className="lead">
            Stay updated with our latest company news, technical insights, case studies, and industry updates.
          </p>
        </div>
      </section>

      <section className="newsletter-main">
        <div className="container">
          <div className="category-filter">
            {categories.map((cat) => (
              <button 
                key={cat}
                className={selectedCategory === cat ? 'filter-btn active' : 'filter-btn'}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat === 'all' ? 'All Articles' : cat}
              </button>
            ))}
          </div>

          <div className="articles-list">
            {filteredNewsletters.map((article) => (
              <article key={article.id} className="article-card">
                <div className="article-header">
                  <span className="category-badge">{article.category}</span>
                  <div className="article-meta">
                    <span className="article-date">
                      <Calendar size={16} />
                      {article.date}
                    </span>
                    <span className="article-author">{article.author}</span>
                    <span className="article-time">{article.readTime}</span>
                  </div>
                </div>
                <h2>{article.title}</h2>
                <p>{article.excerpt}</p>
                <a href="#" className="read-more">
                  Read Full Article <ArrowRight size={18} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default NewsletterPage
