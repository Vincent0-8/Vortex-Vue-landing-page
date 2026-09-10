# Vortex — Modern SaaS Landing Page (Vue 3 + Tailwind CSS v4)
# Live Demo: 

---

A high-performance, responsive SaaS landing page built with **Vue 3 (Composition API `<script setup>`)**, **Tailwind CSS v4**, and **Vite**. Modeled with modern dark-mode developer-focused aesthetics (inspired by Linear, Nova, and Haven).

---

## Tech Stack

- **Framework**: [Vue 3](https://vuejs.org/) (`<script setup>`, Composition API)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`)
- **Icons**: [Lucide Vue Next](https://lucide.dev/)
- **Typography**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)

---

## Struktur Folder Proyek

```
Vue-landing-page/
├── LEARNING_NOTE.md            # 📚 Dokumen catatan belajar & interview preparation
├── index.html                  # Pintu masuk HTML & Google Font
├── vite.config.js              # Konfigurasi Vite & Tailwind CSS v4
├── public/
│   ├── favicon.svg             # Favicon SVG modern
│   └── images/
│       └── dashboard-preview.jpg # Mockup dashboard resolusi tinggi
└── src/
    ├── main.js                 # Entry point Vue & import CSS
    ├── App.vue                 # Root component yang merakit semua seksi
    ├── assets/css/main.css     # Setup Tailwind v4 & keyframes animasi
    ├── composables/
    │   └── useScrollReveal.js  # Native IntersectionObserver untuk animasi scroll
    └── components/
        ├── layout/
        │   ├── Navbar.vue      # Header navigasi & tombol auth
        │   └── Footer.vue      # Footer multi-kolom
        ├── sections/
        │   ├── HeroSection.vue        # Headline & dashboard preview
        │   ├── LogoCloud.vue          # 6 Logo brand terpercaya
        │   ├── SolutionsSection.vue   # 3 Kartu solusi
        │   ├── FeatureTabsSection.vue # Interactive tab switcher (<Transition>)
        │   ├── FeaturesSection.vue    # 3 Langkah How It Works
        │   ├── TestimonialsSection.vue# Ulasan klien
        │   ├── FaqSection.vue         # Accordion tanya-jawab
        │   └── CtaSection.vue         # Banner konversi akhir
        └── common/
            └── AuthModal.vue          # Modal Sign In / Sign Up (<Teleport to="body">)
```
