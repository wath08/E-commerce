<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Array of images for the carousel
// You can change these to different image paths when you have them!
const banners = [
  '/promot-banner.jpeg',
  '/promot-banner.jpeg', 
  '/promot-banner.jpeg'
]

const currentIndex = ref(0)
let intervalId: number | undefined

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % banners.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + banners.length) % banners.length
}

const setSlide = (index: number) => {
  currentIndex.value = index
}

const startAutoplay = () => {
  intervalId = window.setInterval(nextSlide, 3000) // Change image every 3 seconds
}

const stopAutoplay = () => {
  if (intervalId) clearInterval(intervalId)
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<template>
  <!-- Container with group class for hover effects -->
  <div 
    class="relative w-full overflow-hidden border-b bg-white group"
    @mouseenter="stopAutoplay"
    @mouseleave="startAutoplay"
  >
    <!-- Carousel Track (Slides) -->
    <div 
      class="flex transition-transform duration-700 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div 
        v-for="(banner, index) in banners" 
        :key="index"
        class="w-full flex-shrink-0"
      >
        <img :src="banner" alt="Promo Banner" class="w-full h-auto object-cover" />
      </div>
    </div>

    <!-- Previous Button -->
    <button 
      @click="prevSlide" 
      class="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </button>

    <!-- Next Button -->
    <button 
      @click="nextSlide" 
      class="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </button>

    <!-- Indicators (Dots) -->
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
      <button 
        v-for="(_, index) in banners" 
        :key="index"
        @click="setSlide(index)"
        class="w-3 h-3 rounded-full transition-colors"
        :class="currentIndex === index ? 'bg-white' : 'bg-white/50 hover:bg-white/75'"
      ></button>
    </div>
  </div>
</template>
