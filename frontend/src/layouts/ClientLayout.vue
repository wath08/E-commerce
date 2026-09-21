<script setup lang="ts">
import TopBar from '../components/client/TopBar.vue'
import Header from '../components/client/Header.vue'
import CategoryNav from '../components/client/CategoryNav.vue'
import Footer from '../components/client/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-white flex flex-col">
    <div class="max-w-[1250px] w-full mx-auto px-6 lg:px-8">
      <TopBar />
      <Header />
      <CategoryNav />
    </div>

    <!-- The actual page content goes here -->
    <div class="flex-1">
      <slot />
    </div>

    <Footer />
  </div>
</template>
