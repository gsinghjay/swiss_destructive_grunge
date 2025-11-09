export default function Learning() {
  return (
    <div className="learning-page">
      <div className="page-header">
        <div className="header-chaos">
          <h1 className="main-title" style={{ transform: 'rotate(-6deg)' }}>LEARNING</h1>
          <h1 className="main-title-shadow" style={{ transform: 'rotate(4deg)' }}>PROJECT</h1>
        </div>
      </div>

      <section className="intro-chaos">
        <div className="intro-block torn" style={{ transform: 'rotate(3deg)' }}>
          <h2 className="intro-label">THIS SITE IS</h2>
          <div className="intro-tags">
            <span className="intro-tag" style={{ transform: 'rotate(-4deg)', background: 'var(--neon-yellow)' }}>A STUDENT PROJECT</span>
            <span className="intro-tag" style={{ transform: 'rotate(2deg)', background: 'var(--neon-pink)' }}>AN AI EXPERIMENT</span>
            <span className="intro-tag" style={{ transform: 'rotate(-1deg)', background: 'var(--neon-green)' }}>CONTROLLED CHAOS</span>
          </div>
        </div>
      </section>

      <div className="sections-container">
        <article className="learning-section distressed" style={{ transform: 'rotate(-3deg)' }}>
          <div className="section-header">
            <h2 className="section-title" style={{ color: 'var(--neon-yellow)' }}>THE ASSIGNMENT</h2>
            <div className="section-stripe" style={{ background: 'var(--neon-yellow)' }}></div>
          </div>
          <div className="section-content">
            <p>Swiss Design Lineage course. Final assignment: <strong>Transform a Swiss-style website using AI collaboration</strong>.</p>
            <p>Choose one style from design history. Work with AI to implement it. Document the process.</p>
            <p>I chose: <strong>Deconstructivist/Grunge Typography</strong> — Difficulty: ⭐⭐⭐ Advanced</p>
          </div>
        </article>

        <article className="learning-section distressed" style={{ transform: 'rotate(2deg)' }}>
          <div className="section-header">
            <h2 className="section-title" style={{ color: 'var(--neon-pink)' }}>THE APPROACH</h2>
            <div className="section-stripe" style={{ background: 'var(--neon-pink)' }}></div>
          </div>
          <div className="section-content">
            <p><strong>Student as director. AI as coder.</strong></p>
            <p>I researched deconstructivist principles. Studied David Carson, Vaughan Oliver, punk rock flyers. Built a clear vision.</p>
            <p>Then I directed the AI step by step: "Add rotated text here. Make this illegible. Layer these elements. More chaos."</p>
            <p>The AI handled implementation. I handled creative direction.</p>
          </div>
        </article>

        <article className="learning-section distressed" style={{ transform: 'rotate(-4deg)' }}>
          <div className="section-header">
            <h2 className="section-title" style={{ color: 'var(--neon-green)' }}>WHAT I LEARNED</h2>
            <div className="section-stripe" style={{ background: 'var(--neon-green)' }}></div>
          </div>
          <div className="section-content">
            <p><strong>Design history matters.</strong> Understanding deconstructivism's rebellion against Swiss Design gave every choice meaning.</p>
            <p><strong>AI needs direction.</strong> Generic prompts = generic results. Specific references to Ray Gun magazine, grunge textures, punk aesthetics = authentic chaos.</p>
            <p><strong>Rules matter even when breaking them.</strong> Controlled chaos isn't random. Every broken rule is intentional.</p>
          </div>
        </article>

        <article className="learning-section distressed" style={{ transform: 'rotate(3deg)' }}>
          <div className="section-header">
            <h2 className="section-title" style={{ color: 'var(--neon-yellow)' }}>CHALLENGES</h2>
            <div className="section-stripe" style={{ background: 'var(--neon-yellow)' }}></div>
          </div>
          <div className="section-content">
            <p><strong>Balancing chaos with usability.</strong> Make it chaotic enough to be authentic, readable enough to function.</p>
            <p><strong>Avoiding cliché.</strong> Grunge aesthetics can feel dated. Focused on intentionality over nostalgia.</p>
            <p><strong>Technical constraints.</strong> Pure CSS for effects. No heavy JavaScript. Keep it fast and deployable.</p>
          </div>
        </article>

        <article className="learning-section distressed" style={{ transform: 'rotate(-2deg)' }}>
          <div className="section-header">
            <h2 className="section-title" style={{ color: 'var(--neon-pink)' }}>TIME INVESTMENT</h2>
            <div className="section-stripe" style={{ background: 'var(--neon-pink)' }}></div>
          </div>
          <div className="section-content">
            <p><strong>Research:</strong> 2 hours studying deconstructivist history and examples</p>
            <p><strong>Planning:</strong> 1 hour defining aesthetic principles and site structure</p>
            <p><strong>Implementation:</strong> 5 hours directing AI to build components and styles</p>
            <p><strong>Refinement:</strong> 2 hours tweaking chaos levels and testing responsiveness</p>
            <p><strong>Total: ~10 hours over one week</strong></p>
          </div>
        </article>

        <article className="learning-section distressed" style={{ transform: 'rotate(4deg)' }}>
          <div className="section-header">
            <h2 className="section-title" style={{ color: 'var(--neon-green)' }}>REFLECTION</h2>
            <div className="section-stripe" style={{ background: 'var(--neon-green)' }}></div>
          </div>
          <div className="section-content">
            <p>This assignment proved: <strong>AI is a power tool, not a replacement for thinking</strong>.</p>
            <p>Without understanding deconstructivism's history and principles, I couldn't have directed the AI effectively.</p>
            <p>The final result works because of research, vision, and iteration — not because AI magically understood "make it grunge."</p>
            <p><strong>The designer still matters. Maybe more than ever.</strong></p>
          </div>
        </article>
      </div>

      <section className="credits-section">
        <div className="credits-chaos">
          <div className="credit-block" style={{ transform: 'rotate(-4deg)' }}>
            <h3>PROJECT</h3>
            <p>Swiss Design Lineage</p>
            <p>Vibe Coding Assignment</p>
          </div>
          <div className="credit-block" style={{ transform: 'rotate(3deg)' }}>
            <h3>INSTRUCTOR</h3>
            <p>Keith Williams</p>
            <p>November 2025</p>
          </div>
          <div className="credit-block" style={{ transform: 'rotate(-2deg)' }}>
            <h3>STYLE CHOSEN</h3>
            <p>Deconstructivist/Grunge</p>
            <p>Difficulty: ⭐⭐⭐ Advanced</p>
          </div>
        </div>
      </section>
    </div>
  )
}
