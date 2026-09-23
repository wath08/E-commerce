<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import ClientLayout from '../../layouts/ClientLayout.vue'
import ProductCard from '../../components/client/ProductCard.vue'

// @ts-ignore
import fakeData from '../../../../backend/data.json'

const route = useRoute()

// Find the product that matches the URL ID
const product = computed(() => {
  const id = Number(route.params.id)
  return fakeData.find((p: any) => p.id === id)
})


const relatedProducts = computed(() => {
  if (!product.value) return []
  return fakeData
    .filter((p: any) => p.main_category === product.value?.main_category && p.id !== product.value?.id)
    .slice(0, 4)
})

// Gallery logic
const activeThumb = ref(0)

const gallery = computed(() => {
  if (!product.value) return []
  if (product.value.images && product.value.images.length > 0) {
    return product.value.images
  }
  return [product.value.image]
})

watch(() => product.value, () => {
  activeThumb.value = 0
})

// Smart formatter for specs
const formatSpec = (spec: string) => {
  if (spec.includes('<') && spec.includes('>')) return spec;
  if (spec.includes('---')) return `<div class="border-t border-dashed border-gray-300 my-4"></div>`;
  
  const colonIndex = spec.indexOf(':');
  if (colonIndex === -1) return spec;
  
  const key = spec.substring(0, colonIndex).trim();
  const value = spec.substring(colonIndex + 1).trim();
  const redKeys = ['CPU', 'RAM', 'Storage', 'Graphic', 'Graphics', 'GPU', 'Screen', 'Display'];
  
  if (redKeys.some(k => key.toLowerCase().includes(k.toLowerCase()))) {
    return `${key} : <span class="text-red-600">${value}</span>`;
  }
  return `${key} : ${value}`;
}
</script>

<template>
  <ClientLayout>
    <div class="py-12 px-6 lg:px-8 max-w-[1250px] mx-auto bg-white min-h-[600px]">
      
      <div class="max-w-[1050px] mx-auto bg-white border border-gray-200 rounded-[28px] p-6 lg:p-8 shadow-sm mb-16">
        <div v-if="product" class="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          <!-- Product Image & Thumbnails (Left Side) -->
          <div class="lg:w-1/2 flex flex-col gap-6">
            <div class="w-full aspect-[4/3] lg:aspect-[1/1.1] overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 flex justify-center items-center">
              <img :src="gallery[activeThumb]" :alt="product.name" class="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <!-- Thumbnails (Dynamic Gallery) -->
            <div class="flex gap-4 flex-wrap">
              <div v-for="(img, idx) in gallery" :key="idx" @click="activeThumb = idx" 
                   :class="['w-20 h-20 rounded-2xl flex justify-center items-center overflow-hidden cursor-pointer bg-gray-50 transition-all', activeThumb === idx ? 'border-2 border-blue-400 shadow-sm' : 'border border-gray-200 hover:border-gray-300']">
                <img :src="img" class="w-full h-full object-cover transition-opacity" :class="activeThumb === idx ? 'opacity-100' : 'opacity-60 hover:opacity-100'" />
              </div>
            </div>
          </div>
          
          <!-- Product Info (Right Side) -->
          <div class="lg:w-1/2 flex flex-col">
            
            <div class="flex justify-between items-start gap-4 mb-4">
              <div>
                <h1 class="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-2" style="text-wrap: balance;">{{ product.name }}</h1>
                <div class="text-2xl md:text-3xl text-red-600 font-bold">
                  ${{ product.price.toLocaleString('en-US', {minimumFractionDigits: 2}) }}
                </div>
              </div>
              
              <!-- Favorite Button -->
              <button class="text-gray-400 hover:text-red-500 transition-colors flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-7 h-7 md:w-8 md:h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </button>
            </div>
            
            <div class="text-[14px] text-gray-500 mb-6 font-medium">
              Category: <span class="text-blue-600 uppercase">{{ product.main_category || 'LAPTOP' }}</span>
            </div>
            
            <div class="w-full h-px bg-gray-200 mb-6"></div>
            
            <div class="mb-8">
              <h3 class="text-[20px] font-bold mb-4 text-gray-900">About this product</h3>
              <div class="space-y-1 text-[14px] md:text-[15px] leading-snug text-gray-700">
                <template v-if="product.specs && product.specs.length > 0">
                  <div v-for="(spec, index) in product.specs" :key="index" v-html="formatSpec(spec)"></div>
                </template>
                <template v-else>
                  <div class="italic text-gray-400">No specifications available.</div>
                </template>
              </div>
            </div>
            
            <div class="w-full h-px bg-gray-200 my-6 mt-auto"></div>
            
            <div class="flex gap-4">
              <button class="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm md:text-[15px] py-3 rounded-lg transition-all duration-300">
                Add to Cart
              </button>
              <router-link :to="`/category/${product.main_category || 'laptop'}#${product.brand}`" class="flex-1 bg-black hover:bg-gray-900 text-white font-bold text-sm md:text-[15px] tracking-wider uppercase py-3 rounded-lg text-center flex items-center justify-center transition-all duration-300">
                BACK TO {{ product.brand }}
              </router-link>
            </div>
          </div>
          
        </div>
      </div>
      
      <!-- Related Products -->
      <div v-if="product && relatedProducts.length > 0" class="mt-10 pt-8 border-t border-gray-100">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          <div v-for="related in relatedProducts" :key="related.id" class="border border-gray-100 bg-white">
            <ProductCard :product="related" :minimal="true" />
          </div>
        </div>
      </div>
      
      <!-- Market Standard 404 State -->
      <div v-else-if="!product" class="py-28 flex flex-col items-center justify-center text-center">
        
        <div class="bg-gray-50 p-6 rounded-full mb-6">
          <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm3.65 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75z"></path>
          </svg>
        </div>
        
        
        
        <router-link to="/" class="inline-flex items-center justify-center px-6 py-2.5 rounded-lg text-sm font-semibold text-white bg-gray-900 hover:bg-black transition-colors shadow-sm">
          Return to Shop
        </router-link>
        
      </div>
      
    </div>
  </ClientLayout>
</template>
