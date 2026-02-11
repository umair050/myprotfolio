import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-20 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <header className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-2">
            What Clients &amp; Teams Say
          </h2>
          <p className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto">
            Feedback from tech leads, PMs, and CTOs I&apos;ve worked with on enterprise and product initiatives.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-card-bg rounded-xl p-6 border border-border shadow-card hover:border-accent/30 transition-colors border-b-4 border-b-accent"
            >
              <p className="text-text-secondary italic mb-4 leading-relaxed">"{t.text}"</p>
              <div className="font-semibold text-text-primary">— {t.author}</div>
              <div className="text-meta text-sm mt-1">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
