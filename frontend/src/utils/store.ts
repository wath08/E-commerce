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
// ✅ Using a reactive array instead of Set — Vue cannot track Set mutations for re-rendering
const wishlistState = reactive<{ ids: number[] }>({
  ids: []
})

export function useWishlist() {
  function isFavorited(productId: number): boolean {
    return wishlistState.ids.includes(productId)
  }

  function toggleFavorite(productId: number) {
    const index = wishlistState.ids.indexOf(productId)
    if (index !== -1) {
      wishlistState.ids.splice(index, 1) // remove
    } else {
      wishlistState.ids.push(productId)  // add
    }
  }

  return { wishlistState, isFavorited, toggleFavorite }
}
