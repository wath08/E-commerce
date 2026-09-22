<script setup lang="ts">
const baseBrands = [
  { name: 'Apple', src: '/brands/apple.svg' },
  { name: 'ASUS', src: '/brands/asus.svg' },
  { name: 'Dell', src: '/brands/dell.png' },
  { name: 'Lenovo', src: '/brands/lenovo.svg' },
  { name: 'MSI', src: '/brands/msi.svg' }
]

const brands = [...baseBrands, ...baseBrands, ...baseBrands, ...baseBrands]
</script>

<template>
  <div class="max-w-[1250px] w-full mx-auto px-6 lg:px-8 mb-2 mt-4">
    <div class="border-t border-gray-200 pt-4 pb-2">
      <!-- ADDED 'group' class here so hovering anywhere pauses BOTH tracks -->
      <div class="overflow-hidden relative flex items-center mask-edges w-full group">
        
        <!-- Track 1: Added flex-shrink-0 to prevent squishing bugs -->
        <div class="flex items-center gap-8 md:gap-12 min-w-max flex-shrink-0 marquee-track pr-8 md:pr-12">
          <img 
            v-for="(brand, i) in brands" 
            :key="'a' + i + brand.name" 
            :src="brand.src" 
            :alt="brand.name" 
            class="h-[8px] md:h-[12px] w-auto object-contain transition-transform duration-300 hover:scale-110" 
          />
        </div>
        
        <!-- Track 2: Added flex-shrink-0 -->
        <div class="flex items-center gap-8 md:gap-12 min-w-max flex-shrink-0 marquee-track pr-8 md:pr-12" aria-hidden="true">
          <img 
            v-for="(brand, i) in brands" 
            :key="'b' + i + brand.name" 
            :src="brand.src" 
            :alt="brand.name" 
            class="h-[8px] md:h-[12px] w-auto object-contain transition-transform duration-300 hover:scale-110" 
          />
        </div>
        
      </div>
    </div>
  </div>
</template>

<style scoped>
.mask-edges {
  -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
  mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
}

@keyframes scroll-left {
  0% { transform: translateX(0) translateZ(0); }
  100% { transform: translateX(-100%) translateZ(0); }
}

.marquee-track {
  animation: scroll-left 30s linear infinite;
  will-change: transform; /* Hardware acceleration for smooth scrolling */
}

/* FIX: Pause both tracks simultaneously when hovering the parent group */
.group:hover .marquee-track {
  animation-play-state: paused;
}
</style>
