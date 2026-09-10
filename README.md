# Vortex — Modern SaaS Landing Page

A high-performance, responsive developer platform landing page built with Vue 3, Tailwind CSS v4, and Vite. Designed with dark-mode developer aesthetics inspired by Linear, Nova, and Haven.

**Live Demo**: [https://vortex-vue-landing-page.vercel.app/](https://vortex-vue-landing-page.vercel.app/)

---

## Tech Stack

- **Framework**: Vue 3 (Composition API with `<script setup>`)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons**: Lucide Vue Next
- **Typography**: Plus Jakarta Sans

---

## Key Features

- **Component Architecture**: Built using modular Single File Components (SFC) with Composition API.
- **Unified Brand Identity**: SVG icon integration across navigation, footer, modal dialogs, and browser favicon.
- **Performant Motion**: Smooth entrance stagger, right-to-left infinite marquee, and native `IntersectionObserver` scroll reveals without external animation runtimes.
- **Interactive UI Elements**:
  - Interactive feature console with Vue `<Transition>` tabs.
  - Accessible FAQ accordion powered by CSS Grid height transitions.
  - Teleported authentication modal dialog with keyboard accessibility (`Esc` listener) and backdrop click handling.
- **SEO & Social Optimization**: Open Graph and Twitter Card metadata configured for rich link sharing.

---

## Project Structure

```
Vue-landing-page/
├── index.html
├── vite.config.js
├── package.json
├── public/
│   ├── favicon.svg
│   └── images/
│       └── dashboard-preview.jpg
└── src/
    ├── main.js
    ├── App.vue
    ├── assets/css/main.css
    ├── composables/
    │   └── useScrollReveal.js
    └── components/
        ├── layout/
        │   ├── Navbar.vue
        │   └── Footer.vue
        ├── sections/
        │   ├── HeroSection.vue
        │   ├── LogoCloud.vue
        │   ├── SolutionsSection.vue
        │   ├── FeatureTabsSection.vue
        │   ├── FeaturesSection.vue
        │   ├── TestimonialsSection.vue
        │   ├── FaqSection.vue
        │   └── CtaSection.vue
        └── common/
            └── AuthModal.vue
```

---

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```
The compiled output will be generated in the `dist/` directory.
