<script setup>
import { ref, onMounted } from 'vue'
import Navbar from './components/layout/Navbar.vue'
import HeroSection from './components/sections/HeroSection.vue'
import LogoCloud from './components/sections/LogoCloud.vue'
import SolutionsSection from './components/sections/SolutionsSection.vue'
import FeatureTabsSection from './components/sections/FeatureTabsSection.vue'
import FeaturesSection from './components/sections/FeaturesSection.vue'
import TestimonialsSection from './components/sections/TestimonialsSection.vue'
import FaqSection from './components/sections/FaqSection.vue'
import CtaSection from './components/sections/CtaSection.vue'
import Footer from './components/layout/Footer.vue'
import AuthModal from './components/common/AuthModal.vue'
import { useScrollReveal } from './composables/useScrollReveal'

useScrollReveal()

onMounted(() => {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'
  }
  window.scrollTo(0, 0)
  if (window.location.pathname !== '/') {
    history.replaceState(null, '', '/')
  } else if (window.location.hash) {
    history.replaceState(null, '', window.location.pathname + window.location.search)
  }
})

const isAuthModalOpen = ref(false)
const authModalMode = ref('signin')

const openAuth = (mode = 'signin') => {
  authModalMode.value = mode
  isAuthModalOpen.value = true
}

const closeAuth = () => {
  isAuthModalOpen.value = false
}
</script>

<template>
  <div class="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans antialiased selection:bg-emerald-500/20 selection:text-emerald-300">
    <Navbar @open-auth="openAuth" />

    <main class="flex-1">
      <HeroSection @open-auth="openAuth" />
      <LogoCloud />
      <SolutionsSection />
      <FeatureTabsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection @open-auth="openAuth" />
    </main>

    <Footer />

    <AuthModal 
      :is-open="isAuthModalOpen" 
      :initial-mode="authModalMode" 
      @close="closeAuth" 
    />
  </div>
</template>
