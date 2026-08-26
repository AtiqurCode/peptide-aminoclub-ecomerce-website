import { findProduct } from '~/data/catalog'
import { BOX_DISCOUNT, doses, money } from '~/utils/pricing'

export interface BoxItem {
  productId: string
  mg: number
}

export function useBox() {
  const items = useState<BoxItem[]>('box-items', () => [])

  function addItem(productId: string, mg: number) {
    if (items.value.length >= 4) return false
    items.value.push({ productId, mg })
    return true
  }

  function removeAt(index: number) {
    items.value = items.value.filter((_, i) => i !== index)
  }

  function clear() {
    items.value = []
  }

  const slots = computed(() => Array.from({ length: 4 }, (_, i) => {
    const item = items.value[i]
    if (!item) return { index: i, label: 'Pick a compound', filled: false }
    const product = findProduct(item.productId)
    return { index: i, label: `${product.name} · ${item.mg}mg`, filled: true }
  }))

  const retail = computed(() => items.value.reduce((sum, item) => {
    const product = findProduct(item.productId)
    const dose = doses(product).find(d => d.mg === item.mg)
    return sum + (dose ? dose.was : 0)
  }, 0))

  const total = computed(() => retail.value * (1 - BOX_DISCOUNT))
  const isFull = computed(() => items.value.length === 4)
  const ctaLabel = computed(() => isFull.value
    ? `Start subscription · ${money(total.value)}`
    : `Pick ${4 - items.value.length} more to start`)

  return { items, slots, retail, total, isFull, ctaLabel, addItem, removeAt, clear }
}
