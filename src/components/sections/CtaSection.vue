<script setup>
import { ArrowRight, Check } from 'lucide-vue-next'

const emit = defineEmits(['open-auth'])
</script>

<template>
  <section class="py-20 px-4 sm:px-6 border-t border-slate-800/80" id="contact">
    <div class="max-w-5xl mx-auto">
      <div class="reveal-item rounded-3xl bg-linear-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl">
        <div class="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>

        <div class="relative z-10 max-w-2xl mx-auto">
          <p class="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-4">
            Ready to deploy?
          </p>

          <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Powering your web projects, effortlessly.
          </h2>

          <p class="text-base sm:text-lg text-slate-400 leading-relaxed mb-8">
            Start free and deploy your first website to the edge today. No complicated configurations, no credit card required.
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8">
            <button 
              @click="emit('open-auth', 'signup')"
              class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)] cursor-pointer"
            >
              <span>Start Free Trial</span>
              <ArrowRight class="w-4 h-4" />
            </button>
            <a 
              href="#solutions" 
              class="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium transition-all"
            >
              Explore Solutions
            </a>
          </div>

          <div class="flex flex-wrap items-center justify-center gap-5 text-xs text-slate-400">
            <div class="flex items-center gap-1.5">
              <Check class="w-3.5 h-3.5 text-emerald-400" />
              <span>14-day free trial</span>
            </div>
            <div class="flex items-center gap-1.5">
              <Check class="w-3.5 h-3.5 text-emerald-400" />
              <span>No credit card required</span>
            </div>
            <div class="flex items-center gap-1.5">
              <Check class="w-3.5 h-3.5 text-emerald-400" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
