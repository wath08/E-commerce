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
  intervalId = window.setInterval(nextSlide, 3000) // Change image every 3 seconds
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
  </div>
</template>
