import { experiences } from '../data/experiences';

function ExperienceCard({ exp }) {
  return (
    <div className="bg-card-bg rounded-xl border border-border shadow-lg hover:shadow-xl hover:border-accent/25 transition-all duration-300 p-4 sm:p-5 md:p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
        <h3 className="text-lg sm:text-xl font-semibold text-text-primary">
          {exp.title}
        </h3>
        <span className="text-xs sm:text-sm font-medium text-meta whitespace-nowrap">
          {exp.duration}
        </span>
      </div>
      <p className="text-accent font-medium text-sm sm:text-base mb-1">
        {exp.company}
      </p>
      <p className="text-meta text-xs sm:text-sm mb-3 flex items-center gap-1.5">
        <i className="fas fa-map-marker-alt text-accent/70 text-[10px] sm:text-xs" aria-hidden />
        {exp.location}
      </p>
      {exp.technologies && exp.technologies.length > 0 && (
        <p className="text-xs text-meta mb-4 flex flex-wrap gap-1.5">
          <span className="font-medium text-accent/90">Technologies:</span>
          {exp.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded bg-skills-bg/80 text-text-secondary border border-border"
            >
              {tech}
            </span>
          ))}
        </p>
      )}
      <ul className="space-y-2.5">
        {exp.responsibilities.map((r, i) => (
          <li
            key={i}
            className="text-text-secondary text-sm sm:text-[15px] leading-relaxed pl-4 border-l-2 border-accent/30"
          >
            {r}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-14 sm:py-16 md:py-20 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <header className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-2">
            Professional Experience
          </h2>
          <p className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto">
            Full stack roles at enterprises and product companies—delivering scalable systems and high-impact features.
          </p>
        </header>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-4 sm:left-5 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-px"
            aria-hidden
          />
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={`${exp.company}-${exp.duration}`}
                className="relative mb-10 sm:mb-12 last:mb-0"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-4 sm:left-5 md:left-1/2 w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-accent border-2 border-bg shadow-[0_0_0_2px] shadow-accent/30 -translate-x-1/2 top-6 z-10"
                  aria-hidden
                />
                {/* Card: on mobile full width with left padding; on desktop alternating left/right */}
                <div
                  className={`pl-11 sm:pl-12 md:pl-0 md:w-1/2 ${
                    isEven ? 'md:pr-8 md:mr-auto' : 'md:pl-8 md:ml-auto'
                  }`}
                >
                  <ExperienceCard exp={exp} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
