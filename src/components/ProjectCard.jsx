import { useState } from 'react';

function Carousel({ images, name }) {
  const [index, setIndex] = useState(0);
  const total = images.length;

  const go = (dir) => setIndex((i) => (i + dir + total) % total);

  return (
    <div className="relative w-full aspect-video overflow-hidden bg-bg-secondary rounded-t-xl">
      <div
        className="flex w-full h-full transition-transform duration-300 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <div key={i} className="min-w-full h-full flex items-center justify-center bg-bg-secondary">
            <img
              src={img}
              alt={`${name} – screenshot ${i + 1}`}
              className="w-full h-full object-cover object-top"
            />
          </div>
        ))}
      </div>
      {total > 1 && (
        <>
          <div className="absolute top-3 right-3 rounded-full bg-black/70 text-white text-xs font-medium px-2.5 py-1 backdrop-blur-sm border border-white/10">
            {index + 1} / {total}
          </div>
          <button
            type="button"
            className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-accent text-white flex items-center justify-center z-10 transition-colors border border-white/20 touch-manipulation"
            onClick={() => go(-1)}
            aria-label="Previous image"
          >
            <i className="fas fa-chevron-left text-sm" />
          </button>
          <button
            type="button"
            className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-accent text-white flex items-center justify-center z-10 transition-colors border border-white/20 touch-manipulation"
            onClick={() => go(1)}
            aria-label="Next image"
          >
            <i className="fas fa-chevron-right text-sm" />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`h-1.5 rounded-full transition-all duration-200 touch-manipulation ${
                  i === index ? 'bg-accent w-5' : 'bg-white/50 w-1.5 hover:bg-white/70'
                }`}
                onClick={() => setIndex(i)}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function ProjectCard({ project, index }) {
  const [flipped, setFlipped] = useState(false);

  const imageBlock =
    project.images?.length > 0 ? (
      <Carousel images={project.images} name={project.name} />
    ) : project.image ? (
      <div className="w-full aspect-video overflow-hidden bg-bg-secondary rounded-t-xl">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover object-top"
        />
      </div>
    ) : (
      <div className="w-full aspect-video rounded-t-xl bg-gradient-to-br from-accent/90 to-accent-secondary/90 flex items-center justify-center text-white/90">
        <i className="fas fa-code text-4xl sm:text-5xl" />
      </div>
    );

  return (
    <article
      className="group max-w-full"
      style={{ animationDelay: `${(index % 6) * 80}ms` }}
    >
      <div
        className="relative w-full min-h-0 transition-transform duration-500 ease-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front */}
        <div
          className="rounded-xl overflow-hidden bg-card-bg border border-border shadow-lg hover:shadow-xl hover:border-accent/30 transition-all duration-300 flex flex-col"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {imageBlock}
          <div className="flex flex-col flex-1 p-4 sm:p-5 border-t border-border">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="text-lg sm:text-xl font-semibold text-text-primary leading-tight">
                {project.name}
              </h3>
              <span className="text-meta text-xs sm:text-sm font-medium whitespace-nowrap flex items-center gap-1">
                <i className="fas fa-calendar-alt text-accent/80 text-xs" />
                {project.duration}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.stack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-skills-bg/80 text-accent border border-border"
                >
                  {tech}
                </span>
              ))}
              {project.stack.length > 4 && (
                <span className="px-2.5 py-1 rounded-md text-xs font-medium text-meta">
                  +{project.stack.length - 4}
                </span>
              )}
            </div>
            <button
              type="button"
              onClick={() => setFlipped(true)}
              className="mt-auto w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-accent border border-accent/50 bg-accent/5 hover:bg-accent/15 hover:border-accent transition-colors touch-manipulation min-h-[44px]"
            >
              <i className="fas fa-arrow-right text-xs" />
              View details & links
            </button>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-xl overflow-hidden bg-card-bg border border-accent/25 shadow-xl flex flex-col"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="flex items-center justify-between p-4 sm:p-5 border-b border-border bg-card-bg/95">
            <h3 className="text-base sm:text-lg font-semibold text-text-primary truncate pr-10">
              {project.name}
            </h3>
            <button
              type="button"
              className="absolute top-4 right-4 w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center text-meta hover:text-white hover:bg-red-500/90 border border-border hover:border-red-500/50 transition-colors touch-manipulation flex-shrink-0"
              onClick={(e) => {
                e.stopPropagation();
                setFlipped(false);
              }}
              aria-label="Close details"
            >
              <i className="fas fa-times text-sm" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto overscroll-contain p-4 sm:p-5 space-y-4">
            <div>
              <p className="text-xs font-medium text-meta uppercase tracking-wider mb-2">
                Tech stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-skills-bg text-accent border border-accent/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-medium text-accent uppercase tracking-wider mb-2">
                Key features & achievements
              </p>
              <ul className="space-y-2">
                {project.details.map((d, i) => (
                  <li
                    key={i}
                    className="text-sm text-text-secondary leading-relaxed pl-4 border-l-2 border-accent/30"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-bg border border-border text-text-primary font-medium text-sm hover:bg-accent hover:border-accent hover:text-white transition-colors touch-manipulation min-h-[44px]"
              >
                <i className="fab fa-github text-base" />
                View code
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-accent text-white font-medium text-sm hover:bg-accent-hover transition-colors touch-manipulation min-h-[44px]"
              >
                <i className="fas fa-external-link-alt text-sm" />
                Live demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
