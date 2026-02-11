# Malik Umair Portfolio – React + Tailwind

This repo now includes a **React + Vite + Tailwind** version of the portfolio, with one component per section.

## Structure

- **`index.html`** – Vite entry (React app)
- **`index-legacy.html`** – Original single-file static portfolio (backup)
- **`src/`**
  - **`components/`** – One component per section and shared UI:
    - `SkipLink.jsx`, `ScrollProgress.jsx`, `Nav.jsx`, `Footer.jsx`, `ScrollToTop.jsx`
    - `Hero.jsx`, `About.jsx`, `Skills.jsx`, `Experience.jsx`, `Projects.jsx`, `ProjectCard.jsx`, `Testimonials.jsx`, `Contact.jsx`
  - **`data/`** – `skillsData.js`, `experiences.js`, `projects.js`, `testimonials.js`
  - `App.jsx`, `main.jsx`, `index.css`

## Commands

```bash
npm install   # install dependencies
npm run dev   # dev server (default http://localhost:5173)
npm run build # production build → dist/
npm run preview # preview production build
```

## Assets

Static assets are served from **`public/`**. For images to load:

- **`public/Malik-Umair.png`** – nav and hero photo
- **`public/umair.jpg`** – favicon
- **`public/projectPictures/`** – project screenshots (hrms, nihad, pkg)

If you haven’t already, copy from the project root:

- `Malik-Umair.png` → `public/`
- `umair.jpg` → `public/`
- `projectPictures/` → `public/`

## Contact form (email to you)

The contact form sends submissions to **malikumair112233@gmail.com** using [Formspree](https://formspree.io) (no backend needed).

1. Sign up at [formspree.io](https://formspree.io) (free).
2. Create a new form and set the notification email to **malikumair112233@gmail.com**.
3. Copy your form ID from the form URL (e.g. `https://formspree.io/f/xyzabc` → `xyzabc`).
4. Create a `.env` file in the project root with:
   ```bash
   VITE_FORMSPREE_ID=xyzabc
   ```
5. Restart the dev server (`npm run dev`). For production, set the same variable in your host’s environment or in the build.

If `VITE_FORMSPREE_ID` is not set, the form will show an error asking you to configure it.

## Tech stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3**
- **Font Awesome 6** (CDN)
