<script setup lang="ts">
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
    <h3 class="font-black text-xl tracking-widest text-gray-800 uppercase mb-6">Brands</h3>
    <!-- Removed items-start so children can stretch full width -->
    <div class="space-y-4 flex flex-col">
      
      <!-- group class on the full-width anchor, group-hover on the image -->
      <a href="#Apple" @click="scrollToBrand($event, 'Apple')" class="group block w-full py-4 -ml-2 px-2 cursor-pointer rounded-lg hover:bg-gray-50 transition-colors">
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" class="h-11 mx-auto w-auto object-contain transition-transform duration-300 origin-center group-hover:scale-110" alt="Apple" />
      </a>
      
      <a href="#ASUS" @click="scrollToBrand($event, 'ASUS')" class="group block w-full py-4 -ml-2 px-2 cursor-pointer rounded-lg hover:bg-gray-50 transition-colors">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2e/ASUS_Logo.svg" class="h-6 w-auto object-contain transition-transform duration-300 origin-left group-hover:scale-110" alt="ASUS" />
      </a>
      
      <a href="#MSI" @click="scrollToBrand($event, 'MSI')" class="group block w-full py-4 -ml-2 px-2 cursor-pointer rounded-lg hover:bg-gray-50 transition-colors">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Micro-Star_International_logo.svg" class="h-5 w-auto object-contain transition-transform duration-300 origin-left group-hover:scale-110" alt="MSI" />
      </a>
      
      <a href="#Lenovo" @click="scrollToBrand($event, 'Lenovo')" class="group block w-full py-4 -ml-2 px-2 cursor-pointer rounded-lg hover:bg-gray-50 transition-colors">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg" class="h-6 w-auto object-contain transition-transform duration-300 origin-left group-hover:scale-110" alt="Lenovo" />
      </a>
      
      <a href="#Dell" @click="scrollToBrand($event, 'Dell')" class="group block w-full py-4 -ml-2 px-2 cursor-pointer rounded-lg hover:bg-gray-50 transition-colors">
        <img src="/dell-logo-cropped.png" class="h-8 w-auto object-contain transition-transform duration-300 origin-left group-hover:scale-110" alt="Dell" />
      </a>

    </div>
  </aside>
</template>
