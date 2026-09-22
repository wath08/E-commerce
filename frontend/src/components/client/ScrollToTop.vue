<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)
let ticking = false

const toggleVisibility = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      isVisible.value = window.scrollY > 300
      ticking = false
    })
    ticking = true
  }
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  // Using passive: true is CRITICAL for mobile scrolling performance
  window.addEventListener('scroll', toggleVisibility, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', toggleVisibility)
})
</script>

<template>
  <transition name="fade">
    <button
      v-show="isVisible"
      @click="scrollToTop"
      class="fixed bottom-6 right-4 md:bottom-22 md:right-10 z-50 px-4 py-2.5 md:px-5 md:py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 transform-gpu shadow-lg"
      aria-label="Scroll to top"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
      <span class="font-bold text-sm tracking-wider uppercase">Up</span>
    </button>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
  will-change: opacity, transform;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.95);
}
</style>
