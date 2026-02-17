import { useEffect } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

function TermsOfServicePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="app">
      <Navigation />
      
      <div className="legal-page-container">
        <div className="legal-content">
          <h1 className="legal-title">Terms of Service</h1>
          <div className="legal-info-row">
            <p className="legal-updated">Last Updated: December 11, 2025</p>
            <p className="legal-subtitle">A unit of NexSpyder Technologies Pvt. Ltd.</p>
          </div>

          <section className="legal-section">
            <h2>1. Agreement to Terms</h2>
            <p>
              Welcome to Spherenex Technologies Pvt. Ltd., a unit of NexSpyder Technologies Pvt. Ltd. ("Spherenex," "we," "us," or "our"). 
              These Terms of Service ("Terms") govern your access to and use of our website, platforms, 
              AI-powered solutions, IoT systems, and related services (collectively, the "Services"). 
              By accessing or using our Services, you agree to be bound by these Terms. If you do not 
              agree to these Terms, please do not use our Services.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Description of Services</h2>
            <p>
              Spherenex provides cutting-edge technology solutions, including but not limited to:
            </p>
            <ul>
              <li>Artificial Intelligence and Machine Learning platforms</li>
              <li>Internet of Things (IoT) solutions and embedded systems</li>
              <li>Computer Vision and robotics automation</li>
              <li>Cloud infrastructure and data analytics services</li>
              <li>Web development and rapid prototyping solutions</li>
              <li>Industrial 4.0 and smart manufacturing technologies</li>
              <li>Skill development and training programs</li>
              <li>Custom software development and consulting services</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. User Accounts and Registration</h2>

            <h3>3.1 Account Creation</h3>
            <p>
              To access certain features of our Services, you may be required to create an account. 
              You agree to provide accurate, current, and complete information during registration 
              and to update such information to keep it accurate, current, and complete.
            </p>

            <h3>3.2 Account Security</h3>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and 
              for all activities that occur under your account. You must immediately notify us of any 
              unauthorized use of your account or any other security breach.
            </p>

            <h3>3.3 Account Termination</h3>
            <p>
              We reserve the right to suspend or terminate your account at any time, with or without 
              notice, for violation of these Terms or for any other reason at our sole discretion.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. Acceptable Use Policy</h2>
            <p>You agree not to use our Services to:</p>
            <ul>
              <li>Violate any applicable laws, regulations, or third-party rights</li>
              <li>Transmit harmful, offensive, or unlawful content</li>
              <li>Interfere with or disrupt the Services or servers</li>
              <li>Attempt to gain unauthorized access to our systems or data</li>
              <li>Use automated tools (bots, scrapers) without permission</li>
              <li>Reverse engineer, decompile, or disassemble our software</li>
              <li>Misuse AI models or training data for malicious purposes</li>
              <li>Impersonate any person or entity</li>
              <li>Collect user information without consent</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Intellectual Property Rights</h2>

            <h3>5.1 Spherenex IP</h3>
            <p>
              All content, features, and functionality of our Services, including but not limited to 
              software, algorithms, AI models, text, graphics, logos, and trademarks, are owned by 
              Spherenex and protected by intellectual property laws. You may not copy, modify, distribute, 
              or create derivative works without our express written permission.
            </p>

            <h3>5.2 User Content</h3>
            <p>
              You retain ownership of any content you submit to our Services ("User Content"). By submitting 
              User Content, you grant Spherenex a worldwide, non-exclusive, royalty-free license to use, 
              reproduce, modify, and display such content for the purpose of providing and improving our Services.
            </p>

            <h3>5.3 AI Training Data</h3>
            <p>
              Data submitted to our AI platforms may be used to train and improve our machine learning models, 
              subject to our Privacy Policy and applicable data protection laws. Sensitive or proprietary data 
              will be handled in accordance with separate enterprise agreements.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Payment and Billing</h2>

            <h3>6.1 Fees</h3>
            <p>
              Certain Services require payment of fees. You agree to pay all applicable fees as described 
              in your service plan or agreement. Fees are non-refundable unless otherwise stated.
            </p>

            <h3>6.2 Billing</h3>
            <p>
              For subscription-based services, you authorize us to charge your payment method on a recurring 
              basis. You must provide accurate and up-to-date billing information.
            </p>

            <h3>6.3 Price Changes</h3>
            <p>
              We reserve the right to modify our pricing at any time. We will provide reasonable notice 
              of price changes for existing subscriptions.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Service Level and Availability</h2>
            <p>
              While we strive to provide reliable and uninterrupted Services, we do not guarantee that 
              our Services will be available at all times or free from errors. We may perform maintenance, 
              updates, or modifications that temporarily disrupt service availability.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. AI and Technology Disclaimers</h2>

            <h3>8.1 AI Model Performance</h3>
            <p>
              Our AI and machine learning models are provided "as is" and their performance may vary 
              based on data quality, use case, and environmental factors. We do not guarantee specific 
              accuracy levels or outcomes.
            </p>

            <h3>8.2 IoT and Hardware</h3>
            <p>
              For IoT and embedded systems solutions, proper installation, configuration, and maintenance 
              are critical for optimal performance. Spherenex is not liable for issues arising from 
              improper use or integration.
            </p>

            <h3>8.3 Third-Party Integrations</h3>
            <p>
              Our Services may integrate with third-party platforms and services. We are not responsible 
              for the availability, performance, or security of third-party services.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Spherenex shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages, including but not limited to loss 
              of profits, data, or business opportunities, arising from your use of or inability to use 
              our Services, even if we have been advised of the possibility of such damages.
            </p>
            <p>
              Our total liability for any claim arising out of these Terms or your use of our Services 
              shall not exceed the amount you paid to Spherenex in the twelve (12) months preceding the claim.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Spherenex, its affiliates, officers, 
              directors, employees, and agents from any claims, liabilities, damages, losses, and expenses, 
              including reasonable attorneys' fees, arising out of or in any way connected with your use 
              of our Services or violation of these Terms.
            </p>
          </section>

          <section className="legal-section">
            <h2>11. Data Protection and Privacy</h2>
            <p>
              Your use of our Services is also governed by our Privacy Policy, which is incorporated into 
              these Terms by reference. We are committed to protecting your data in accordance with applicable 
              data protection laws and regulations.
            </p>
          </section>

          <section className="legal-section">
            <h2>12. Confidentiality</h2>
            <p>
              Both parties agree to maintain the confidentiality of any proprietary or confidential information 
              disclosed during the course of using our Services. This obligation survives termination of these Terms.
            </p>
          </section>

          <section className="legal-section">
            <h2>13. Warranties and Disclaimers</h2>
            <p>
              OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER 
              EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS 
              FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE 
              UNINTERRUPTED, ERROR-FREE, OR SECURE.
            </p>
          </section>

          <section className="legal-section">
            <h2>14. Termination</h2>
            <p>
              Either party may terminate these Terms at any time by providing written notice. Upon termination, 
              your right to use our Services will immediately cease. Sections related to intellectual property, 
              limitation of liability, indemnification, and dispute resolution shall survive termination.
            </p>
          </section>

          <section className="legal-section">
            <h2>15. Dispute Resolution</h2>

            <h3>15.1 Governing Law</h3>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India, without 
              regard to conflict of law principles.
            </p>

            <h3>15.2 Arbitration</h3>
            <p>
              Any dispute arising out of or relating to these Terms shall be resolved through binding 
              arbitration in accordance with the Arbitration and Conciliation Act, 1996. The arbitration 
              shall be conducted in Bangalore, India.
            </p>

            <h3>15.3 Jurisdiction</h3>
            <p>
              Subject to the arbitration clause, the courts of Bangalore, India shall have exclusive jurisdiction 
              over any disputes.
            </p>
          </section>

          <section className="legal-section">
            <h2>16. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of material changes 
              by posting the updated Terms on our website and updating the "Last Updated" date. Your continued 
              use of our Services after such changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className="legal-section">
            <h2>17. Severability</h2>
            <p>
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions 
              shall remain in full force and effect.
            </p>
          </section>

          <section className="legal-section">
            <h2>18. Entire Agreement</h2>
            <p>
              These Terms, together with our Privacy Policy and any applicable service agreements, constitute 
              the entire agreement between you and Spherenex regarding your use of our Services.
            </p>
          </section>

          <section className="legal-section">
            <h2>19. Contact Information</h2>
            <p>
              If you have questions or concerns about these Terms of Service, please contact us:
            </p>
            <div className="contact-info">
              <p><strong>Spherenex Technologies Pvt. Ltd.</strong></p>
              <p><em>A unit of NexSpyder Technologies Pvt. Ltd.</em></p>
              <p>Email: info@spherenex.com</p>
              <p>Phone: +91 88619 38913</p>
              <p>Address: 48/58, 1st floor, Chunchghatta Main Rd, JP Nagar 7th Phase, Konanakunte, Bangalore, Karnataka - 560062</p>
            </div>
          </section>

          <section className="legal-section">
            <p className="acknowledgment">
              <strong>BY USING OUR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE 
              TO BE BOUND BY THESE TERMS OF SERVICE.</strong>
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default TermsOfServicePage
