<template>
  <nav :class="['w-full text-[11px] md:text-[15px] tracking-wide font-bold text-gray-500 transition-all duration-300', $route.name === 'product-detail' ? 'sticky top-0 z-40 bg-white/95 backdrop-blur-md' : 'bg-white relative z-30']">
  <div class="max-w-[1250px] w-full mx-auto px-6 lg:px-8">
    <div class="w-full border-b border-gray-200 flex justify-start lg:justify-center items-center overflow-x-auto scrollbar-hide whitespace-nowrap flex-nowrap">
    
    <router-link to="/category/laptop" active-class="text-blue-600" class="flex items-center flex-shrink-0 gap-1.5 md:gap-2 hover:text-blue-600 cursor-pointer transition py-4 md:py-5 px-4 md:px-8">
      <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 md:w-7 md:h-7">
        <rect x="3" y="4" width="18" height="12" rx="1" fill="none" stroke-width="2"></rect>
        <path d="M2 18h20v2H2z" fill="currentColor" stroke="none"></path>
        <path d="M8 18v1h8v-1" fill="white" stroke="none"></path>
      </svg>
      LAPTOP
    </router-link>
    
    <div class="w-[1.5px] h-4 md:h-5 flex-shrink-0 bg-gray-200 rounded-full"></div>
    <router-link to="/category/pc-hardware" active-class="text-blue-600" class="flex items-center flex-shrink-0 gap-1.5 md:gap-2 hover:text-blue-600 cursor-pointer transition px-4 md:px-8 py-4 md:py-5">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 md:w-7 md:h-7">
        <rect x="3" y="3" width="10" height="18" rx="1"></rect>
        <line x1="5" y1="6" x2="11" y2="6"></line>
        <line x1="5" y1="9" x2="8" y2="9"></line>
        <circle cx="8" cy="17" r="1"></circle>
        <path d="M19.5 9.5a3.5 3.5 0 0 0-2-6V6a1.5 1.5 0 0 1-3 0V3.5a3.5 3.5 0 0 0-2 6l5.5 12a2.12 2.12 0 0 0 3-3l-1.5-9z"></path>
      </svg>
      PC HARDWARE
    </router-link>
    
    <div class="w-[1.5px] h-4 md:h-5 flex-shrink-0 bg-gray-200 rounded-full"></div>
    <router-link to="/category/peripherals" active-class="text-blue-600" class="flex items-center flex-shrink-0 gap-1.5 md:gap-2 hover:text-blue-600 cursor-pointer transition px-4 md:px-8 py-4 md:py-5">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 md:w-7 md:h-7">
        <rect x="2" y="5" width="20" height="14" rx="2"></rect>
        <path d="M5 9h.01 M9 9h.01 M13 9h.01 M17 9h.01"></path>
        <path d="M5 13h.01 M9 13h.01 M13 13h.01 M17 13h.01"></path>
        <path d="M7 17h6"></path>
        <path d="M16 19a3 3 0 0 1 3-3 M18 21a1 1 0 0 1 1-1" stroke="currentColor"></path>
      </svg>
      PERIPHERALS
    </router-link>
    
    <div class="w-[1.5px] h-4 md:h-5 flex-shrink-0 bg-gray-200 rounded-full"></div>
    <router-link to="/category/accessories" active-class="text-blue-600" class="flex items-center flex-shrink-0 gap-1.5 md:gap-2 hover:text-blue-600 cursor-pointer transition px-4 md:px-8 py-4 md:py-5">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 md:w-7 md:h-7">
        <rect x="3" y="3" width="18" height="18" rx="2"></rect>
        <circle cx="12" cy="11" r="5"></circle>
        <circle cx="12" cy="11" r="1" fill="currentColor"></circle>
        <path d="M12 11l4.5 4.5"></path>
        <line x1="7" y1="18" x2="9" y2="18"></line>
        <line x1="11" y1="18" x2="13" y2="18"></line>
        <line x1="15" y1="18" x2="17" y2="18"></line>
      </svg>
      ACCESSORIES
    </router-link>
    
    <div class="w-[1.5px] h-4 md:h-5 flex-shrink-0 bg-gray-200 rounded-full"></div>
    <router-link to="/category/all-in-one" active-class="text-blue-600" class="flex items-center flex-shrink-0 gap-1.5 md:gap-2 hover:text-blue-600 cursor-pointer transition px-4 md:px-8 py-4 md:py-5">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 md:w-7 md:h-7">
        <rect x="2" y="3" width="20" height="13" rx="1"></rect>
        <path d="M8 20h8M12 16v4"></path>
        <rect x="18" y="19" width="3" height="2" rx="1" fill="currentColor" stroke="none"></rect>
      </svg>
      All-in-One PC
    </router-link>
    
    </div>
  </div>
</nav>
</template>
