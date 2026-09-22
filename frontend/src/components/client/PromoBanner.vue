<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Array of images for the carousel
// You can change these to different image paths when you have them!
const banners = [
  '/banner1.jpeg',
  '/banner2.jpeg', 
  '/banner3.jpeg'
]

const currentIndex = ref(0)
let intervalId: number | undefined

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % banners.length
}

const startAutoplay = () => {
  intervalId = window.setInterval(nextSlide, 4000) // Change image every 3 seconds
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<template>
  <div class="relative w-full overflow-hidden border-b bg-white">
    <!-- Invisible spacer to dynamically set the height based on the image proportion -->
    <img :src="banners[0]" class="w-full h-auto opacity-0 block pointer-events-none" aria-hidden="true" />
    
    <transition-group name="slide-forward" tag="div">
      <img 
        v-for="(banner, index) in banners"
        :key="banner"
        v-show="currentIndex === index"
        :src="banner" 
        alt="Promo Banner" 
        class="absolute top-0 left-0 w-full h-full object-cover"
      />
    </transition-group>
  </div>
</template>

<style scoped>
.slide-forward-enter-active,
.slide-forward-leave-active {
  transition: transform 0.7s ease-in-out;
}
.slide-forward-enter-from {
  transform: translateX(100%);
}
.slide-forward-leave-to {
  transform: translateX(-100%);
}
</style>

