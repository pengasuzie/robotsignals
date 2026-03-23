import Link from "next/link";

const tools = [
  { cat: "Skill", name: "voice-to-text", desc: "Transcribe audio and video files with speaker identification. WhisperX-powered diarization, local processing.", href: "/tools/voice-to-text" },
  { cat: "Skill", name: "text-to-voice", desc: "Convert text to natural speech with 50 voices. Kokoro engine, no cloud APIs. Generates MP3 in seconds.", href: "/tools/text-to-voice" },
  { cat: "Skill", name: "strategic-analysis", desc: "Analyze meeting transcripts with full project context. Four modes: sales, consulting, competitive, debrief.", href: "/tools/strategic-analysis" },
  { cat: "Skill", name: "opportunity-brief", desc: "Capture a new business opportunity: pitch, model, people, risks, and initial assessment in a structured brief.", href: "/tools/opportunity-brief" },
  { cat: "Skill", name: "market-research", desc: "Size the market, find demand signals, check trends. TAM/SAM/SOM analysis with evidence-based scoring.", href: "/tools/market-research" },
  { cat: "Skill", name: "competitor-landscape", desc: "Map existing players in a market. Identify gaps, positioning opportunities, and competitive dynamics.", href: "/tools/competitor-landscape" },
  { cat: "Skill", name: "strategy-session", desc: "Brainstorm go-to-market, differentiation, and blue ocean strategy. Interactive creative thinking session.", href: "/tools/strategy-session" },
  { cat: "Skill", name: "due-diligence", desc: "Vet people, financials, legal, and technical feasibility. Structured DD findings with red flag tracking.", href: "/tools/due-diligence" },
  { cat: "Skill", name: "viability-assessment", desc: "Score an opportunity across 8 weighted dimensions. Produces a go/no-go recommendation with confidence level.", href: "/tools/viability-assessment" },
  { cat: "Skill", name: "new-idea", desc: "Scaffold a new idea directory with brief, research, competitors, and assessment files. Starting point for evaluation.", href: "/tools/new-idea" },
  { cat: "Skill", name: "competitive-intel", desc: "Competitive gap analysis. Signal vs noise classification, gap matrix, and actionable report.", href: "/tools/competitive-intel" },
  { cat: "Skill", name: "voice-briefing", desc: "Turn a meeting transcript or document into a concise spoken audio briefing you can listen to on the go.", href: "/tools/voice-briefing" },
];

export default function Lab() {
  return (
    <>
      <header>
        <div className="container">
          <div className="header-grid">
            <div className="logo"><Link href="/">Robot Signals</Link></div>
            <nav>
              <Link href="/#services">Services</Link>
              <Link href="/lab">Lab</Link>
              <Link href="/#about">About</Link>
              <Link href="/#contact">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <h1>Robot Signals /<br /><span>Lab</span></h1>
            </div>
            <div className="hero-aside">
              Tools born from real client work. If we built it, we use it. Open source AI automation for lead generation, voice synthesis, help widgets, and agent skills.
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects" id="tools">
        <div className="container">
          <div className="section-label">Open Source Tools</div>

          {/* ai-voice-kit */}
          <div className="project-card">
            <div className="project-info">
              <div className="project-tag">Skill</div>
              <h2>ai-voice-kit</h2>
              <p className="desc">Local AI voice tools for Claude Code. Text-to-speech with 50 voices (Kokoro), audio transcription with speaker identification (WhisperX). No cloud APIs, runs on your machine.</p>
              <ul className="feature-list">
                <li>3 skills: voice-to-text, strategic-analysis, text-to-voice</li>
                <li>50 voices, generates audio in seconds</li>
                <li>Transcription with speaker diarization</li>
                <li>4 analysis modes: sales, consulting, competitive, debrief</li>
                <li>Full chain: recording &rarr; analysis &rarr; audio briefing</li>
              </ul>
              <a href="https://github.com/pengasuzie/ai-voice-kit" className="btn primary">View on GitHub</a>
              <Link href="/tools/ai-voice-kit" className="btn">Setup Guide</Link>
            </div>
            <div className="project-demo">
              <div className="code-block">
                <span className="comment"># The full chain</span>{"\n"}
                &gt; <span className="fn">/voice-to-text</span> client-call.m4a{"\n"}
                <span className="string">Transcribing... 2 speakers found.</span>{"\n\n"}
                &gt; <span className="fn">/strategic-analysis</span> client-call.txt{"\n"}
                <span className="string">Gathering project context...</span>{"\n"}
                <span className="string">Output: analysis.md + analysis-voice.txt</span>{"\n\n"}
                &gt; <span className="fn">/text-to-voice</span> analysis-voice.txt{"\n"}
                <span className="string">Generating with Kokoro (bf_lily)...</span>{"\n\n"}
                <span className="tag">Output:</span>{"\n"}
                <span className="tag">&#x251C;&#x2500; analysis-voice.mp3  (6m 18s)</span>{"\n"}
                <span className="tag">&#x2514;&#x2500; Engine: Kokoro, Voice: bf_lily</span>{"\n\n"}
                <span className="comment"># Listen on the drive home.</span>
              </div>
            </div>
          </div>

          {/* lead-monitor */}
          <div className="project-card">
            <div className="project-info">
              <div className="project-tag">Tool</div>
              <h2>lead-monitor</h2>
              <p className="desc">Automated lead generation that watches Reddit, Hacker News, and RSS feeds for buying signals. Scores relevance, deduplicates, and notifies you via email or Slack.</p>
              <ul className="feature-list">
                <li>Keyword matching with intent scoring</li>
                <li>Reddit, Hacker News, and RSS sources</li>
                <li>Email (Resend) and Slack notifications</li>
                <li>30-day historical backfill</li>
                <li>Run as cron job or on-demand</li>
              </ul>
              <a href="https://github.com/pengasuzie/lead-monitor" className="btn primary">View on GitHub</a>
              <Link href="/tools/lead-monitor" className="btn">Setup Guide</Link>
            </div>
            <div className="project-demo">
              <div className="code-block">
                <span className="comment">{"// Configure your keywords and sources"}</span>{"\n"}
                <span className="keyword">const</span> config = {"{"}{"\n"}
                {"  "}keywords: {"{"}{"\n"}
                {"    "}high: [<span className="string">&quot;need a tool for&quot;</span>, <span className="string">&quot;looking for&quot;</span>],{"\n"}
                {"    "}medium: [<span className="string">&quot;automate&quot;</span>, <span className="string">&quot;alternative to&quot;</span>],{"\n"}
                {"  "}{"}"},{"\n"}
                {"  "}sources: {"{"}{"\n"}
                {"    "}reddit: [<span className="string">&quot;r/sales&quot;</span>, <span className="string">&quot;r/startups&quot;</span>],{"\n"}
                {"    "}rss: [<span className="string">&quot;techcrunch.com/feed&quot;</span>],{"\n"}
                {"    "}hn: <span className="keyword">true</span>,{"\n"}
                {"  "}{"}"},{"\n"}
                {"  "}notify: {"{"}{"\n"}
                {"    "}email: <span className="string">&quot;you@company.com&quot;</span>,{"\n"}
                {"    "}slack: <span className="string">&quot;#leads&quot;</span>,{"\n"}
                {"  "}{"}"},{"\n"}
                {"}"};
              </div>
            </div>
          </div>

          {/* docsbot */}
          <div className="project-card">
            <div className="project-info">
              <div className="project-tag">Library</div>
              <h2>docsbot</h2>
              <p className="desc">Drop-in AI help assistant for any website. Add a floating chat widget powered by Claude that answers questions from your knowledge base. Three lines of code.</p>
              <ul className="feature-list">
                <li>React widget with typewriter animation</li>
                <li>Headless hook for custom UI</li>
                <li>Backend handler for Next.js / Express</li>
                <li>CSS custom properties for theming</li>
                <li>One dependency (react-markdown)</li>
              </ul>
              <a href="https://github.com/pengasuzie/docsbot" className="btn primary">View on GitHub</a>
              <Link href="/tools/docsbot" className="btn">Setup Guide</Link>
            </div>
            <div className="project-demo">
              <div className="widget-demo">
                <div className="widget-header">
                  <div className="widget-header-title">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
                    Help
                  </div>
                </div>
                <div className="widget-body">
                  <div className="widget-msg user">How do I invite team members?</div>
                  <div className="widget-msg bot">Go to <strong>Settings &rarr; Team</strong> and click <strong>Invite</strong>. Enter their email and assign a role: Admin, Editor, or Viewer. They&apos;ll get an invite link immediately.</div>
                </div>
                <div className="widget-input">
                  <input type="text" placeholder="Ask a question..." disabled />
                  <button disabled>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* claude-code-starter */}
          <div className="project-card">
            <div className="project-info">
              <div className="project-tag">Starter Kit</div>
              <h2>claude-code-starter</h2>
              <p className="desc">A pre-configured Claude Code project with 20 skills for voice/audio, strategic analysis, opportunity evaluation, and product development. Clone it, open it, start talking.</p>
              <ul className="feature-list">
                <li>20 skills across 4 categories, ready to use</li>
                <li>Interactive getting-started guide</li>
                <li>6-step opportunity evaluation pipeline</li>
                <li>BMAD Method with 7 product dev agents</li>
                <li>Pre-approved permissions, no constant prompts</li>
              </ul>
              <a href="https://github.com/pengasuzie/claude-code-starter" className="btn primary">View on GitHub</a>
              <Link href="/tools/claude-code-starter" className="btn">Details</Link>
            </div>
            <div className="project-demo">
              <div className="code-block">
                <span className="comment"># Clone and go</span>{"\n"}
                &gt; <span className="fn">git clone</span> github.com/.../claude-code-starter{"\n"}
                &gt; <span className="fn">cd</span> claude-code-starter &amp;&amp; <span className="fn">claude</span>{"\n\n"}
                <span className="comment"># Just talk naturally</span>{"\n"}
                &gt; <span className="string">Transcribe this meeting recording</span>{"\n"}
                <span className="tag">Transcribing... 2 speakers found.</span>{"\n\n"}
                &gt; <span className="string">I have a new business idea</span>{"\n"}
                <span className="tag">Let&apos;s capture this properly...</span>{"\n\n"}
                &gt; <span className="string">Score this opportunity</span>{"\n"}
                <span className="tag">Recommendation: Conditional Go (7.2/10)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MORE TOOLS */}
      <section className="skills" id="more-tools">
        <div className="container">
          <div className="section-label">More Tools</div>
          <div className="skills-grid">
            {tools.map((tool) => (
              <Link key={tool.name} href={tool.href} className="skill">
                <div className="skill-cat">{tool.cat}</div>
                <h3>{tool.name}</h3>
                <p>{tool.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-left">&copy; 2026 Robot Signals. Brisbane, Australia.</div>
            <div className="footer-right">
              <a href="https://www.linkedin.com/in/bruces/">LinkedIn</a>
              <a href="https://github.com/pengasuzie">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
