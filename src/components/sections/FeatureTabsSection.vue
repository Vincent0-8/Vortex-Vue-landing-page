<script setup>
import { ref } from 'vue'
import { Check } from 'lucide-vue-next'

const activeTab = ref(0)

const tabs = [
  {
    id: 'git',
    title: 'Instant Git Integration',
    subtitle: 'Push your commits to GitHub or GitLab. Vortex builds and deploys your changes within seconds.',
    badge: 'AUTOMATED BUILDS',
    codeSnippet: `$ git add .
$ git commit -m "feat: implement responsive navigation"
$ git push origin main

✓ Detected framework: Vue 3 + Vite
✓ Optimizing production assets (tree-shaking)...
✓ Edge bundle compiled in 1.4s
→ Deployed to https://vortex-app.production.live`,
    metrics: [
      { label: 'Build Time', val: '1.4s' },
      { label: 'Bundle Optimization', val: '-38%' }
    ]
  },
  {
    id: 'preview',
    title: 'Collaborative Preview URLs',
    subtitle: 'Every branch and pull request gets its own immutable, live preview URL for seamless team review.',
    badge: 'BRANCH PREVIEWS',
    codeSnippet: `PR #142: "Redesign onboarding flow"
Author: @vincent | Branch: feat/onboarding-v2

✓ Automated test suite passed (48 tests)
✓ Lighthouse Performance Score: 99/100
→ Live Preview: https://feat-onboarding-v2.vortex.app

Status: Ready for designer & client review`,
    metrics: [
      { label: 'Preview Generation', val: '< 2.0s' },
      { label: 'Test Coverage', val: '100% Pass' }
    ]
  },
  {
    id: 'edge',
    title: 'Global Edge CDN',
    subtitle: 'Assets and serverless edge functions are distributed across 300+ points of presence worldwide.',
    badge: '300+ LOCATIONS',
    codeSnippet: `[Edge Network Routing Matrix]
• US-East (N. Virginia): 14ms latency [HEALTHY]
• EU-Central (Frankfurt): 18ms latency [HEALTHY]
• AP-East (Tokyo): 22ms latency [HEALTHY]
• SA-East (São Paulo): 28ms latency [HEALTHY]

Average Global TTFB: 18.4ms
Cache Hit Ratio: 99.4%`,
    metrics: [
      { label: 'Average Global TTFB', val: '18.4ms' },
      { label: 'Cache Hit Ratio', val: '99.4%' }
    ]
  }
]
</script>

<template>
  <section class="py-20 px-4 sm:px-6 border-t border-slate-800/80 bg-slate-950/40">
    <div class="max-w-6xl mx-auto">
      <!-- Section Header -->
      <div class="max-w-2xl mx-auto text-center mb-16 reveal-item">
        <p class="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-3">
          Interactive Demo
        </p>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Experience the Vortex workflow.
        </h2>
        <p class="text-base sm:text-lg text-slate-400 leading-relaxed">
          Select a feature below to inspect how Vortex streamlines each stage of your deployment pipeline.
        </p>
      </div>

      <!-- Two-Column Interactive Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <!-- Left: Interactive Tab Buttons (5 cols) -->
        <div class="lg:col-span-5 space-y-3 reveal-item">
          <button
            v-for="(tab, index) in tabs"
            :key="tab.id"
            @click="activeTab = index"
            class="w-full text-left p-5 rounded-2xl border transition-all duration-300 flex flex-col gap-2 cursor-pointer"
            :class="activeTab === index 
              ? 'bg-slate-900 border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.1)]' 
              : 'bg-slate-900/30 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/50'"
          >
            <div class="flex items-center justify-between">
              <span 
                class="text-xs font-mono font-medium tracking-wider"
                :class="activeTab === index ? 'text-emerald-400' : 'text-slate-400'"
              >
                {{ tab.badge }}
              </span>
              <span 
                v-if="activeTab === index" 
                class="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]"
              ></span>
            </div>
            
            <h3 class="text-lg font-bold text-white">
              {{ tab.title }}
            </h3>

            <p class="text-sm text-slate-400 leading-relaxed">
              {{ tab.subtitle }}
            </p>
          </button>
        </div>

        <!-- Right: Animated Code/Preview Console (7 cols) -->
        <div class="lg:col-span-7 reveal-item">
          <div class="rounded-2xl border border-slate-800 bg-slate-900/90 shadow-2xl overflow-hidden">
            <!-- Console Window Bar -->
            <div class="px-5 py-3 border-b border-slate-800/80 bg-slate-950/80 flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-rose-500/70"></span>
                <span class="w-3 h-3 rounded-full bg-amber-500/70"></span>
                <span class="w-3 h-3 rounded-full bg-emerald-500/70"></span>
                <span class="ml-2 text-xs font-mono text-slate-400">vortex-terminal // {{ tabs[activeTab].id }}</span>
              </div>
              <div class="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                <Check class="w-3.5 h-3.5" />
                <span>Synchronized</span>
              </div>
            </div>

            <!-- Animated Content Box with Vue Transition -->
            <div class="p-6 sm:p-8 min-h-65 flex flex-col justify-between">
              <Transition name="tab-fade" mode="out-in">
                <div :key="activeTab" class="space-y-6">
                  <!-- Code Output -->
                  <pre class="font-mono text-xs sm:text-sm text-emerald-300 leading-relaxed overflow-x-auto whitespace-pre-wrap"><code>{{ tabs[activeTab].codeSnippet }}</code></pre>

                  <!-- Metrics Bar -->
                  <div class="pt-4 border-t border-slate-800/80 flex flex-wrap gap-6">
                    <div 
                      v-for="metric in tabs[activeTab].metrics" 
                      :key="metric.label"
                      class="flex flex-col"
                    >
                      <span class="text-xs text-slate-400">{{ metric.label }}</span>
                      <span class="text-lg font-bold font-mono text-white">{{ metric.val }}</span>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tab-fade-enter-active,
.tab-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.tab-fade-enter-from {
  opacity: 0;
  transform: translateY(6px);
}

.tab-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
