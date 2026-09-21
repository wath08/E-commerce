<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { brandMap } from '../../utils/categoryData'

const route = useRoute()
const currentCategory = computed(() => (route.params.categoryId as string) || 'laptop')

const brandLogos: Record<string, any> = {
  'Apple': { logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg', height: 'h-11 mx-auto origin-center' },
  'ASUS': { logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/ASUS_Logo.svg', height: 'h-6 origin-left' },
  'MSI': { logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Micro-Star_International_logo.svg', height: 'h-5 origin-left' },
  'Lenovo': { logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg', height: 'h-6 origin-left' },
  'Dell': { logo: '/dell-logo-cropped.png', height: 'h-8 origin-left' }
}

const currentBrands = computed(() => {
  const brands = brandMap[currentCategory.value] || []
  return brands.map(name => {
    if (brandLogos[name]) {
      return { name, ...brandLogos[name] }
    }
    return { name, textLogo: true }
  })
})

const scrollToBrand = (e: Event, id: string) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (!el) return;
  
  const targetY = el.getBoundingClientRect().top + window.scrollY - 112; 
  const startY = window.scrollY;
  const distance = targetY - startY;
  const duration = 600; 
  let start: number | null = null;
  
  const step = (timestamp: number) => {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const percent = Math.min(progress / duration, 1);
    
    const ease = 1 - Math.pow(1 - percent, 3);
    
    window.scrollTo(0, startY + (distance * ease));
    
    if (progress < duration) {
      window.requestAnimationFrame(step);
    } else {
      history.pushState(null, '', `#${id}`);
    }
  };
  
  window.requestAnimationFrame(step);
}
</script>


<template>
  <aside class="w-48 hidden lg:block bg-white p-6 sticky top-[70px]">
    <h3 class="font-black text-xs tracking-widest text-gray-800 uppercase mb-6">Brands</h3>
    <div class="space-y-4 flex flex-col">
      
      <a 
        v-for="brand in currentBrands" 
        :key="brand.name"
        :href="`#${brand.name}`" 
        @click="scrollToBrand($event, brand.name)" 
        class="group block w-full py-4 -ml-2 px-2 cursor-pointer rounded-lg hover:bg-gray-50 transition-colors"
      >
        <img 
          v-if="brand.logo" 
          :src="brand.logo" 
          :class="`${brand.height} w-auto object-contain transition-transform duration-300 group-hover:scale-110`" 
          :alt="brand.name" 
        />
        <div 
          v-else 
          class="text-xl font-black text-gray-400 group-hover:text-blue-600 transition-colors duration-300 group-hover:translate-x-1 transform inline-block"
        >
          {{ brand.name }}
        </div>
      </a>

    </div>
  </aside>
</template>

