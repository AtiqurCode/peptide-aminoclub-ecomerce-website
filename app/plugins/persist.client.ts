import type { BoxItem } from '~/composables/useBox'
import type { CartLine } from '~/composables/useCart'

function loadJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

export default defineNuxtPlugin(() => {
  const cartLines = useState<CartLine[]>('cart-lines', () => [])
  const boxItems = useState<BoxItem[]>('box-items', () => [])

  // Defer until after hydration so the first client render still matches the
  // server-rendered (always-empty) markup — avoids a hydration mismatch.
  onNuxtReady(() => {
    cartLines.value = loadJson('amino_cart', cartLines.value)
    boxItems.value = loadJson('amino_box', boxItems.value)

    watch(cartLines, (v) => {
      localStorage.setItem('amino_cart', JSON.stringify(v))
    }, { deep: true })

    watch(boxItems, (v) => {
      localStorage.setItem('amino_box', JSON.stringify(v))
    }, { deep: true })
  })
})
