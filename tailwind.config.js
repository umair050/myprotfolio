/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#0d1117',
        'bg-secondary': '#161b22',
        'card-bg': '#161b22',
        'card-hover': '#1c2128',
        accent: '#3b82f6',
        'accent-hover': '#60a5fa',
        'accent-secondary': '#6366f1',
        'text-primary': '#e6edf3',
        'text-secondary': '#c9d1d9',
        'text-muted': '#8b949e',
        'meta': '#9ca3af',
        'border': '#30363d',
        'skills-bg': '#1f2937',
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 24px rgba(59, 130, 246, 0.2)',
        'card': '0 4px 12px rgba(0, 0, 0, 0.35)',
        'card-hover': '0 12px 28px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(59, 130, 246, 0.12)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'grid-move': {
          '100%': { transform: 'translate(50px, 50px)' },
        },
      },
    },
  },
  plugins: [],
};
