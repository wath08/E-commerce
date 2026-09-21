<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ClientLayout from '../../layouts/ClientLayout.vue'

// @ts-ignore
import fakeData from '../../../../backend/data.json'

const route = useRoute()

// Find the product that matches the URL ID
const product = computed(() => {
  const id = Number(route.params.id)
  return fakeData.find((p: any) => p.id === id)
})
</script>

<template>
  <ClientLayout>
    <div class="py-12 px-6 lg:px-8 max-w-[1250px] mx-auto bg-white min-h-[600px]">
      
      <div v-if="product" class="flex flex-col lg:flex-row gap-12">
        <!-- Product Image -->
        <div class="lg:w-1/2 flex justify-center items-center p-8 border border-gray-100 rounded-2xl bg-gray-50">
          <img :src="product.image" :alt="product.name" class="w-full h-auto object-contain max-h-[500px]" />
        </div>
        
        <!-- Product Info -->
        <div class="lg:w-1/2 flex flex-col justify-center">
          <div class="mb-4">
            <span class="bg-black text-white text-xs font-bold px-3 py-1 rounded tracking-widest uppercase">{{ product.brand }}</span>
            <span class="ml-3 text-gray-500 text-sm font-semibold uppercase tracking-wider">{{ product.category }}</span>
          </div>
          
          <h1 class="text-4xl font-black mb-4 text-gray-900 leading-tight">{{ product.name }}</h1>
          
          <div class="text-4xl text-red-600 font-black mb-8">
            ${{ product.price.toLocaleString('en-US', {minimumFractionDigits: 2}) }}
          </div>
          
          <div class="mb-8">
            <h3 class="text-lg font-bold mb-4 text-gray-800 border-b border-gray-100 pb-2">Key Specifications</h3>
            <div class="space-y-3 text-sm text-gray-600 leading-relaxed font-medium">
              <template v-if="product.specs && product.specs.length > 0">
                <div v-for="(spec, index) in product.specs" :key="index" v-html="spec"></div>
              </template>
              <template v-else>
                <div class="italic text-gray-400">No specifications available.</div>
              </template>
            </div>
          </div>
          
          <div class="flex gap-4">
            <button class="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              Add to Cart
            </button>
            <router-link :to="`/category/${product.main_category || 'laptop'}`" class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-4 rounded-xl text-center transition-all duration-300">
              Back to {{ product.brand }}
            </router-link>
          </div>
        </div>
      </div>
      
            <!-- Market Standard 404 State -->
      <div v-else class="py-28 flex flex-col items-center justify-center text-center">
        
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
