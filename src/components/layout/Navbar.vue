<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowRight, Menu, X } from 'lucide-vue-next'

const emit = defineEmits(['open-auth'])

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const navLinks = [
  { name: 'Solutions', href: '#solutions' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' }
]
</script>

<template>
  <header 
    class="fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-4 sm:px-6 py-4"
    :class="isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 py-3' : 'bg-transparent'"
  >
    <div class="max-w-6xl mx-auto flex items-center justify-between">
      <!-- Brand Logo -->
      <a href="#" class="flex items-center gap-2.5 group" aria-label="Vortex Homepage">
        <img 
          src="/favicon.svg" 
          alt="Vortex Logo" 
          class="w-8 h-8 rounded-lg object-contain group-hover:scale-105 transition-transform" 
        />
        <span class="text-xl font-bold tracking-tight text-white font-sans">
          Vortex
        </span>
      </a>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-8" aria-label="Main Navigation">
        <a 
          v-for="link in navLinks" 
          :key="link.name" 
          :href="link.href"
          class="text-sm font-medium text-slate-400 hover:text-white transition-colors"
        >
          {{ link.name }}
        </a>
      </nav>

      <!-- Desktop Actions -->
      <div class="hidden md:flex items-center gap-4">
        <button 
          @click="emit('open-auth', 'signin')"
          class="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
        >
          Sign In
        </button>
        <button 
          @click="emit('open-auth', 'signup')"
          class="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] cursor-pointer"
        >
          <span>Start Free Trial</span>
          <ArrowRight class="w-4 h-4" />
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <button 
        class="md:hidden p-2 text-slate-400 hover:text-white cursor-pointer"
        aria-label="Toggle Navigation Menu"
        @click="toggleMobileMenu"
      >
        <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
        <X v-else class="w-6 h-6" />
      </button>
    </div>

    <!-- Mobile Drawer -->
    <div 
      v-if="isMobileMenuOpen" 
      class="md:hidden mt-3 p-5 rounded-2xl bg-slate-900/95 border border-slate-800 backdrop-blur-xl shadow-2xl space-y-4"
    >
      <nav class="flex flex-col space-y-3">
        <a 
          v-for="link in navLinks" 
          :key="link.name" 
          :href="link.href"
          class="text-base font-medium text-slate-300 hover:text-emerald-400 py-1"
          @click="closeMobileMenu"
        >
          {{ link.name }}
        </a>
      </nav>
      <div class="pt-4 border-t border-slate-800 flex flex-col gap-3">
        <button 
          @click="closeMobileMenu(); emit('open-auth', 'signin')"
          class="w-full text-center py-2.5 rounded-lg border border-slate-700 text-slate-300 font-medium text-sm"
        >
          Sign In
        </button>
        <button 
          @click="closeMobileMenu(); emit('open-auth', 'signup')"
          class="w-full text-center py-2.5 rounded-lg bg-emerald-500 text-slate-950 font-semibold text-sm"
        >
          Start Free Trial
        </button>
      </div>
    </div>
  </header>
</template>
