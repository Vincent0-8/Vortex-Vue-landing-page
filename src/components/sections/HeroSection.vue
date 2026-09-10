<script setup>
import { ArrowRight, Check } from 'lucide-vue-next'

const emit = defineEmits(['open-auth'])

const featuresList = [
  'Zero-config Git deployments',
  'Automated preview branches',
  'Global edge CDN network'
]
</script>

<template>
  <section class="pt-32 pb-16 px-4 sm:px-6 relative overflow-hidden">
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
    <div class="absolute top-1/3 left-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>

    <div class="max-w-5xl mx-auto text-center relative z-10">
      <div class="animate-fade-up stagger-1 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-6">
        <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>Vortex 2.0 is now live</span>
      </div>

      <h1 class="animate-fade-up stagger-2 text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
        Ship modern web apps that <br class="hidden sm:inline" />
        <span class="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-cyan-300 to-teal-200">
          feel fast and alive.
        </span>
      </h1>

      <p class="animate-fade-up stagger-3 max-w-2xl mx-auto text-base sm:text-lg text-slate-400 leading-relaxed mb-8">
        Vortex provides the streamlined platform to build, preview, and deploy high-performance websites to a global edge network. Set up once, ship forever.
      </p>

      <div class="animate-fade-up stagger-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-300 mb-9">
        <div v-for="item in featuresList" :key="item" class="flex items-center gap-2">
          <span class="flex items-center justify-center w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400">
            <Check class="w-3 h-3" />
          </span>
          <span>{{ item }}</span>
        </div>
      </div>

      <div class="animate-fade-up stagger-4 flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-14">
        <button 
          @click="emit('open-auth', 'signup')"
          class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all shadow-[0_0_25px_rgba(16,185,129,0.25)] cursor-pointer"
        >
          <span>Start Free Trial</span>
          <ArrowRight class="w-4 h-4" />
        </button>
        <a 
          href="#solutions" 
          class="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-sm font-medium transition-all"
        >
          Explore Solutions
        </a>
      </div>

      <div class="animate-fade-up stagger-5 relative max-w-4xl mx-auto rounded-2xl border border-slate-800 bg-slate-900/80 backdrop-blur-xl shadow-2xl overflow-hidden text-left group">
        <div class="px-4 py-3 border-b border-slate-800/80 bg-slate-950/70 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-rose-500/80"></span>
            <span class="w-3 h-3 rounded-full bg-amber-500/80"></span>
            <span class="w-3 h-3 rounded-full bg-emerald-500/80"></span>
            <span class="ml-2 text-xs font-mono text-slate-400">vortex.app/dashboard/production</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span class="text-xs font-mono text-emerald-400">Production Live</span>
          </div>
        </div>

        <div class="relative overflow-hidden bg-slate-950">
          <img 
            src="/images/dashboard-preview.jpg" 
            alt="Vortex Production Deployment Dashboard" 
            class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
            loading="eager"
            width="1280"
            height="720"
          />
        </div>
      </div>
    </div>
  </section>
</template>
