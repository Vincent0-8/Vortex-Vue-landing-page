<script setup>
const steps = [
  {
    step: '01',
    title: 'Connect Repository',
    desc: 'Link your GitHub or GitLab repository in one click. Vortex automatically detects your framework (Vue, Vite, Nuxt, React) and configures optimal build settings.'
  },
  {
    step: '02',
    title: 'Collaborate on Previews',
    desc: 'Every push and pull request generates an instant, secure preview URL. Share live previews with designers and stakeholders before deploying to production.'
  },
  {
    step: '03',
    title: 'Ship to Global Edge',
    desc: 'Deploy with zero downtime to an edge network spanning 300+ global locations, complete with automated TLS certificates and instant cache invalidation.'
  }
]
</script>

<template>
  <section class="py-20 px-4 sm:px-6 border-t border-slate-800/80 bg-slate-950/40" id="how-it-works">
    <div class="max-w-6xl mx-auto">
      <div class="max-w-2xl mx-auto text-center mb-16 reveal-item">
        <p class="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-3">
          Workflow
        </p>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
          How Vortex works in practice.
        </h2>
        <p class="text-base sm:text-lg text-slate-400 leading-relaxed">
          A calm, guided path from your local development environment to a live, global web application.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div 
          v-for="item in steps" 
          :key="item.step"
          class="reveal-item p-8 rounded-2xl bg-slate-900/60 border border-slate-800 relative hover:border-slate-700/80 transition-all duration-300"
        >
          <div class="text-3xl font-mono font-extrabold text-emerald-400/70 mb-4">
            {{ item.step }}
          </div>
          <h3 class="text-xl font-bold text-white mb-3">
            {{ item.title }}
          </h3>
          <p class="text-sm text-slate-400 leading-relaxed">
            {{ item.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
