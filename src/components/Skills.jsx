import { useRef, useEffect } from 'react';
import { skillsData } from '../data/skillsData';

export default function Skills() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'scale-100');
            const bar = entry.target.querySelector('.skill-progress');
            if (bar) {
              const level = bar.getAttribute('data-level');
              setTimeout(() => bar.style.setProperty('width', level), 200);
            }
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );
    cardsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-16 md:py-20 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <header className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-2">
            Technical Skills
          </h2>
          <p className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto">
            Full stack from backend (Java, Spring) to frontend (React, Angular) and DevOps—tools I use to deliver enterprise-grade applications.
          </p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <div
              key={skill.name}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-card-bg rounded-xl p-6 border border-border shadow-card opacity-0 scale-95 transition-all duration-500 hover:border-accent/40 hover:shadow-card-hover"
            >
              <div className="text-accent text-3xl mb-3">
                <i className={skill.icon} />
              </div>
              <div className="font-semibold text-text-primary mb-3">{skill.name}</div>
              <div className="h-2 bg-skills-bg rounded-full overflow-hidden">
                <div
                  className="skill-progress h-full bg-gradient-to-r from-accent to-accent-secondary rounded-full transition-[width] duration-700 ease-out"
                  data-level={`${skill.level}%`}
                  style={{ width: 0 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
