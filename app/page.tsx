const principles = [
  {
    number: "01",
    title: "Calm by design",
    body: "Technology should support attention rather than constantly compete for it.",
  },
  {
    number: "02",
    title: "Useful in real life",
    body: "A product should solve genuine problems—not exist only to demonstrate what technology can do.",
  },
  {
    number: "03",
    title: "Built around trust",
    body: "People should understand what a product knows, what it does, and where they remain in control.",
  },
];

const havenFeatures = [
  "Trusted household memory",
  "Family plans, tasks, and routines",
  "Information people can review",
  "Private by design",
];

const buildPrinciples = [
  {
    number: "01",
    title: "Start with the human need",
    body: "We begin with the real problem—not with a technology looking for a use.",
  },
  {
    number: "02",
    title: "Protect human agency",
    body: "AI should prepare, organize, and support. Important decisions remain human.",
  },
  {
    number: "03",
    title: "Treat privacy as architecture",
    body: "Data choices should be made at the system level, not added later as marketing language.",
  },
  {
    number: "04",
    title: "Build, test, and learn openly",
    body: "Meaningful lessons and progress become part of EverRoute Build Notes.",
  },
];

const buildNotes = [
  {
    title: "Why I’m Building Haven",
    excerpt:
      "The real-life problem behind Haven and the kind of personal technology I believe should exist.",
    meta: "Founder note · 6 min read",
  },
  {
    title: "What Thoughtful AI Means at EverRoute",
    excerpt:
      "A practical definition of calm design, human control, usefulness, and trust.",
    meta: "Principles · 5 min read",
  },
  {
    title: "Building Memory Without Taking Control",
    excerpt:
      "The challenge of making AI more continuous while keeping people involved in what it remembers.",
    meta: "Product thinking · 7 min read",
  },
];

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="container nav-shell">
          <a className="wordmark" href="#top" aria-label="EverRoute home">
            EverRoute
          </a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#haven">Haven</a>
            <a href="#notes">Build Notes</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="button button-primary nav-cta" href="https://heyhaven.ca">
            Explore Haven
          </a>
        </div>
      </header>

      <div id="content">
        <section id="top" className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">EverRoute · New Brunswick, Canada</p>
              <h1>Thoughtful technology for real life.</h1>
              <p className="hero-lead">
                EverRoute is a Canadian technology company building calm,
                practical AI products designed around the way people actually
                live.
              </p>
              <div className="button-row">
                <a className="button button-primary" href="https://heyhaven.ca">
                  Explore Haven
                </a>
                <a className="button button-secondary" href="#notes">
                  Follow the build
                </a>
              </div>
              <p className="status-line">
                Currently building Haven, a private AI assistant for family life.
              </p>
            </div>

            <div className="product-stage" aria-label="Haven product preview">
              <div className="product-card product-card-large">
                <div className="product-card-bar">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="product-card-content">
                  <p className="product-kicker">Good evening</p>
                  <h2>What would help right now?</h2>
                  <div className="product-action-grid">
                    <span>Capture something</span>
                    <span>Plan the week</span>
                    <span>Remember a detail</span>
                    <span>Review family updates</span>
                  </div>
                </div>
              </div>
              <div className="product-card product-card-small">
                <p className="product-kicker">Haven remembers</p>
                <strong>Alex loves VR games.</strong>
                <span>Trusted family memory</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section section-light">
          <div className="container">
            <div className="section-intro">
              <p className="eyebrow">Why EverRoute</p>
              <h2>Technology should make life feel more manageable.</h2>
              <p>
                Many digital tools promise to save time while adding more
                notifications, more decisions, and more systems to maintain.
                EverRoute is exploring a different approach.
              </p>
            </div>

            <div className="principle-grid">
              {principles.map((principle) => (
                <article className="principle" key={principle.number}>
                  <span>{principle.number}</span>
                  <h3>{principle.title}</h3>
                  <p>{principle.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="haven" className="section section-dark">
          <div className="container haven-grid">
            <div className="haven-visual" aria-hidden="true">
              <div className="haven-orbit haven-orbit-one" />
              <div className="haven-orbit haven-orbit-two" />
              <div className="haven-core">H</div>
            </div>

            <div className="haven-copy">
              <p className="eyebrow eyebrow-light">Our flagship product</p>
              <h2>Meet Haven.</h2>
              <p>
                Haven is a private AI assistant for family life, being built to help
                households capture what matters, review shared information, organize
                plans and routines, and recall important details when they are needed.
              </p>
              <ul className="feature-list">
                {havenFeatures.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <div className="button-row">
                <a className="button button-light" href="https://heyhaven.ca">
                  Visit HeyHaven.ca
                </a>
                <a
                  className="button button-ghost"
                  href="https://tally.so/r/2EoJ9V"
                >
                  Join the waitlist
                </a>
              </div>
              <p className="disclaimer">
                Haven is currently in active development. Product features and
                availability will evolve as we build and test the experience.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-editorial">
          <div className="container editorial-grid">
            <div>
              <p className="eyebrow">Our point of view</p>
              <h2>
                Building for the space between technical capability and real
                life.
              </h2>
            </div>
            <div className="editorial-copy">
              <p>
                Artificial intelligence is becoming more capable quickly. But
                capability alone does not make a product helpful, trustworthy,
                or comfortable to live with.
              </p>
              <p>
                EverRoute exists to turn emerging technical capabilities into
                products that feel useful in the ordinary moments where life
                actually happens.
              </p>
            </div>
          </div>

          <div className="container pathway" aria-label="EverRoute product approach">
            {[
              "Capability",
              "Context",
              "Trust",
              "Everyday usefulness",
            ].map((item, index) => (
              <div className="pathway-step" key={item}>
                <span>0{index + 1}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="section founder-section">
          <div className="container founder-grid">
            <div
  className="founder-photo"
  role="img"
  aria-label="Portrait of EverRoute founder Marc Cormier"
/>
            <div>
              <p className="eyebrow">Founder story</p>
              <h2>Built from real life - not a pitch deck.</h2>
              <p>
                EverRoute was founded by Marc Cormier, a Canadian technology
                professional, husband, and father building products around a
                problem he experiences personally.
              </p>
              <p>
                Modern life asks people to keep track of work, family
                responsibilities, appointments, goals, ideas, health, and
                hundreds of unfinished details - often across disconnected apps
                and systems.
              </p>
              <blockquote>
                What would personal technology look like if it helped carry
                some of life’s mental load without taking control away from the
                person?
              </blockquote>
              <span className="status-text">
                Founder story coming soon
              </span>
            </div>
          </div>
        </section>

        <section className="section section-light">
          <div className="container">
            <div className="section-intro compact">
              <p className="eyebrow">How we build</p>
              <h2>Deliberate by default.</h2>
            </div>
            <div className="build-list">
              {buildPrinciples.map((item) => (
                <article key={item.number}>
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="notes" className="section notes-section">
          <div className="container">
            <div className="section-heading-row">
              <div>
                <p className="eyebrow">Build Notes</p>
                <h2>Follow what we are learning.</h2>
              </div>
              <p>
                Decisions, experiments, and lessons from building Haven and a
                thoughtful AI company.
              </p>
            </div>

            <div className="notes-grid">
              {buildNotes.map((note) => (
                <article className="note-card" key={note.title}>
                  <p className="note-meta">{note.meta}</p>
                  <h3>{note.title}</h3>
                  <p>{note.excerpt}</p>
                  <span className="status-text">Coming soon</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="newsletter-section">
          <div className="container newsletter-grid">
            <div>
              <p className="eyebrow eyebrow-light">EverRoute Build Notes</p>
              <h2>Follow the journey from idea to product.</h2>
              <p>
                Occasional notes about building Haven, designing thoughtful AI,
                and growing EverRoute.
              </p>
            </div>
            <div className="newsletter-form-placeholder">
              <label htmlFor="email">Email address</label>
              <div>
                <input id="email" type="email" placeholder="you@example.com" disabled />
                <button type="button" disabled>
                  Coming soon
                </button>
              </div>
              <small>
                Signup integration will be connected before launch.
              </small>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Start a conversation.</h2>
              <p>
                For partnerships, startup programs, media, research, or other
                professional inquiries.
              </p>
            </div>
            <div className="contact-actions">
              <a className="button button-primary" href="mailto:hello@everroute.ca">
                Contact EverRoute
              </a>
              <a className="button button-secondary" href="https://heyhaven.ca">
                Visit Haven
              </a>
            </div>
          </div>
        </section>
      </div>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <p className="wordmark footer-wordmark">EverRoute</p>
            <p>Thoughtful technology for real life.</p>
            <p>Built in New Brunswick, Canada.</p>
          </div>
          <div>
            <strong>Company</strong>
            <a href="#about">About</a>
            <a href="#notes">Build Notes</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <strong>Products</strong>
            <a href="https://heyhaven.ca">Haven</a>
            <a href="https://tally.so/r/2EoJ9V">Haven waitlist</a>
          </div>
          <div>
            <strong>Legal</strong>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 EverRoute Inc. All rights reserved.</span>
        </div>
      </footer>
    </main>
  );
}
