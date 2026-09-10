# ⚡ Vortex — Modern SaaS Landing Page

> A high-performance, developer-first SaaS landing page built with **Vue 3 (Composition API `<script setup>`)**, **Tailwind CSS v4**, and **Vite**. Modeled with sleek dark-mode aesthetics inspired by modern developer platforms like Linear, Nova, and Haven.

🔗 **Live Demo**: [https://vortex-vue-landing-page.vercel.app/](https://vortex-vue-landing-page.vercel.app/)

---

## ✨ Key Features

- **Vue 3 Composition API**: Clean component architecture utilizing `<script setup>`, single-responsibility modules, and predictable one-way data flow (`defineProps`, `defineEmits`).
- **Tailwind CSS v4 Engine**: Lightning-fast styling powered by the `@tailwindcss/vite` compiler with a minimal production CSS footprint (~42 kB).
- **Interactive Feature Switcher**: Seamless tab transitions using Vue’s native `<Transition mode="out-in">` to eliminate layout shift.
- **Teleported Modal Dialog**: Sign In / Sign Up authentication modal rendered directly into `<body>` via `<Teleport to="body">` with Esc-key dismiss and outside-click detection.
- **Smooth Scroll Animations**: Lightweight viewport entrance animations powered by a native browser `IntersectionObserver` composable (`useScrollReveal.js`).
- **Responsive & Accessible**: Mobile slide-out drawer, custom emerald focus rings, semantic HTML5 landmarks, and full keyboard accessibility.

---

## 🛠️ Tech Stack

- **Framework**: [Vue 3](https://vuejs.org/) (`<script setup>`, Composition API)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide Vue Next](https://lucide.dev/)
- **Typography**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 🚀 Getting Started

### 1. Clone repository
```bash
git clone https://github.com/Vincent0-8/Vortex-Vue-landing-page.git
cd Vortex-Vue-landing-page
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```

### 4. Build for production
```bash
npm run build
```

---

## 📁 Project Structure

```
Vue-landing-page/
├── LEARNING_NOTE.md            # Study notes, Vue vs React, interview cheatsheet
├── index.html                  # HTML entry point, SEO & Open Graph social metadata
├── vite.config.js              # Vite & Tailwind CSS v4 compiler setup
├── public/
│   ├── favicon.svg             # Official SVG brand mark
│   └── images/
│       └── dashboard-preview.jpg # High-res dashboard preview mockup
└── src/
    ├── main.js                 # Vue entry point & stylesheet imports
    ├── App.vue                 # Root layout orchestrator & modal state
    ├── assets/css/main.css     # Tailwind v4 import & custom keyframe animations
    ├── composables/
    │   └── useScrollReveal.js  # Native IntersectionObserver scroll observer
    └── components/
        ├── layout/
        │   ├── Navbar.vue      # Sticky glassmorphism header & mobile drawer
        │   └── Footer.vue      # Multi-column footer & system operational status
        ├── sections/
        │   ├── HeroSection.vue        # Headline, CTA, and dashboard preview
        │   ├── LogoCloud.vue          # Social proof partner logos
        │   ├── SolutionsSection.vue   # 3 Core solution cards
        │   ├── FeatureTabsSection.vue # Interactive tab switcher (<Transition>)
        │   ├── FeaturesSection.vue    # 3-Step workflow
        │   ├── TestimonialsSection.vue# User feedback and engineer quotes
        │   ├── FaqSection.vue         # Smooth accordion collapse/expand
        │   └── CtaSection.vue         # Final conversion card
        └── common/
            └── AuthModal.vue          # Teleported auth dialog (<Teleport to="body">)
```

---

## 📚 Study Guide & Interview Preparation

For an in-depth breakdown of Vue 3 architecture, Vue vs React differences, Vite vs Nuxt tradeoffs, and 5 real frontend technical interview questions & answers, check out **[LEARNING_NOTE.md](./LEARNING_NOTE.md)**.
