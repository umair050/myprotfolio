# Professional Software Engineer Portfolio - Design Guide

## 🎨 Color Palette (Dark Mode Optimized)

### Primary Colors
```css
--primary-dark: #0a0e27;        /* Main background */
--primary-darker: #050812;        /* Deep background */
--card-bg: #1a1f3a;               /* Card background */
--card-hover: #252b4a;            /* Card hover state */
```

### Accent Colors
```css
--accent-primary: #667eea;         /* Primary accent (Purple-Blue) */
--accent-secondary: #764ba2;       /* Secondary accent (Purple) */
--accent-hover: #7c8ef5;           /* Hover state */
--accent-light: #9ba8ff;          /* Light accent */
```

### Text Colors
```css
--text-primary: #e0e0e0;           /* Main text */
--text-secondary: #b0b0b0;         /* Secondary text */
--text-muted: #888888;             /* Muted text */
--text-inverse: #ffffff;           /* White text for contrast */
```

### Status Colors
```css
--success: #10b981;                /* Success/Positive */
--warning: #f59e0b;                /* Warning */
--error: #ef4444;                  /* Error */
--info: #3b82f6;                   /* Information */
```

### Border & Divider
```css
--border-color: #2a2f4a;           /* Borders */
--divider: #1e2438;                /* Dividers */
```

## 📐 Layout Structure

### 1. Header/Navigation
```
┌─────────────────────────────────────┐
│  Logo | Nav Links | Theme Toggle    │
└─────────────────────────────────────┘
```

**Components:**
- Fixed navigation bar with glassmorphism effect
- Smooth scroll indicators
- Active section highlighting
- Mobile hamburger menu

### 2. Hero Section
```
┌─────────────────────────────────────┐
│         Profile Image               │
│         Name & Title                │
│         Tagline                     │
│    [View Work] [Contact Me]         │
└─────────────────────────────────────┘
```

**Components:**
- Full-viewport height
- Animated background particles/gradient
- Floating profile image
- Typing animation for tagline

### 3. About Section
```
┌─────────────────────────────────────┐
│         Section Title               │
│  ┌─────────────────────────────┐  │
│  │   Professional Summary       │  │
│  │   Key Highlights             │  │
│  │   Personal Interests         │  │
│  └─────────────────────────────┘  │
└─────────────────────────────────────┘
```

### 4. Skills Section
```
┌─────────────────────────────────────┐
│         Section Title               │
│  ┌──────┐ ┌──────┐ ┌──────┐       │
│  │ Icon │ │ Icon │ │ Icon │       │
│  │ Name │ │ Name │ │ Name │       │
│  │ ▓▓▓▓ │ │ ▓▓▓▓ │ │ ▓▓▓▓ │       │
│  └──────┘ └──────┘ └──────┘       │
└─────────────────────────────────────┘
```

### 5. Experience Timeline
```
┌─────────────────────────────────────┐
│         Section Title               │
│  ┌──────┐                           │
│  │ 2024 │  Job Title                │
│  └──────┘  Company                  │
│         │  Responsibilities          │
│  ┌──────┐                           │
│  │ 2023 │  Job Title                │
│  └──────┘                           │
└─────────────────────────────────────┘
```

### 6. Projects Section
```
┌─────────────────────────────────────┐
│         Section Title               │
│  ┌──────┐ ┌──────┐ ┌──────┐       │
│  │Image │ │Image │ │Image │       │
│  │Title │ │Title │ │Title │       │
│  │Stack │ │Stack │ │Stack │       │
│  └──────┘ └──────┘ └──────┘       │
└─────────────────────────────────────┘
```

### 7. Testimonials Section
```
┌─────────────────────────────────────┐
│         Section Title               │
│  ┌──────────┐ ┌──────────┐        │
│  │ "Quote"   │ │ "Quote"   │        │
│  │ - Author  │ │ - Author  │        │
│  └──────────┘ └──────────┘        │
└─────────────────────────────────────┘
```

### 8. Contact Section
```
┌─────────────────────────────────────┐
│         Section Title               │
│  ┌──────────┐ ┌──────────┐        │
│  │ Contact   │ │ Contact  │        │
│  │ Info      │ │ Form    │        │
│  └──────────┘ └──────────┘        │
└─────────────────────────────────────┘
```

## 🔤 Typography

### Font Stack
```css
/* Primary Font - Modern Sans Serif */
font-family: 'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, 
             'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;

/* Monospace Font - For Code/Technical */
font-family: 'Fira Code', 'Consolas', 'Monaco', 'Courier New', monospace;
```

### Font Sizes
```css
--font-xs: 0.75rem;      /* 12px - Small labels */
--font-sm: 0.875rem;     /* 14px - Secondary text */
--font-base: 1rem;       /* 16px - Body text */
--font-lg: 1.125rem;     /* 18px - Subheadings */
--font-xl: 1.25rem;     /* 20px - Section titles */
--font-2xl: 1.5rem;     /* 24px - Card titles */
--font-3xl: 1.875rem;   /* 30px - Page titles */
--font-4xl: 2.25rem;    /* 36px - Hero title */
--font-5xl: 3rem;       /* 48px - Large hero */
```

### Font Weights
```css
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
```

### Line Heights
```css
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.75;
--leading-loose: 2;
```

## 🧩 UI Components

### 1. Buttons

#### Primary Button
```css
.btn-primary {
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  color: var(--text-inverse);
  padding: 0.875rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}
```

#### Secondary Button
```css
.btn-secondary {
  background: transparent;
  color: var(--accent-primary);
  border: 2px solid var(--accent-primary);
  padding: 0.875rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: var(--accent-primary);
  color: var(--text-inverse);
}
```

#### Icon Button
```css
.btn-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.btn-icon:hover {
  background: var(--accent-primary);
  border-color: var(--accent-primary);
  transform: scale(1.1);
}
```

### 2. Cards

#### Standard Card
```css
.card {
  background: var(--card-bg);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid var(--border-color);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  border-color: var(--accent-primary);
}
```

#### Glass Card (Glassmorphism)
```css
.card-glass {
  background: rgba(26, 31, 58, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
}
```

### 3. Input Fields

```css
.input {
  width: 100%;
  padding: 0.875rem 1rem;
  background: var(--card-bg);
  border: 2px solid var(--border-color);
  border-radius: 8px;
  color: var(--text-primary);
  font-size: 1rem;
  transition: all 0.3s ease;
}

.input:focus {
  outline: none;
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.input::placeholder {
  color: var(--text-muted);
}
```

### 4. Progress Bars

```css
.progress-bar {
  width: 100%;
  height: 8px;
  background: var(--card-hover);
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
  border-radius: 4px;
  transition: width 1s ease;
  position: relative;
}

.progress-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: shimmer 2s infinite;
}
```

### 5. Badges/Tags

```css
.badge {
  display: inline-block;
  padding: 0.375rem 0.875rem;
  background: var(--card-hover);
  color: var(--accent-primary);
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.badge:hover {
  background: var(--accent-primary);
  color: var(--text-inverse);
  transform: scale(1.05);
}
```

### 6. Tooltips

```css
.tooltip {
  position: relative;
}

.tooltip::after {
  content: attr(data-tooltip);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5rem 0.75rem;
  background: var(--card-bg);
  color: var(--text-primary);
  border-radius: 6px;
  font-size: 0.875rem;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  border: 1px solid var(--border-color);
}

.tooltip:hover::after {
  opacity: 1;
}
```

### 7. Loading Spinner

```css
.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid var(--card-hover);
  border-top-color: var(--accent-primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

### 8. Dividers

```css
.divider {
  height: 1px;
  background: linear-gradient(90deg, 
    transparent, 
    var(--border-color), 
    transparent
  );
  margin: 2rem 0;
}

.divider-vertical {
  width: 1px;
  height: 100%;
  background: linear-gradient(180deg, 
    transparent, 
    var(--border-color), 
    transparent
  );
}
```

## 🎭 Animation Guidelines

### Timing Functions
```css
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-smooth: cubic-bezier(0.25, 0.46, 0.45, 0.94);
```

### Duration
```css
--duration-fast: 0.15s;
--duration-normal: 0.3s;
--duration-slow: 0.5s;
--duration-slower: 0.8s;
```

### Common Animations
- Fade in/out: `opacity` + `transform`
- Slide: `transform: translateX/Y`
- Scale: `transform: scale`
- Rotate: `transform: rotate`
- Glow: `box-shadow` + `filter: blur`

## 📱 Responsive Breakpoints

```css
--breakpoint-xs: 480px;   /* Mobile small */
--breakpoint-sm: 640px;  /* Mobile large */
--breakpoint-md: 768px;   /* Tablet */
--breakpoint-lg: 1024px; /* Desktop */
--breakpoint-xl: 1280px; /* Large desktop */
--breakpoint-2xl: 1536px; /* Extra large */
```

## 🌟 Special Effects

### 1. Gradient Text
```css
.gradient-text {
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### 2. Glow Effect
```css
.glow {
  box-shadow: 0 0 20px rgba(102, 126, 234, 0.5);
}

.glow-hover:hover {
  box-shadow: 0 0 30px rgba(102, 126, 234, 0.7);
}
```

### 3. Glassmorphism
```css
.glass {
  background: rgba(26, 31, 58, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### 4. Particle Background
- Use libraries like particles.js or create CSS animations
- Subtle animated dots or geometric shapes
- Low opacity to not distract from content

## 🎯 Best Practices

### Accessibility
- Minimum contrast ratio: 4.5:1 for text
- Focus states for all interactive elements
- ARIA labels for icons and buttons
- Keyboard navigation support

### Performance
- Lazy load images
- Optimize animations (use `transform` and `opacity`)
- Minimize repaints and reflows
- Use CSS containment where possible

### SEO
- Semantic HTML5 elements
- Proper heading hierarchy
- Meta tags and Open Graph
- Structured data (JSON-LD)

## 📦 Recommended Libraries

1. **Fonts**: Google Fonts (Inter, Fira Code)
2. **Icons**: Font Awesome 6 or Heroicons
3. **Animations**: AOS (Animate On Scroll) or GSAP
4. **Particles**: particles.js or tsparticles
5. **Charts**: Chart.js or D3.js (if needed)

## 🎨 Design Inspiration

- **Minimalist**: Clean, lots of whitespace (dark space)
- **Modern**: Gradient accents, smooth animations
- **Professional**: Consistent spacing, clear hierarchy
- **Interactive**: Hover effects, micro-interactions
- **Accessible**: High contrast, clear typography

---

*This design guide provides a comprehensive foundation for building a professional software engineer portfolio optimized for dark mode.*

