import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <h1>AI Strategy &amp;<br /><span>Engineering</span></h1>
            </div>
            <div className="hero-aside">
              We help businesses identify where AI fits and build the solutions that ship. Strategy, custom development, and ongoing support from a senior team that&apos;s done it before.
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-label">What We Do</div>
          <div className="services-grid">
            <div className="service-card">
              <h3>AI Strategy &amp; Roadmapping</h3>
              <p>We assess where AI creates real value in your business and build a prioritised roadmap to get there.</p>
              <ul>
                <li>Opportunity identification</li>
                <li>ROI assessment</li>
                <li>Build-vs-buy analysis</li>
                <li>Implementation roadmap</li>
              </ul>
            </div>
            <div className="service-card">
              <h3>Custom AI Solutions</h3>
              <p>Purpose-built AI systems &mdash; RAG pipelines, vision processing, intelligent agents, and LLM integrations.</p>
              <ul>
                <li>Retrieval-augmented generation</li>
                <li>Computer vision</li>
                <li>AI agents &amp; automation</li>
                <li>LLM integration &amp; fine-tuning</li>
              </ul>
            </div>
            <div className="service-card">
              <h3>Ongoing Support</h3>
              <p>We stay with you after launch. Training, retainers, and fractional AI team arrangements.</p>
              <ul>
                <li>Team training &amp; workshops</li>
                <li>Retainer support</li>
                <li>Fractional AI team</li>
                <li>System integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF POINTS */}
      <section className="proof">
        <div className="container">
          <div className="section-label">Selected Work</div>
          <div className="proof-grid">
            <div className="proof-card">
              <div className="proof-label">Logistics</div>
              <h3>StarShipper</h3>
              <p>AI-native freight platform. Vision parsing for document intelligence, RAG for operational knowledge, workflow automation.</p>
            </div>
            <div className="proof-card">
              <div className="proof-label">Knowledge Platform</div>
              <h3>Aireos</h3>
              <p>Custom RAG platform for team knowledge management. Intelligent retrieval across documents, conversations, and internal systems.</p>
            </div>
            <div className="proof-card">
              <div className="proof-label">Community</div>
              <h3>Microsoft AI</h3>
              <p>Building AI communities and partner ecosystem programs within the Microsoft AI platform.</p>
            </div>
            <div className="proof-card">
              <div className="proof-label">SaaS Exit</div>
              <h3>Outfit.io</h3>
              <p>Founded and scaled an enterprise SaaS platform. Raised investment rounds. Acquired by US-listed Smartsheet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="team" id="about">
        <div className="container">
          <div className="section-label">Team</div>
          <div className="team-grid">
            <div className="team-card">
              <h3>Bruce Skingle</h3>
              <div className="team-role">Founder</div>
              <p>20+ years building software businesses. Founded a dev consultancy (10 years), then Outfit.io &mdash; raised capital, scaled the team, and exited to a US public company. Now focused on applied AI.</p>
              <ul className="team-creds">
                <li>AI engineering: RAG, vision, agents</li>
                <li>MCSE certified</li>
                <li>Startup founder &amp; CEO (successful exit)</li>
                <li>10-year software consultancy</li>
              </ul>
            </div>
            <div className="team-card">
              <h3>Partner</h3>
              <div className="team-role">AI Engineering</div>
              <p>Certified Microsoft AI professional with deep platform expertise. Built and scaled a video automation startup. Brings enterprise AI architecture and Microsoft ecosystem experience.</p>
              <ul className="team-creds">
                <li>Microsoft Certified AI Professional</li>
                <li>Video automation startup founder</li>
                <li>Enterprise AI architecture</li>
                <li>Microsoft platform specialist</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="section-label">Get In Touch</div>
          <div className="contact-grid">
            <form className="contact-form">
              <label>
                Name
                <input type="text" name="name" required />
              </label>
              <label>
                Email
                <input type="email" name="email" required />
              </label>
              <label>
                Company
                <input type="text" name="company" />
              </label>
              <label>
                Message
                <textarea name="message" required></textarea>
              </label>
              <button type="submit" className="btn primary">Send Message</button>
            </form>
            <div className="contact-aside">
              <p>We typically respond within one business day. Tell us a bit about what you&apos;re working on and we&apos;ll let you know if we can help.</p>
              <p>Based in Brisbane, Australia. We work with clients across APAC and globally.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
