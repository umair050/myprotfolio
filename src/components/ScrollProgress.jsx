import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function update() {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setWidth(h > 0 ? (window.scrollY / h) * 100 : 0);
    }
    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div
      id="scrollProgress"
      className="fixed top-0 left-0 h-0.5 bg-gradient-to-r from-accent via-accent-secondary to-purple-500 z-[1001] transition-[width] duration-150 ease-out shadow-glow"
      style={{ width: `${width}%` }}
      aria-hidden="true"
    />
  );
}
