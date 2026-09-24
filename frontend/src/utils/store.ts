// Global Cart & Wishlist Store using Vue's reactive system (no Pinia needed)
import { reactive, computed } from 'vue'

// --- Cart State ---
const cartState = reactive<{ items: { id: number; name: string; price: number; image: string; quantity: number }[] }>({
  items: []
})

export function useCart() {
  const cartItemCount = computed(() => cartState.items.reduce((sum, item) => sum + item.quantity, 0))

  const cartTotal = computed(() =>
    cartState.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  )

  function addToCart(product: { id: number; name: string; price: number; image: string }) {
    const existing = cartState.items.find(i => i.id === product.id)
    if (existing) {
      existing.quantity++
    } else {
      cartState.items.push({ ...product, quantity: 1 })
    }
  }

  function removeFromCart(productId: number) {
    const index = cartState.items.findIndex(i => i.id === productId)
    if (index !== -1) cartState.items.splice(index, 1)
  }

  return { cartState, cartItemCount, cartTotal, addToCart, removeFromCart }
}

// --- Wishlist State ---
const wishlistState = reactive<{ ids: Set<number> }>({
  ids: new Set()
})

export function useWishlist() {
  function isFavorited(productId: number) {
    return wishlistState.ids.has(productId)
  }

  function toggleFavorite(productId: number) {
    if (wishlistState.ids.has(productId)) {
      wishlistState.ids.delete(productId)
    } else {
      wishlistState.ids.add(productId)
    }
  }

  return { wishlistState, isFavorited, toggleFavorite }
}
