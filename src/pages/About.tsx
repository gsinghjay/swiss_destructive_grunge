export default function About() {
  return (
    <div className="about-page">
      <div className="title-chaos">
        <h1 className="about-title" style={{ transform: 'rotate(-5deg)' }}>ABOUT</h1>
        <div className="title-fragment" style={{ transform: 'rotate(8deg)' }}>ABOUT</div>
        <div className="title-fragment" style={{ transform: 'rotate(-3deg)' }}>ABOUT</div>
      </div>

      <section className="manifesto-section">
        <div className="section-block distressed" style={{ transform: 'rotate(-2deg)' }}>
          <h2 className="block-title">THE PHILOSOPHY</h2>
          <div className="block-stripe"></div>
          <p>This is a rebellion. A rejection of Swiss Design orthodoxy. A celebration of <strong>controlled chaos</strong>.</p>
          <p>For decades, designers worshipped at the altar of the grid. Perfect alignment. Clean lines. Helvetica everywhere. It became <strong>corporate</strong>. It became <strong>soulless</strong>.</p>
          <p>Deconstructivist typography said: <strong>NO MORE</strong>.</p>
        </div>

        <div className="section-block distressed" style={{ transform: 'rotate(3deg)', marginLeft: '-40px' }}>
          <h2 className="block-title" style={{ color: 'var(--neon-pink)' }}>THE AESTHETIC</h2>
          <div className="block-stripe" style={{ background: 'var(--neon-pink)' }}></div>
          <p><strong>Fragment text.</strong> Break it apart. Let letters interrupt each other. Make readers work for meaning.</p>
          <p><strong>Layer everything.</strong> Overlapping elements. Colliding typography. Visual tension instead of harmony.</p>
          <p><strong>Embrace illegibility.</strong> Strategic moments where form overwhelms function. Emotion over information.</p>
        </div>

        <div className="section-block distressed" style={{ transform: 'rotate(-1deg)', marginLeft: '40px' }}>
          <h2 className="block-title" style={{ color: 'var(--neon-green)' }}>THE INSPIRATION</h2>
          <div className="block-stripe" style={{ background: 'var(--neon-green)' }}></div>
          <p><strong>David Carson</strong> — Ray Gun magazine. The godfather of controlled chaos.</p>
          <p><strong>Vaughan Oliver</strong> — 4AD Records. Dark, layered, mysterious album art.</p>
          <p><strong>Neville Brody</strong> — The Face magazine. Experimental British typography.</p>
          <p><strong>Punk rock flyers</strong> — Cut-and-paste aesthetics. Photocopied rebellion.</p>
        </div>
      </section>

      <section className="tech-section">
        <div className="tech-header" style={{ transform: 'rotate(2deg)' }}>
          <h2 className="section-title torn">TECH STACK</h2>
        </div>
        <div className="tech-grid">
          <div className="tech-card" style={{ transform: 'rotate(-3deg)' }}>
            <h3>VITE + REACT</h3>
            <p>Lightning fast dev. Modern tooling. TypeScript.</p>
          </div>
          <div className="tech-card" style={{ transform: 'rotate(4deg)' }}>
            <h3>STATIC JSON</h3>
            <p>No database. Pure data files. Fast and simple.</p>
          </div>
          <div className="tech-card" style={{ transform: 'rotate(-2deg)' }}>
            <h3>CSS CHAOS</h3>
            <p>Transforms, overlaps, filters. Pure CSS mayhem.</p>
          </div>
          <div className="tech-card" style={{ transform: 'rotate(3deg)' }}>
            <h3>GITHUB PAGES</h3>
            <p>Free hosting. Auto-deploy from main branch.</p>
          </div>
        </div>
      </section>

      <section className="quote-section">
        <blockquote className="big-quote torn" style={{ transform: 'rotate(-3deg)' }}>
          <div className="quote-text glitch" data-text="DON'T MISTAKE LEGIBILITY FOR COMMUNICATION">
            "DON'T MISTAKE LEGIBILITY FOR COMMUNICATION"
          </div>
          <cite>— DAVID CARSON</cite>
        </blockquote>
      </section>

      <section className="final-section">
        <div className="final-chaos">
          <div className="final-stripe" style={{ background: 'var(--neon-yellow)' }}></div>
          <div className="final-stripe" style={{ background: 'var(--neon-pink)', marginTop: '1rem' }}></div>
          <div className="final-stripe" style={{ background: 'var(--neon-green)', marginTop: '1rem' }}></div>
        </div>
        <p className="final-text" style={{ transform: 'rotate(-2deg)' }}>NOT ACCIDENTAL</p>
        <p className="final-text" style={{ transform: 'rotate(3deg)' }}>NOT GENERIC</p>
        <p className="final-text" style={{ transform: 'rotate(-2deg)' }}>INTENTIONAL CHAOS</p>
      </section>
    </div>
  )
}
