import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Calendar, User, ArrowRight } from 'lucide-react'

function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Smart Technology in Manufacturing',
      excerpt: 'Exploring how AI and robotics are transforming modern manufacturing processes and creating new opportunities for automation.',
      date: 'February 10, 2026',
      author: 'Spherenex Team',
      category: 'Industry Insights',
      image: 'robotics.jpg',
    },
    {
      id: 2,
      title: 'Best Practices for Hardware-Software Integration',
      excerpt: 'Learn the key principles for successful integration of hardware and software components in smart technology systems.',
      date: 'February 5, 2026',
      author: 'Spherenex Team',
      category: 'Technical',
      image: 'expertise.png',
    },
    {
      id: 3,
      title: 'From Prototype to Production: A Complete Guide',
      excerpt: 'A comprehensive guide on transitioning your smart technology project from initial prototype to full-scale production.',
      date: 'January 28, 2026',
      author: 'Spherenex Team',
      category: 'Process',
      image: 'about.png',
    },
    {
      id: 4,
      title: 'Embedded Systems Development Trends in 2026',
      excerpt: 'Stay ahead of the curve with the latest trends in embedded systems, IoT, and real-time control software development.',
      date: 'January 22, 2026',
      author: 'Spherenex Team',
      category: 'Technology',
      image: 'image1.jpg',
    },
    {
      id: 5,
      title: 'Industrial Design: Balancing Form and Function',
      excerpt: 'How to create products that are both aesthetically pleasing and functionally superior in industrial applications.',
      date: 'January 15, 2026',
      author: 'Spherenex Team',
      category: 'Design',
      image: 'image3.png',
    },
    {
      id: 6,
      title: 'Quality Assurance in Smart Technology Production',
      excerpt: 'Essential QA processes and testing methodologies to ensure reliable, production-ready smart technology solutions.',
      date: 'January 8, 2026',
      author: 'Spherenex Team',
      category: 'Quality',
      image: 'image2.png',
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
      
      <section className="blog-hero">
        <div className="container">
          <h1>Blog & Insights</h1>
          <p className="lead">
            Expert insights, industry trends, and technical guides from the Spherenex team
          </p>
        </div>
      </section>

      <section className="blog-content">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-image">
                  <img 
                    src={getImagePath(post.image)} 
                    alt={post.title}
                    loading="lazy"
                  />
                  <span className="blog-category">{post.category}</span>
                </div>
                <div className="blog-body">
                  <div className="blog-meta">
                    <span className="blog-date">
                      <Calendar size={16} />
                      {post.date}
                    </span>
                    <span className="blog-author">
                      <User size={16} />
                      {post.author}
                    </span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <a href="#" className="blog-link">
                    Read More <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="blog-cta">
        <div className="container">
          <h2>Want to Stay Updated?</h2>
          <p>Subscribe to our newsletter for the latest insights and updates</p>
          <Link to="/newsletter" className="solid large">Subscribe Now</Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default BlogPage
