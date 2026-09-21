<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const handleLogoClick = (e: Event) => {
  e.preventDefault();
  if (route.path !== '/') {
    router.push('/').then(() => {
      window.scrollTo(0, 0);
    });
  } else {
    // Custom smooth scroll to top
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
  <header class="w-full bg-white py-2 flex justify-between items-center border-b border-gray-100">
    <!-- Logo -->
    <a href="/" @click="handleLogoClick" class="cursor-pointer inline-block">
      <img src="/logo.jpeg" alt="Tech Simplify Store" class="h-20 w-auto object-contain mix-blend-multiply">
    </a>
    
    <!-- Social & Account -->
    <div class="flex gap-8 text-sm font-semibold text-gray-500">
      <div class="flex flex-col items-center cursor-pointer hover:text-blue-600 transition">
        <svg class="w-6 h-6 mb-1.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
        <span class="text-[10px] tracking-wider">FACEBOOK</span>
      </div>
      <div class="flex flex-col items-center cursor-pointer hover:text-blue-600 transition">
        <svg class="w-6 h-6 mb-1.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"></path></svg>
        <span class="text-[10px] tracking-wider">TELEGRAM</span>
      </div>
      <div class="flex flex-col items-center cursor-pointer hover:text-blue-600 transition">
        <svg class="w-6 h-6 mb-1.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z"></path></svg>
        <span class="text-[10px] tracking-wider">ACCOUNT</span>
      </div>
    </div>
  </header>
</template>
