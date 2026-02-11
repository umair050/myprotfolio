import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed z-[999] flex items-center justify-center w-12 h-12 min-w-12 min-h-12 rounded-full bg-accent text-white border border-border shadow-md transition-all duration-250 -tap-highlight-none ${
        visible ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
      }`}
      style={{
        bottom: 'max(1.5rem, env(safe-area-inset-bottom))',
        right: 'max(1.5rem, env(safe-area-inset-right))',
      }}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <i className="fas fa-arrow-up text-lg" aria-hidden />
    </button>
  );
}
