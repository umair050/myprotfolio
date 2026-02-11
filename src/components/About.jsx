export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-accent">
          About Me
        </h2>
        <div className="bg-card-bg rounded-xl p-8 md:p-10 border border-border shadow-card space-y-6">
          <p className="text-text-secondary leading-relaxed">
            I am a <strong className="text-text-primary">Full Stack Developer</strong> with over 7 years of experience building production-grade applications for enterprises and high-growth product companies. I own the full stack: <strong className="text-accent">Java &amp; Spring</strong> for robust backends and APIs, and <strong className="text-accent">React &amp; Angular</strong> for modern, performant front ends. My work focuses on scalability, clean architecture, and delivery that meets strict quality and timeline expectations.
          </p>
          <p className="text-text-secondary leading-relaxed">
            I partner with CTOs, product leaders, and engineering teams to turn complex requirements into reliable systems—from HRMS and marketplaces to healthcare analytics and fleet management. I integrate cleanly with existing tech stacks, contribute to API design and data contracts, and deliver UIs that are accessible, responsive, and maintainable. Data visualization (D3.js, Chart.js), state management (Redux, Context), and CI/CD (Jenkins, Maven, Gradle) are part of my standard toolkit.
          </p>
          <p className="text-text-secondary leading-relaxed">
            I have delivered across industries including technology, e-commerce, healthcare, logistics, and financial services. I emphasize code quality, documentation, and collaboration so that solutions stay maintainable and teams can iterate with confidence. I am outcome-focused, comfortable in remote and cross-functional setups, and committed to timelines and standards that matter to high-profile clients.
          </p>

          <div className="pt-4 border-t border-border">
            <h3 className="text-lg font-semibold text-accent mb-2 flex items-center gap-2">
              <i className="fas fa-graduation-cap" aria-hidden />
              Education
            </h3>
            <p className="text-text-secondary">
              <strong className="text-text-primary">Bachelor of Science in Software Engineering</strong>
              <br />
              COMSATS Institute of Information Technology · Pakistan · 2017
            </p>
          </div>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-lg bg-accent text-white font-semibold hover:bg-accent-hover transition-colors"
          >
            <i className="fas fa-handshake" /> Let&apos;s Work Together
          </a>
        </div>
      </div>
    </section>
  );
}
