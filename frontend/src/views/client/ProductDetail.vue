<script setup lang="ts">
import TopBar from '../../components/client/TopBar.vue'
import Header from '../../components/client/Header.vue'
</script>

<template>
  <div class="min-h-screen bg-white">
    <TopBar />
    <Header />
    <div class="p-12 text-center">
      <h1 class="text-3xl font-black mb-4">ASUS Vivobook 14</h1>
      <p class="text-gray-500 max-w-lg mx-auto">This is the Product Detail page. When a customer clicks a laptop from the shop, they will see the full specs, more photos, and the "Add to Cart" button here!</p>
      
      <router-link to="/" class="mt-8 inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded hover:bg-blue-700 transition">
        ← Back to Shop
      </router-link>
    </div>
  </div>
</template>
