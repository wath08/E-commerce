<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import ClientLayout from '../../layouts/ClientLayout.vue'
import BrandSidebar from '../../components/client/BrandSidebar.vue'
import PromoBanner from '../../components/client/PromoBanner.vue'

import ProductCard from '../../components/client/ProductCard.vue'

// Import dynamic data utilities
import { subcategoryMap, brandMap } from '../../utils/categoryData'

import fakeData from '../../../../backend/data.json'

const route = useRoute()
const products = ref(fakeData)

const currentMainCategory = computed(() => (route.params.categoryId as string) || 'laptop')
const availableSubcategories = computed(() => subcategoryMap[currentMainCategory.value] || [])
const currentBrands = computed(() => brandMap[currentMainCategory.value] || [])

const groupedProducts = computed(() => {
  const groups: Record<string, typeof products.value> = {}
  
  // Initialize all brands for the CURRENT main category so the page structure doesn't collapse
  currentBrands.value.forEach(brand => {
    groups[brand] = []
  })
  
  const selectedSubcategory = route.query.category as string
  
  products.value.forEach((p: any) => {
    if (p.main_category && p.main_category !== currentMainCategory.value) {
      return
    }
    
    if (selectedSubcategory && p.category !== selectedSubcategory) {
      return
    }
    
    if (groups[p.brand] !== undefined) {
      groups[p.brand].push(p)
    }
  })
  return groups
})
</script>

<template>
  <ClientLayout>
    <div class="sticky top-0 z-50 bg-white">
      <div class="max-w-[1250px] mx-auto px-6 lg:px-8">
        <div class="w-full border-b border-gray-100 py-4 flex gap-4 text-xs font-bold items-center text-gray-500 bg-white overflow-x-auto scrollbar-hide whitespace-nowrap">
          <span class="mr-2 uppercase tracking-widest text-gray-400">Subcategory:</span>
          
          <router-link 
            :to="{ query: { ...route.query, category: undefined } }" 
            :class="!route.query.category ? 'bg-blue-600 text-white shadow-sm' : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'" 
            class="px-5 py-2 rounded-full transition block whitespace-nowrap"
          >
            All
          </router-link>
          
          <router-link 
            v-for="sub in availableSubcategories" 
            :key="sub.name"
            :to="{ query: { ...route.query, category: sub.name } }" 
            :class="route.query.category === sub.name ? 'bg-blue-600 text-white shadow-sm border-blue-600' : 'bg-gray-50 hover:bg-gray-100 border-gray-200'" 
            class="px-5 py-2 rounded-full transition flex items-center border whitespace-nowrap"
          >
            <span v-html="sub.icon" class="w-4 h-4 mr-2 inline-block opacity-70"></span>
            {{ sub.name }}
          </router-link>

        </div>
      </div>
    </div>

    <div class="max-w-[1250px] mx-auto px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row w-full mt-2 relative items-start">
        
        <div class="sticky top-[64px] lg:top-[70px] z-20 bg-white w-full lg:w-auto self-start flex-shrink-0 border-b border-gray-100 lg:border-none">
          <BrandSidebar />
        </div>

        <main class="flex-1 bg-white w-full lg:pl-8 pt-4 pb-8">
          <PromoBanner />
                    
                                                                      <!-- Market Standard Empty Search State -->
          <div v-if="Object.values(groupedProducts).every(group => group.length === 0)" class="py-24 flex flex-col items-center justify-center text-center">
            
            <div class="mb-8">
              <svg class="w-24 h-24 text-gray-700 mx-auto" viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
                <g transform="translate(20,20) rotate(-45) translate(-20,-20)">
                   <!-- Outer Ring -->
                   <circle cx="20" cy="14" r="10" />
                   <!-- Inner Ring -->
                   <circle cx="20" cy="14" r="6" />
                   
                   <!-- Glass Reflection Arc (Top-Right when rotated) -->
                   <path d="M 23.5 10.5 A 4.5 4.5 0 0 1 24.5 14.5" />
                   <!-- Glass Reflection Dot -->
                   <line x1="24" y1="16.5" x2="23.8" y2="17" />
                   
                   <!-- Handle Collar -->
                   <rect x="17.5" y="24" width="5" height="2.5" />
                   <!-- Handle Body -->
                   <rect x="18" y="26.5" width="4" height="9" rx="2" />
                </g>
              </svg>
            </div>
            
            <h3 class="text-2xl font-medium text-gray-800 mb-2">No products found</h3>
            <p class="text-gray-500 text-base max-w-sm mx-auto leading-relaxed">
              We couldn't find exactly what you're looking for. Try a distinct category.
            </p>
            
          </div>
          
          <!-- Product Grid Sections -->
          <div v-else>
            <div v-for="(group, brand) in groupedProducts" :key="brand" :id="brand" class="pt-10 pb-6 scroll-mt-28">
              <h2 class="text-2xl font-extrabold mb-6 flex items-center gap-3 text-gray-900">
                <span class="bg-black text-white text-sm px-3 py-1.5 rounded tracking-widest uppercase">{{ brand }}</span> 
                {{ brand }} Products
              </h2>
              
              <div v-if="group.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-gray-100 border-t border-gray-100">
                <router-link 
                  v-for="product in group" 
                  :key="product.id"
                  :to="`/product/${product.id}`" 
                  class="block border-r border-b border-gray-100"
                >
                  <ProductCard :product="product" />
                </router-link>
              </div>
              <div v-else class="py-12 px-6 border-2 border-dashed border-gray-100 rounded-xl flex flex-col items-center justify-center text-gray-400 bg-gray-50">
                <svg class="w-10 h-10 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                <p class="text-sm font-medium">No products found for {{ brand }} in this category.</p>
              </div>
            </div>
          </div>
          
        </main>
        
      </div>
    </div>
  </ClientLayout>
</template>
