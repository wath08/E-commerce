<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const cartItemCount = ref(0) // Start with 0 items

const handleLogoClick = (e: Event) => {
  e.preventDefault();
  if (route.path !== '/') {
    router.push('/').then(() => {
      window.scrollTo(0, 0);
    });
  } else {
    const startY = window.scrollY;
    if (startY === 0) return;
    const duration = 600;
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percent = Math.min(progress / duration, 1);
      const ease = 1 - Math.pow(1 - percent, 3);
      window.scrollTo(0, startY * (1 - ease));
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
}
</script>

<template>
  <header class="w-full bg-white py-2 px-3 md:px-12 flex flex-row justify-between items-center border-b border-gray-200">
    <!-- Logo -->
    <a href="/" @click="handleLogoClick" class="cursor-pointer inline-block flex-shrink-0">
      <img src="/logo.jpeg" alt="Tech Simplify Store" class="h-14 md:h-16 lg:h-20 w-auto object-contain mix-blend-multiply">
    </a>
    
    <!-- Global Actions -->
    <div class="flex gap-4 md:gap-8 text-sm font-semibold text-gray-500 flex-shrink-0">
      
      <!-- Favorite/Wishlist Icon -->
      <div class="flex flex-col items-center justify-center cursor-pointer hover:text-red-500 transition">
        <svg class="w-4 h-4 md:w-6 md:h-6 mb-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
        <span class="text-[7px] md:text-[10px] tracking-wider">FAVORITE</span>
      </div>

      <!-- Cart Icon -->
      <div class="flex flex-col items-center justify-center cursor-pointer hover:text-blue-600 transition relative">
        <svg class="w-4 h-4 md:w-6 md:h-6 mb-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
        <!-- Badge only shows when items > 0 -->
        <span v-if="cartItemCount > 0" class="absolute top-0 right-0 md:-mt-1 md:-mr-1 flex h-3 w-3 items-center justify-center rounded-full bg-red-500 text-[8px] text-white md:h-4 md:w-4 md:text-[10px]">
          {{ cartItemCount }}
        </span>
        <span class="text-[7px] md:text-[10px] tracking-wider">CART</span>
      </div>

      <!-- Account Icon -->
      <div class="flex flex-col items-center justify-center cursor-pointer hover:text-blue-600 transition">
        <svg class="w-4 h-4 md:w-6 md:h-6 mb-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path></svg>
        <span class="text-[7px] md:text-[10px] tracking-wider">ACCOUNT</span>
      </div>
    </div>
  </header>
</template>
