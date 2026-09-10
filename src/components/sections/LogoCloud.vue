<script setup>
const companies = [
  { name: 'Linear', font: 'font-semibold tracking-wider' },
  { name: 'Supabase', font: 'font-bold tracking-tight' },
  { name: 'Raycast', font: 'font-medium tracking-wide' },
  { name: 'Resend', font: 'font-semibold tracking-normal' },
  { name: 'Warp', font: 'font-mono font-bold tracking-widest' },
  { name: 'Cal.com', font: 'font-medium tracking-tight' }
]
</script>

<template>
  <section class="py-12 border-y border-slate-800/80 bg-slate-950/60 overflow-hidden">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <p class="text-center text-xs font-medium uppercase tracking-widest text-slate-500 mb-8">
        Trusted by engineering teams at forward-thinking companies
      </p>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
        <div 
          v-for="company in companies" 
          :key="company.name"
          class="text-lg sm:text-xl text-slate-400 hover:text-white transition-colors duration-200 cursor-default select-none"
          :class="company.font"
        >
          {{ company.name }}
        </div>
      </div>
    </div>
  </section>
</template>
