<script setup lang="ts">
defineProps<{
  product: {
    id: number
    name: string
    brand: string
    price: number
    image: string
    specs?: string[]
  }
}>()
</script>

<template>
  <div class="p-6 hover:shadow-xl transition-shadow cursor-pointer flex flex-col items-center group bg-white h-full">
    <!-- Laptop Image (Clean white background) -->
    <div class="w-full h-48 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
      <img :src="product.image" :alt="product.name" class="max-h-full max-w-full object-contain" />
    </div>
    
    <!-- Separator Line -->
    <div class="w-full border-t border-gray-200 mb-6"></div>
    
    <!-- Laptop Details -->
    <h4 class="text-lg font-extrabold text-center mb-3 text-gray-900">{{ product.name }}</h4>
    <div class="text-red-600 font-extrabold text-3xl mb-6">${{ product.price.toLocaleString('en-US', {minimumFractionDigits: 2}) }}</div>
    
    <!-- Specs List (Left Aligned) -->
    <div class="w-full text-left text-[13px] text-gray-600 leading-loose">
      <template v-if="product.specs && product.specs.length > 0">
        <div v-for="(spec, index) in product.specs" :key="index" v-html="spec"></div>
      </template>
    </div>
  </div>
</template>
