import { useEffect } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="app">
      <Navigation />
      
      <div className="legal-page-container">
        <div className="legal-content">
          <h1 className="legal-title">Privacy Policy</h1>
          <div className="legal-info-row">
            <p className="legal-updated">Last Updated: December 11, 2025</p>
            <p className="legal-subtitle">A unit of Nexspyder Technologies Pvt. Ltd.</p>
          </div>

          <section className="legal-section">
            <h2>1. Introduction</h2>
            <p>
              Welcome to Spherenex, a unit of Nexspyder Technologies Pvt. Ltd. ("Spherenex," "we," "us," or "our"). 
              We are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
              visit our website, use our services, or interact with our AI-powered platforms and solutions.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Information We Collect</h2>

            <h3>2.1 Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us, including:</p>
            <ul>
              <li>Name, email address, phone number, and contact details</li>
              <li>Company name, job title, and professional information</li>
              <li>Account credentials and login information</li>
              <li>Payment and billing information</li>
              <li>Communication preferences and feedback</li>
            </ul>

            <h3>2.2 Technical Information</h3>
            <p>We automatically collect certain technical information when you use our services:</p>
            <ul>
              <li>IP address, browser type, and device information</li>
              <li>Operating system and platform details</li>
              <li>Usage data, including pages visited and features used</li>
              <li>Cookies and similar tracking technologies</li>
              <li>Log files and analytics data</li>
            </ul>

            <h3>2.3 AI and Machine Learning Data</h3>
            <p>When you use our AI-powered solutions, we may collect:</p>
            <ul>
              <li>Training data and model inputs/outputs</li>
              <li>IoT sensor data and device telemetry</li>
              <li>Computer vision image and video data (with appropriate consent)</li>
              <li>Performance metrics and system analytics</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul>
              <li>Providing and maintaining our AI and technology services</li>
              <li>Processing transactions and managing accounts</li>
              <li>Improving and optimizing our platforms and solutions</li>
              <li>Training and refining machine learning models</li>
              <li>Communicating with you about our services and updates</li>
              <li>Analyzing usage patterns and generating insights</li>
              <li>Ensuring security and preventing fraud</li>
              <li>Complying with legal obligations and regulations</li>
              <li>Conducting research and development in AI technologies</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Data Sharing and Disclosure</h2>

            <h3>4.1 Third-Party Service Providers</h3>
            <p>
              We may share your information with trusted third-party service providers who assist us in 
              operating our business, including cloud infrastructure providers, payment processors, and 
              analytics services. These providers are contractually obligated to protect your data.
            </p>

            <h3>4.2 Business Transfers</h3>
            <p>
              In the event of a merger, acquisition, or sale of assets, your information may be transferred 
              to the acquiring entity, subject to the same privacy protections.
            </p>

            <h3>4.3 Legal Requirements</h3>
            <p>
              We may disclose your information if required by law, legal process, or government request, 
              or to protect our rights, property, or safety.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your information, including:
            </p>
            <ul>
              <li>Encryption of data in transit and at rest</li>
              <li>Secure cloud infrastructure and access controls</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Employee training on data protection practices</li>
              <li>Incident response and breach notification procedures</li>
            </ul>
            <p>
              However, no method of transmission over the internet is 100% secure. While we strive to 
              protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes 
              outlined in this Privacy Policy, unless a longer retention period is required by law. 
              AI training data may be retained in anonymized form for research and development purposes.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Your Rights and Choices</h2>
            <p>You have the following rights regarding your personal information:</p>
            <ul>
              <li><strong>Access:</strong> Request access to your personal data we hold</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
              <li><strong>Restrict Processing:</strong> Limit how we use your information</li>
            </ul>
            <p>To exercise these rights, please contact us at privacy@spherenex.com</p>
          </section>

          <section className="legal-section">
            <h2>8. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar technologies to enhance your experience, analyze usage patterns, 
              and deliver personalized content. You can manage cookie preferences through your browser settings. 
              Note that disabling cookies may affect the functionality of our services.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your country of 
              residence. We ensure appropriate safeguards are in place to protect your data in accordance 
              with applicable data protection laws.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 18. We do not knowingly collect 
              personal information from children. If we become aware of such collection, we will take steps 
              to delete the information promptly.
            </p>
          </section>

          <section className="legal-section">
            <h2>11. AI and Responsible Technology</h2>
            <p>
              At Spherenex, we are committed to responsible AI development and deployment. We implement 
              ethical AI principles, including fairness, transparency, and accountability in our machine 
              learning systems. We regularly audit our AI models to minimize bias and ensure privacy protection.
            </p>
          </section>

          <section className="legal-section">
            <h2>12. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or 
              legal requirements. We will notify you of significant changes by posting the updated policy 
              on our website and updating the "Last Updated" date. Your continued use of our services 
              constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="legal-section">
            <h2>13. Contact Information</h2>
            <p>
              If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, 
              please contact us:
            </p>
            <div className="contact-info">
              <p><strong>Spherenex </strong></p>
              <p><em>A unit of Nexspyder Technologies Pvt. Ltd.</em></p>
              <p>Email: connect@spherenex.com</p>
              <p>Phone: +91 88619 38913</p>
              <p>Address: 48/58, 1st floor, Chunchghatta Main Rd, JP Nagar 7th Phase, Konanakunte, Bangalore, Karnataka - 560062</p>
            </div>
          </section>

          <section className="legal-section">
            <h2>14. Governing Law</h2>
            <p>
              This Privacy Policy is governed by the laws of India. Any disputes arising from this policy 
              will be subject to the exclusive jurisdiction of the courts in Bangalore, India.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default PrivacyPolicyPage
