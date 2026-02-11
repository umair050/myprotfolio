import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

function smoothScroll(e, href) {
  if (href.startsWith('#')) {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const nav = document.querySelector('nav');
      const y = el.getBoundingClientRect().top + window.scrollY - (nav?.offsetHeight ?? 0);
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (menuOpen) document.body.classList.add('menu-open');
    else document.body.classList.remove('menu-open');
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 w-full min-h-14 bg-bg-secondary border-b border-border z-[1000] pt-[env(safe-area-inset-top)] shadow-sm transition-shadow ${
          scrolled ? 'shadow-lg' : ''
        } ${menuOpen ? 'z-[9999]' : ''}`}
      >
        <div className="max-w-6xl w-full mx-auto min-h-14 flex justify-between items-center gap-4 px-4 md:px-6">
          <a
            href="#home"
            onClick={(e) => smoothScroll(e, '#home')}
            className="flex items-center justify-center w-10 h-10 min-w-10 min-h-10 rounded-lg overflow-hidden flex-shrink-0 bg-card-bg border border-border shrink-0"
            aria-label="Home"
          >
            <img
              src="/Malik-Umair.png"
              alt="Malik Umair"
              className="w-full h-full object-cover object-top"
              style={{ imageRendering: '-webkit-optimize-contrast' }}
            />
          </a>

          <button
            type="button"
            className="md:hidden flex flex-col items-center justify-center gap-1 w-11 h-11 min-w-11 min-h-11 p-0 bg-card-bg border border-border rounded-lg cursor-pointer"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="block w-5 h-0.5 bg-text-primary rounded-full transition-transform" />
            <span className="block w-5 h-0.5 bg-text-primary rounded-full transition-transform" />
            <span className="block w-5 h-0.5 bg-text-primary rounded-full transition-transform" />
          </button>

          <ul
            className={`list-none m-0 p-0 transition-transform duration-300 ease-out
              ${menuOpen
                ? 'flex fixed top-0 right-0 w-[280px] max-w-[90vw] h-full pt-16 pb-[env(safe-area-inset-bottom)] px-4 bg-card-bg border-l border-border flex-col items-stretch justify-start shadow-xl z-[1001] translate-x-0 visible'
                : 'hidden translate-x-full invisible'
              }
              md:!flex md:!relative md:translate-x-0 md:visible md:w-auto md:max-w-none md:h-auto md:pt-0 md:pb-0 md:px-0 md:bg-transparent md:border-0 md:shadow-none md:flex-row md:items-center md:gap-7`}
          >
            <li className="absolute top-0 right-0 pt-3 pr-4 md:hidden">
              <button
                type="button"
                className="flex items-center justify-center w-11 h-11 rounded-lg border border-border bg-transparent text-text-primary hover:bg-skills-bg hover:text-accent"
                aria-label="Close menu"
                onClick={closeMenu}
              >
                <i className="fas fa-times text-xl" aria-hidden />
              </button>
            </li>
            {navLinks.map(({ href, label }) => (
              <li key={href} className="w-full md:w-auto border-b border-border md:border-0 last:border-0">
                <a
                  href={href}
                  onClick={(e) => {
                    smoothScroll(e, href);
                    closeMenu();
                  }}
                  className="block md:inline py-4 md:py-2 text-text-secondary no-underline font-medium text-[1.05rem] md:text-[0.95rem] hover:text-accent transition-colors min-h-12 md:min-h-0 flex items-center md:flex-inline"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[1000] md:hidden"
          aria-hidden
          onClick={closeMenu}
        />
      )}
    </>
  );
}
