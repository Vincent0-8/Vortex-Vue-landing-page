<script setup>
const currentYear = new Date().getFullYear()

const footerCols = [
  {
    title: 'Solutions',
    links: [
      { name: 'Edge Deployments', href: '#solutions' },
      { name: 'Preview URLs', href: '#solutions' },
      { name: 'CI/CD Automation', href: '#solutions' },
      { name: 'Custom Domains', href: '#solutions' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { name: 'Documentation', href: '#' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'FAQ', href: '#faq' },
      { name: 'System Status', href: '#' }
    ]
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#contact' }
    ]
  }
]
</script>

<template>
  <footer class="py-16 px-4 sm:px-6 border-t border-slate-800/80 bg-slate-950">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
        <div class="md:col-span-2 space-y-4">
          <a href="#" class="flex items-center gap-2.5" aria-label="Vortex Homepage">
            <img 
              src="/favicon.svg" 
              alt="Vortex Logo" 
              class="w-7 h-7 rounded-lg object-contain" 
            />
            <span class="text-xl font-bold tracking-tight text-white font-sans">
              Vortex
            </span>
          </a>
          <p class="text-sm text-slate-400 leading-relaxed max-w-sm">
            The streamlined platform to build, preview, and deploy high-performance websites across a global edge network.
          </p>
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>All edge systems operational</span>
          </div>
        </div>

        <div 
          v-for="col in footerCols" 
          :key="col.title"
          class="space-y-3"
        >
          <h4 class="text-xs font-semibold uppercase tracking-wider text-slate-200">
            {{ col.title }}
          </h4>
          <ul class="space-y-2 text-sm">
            <li v-for="link in col.links" :key="link.name">
              <a :href="link.href" class="text-slate-400 hover:text-white transition-colors">
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div>
          © {{ currentYear }} Vortex Technologies. All rights reserved.
        </div>
        <div class="flex items-center gap-6">
          <a href="#" class="hover:text-slate-400 transition-colors">Privacy Policy</a>
          <a href="#" class="hover:text-slate-400 transition-colors">Terms of Service</a>
          <a href="#" class="hover:text-slate-400 transition-colors">Security</a>
        </div>
      </div>
    </div>
  </footer>
</template>
