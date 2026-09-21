<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import TopBar from '../../components/client/TopBar.vue'
import Header from '../../components/client/Header.vue'
import CategoryNav from '../../components/client/CategoryNav.vue'
import BrandSidebar from '../../components/client/BrandSidebar.vue'
import PromoBanner from '../../components/client/PromoBanner.vue'
import ProductCard from '../../components/client/ProductCard.vue'
import Footer from '../../components/client/Footer.vue'

// @ts-ignore
import fakeData from '../../../../backend/data.json'

const route = useRoute()

const products = ref(fakeData)

const groupedProducts = computed(() => {
  // Always initialize all 5 brands so the page structure never collapses!
  const groups: Record<string, typeof products.value> = {
    'Apple': [],
    'ASUS': [],
    'MSI': [],
    'Lenovo': [],
    'Dell': []
  }
  
  // Read ONLY the category filter (Gaming vs Office)
  const selectedCategory = route.query.category as string
  console.log('Recomputing with selectedCategory:', selectedCategory)
  
  products.value.forEach((p: any) => {
    // Hide product ONLY if a specific category was clicked and it doesn't match
    if (selectedCategory && p.category !== selectedCategory) {
      return
    }
    
    // Group everything by brand so all sections stay visible on the screen
    if (!groups[p.brand]) groups[p.brand] = []
    groups[p.brand].push(p)
  })
  return groups
})
</script>

<template>
  <div class="min-h-screen bg-white">
    
    <div class="max-w-[1250px] mx-auto px-6 lg:px-8 ">
      <TopBar />
      <Header />
      <CategoryNav />
    </div>

    <div class="sticky top-0 z-50 bg-white">
      <div class="max-w-[1250px] mx-auto px-6 lg:px-8">
        <div class="w-full border-b py-4 flex gap-4 text-xs font-bold items-center text-gray-500 bg-white">
          <span class="mr-2 uppercase tracking-widest text-gray-400">Subcategory:</span>
          
          <router-link :to="{ query: { ...route.query, category: undefined } }" :class="!route.query.category ? 'bg-blue-600 text-white shadow-sm' : 'bg-gray-50 hover:bg-gray-100 border'" class="px-5 py-2 rounded-full transition block">All</router-link>
          
          <router-link :to="{ query: { ...route.query, category: 'Gaming Laptop' } }" :class="route.query.category === 'Gaming Laptop' ? 'bg-blue-600 text-white shadow-sm' : 'bg-gray-50 hover:bg-gray-100 border'" class="px-5 py-2 rounded-full transition block">Gaming Laptop</router-link>
          
          <router-link :to="{ query: { ...route.query, category: 'Office Laptop' } }" :class="route.query.category === 'Office Laptop' ? 'bg-blue-600 text-white shadow-sm' : 'bg-gray-50 hover:bg-gray-100 border'" class="px-5 py-2 rounded-full transition block">Office Laptop</router-link>

        </div>
      </div>
    </div>

    <div class="max-w-[1250px] mx-auto px-6 lg:px-8">
      <div class="flex w-full mt-2 relative items-start">
        
        <div class="sticky top-[70px] self-start flex-shrink-0">
          <BrandSidebar />
        </div>

        <main class="flex-1 bg-white pl-8 pt-4 pb-8">
          <PromoBanner />
          
          <!-- Clean 404 Product Not Found State -->
          <div v-if="Object.keys(groupedProducts).length === 0" class="py-24 flex flex-col items-center justify-center text-center font-sans">
            <svg class="w-20 h-20 text-gray-200 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a,2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
            </svg>
            <h2 class="text-5xl font-black text-gray-800 tracking-tighter mb-2">404</h2>
            <p class="text-lg font-extrabold text-gray-400 tracking-[0.2em] uppercase mb-6">Product Not Found</p>
            <p class="text-sm text-gray-500 mb-8 max-w-sm leading-relaxed">
              We couldn't find any laptops matching your current filter.
            </p>
            <router-link to="/" class="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm py-3 px-8 rounded-full shadow-md transition-all duration-200 hover:shadow-lg">
              View All Laptops
            </router-link>
          </div>
          
          <!-- Product Grid Sections -->
          <div v-for="(group, brand) in groupedProducts" :key="brand" :id="brand" class="pt-10 pb-6 scroll-mt-28">
            <h2 class="text-2xl font-extrabold mb-6 flex items-center gap-3 text-gray-900">
              <span class="bg-black text-white text-sm px-3 py-1.5 rounded tracking-widest uppercase">{{ brand }}</span> 
              {{ brand }} Laptops
            </h2>
            
            <div v-if="group.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-gray-200">
              <router-link 
                v-for="product in group" 
                :key="product.id"
                :to="`/product/${product.id}`" 
                class="block border-r border-b border-gray-200"
              >
                <ProductCard :product="product" />
              </router-link>
            </div>
            <div v-else class="py-12 px-6 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center text-gray-400 bg-gray-50">
              <svg class="w-10 h-10 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
              <p class="text-sm font-medium">No laptops found for {{ brand }} in this category.</p>
            </div>
          </div>
          
        </main>
        
      </div>
    </div>
    
    <Footer />
    
  </div>
</template>
