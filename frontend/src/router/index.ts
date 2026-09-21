import { createRouter, createWebHistory } from 'vue-router'
import ShopView from '../views/client/ShopView.vue'
import ProductDetail from '../views/client/ProductDetail.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'shop', component: ShopView },
    { path: '/product/:id', name: 'product-detail', component: ProductDetail }
  ],
  scrollBehavior(to, from, savedPosition) {
    // If the path is identical and only the query changed (e.g. clicking a filter), do NOT jump to top
    if (to.path === from.path) {
      return false; // Maintains current scroll position
    }
    
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

export default router
