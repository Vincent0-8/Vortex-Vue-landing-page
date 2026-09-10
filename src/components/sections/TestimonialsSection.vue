<script setup>
const reviews = [
  {
    quote: 'The deployment speed is what impressed us most. What used to take our DevOps team 30 minutes of custom scripting now happens automatically on git push.',
    author: 'Marcus Thorne',
    role: 'Lead Architect',
    company: 'Arc Digital'
  },
  {
    quote: 'Preview branches completely transformed our team collaboration. Our designers and clients review live links before any feature reaches production.',
    author: 'Sarah Lin',
    role: 'Product Designer',
    company: 'Relay Labs'
  },
  {
    quote: 'Rock-solid reliability. During our launch with over 500k visitors, Vortex served assets across the edge with zero latency spikes and 100% uptime.',
    author: 'David Kim',
    role: 'Head of Engineering',
    company: 'Starlight Media'
  }
]
</script>

<template>
  <section class="py-20 px-4 sm:px-6 border-t border-slate-800/80" id="testimonials">
    <div class="max-w-6xl mx-auto">
      <div class="max-w-2xl mx-auto text-center mb-16 reveal-item">
        <p class="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-3">
          Social Proof
        </p>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Trusted by modern engineering teams.
        </h2>
        <p class="text-base sm:text-lg text-slate-400 leading-relaxed">
          From fast-moving startups to high-traffic digital products, teams rely on Vortex to ship with confidence.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <figure 
          v-for="item in reviews" 
          :key="item.author"
          class="reveal-item flex flex-col justify-between p-7 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 transition-all duration-300"
        >
          <blockquote class="text-sm sm:text-base text-slate-300 leading-relaxed italic mb-6">
            "{{ item.quote }}"
          </blockquote>

          <figcaption class="pt-4 border-t border-slate-800/60 flex items-center gap-3">
            <div class="w-9 h-9 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center font-bold text-xs text-emerald-400">
              {{ item.author.split(' ').map(n => n[0]).join('') }}
            </div>
            <div>
              <div class="text-sm font-semibold text-white">{{ item.author }}</div>
              <div class="text-xs text-slate-400">{{ item.role }} · {{ item.company }}</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>
