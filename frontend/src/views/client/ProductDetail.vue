<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import ClientLayout from '../../layouts/ClientLayout.vue'
import ProductCard from '../../components/client/ProductCard.vue'

// @ts-ignore
import fakeData from '../../data.json'

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
      
                        <div v-if="product" class="flex flex-col lg:flex-row gap-12">
        <!-- Product Image & Thumbnails -->
        <div class="lg:w-1/2 flex flex-col gap-6">
          <div class="w-full aspect-[4/3] lg:aspect-square overflow-hidden rounded-3xl border border-gray-100 bg-gray-50 flex justify-center items-center">
            <img :src="gallery[activeThumb]" :alt="product.name" class="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
          </div>
          <!-- Thumbnails (Dynamic Gallery) -->
          <div class="flex gap-4 flex-wrap">
            <div v-for="(img, idx) in gallery" :key="idx" @click="activeThumb = idx" 
                 :class="['w-20 h-20 rounded-xl flex justify-center items-center p-2 cursor-pointer bg-white transition-all', activeThumb === idx ? 'border-2 border-blue-500 shadow-sm' : 'border border-gray-200 hover:border-blue-300']">
              <img :src="img" class="max-h-full max-w-full object-contain transition-opacity" :class="activeThumb === idx ? 'opacity-100' : 'opacity-60 hover:opacity-100'" />
            </div>
          </div>
        </div>
        
        <!-- Product Info -->
        <div class="lg:w-1/2 flex flex-col pt-4">
          
          <div class="mb-4">
            <h1 class="text-3xl font-extrabold text-gray-900 leading-tight mb-2" style="text-wrap: balance;">{{ product.name }}</h1>
            <div class="text-3xl text-red-600 font-extrabold tracking-tight">
              ${{ product.price.toLocaleString('en-US', {minimumFractionDigits: 2}) }}
            </div>
          </div>
          
          <div class="text-[13px] text-gray-500 mb-6 font-medium">
            Category: <span class="text-blue-600 uppercase">{{ product.main_category || 'LAPTOP' }}</span>
          </div>
          
          <div class="mb-10">
            <h3 class="text-lg font-bold mb-4 text-gray-900">About this product</h3>
            <div class="space-y-2 text-[13px] text-gray-700">
              <template v-if="product.specs && product.specs.length > 0">
                <div v-for="(spec, index) in product.specs" :key="index" v-html="formatSpec(spec)"></div>
              </template>
              <template v-else>
                <div class="italic text-gray-400">No specifications available.</div>
              </template>
            </div>
          </div>
          
          <div class="flex gap-4 mt-auto border-t border-gray-100 pt-6">
            <button class="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-2.5 rounded-lg transition-all duration-300">
              Add to Cart
            </button>
            <router-link :to="`/category/${product.main_category || 'laptop'}#${product.brand}`" class="flex-1 bg-black hover:bg-gray-900 text-white font-bold text-sm tracking-wider uppercase py-2.5 rounded-lg text-center flex items-center justify-center transition-all duration-300">
              BACK TO {{ product.brand }}
            </router-link>
          </div>
        </div>
      </div>
      
      <!-- Related Products -->
      <div v-if="product && relatedProducts.length > 0" class="mt-24 pt-12 border-t border-gray-100">
        <h2 class="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard v-for="related in relatedProducts" :key="related.id" :product="related" />
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
