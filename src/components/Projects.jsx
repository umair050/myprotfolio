import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="py-14 sm:py-16 md:py-20 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <header className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-2">
            Featured Projects
          </h2>
          <p className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto">
            Enterprise and product work: full-stack applications, dashboards, and platforms built with Java, React, and Angular.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
