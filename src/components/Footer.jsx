export default function Footer() {
  return (
    <footer className="bg-card-bg py-6 text-center border-t border-border px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
      <p className="m-0 text-text-secondary text-sm">
        &copy; {new Date().getFullYear()} Malik Umair · Full Stack Developer (Java, React, Angular)
      </p>
    </footer>
  );
}
