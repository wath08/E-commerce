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

// Smart formatter so the user doesn't have to write HTML in data.json
const formatSpec = (spec: string) => {
  // If it already contains HTML (legacy support), just return it
  if (spec.includes('<') && spec.includes('>')) return spec;
  
  // Check for the separator line
  if (spec.includes('---')) return `<div class="border-t border-dashed border-gray-300 my-2"></div>`;
  
  // Split key and value if there's a colon
  const colonIndex = spec.indexOf(':');
  if (colonIndex === -1) {
    // No colon, just regular text (like "- ASUS Sleeve")
    return spec;
  }
  
  const key = spec.substring(0, colonIndex).trim();
  const value = spec.substring(colonIndex + 1).trim();
  
  // These specific hardware keywords should have RED values
  const redKeys = ['CPU', 'RAM', 'Storage', 'Graphic', 'Graphics', 'GPU', 'Screen', 'Display'];
  
  // Check if the key contains any of the red keywords
  const shouldBeRed = redKeys.some(k => key.toLowerCase().includes(k.toLowerCase()));
  
  if (shouldBeRed) {
    return `${key} : <span class="text-red-600">${value}</span>`;
  }
  
  return `${key} : ${value}`;
}
</script>

<template>
  <router-link :to="'/product/' + product.id" class="p-6 cursor-pointer flex flex-col items-center bg-white h-full hover:shadow-lg transition-shadow duration-300 rounded-2xl block">
    <!-- Laptop Image (Clean white background) -->
    <div class="w-full aspect-[4/3] flex items-center justify-center mb-6 overflow-hidden rounded-xl bg-gray-50 border border-gray-100/50">
      <img :src="product.image" :alt="product.name" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
    </div>
    
    <!-- Separator Line -->
    <div class="w-full border-t border-gray-200 mb-6"></div>
    
    <!-- Laptop Details -->
    <div class="w-full flex items-center justify-center min-h-[72px] mb-3">
      <h4 class="text-lg font-extrabold text-center text-gray-900 line-clamp-3" style="text-wrap: balance;">{{ product.name }}</h4>
    </div>
    <div class="text-red-600 font-extrabold text-3xl mb-6">${{ product.price.toLocaleString('en-US', {minimumFractionDigits: 2}) }}</div>
    
        <!-- Specs List (Left Aligned) -->
    <div class="w-full text-left text-[13px] text-gray-600 leading-loose">
      <template v-if="product.specs && product.specs.length > 0">
        <div v-for="(spec, index) in product.specs" :key="index" v-html="formatSpec(spec)"></div>
      </template>
    </div>
  </router-link>
</template>
