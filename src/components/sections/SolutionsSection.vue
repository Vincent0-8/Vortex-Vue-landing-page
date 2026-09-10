<script setup>
import { ArrowRight } from 'lucide-vue-next'

const solutions = [
  {
    tag: 'INFRASTRUCTURE',
    title: 'Instant Edge Deployments',
    description: 'Push your code to Git, and Vortex automatically compiles, optimizes assets, and serves your application across 300+ edge nodes globally with sub-20ms latency.',
    badge: 'Sub-20ms Global'
  },
  {
    tag: 'COLLABORATION',
    title: 'Automated Preview URLs',
    description: 'Every pull request and git branch generates an isolated, full-featured preview environment. Share with teammates and clients for instant feedback before merging.',
    badge: 'Isolated Environments'
  },
  {
    tag: 'AUTOMATION',
    title: 'Zero-Config CI/CD Pipeline',
    description: 'Auto-detects Vue, Vite, React, and Astro. Out-of-the-box support for environment variables, serverless functions, and instant one-click rollbacks.',
    badge: 'One-Click Rollbacks'
  }
]
</script>

<template>
  <section class="py-20 px-4 sm:px-6 border-t border-slate-800/80" id="solutions">
    <div class="max-w-6xl mx-auto">
      <div class="max-w-2xl mx-auto text-center mb-16 reveal-item">
        <p class="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-3">
          Solutions
        </p>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Everything needed to launch and scale.
        </h2>
        <p class="text-base sm:text-lg text-slate-400 leading-relaxed">
          Purpose-built tools that work harmoniously. Focus on writing code while Vortex handles builds, certificates, and edge caching.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <article 
          v-for="item in solutions" 
          :key="item.title"
          class="reveal-item flex flex-col justify-between p-7 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 hover:bg-slate-900/90 transition-all duration-300 hover:-translate-y-1 shadow-lg"
        >
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-mono font-medium text-emerald-400 tracking-wider">
                {{ item.tag }}
              </span>
              <span class="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700/60">
                {{ item.badge }}
              </span>
            </div>

            <h3 class="text-xl font-bold text-white mb-3 leading-snug">
              {{ item.title }}
            </h3>

            <p class="text-sm text-slate-400 leading-relaxed mb-6">
              {{ item.description }}
            </p>
          </div>

          <div class="pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 cursor-pointer">
            <span>Learn more about {{ item.title.toLowerCase() }}</span>
            <ArrowRight class="w-3.5 h-3.5" />
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
