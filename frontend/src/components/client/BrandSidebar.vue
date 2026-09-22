<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { brandMap } from '../../utils/categoryData'

const route = useRoute()
const currentCategory = computed(() => (route.params.categoryId as string) || 'laptop')

const brandLogos: Record<string, any> = {
  'Apple': { logo: '/brands/apple.svg', height: 'h-8 lg:h-11 mx-auto lg:origin-center' },
  'ASUS': { logo: '/brands/asus.svg', height: 'h-4 lg:h-6 origin-left' },
  'MSI': { logo: '/brands/msi.svg', height: 'h-4 lg:h-5 origin-left' },
  'Lenovo': { logo: '/brands/lenovo.svg', height: 'h-4 lg:h-6 origin-left' },
  'Dell': { logo: '/brands/dell.png', height: 'h-6 lg:h-8 origin-left' }
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
  <!-- Mobile & Desktop Sidebar -->
  <aside class="w-full lg:w-48 bg-white p-4 lg:p-6 lg:sticky top-[70px] border-b lg:border-b-0 border-gray-100 z-10">
    <h3 class="font-black text-[10px] lg:text-xs tracking-widest text-gray-800 uppercase mb-3 lg:mb-6 hidden lg:block">Brands</h3>
    
    <!-- Container: Flex Row (Horizontal Scroll) on Mobile -> Flex Col on Desktop -->
    <div class="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible scrollbar-hide gap-6 lg:gap-0 items-center lg:items-start pb-2 lg:pb-0 space-y-0 lg:space-y-4 overscroll-x-contain" style="-webkit-overflow-scrolling: touch;">
      
      <a 
        v-for="brand in currentBrands" 
        :key="brand.name"
        :href="`#${brand.name}`" 
        @click="scrollToBrand($event, brand.name)" 
        class="group flex-shrink-0 block lg:w-full lg:py-4 lg:-ml-2 px-2 cursor-pointer rounded-lg hover:bg-gray-50 transition-colors"
      >
        <img 
          v-if="brand.logo" 
          :src="brand.logo" 
          :class="`${brand.height} w-auto object-contain transition-transform duration-300 group-hover:scale-110`" 
          :alt="brand.name" 
        />
        <div 
          v-else 
          class="text-sm lg:text-xl font-black text-gray-400 group-hover:text-blue-600 transition-colors duration-300 group-hover:translate-x-1 transform inline-block"
        >
          {{ brand.name }}
        </div>
      </a>

    </div>
  </aside>
</template>
