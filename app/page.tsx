import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <main className="film">
      {/* OPENING */}
      <section className="film-opening">
        <div className="film-name">Robot Signals</div>
        <h1 className="film-statement">
          We build AI systems that ship. Strategy, engineering, and the judgment to know the difference.
        </h1>
      </section>

      {/* WORK */}
      <section className="film-work">
        <ScrollReveal>
          <div className="work-item">
            <div className="work-header">
              <h2>StarShipper</h2>
              <span className="work-label">Logistics</span>
            </div>
            <p>AI-native freight platform. Vision parsing for document intelligence, RAG for operational knowledge, workflow automation.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="work-item">
            <div className="work-header">
              <h2>Aireos</h2>
              <span className="work-label">Knowledge Platform</span>
            </div>
            <p>Custom RAG platform for team knowledge management. Intelligent retrieval across documents, conversations, and internal systems.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="work-item">
            <div className="work-header">
              <h2>Microsoft AI</h2>
              <span className="work-label">Community</span>
            </div>
            <p>Building AI communities and partner ecosystem programs within the Microsoft AI platform.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="work-item">
            <div className="work-header">
              <h2>Outfit.io</h2>
              <span className="work-label">SaaS Exit</span>
            </div>
            <p>Founded and scaled an enterprise SaaS platform. Raised investment rounds. Acquired by Smartsheet.</p>
          </div>
        </ScrollReveal>
      </section>

      {/* CAPABILITIES */}
      <section className="film-capabilities">
        <ScrollReveal>
          <p className="film-statement">
            Strategy. Engineering. Ongoing support. RAG, vision, agents&mdash;we&apos;ve built them all and we stay after launch.
          </p>
        </ScrollReveal>
      </section>

      {/* CLOSE */}
      <section className="film-close">
        <ScrollReveal>
          <h2 className="film-statement">Let&apos;s talk.</h2>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="close-details">
            <a href="mailto:hello@robotsignals.io" className="close-email">hello@robotsignals.io</a>
            <p className="close-location">Brisbane, Australia</p>
            <nav className="close-links">
              <a href="https://www.linkedin.com/in/bruces/">LinkedIn</a>
              <a href="https://github.com/pengasuzie">GitHub</a>
              <a href="/lab">Lab</a>
            </nav>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
