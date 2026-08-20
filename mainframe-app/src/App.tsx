import { useEffect, useState } from 'react'
import './App.css'

const stats = [
  { label: 'brand launches', value: '52+' },
  { label: 'avg. lift in engagement', value: '+168%' },
  { label: 'strategic partners', value: '19' },
  { label: 'response time', value: '< 48h' },
]

const services = [
  {
    title: 'Brand systems',
    body: 'Identity direction, landing pages, and messaging frameworks designed to feel premium from the first glance.',
  },
  {
    title: 'Product storytelling',
    body: 'Conversion-led narratives that clarify value, sharpen positioning, and turn product depth into momentum.',
  },
  {
    title: 'Motion design',
    body: 'Micro-interactions, hero content, and cinematic scroll moments that make the experience feel alive.',
  },
]

const processSteps = [
  'Discover the signal',
  'Build the story',
  'Ship the momentum',
]

const testimonials = [
  {
    quote: 'They translated a complex offer into a story people instantly understood.',
    author: 'Maya Chen',
    role: 'Marketing lead, Northstar Labs',
  },
  {
    quote: 'The new launch page made our product feel premium and easier to trust in one glance.',
    author: 'Leo Martin',
    role: 'Founder, Ember & Co',
  },
]

function App() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 30
      const y = (event.clientY / window.innerHeight - 0.5) * 26
      setPointer({ x, y })
    }

    window.addEventListener('pointermove', handlePointerMove)
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [])

  const eyeX = pointer.x * 0.9
  const eyeY = pointer.y * 0.8
  const chameleonTilt = `translate(${pointer.x * 1.2}px, ${pointer.y * 0.9}px) rotateX(${pointer.y * -0.65}deg) rotateY(${pointer.x * 0.8}deg)`

  return (
    <div className="app-shell text-white">
      <header className="site-header">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="brand-mark" aria-label="Mainframe home">
            <span className="brand-dot" />
            <span className="brand-word">Mainframe</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-200 md:flex">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="nav-cta hidden sm:inline-flex">
            Book a strategy call
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-20 lg:pt-16">
            <div className="hero-copy">
              <div className="hero-kicker">Creative agency for ambitious brands</div>
              <h1 className="display-title">
                We build <span className="text-gradient">digital stories</span>
                <br />that move people.
              </h1>
              <p className="hero-text">
                Mainframe turns strategy, design, and motion into standout digital experiences for brands ready to turn attention into action.
              </p>

              <div className="hero-actions">
                <a href="mailto:hello@mainframe.studio?subject=Project%20Enquiry" className="primary-btn">
                  Book a call
                </a>
                <a href="#work" className="secondary-btn">
                  See our work
                </a>
              </div>

              <div className="stats-grid">
                {stats.map((stat) => (
                  <div key={stat.label} className="stat-card">
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-glow" />
              <div className="mini-panel mini-panel-top">Brand systems</div>
              <div className="mini-panel mini-panel-bottom">Launch growth</div>

              <div className="chameleon-scene" style={{ transform: chameleonTilt }}>
                <div className="chameleon-shadow" />
                <div className="chameleon-shell">
                  <div className="chameleon-tail" />
                  <div className="chameleon-body">
                    <div className="chameleon-head">
                      <span className="eye eye-left" style={{ transform: `translate(${eyeX}px, ${eyeY}px)` }} />
                      <span className="eye eye-right" style={{ transform: `translate(${eyeX}px, ${eyeY}px)` }} />
                      <span className="mouth" />
                      <span className="tongue" />
                    </div>
                    <span className="spot spot-one" />
                    <span className="spot spot-two" />
                    <span className="spot spot-three" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="content-section">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="section-header">
              <p className="eyebrow">What we do</p>
              <h2>Strategy, creativity, and motion designed to convert.</h2>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article key={service.title} className="service-card">
                  <div className="service-index">0{services.indexOf(service) + 1}</div>
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="content-section muted-section">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="showcase-frame">
              <div className="showcase-copy">
                <p className="eyebrow">Selected work</p>
                <h2>We turn bold ideas into clear momentum.</h2>
                <p>
                  From positioning to launch campaigns, we build standout digital experiences that feel cinematic and commercially sharp.
                </p>
              </div>

              <div className="showcase-metrics">
                <div>
                  <strong>3.4x</strong>
                  <span>more demo requests</span>
                </div>
                <div>
                  <strong>72%</strong>
                  <span>lower bounce rate</span>
                </div>
                <div>
                  <strong>11 days</strong>
                  <span>to launch</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="content-section">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="section-header narrow-header">
              <p className="eyebrow">Process</p>
              <h2>Quiet structure. Loud impact.</h2>
            </div>

            <div className="process-grid">
              {processSteps.map((step, index) => (
                <div key={step} className="process-card">
                  <span className="process-number">0{index + 1}</span>
                  <h3>{step}</h3>
                  <p>
                    {index === 0 && 'We listen closely, map the opportunity, and define the signal worth amplifying.'}
                    {index === 1 && 'We shape the narrative, visuals, and motion system so every touchpoint feels intentional.'}
                    {index === 2 && 'We launch with clarity, refine fast, and keep the experience performing after the first click.'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section muted-section">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="section-header narrow-header">
              <p className="eyebrow">Clients say</p>
              <h2>Built to feel premium and convert.</h2>
            </div>

            <div className="testimonial-grid">
              {testimonials.map((item) => (
                <blockquote key={item.author} className="testimonial-card">
                  <p>“{item.quote}”</p>
                  <footer>
                    <strong>{item.author}</strong>
                    <span>{item.role}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer-cta">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="cta-panel">
            <div>
              <p className="eyebrow">Let’s build the next chapter</p>
              <h2>Ready for a website that feels as sharp as your ambition?</h2>
            </div>
            <a href="mailto:hello@mainframe.studio?subject=Book%20Strategy%20Call" className="primary-btn">
              Start a project
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
