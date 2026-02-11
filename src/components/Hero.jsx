export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0f1e] via-[#1a1f35] to-[#0a0f1e] text-text-primary text-center relative overflow-hidden pt-28 pb-20 px-6"
      aria-label="Introduction"
    >
      <div className="absolute inset-0 bg-[length:50px_50px] bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] animate-[grid-move_20s_linear_infinite] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_80%)]" />
      <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.15)_0%,transparent_70%)] blur-[60px] opacity-60" />
      <div className="absolute -bottom-[15%] -right-[10%] w-1/2 h-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.12)_0%,transparent_70%)] blur-[70px] opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-[900px] px-6">
        <div className="inline-block mb-8 w-52 h-[280px] flex-shrink-0 relative">
          <div className="absolute -inset-4 bg-black/50 backdrop-blur-xl rounded-2xl border border-accent/15 -z-0" />
          <img
            src="/Malik-Umair.png"
            alt="Malik Umair"
            className="w-full h-full object-cover object-top rounded-xl border-4 border-transparent shadow-lg relative z-10 brightness-110 contrast-105"
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-br from-white via-indigo-100 to-indigo-200 bg-clip-text text-transparent tracking-tight animate-[fadeInUp_0.7s_ease_forwards]">
          Malik Umair
        </h1>
        <p className="text-xl md:text-2xl text-accent font-semibold mb-4 opacity-0 animate-[fadeInUp_0.7s_ease_0.1s_forwards]">
          Full Stack Developer
        </p>
        <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed opacity-0 animate-[fadeInUp_0.7s_ease_0.2s_forwards]">
          I deliver end-to-end solutions for enterprises and product teams—Java &amp; Spring on the backend, React &amp; Angular on the front. Scalable systems, clean architecture, and outcomes that drive business value.
        </p>
        <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-[fadeInUp_0.7s_ease_0.25s_forwards]">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-semibold hover:bg-accent-hover transition-colors shadow-md"
          >
            <i className="fas fa-briefcase" /> View My Work
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-card-bg border-2 border-border text-text-primary font-semibold hover:border-accent hover:text-accent transition-colors"
          >
            <i className="fas fa-handshake" /> Discuss a Project
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-accent/20 flex flex-wrap justify-center gap-6 opacity-0 animate-[fadeInUp_0.6s_ease_0.5s_forwards]">
          {[
            { icon: 'fas fa-code', value: '7+', label: 'Years Exp' },
            { icon: 'fas fa-project-diagram', value: '50+', label: 'Projects' },
            { icon: 'fas fa-users', value: '20+', label: 'Clients' },
            { icon: 'fas fa-award', value: '100%', label: 'Satisfaction' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-3 bg-[rgba(22,27,34,0.6)] backdrop-blur-lg border border-accent/20 rounded-lg px-5 py-4 hover:bg-[rgba(22,27,34,0.9)] hover:border-accent transition-all"
            >
              <div className="text-accent text-2xl">
                <i className={stat.icon} />
              </div>
              <div className="text-left">
                <div className="text-lg font-bold text-text-primary leading-none mb-1">{stat.value}</div>
                <div className="text-xs text-text-secondary uppercase tracking-wider">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
