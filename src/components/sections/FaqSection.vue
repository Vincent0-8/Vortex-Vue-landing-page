<script setup>
import { ref } from 'vue'
import { ChevronDown } from 'lucide-vue-next'

const activeFaq = ref(0)

const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index
}

const faqs = [
  {
    q: 'How does Vortex differ from traditional cloud hosting?',
    a: 'Traditional cloud hosting requires configuring servers, load balancers, and SSL certificates manually. Vortex connects directly to your Git provider, builds your project in an isolated container, and deploys it automatically across a global edge network with zero configuration.'
  },
  {
    q: 'Which frontend frameworks and build tools are supported?',
    a: 'Vortex natively supports Vue 3, Vite, Nuxt, React, Next.js, Astro, Svelte, and vanilla HTML/CSS. Build commands and output directories are automatically detected upon repository connection.'
  },
  {
    q: 'Can I connect custom domains with free SSL certificates?',
    a: 'Yes. You can attach unlimited custom domains and subdomains. Vortex provisions and auto-renews Let’s Encrypt TLS certificates globally at no additional charge.'
  },
  {
    q: 'How do automated preview branches work?',
    a: 'Whenever you open a pull request or push to a non-production branch, Vortex generates a distinct, secure preview URL. You can share this URL with your team to review changes before merging into main.'
  },
  {
    q: 'What are the limits on the free trial?',
    a: 'The 14-day free trial gives full access to unlimited preview deployments, custom domains, and global edge bandwidth. No credit card is required to sign up.'
  }
]
</script>

<template>
  <section class="py-20 px-4 sm:px-6 border-t border-slate-800/80 bg-slate-950/40" id="faq">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-16 reveal-item">
        <p class="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-3">
          FAQ
        </p>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Everything you need to know.
        </h2>
        <p class="text-base sm:text-lg text-slate-400 leading-relaxed">
          Common questions about Vortex, edge deployments, and our platform.
        </p>
      </div>

      <div class="space-y-3.5 reveal-item">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index"
          class="rounded-xl border transition-all duration-200"
          :class="activeFaq === index ? 'bg-slate-900/90 border-emerald-500/30' : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'"
        >
          <button 
            type="button"
            class="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer"
            :aria-expanded="activeFaq === index"
            @click="toggleFaq(index)"
          >
            <span class="text-base font-semibold text-white">
              {{ faq.q }}
            </span>
            <ChevronDown 
              class="w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200"
              :class="{ 'rotate-180 text-emerald-400': activeFaq === index }"
            />
          </button>

          <div 
            class="grid transition-all duration-300 ease-in-out overflow-hidden"
            :class="activeFaq === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
          >
            <div class="overflow-hidden">
              <div class="px-6 pb-5 text-sm text-slate-300 leading-relaxed border-t border-slate-800/50 pt-3">
                {{ faq.a }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
