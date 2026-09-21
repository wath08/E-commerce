import { createRouter, createWebHashHistory } from 'vue-router'
import ShopView from '../views/client/ShopView.vue'
import ProductDetail from '../views/client/ProductDetail.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/category/laptop' },
    { path: '/category/:categoryId', name: 'category', component: ShopView },
    { path: '/product/:id', name: 'product-detail', component: ProductDetail }
  ],
  scrollBehavior(to, from, savedPosition) {
    // If the path is identical and only the query changed (e.g. clicking a subcategory filter), do NOT jump to top
    if (to.path === from.path && to.query !== from.query) {
      return false; // Maintains current scroll position
    }
    
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

export default router
