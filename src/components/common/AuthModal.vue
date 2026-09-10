<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { X, ArrowRight } from 'lucide-vue-next'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  initialMode: {
    type: String,
    default: 'signin'
  }
})

const emit = defineEmits(['close'])

const mode = ref(props.initialMode)
const email = ref('')
const password = ref('')
const fullName = ref('')

watch(() => props.initialMode, (newMode) => {
  mode.value = newMode
})

const handleKeyDown = (e) => {
  if (e.key === 'Escape' && props.isOpen) {
    emit('close')
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div 
        v-if="isOpen" 
        class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        role="dialog"
        aria-modal="true"
      >
        <div 
          class="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity" 
          @click="emit('close')"
        ></div>

        <div class="relative w-full max-w-md rounded-2xl bg-slate-900 border border-slate-800 p-7 sm:p-8 shadow-2xl z-10 overflow-hidden">
          <div class="absolute -top-16 left-1/2 -translate-x-1/2 w-64 h-32 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none"></div>

          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-2">
              <img src="/favicon.svg" alt="Vortex Logo" class="w-5 h-5 rounded object-contain" />
              <span class="text-base font-bold text-white tracking-tight">Vortex Cloud</span>
            </div>
            <button 
              @click="emit('close')"
              class="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X class="w-5 h-5" />
            </button>
          </div>

          <div class="flex p-1 rounded-xl bg-slate-950/70 border border-slate-800 mb-6">
            <button 
              type="button"
              @click="mode = 'signin'"
              class="flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer"
              :class="mode === 'signin' ? 'bg-emerald-500 text-slate-950 shadow-sm' : 'text-slate-400 hover:text-white'"
            >
              Sign In
            </button>
            <button 
              type="button"
              @click="mode = 'signup'"
              class="flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer"
              :class="mode === 'signup' ? 'bg-emerald-500 text-slate-950 shadow-sm' : 'text-slate-400 hover:text-white'"
            >
              Create Account
            </button>
          </div>

          <form @submit.prevent="" class="space-y-4">
            <div v-if="mode === 'signup'">
              <label class="block text-xs font-medium text-slate-300 mb-1.5">Full Name</label>
              <input 
                v-model="fullName"
                type="text" 
                placeholder="Vincent Alexander" 
                class="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-white placeholder:text-slate-500 text-sm focus:outline-hidden focus:ring-1 focus:ring-emerald-500 transition-all"
              />
            </div>

            <div>
              <label class="block text-xs font-medium text-slate-300 mb-1.5">Work Email</label>
              <input 
                v-model="email"
                type="email" 
                placeholder="name@company.com" 
                class="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-white placeholder:text-slate-500 text-sm focus:outline-hidden focus:ring-1 focus:ring-emerald-500 transition-all"
              />
            </div>

            <div>
              <div class="flex items-center justify-between mb-1.5">
                <label class="text-xs font-medium text-slate-300">Password</label>
                <a v-if="mode === 'signin'" href="#" class="text-xs text-emerald-400 hover:underline">Forgot password?</a>
              </div>
              <input 
                v-model="password"
                type="password" 
                placeholder="••••••••••••" 
                class="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-white placeholder:text-slate-500 text-sm focus:outline-hidden focus:ring-1 focus:ring-emerald-500 transition-all"
              />
            </div>

            <button 
              type="submit" 
              class="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all flex items-center justify-center gap-2 mt-2 shadow-[0_0_20px_rgba(16,185,129,0.2)] cursor-pointer"
            >
              <span>
                {{ mode === 'signin' ? 'Sign In to Vortex' : 'Start 14-Day Free Trial' }}
              </span>
              <ArrowRight class="w-4 h-4" />
            </button>

            <p class="text-[11px] text-center text-slate-500 pt-2">
              By proceeding, you agree to Vortex's Terms of Service and Privacy Policy.
            </p>
          </form>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
