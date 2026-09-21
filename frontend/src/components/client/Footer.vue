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
  <footer class="bg-gray-50 border-t border-gray-200 pt-12 pb-10">
    <div class="max-w-[1250px] mx-auto px-6 lg:px-8">
      
      <!-- Top Grid Section -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 mb-8">
        
        <!-- Column 1: Brand & Contact Info -->
        <div class="flex flex-col gap-6">
          <!-- Clickable Logo with Smooth Scroll to Top -->
          <a href="/" @click="handleLogoClick" class="cursor-pointer inline-block mb-2">
            <img src="/logo.jpeg" alt="Tech Simplify Store" class="h-20 w-auto object-contain mix-blend-multiply">
          </a>
          
          <p class="text-sm text-gray-500 leading-relaxed">
            Tech Simplify Store is a computer store located in Phnom Penh, Cambodia. We sell a variety of computer hardware and accessories.
          </p>
          
          <div class="text-sm text-gray-500 mt-2">
            <p>Any Question, Call: <span class="text-gray-900 font-medium">081 797 679 | 099 797 679</span></p>
          </div>
          
          <div class="flex flex-col gap-4 mt-2">
            <span class="text-sm text-gray-500">Or Find Us On:</span>
            <div class="flex items-center gap-3">
              <!-- Facebook -->
              <a href="#" class="w-8 h-8 rounded-full bg-white border flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-600 transition">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <!-- Telegram -->
              <a href="#" class="w-8 h-8 rounded-full bg-white border flex items-center justify-center text-gray-500 hover:text-blue-500 hover:border-blue-500 transition">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.888-.662 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              </a>
              <!-- Instagram -->
              <a href="#" class="w-8 h-8 rounded-full bg-white border flex items-center justify-center text-gray-500 hover:text-pink-600 hover:border-pink-600 transition">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.863.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.757 6.162 6.162 6.162 3.405 0 6.162-2.757 6.162-6.162 0-3.402-2.757-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Column 2: Address & Email -->
        <div class="flex flex-col gap-8">
          <div>
            <h4 class="font-bold text-gray-900 mb-4">Address</h4>
            <p class="text-sm text-gray-500 leading-relaxed">
              អាសយដ្ឋាន : ផ្ទះលេខ 524E0 , មហាវិថី កម្ពុជាក្រោម (១២៨), ភ្នំពេញ
            </p>
          </div>
          <div>
            <h4 class="font-bold text-gray-900 mb-4">Email</h4>
            <a href="mailto:techsimplifystore@gmail.com" class="text-sm text-gray-500 hover:text-blue-600 transition">
              techsimplifystore@gmail.com
            </a>
          </div>
        </div>

        <!-- Column 3: Quick Links -->
        <div>
          <h4 class="font-bold text-gray-900 mb-4">Quick Links</h4>
          <div class="grid grid-cols-2 gap-y-3 gap-x-4">
            <router-link to="/?category=laptop" class="text-sm text-gray-500 hover:text-blue-600 transition">Laptop</router-link>
            <router-link to="/about" class="text-sm text-gray-500 hover:text-blue-600 transition">About Us</router-link>
            
            <router-link to="/?category=pc-hardware" class="text-sm text-gray-500 hover:text-blue-600 transition">PC Hardware</router-link>
            <router-link to="/contact" class="text-sm text-gray-500 hover:text-blue-600 transition">Contact Us</router-link>
            
            <router-link to="/?category=peripherals" class="text-sm text-gray-500 hover:text-blue-600 transition">Peripherals</router-link>
            <router-link to="/faqs" class="text-sm text-gray-500 hover:text-blue-600 transition">FAQs</router-link>
            
            <router-link to="/?category=accessories" class="text-sm text-gray-500 hover:text-blue-600 transition">Accessories</router-link>
            <router-link to="/help" class="text-sm text-gray-500 hover:text-blue-600 transition">Help</router-link>
            
            <router-link to="/?category=pc-set" class="text-sm text-gray-500 hover:text-blue-600 transition">PC Set</router-link>
            <router-link to="/privacy" class="text-sm text-gray-500 hover:text-blue-600 transition">Privacy Policy</router-link>
          </div>
        </div>
        
      </div>
      
      <!-- Bottom Footer -->
      <div class="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-sm text-gray-500">
          &copy; 2026 Tech Simplify Store. All rights reserved.
        </p>
        <div class="flex items-center gap-6 text-sm text-gray-500">
          <router-link to="/privacy" class="hover:text-blue-600 transition">Privacy Policy</router-link>
          <router-link to="/terms" class="hover:text-blue-600 transition">Terms</router-link>
        </div>
      </div>
      
    </div>
  </footer>
</template>
