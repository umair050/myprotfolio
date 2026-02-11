export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="skip-link fixed left-1/2 -translate-x-1/2 -top-24 z-[10000] px-5 py-3 bg-accent text-white font-semibold rounded-lg shadow-card transition-[top] duration-200 focus:top-4 focus:outline-2 focus:outline-accent-hover focus:outline-offset-2"
    >
      Skip to main content
    </a>
  );
}
