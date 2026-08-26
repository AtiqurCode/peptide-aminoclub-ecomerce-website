import { findProduct } from '~/data/catalog'
import { money, POINTS_PER_DOLLAR, RETAIL_MARKUP } from '~/utils/pricing'

export type OrderPlan = 'once' | 'sub' | 'bulk'

export interface CartLine {
  key: string
  productId: string
  mg: number
  price: number
  plan: OrderPlan
  qty: number
}

export const POINTS_BALANCE = 10500
export const POINTS_CREDIT = 105

const PLAN_LABEL: Record<OrderPlan, string> = {
  once: 'One-time',
  sub: 'Subscription',
  bulk: 'Bulk order'
}

export function useCart() {
  const lines = useState<CartLine[]>('cart-lines', () => [])
  const open = useState('cart-drawer-open', () => false)
  const redeem = useState('cart-redeem', () => false)

  function add(productId: string, mg: number, price: number, plan: OrderPlan, qty: number) {
    const key = `${productId}-${mg}-${plan}`
    const existing = lines.value.find(l => l.key === key)
    if (existing) existing.qty += qty
    else lines.value.push({ key, productId, mg, price, plan, qty })
    open.value = true
  }

  function inc(key: string) {
    const line = lines.value.find(l => l.key === key)
    if (line) line.qty += 1
  }

  function dec(key: string) {
    const line = lines.value.find(l => l.key === key)
    if (line) line.qty = Math.max(1, line.qty - 1)
  }

  function remove(key: string) {
    lines.value = lines.value.filter(l => l.key !== key)
  }

  const count = computed(() => lines.value.reduce((a, l) => a + l.qty, 0))
  const subtotal = computed(() => lines.value.reduce((a, l) => a + l.price * l.qty, 0))
  const retail = computed(() => subtotal.value / RETAIL_MARKUP)
  const total = computed(() => Math.max(0, subtotal.value - (redeem.value ? POINTS_CREDIT : 0)))
  const points = computed(() => Math.round(total.value * POINTS_PER_DOLLAR).toLocaleString())

  const enrichedLines = computed(() => lines.value.map((l) => {
    const product = findProduct(l.productId)
    return {
      ...l,
      product,
      meta: `${l.mg}mg · ${PLAN_LABEL[l.plan]} · ${product.lot}`,
      lineTotal: money(l.price * l.qty)
    }
  }))

  return {
    lines,
    enrichedLines,
    open,
    redeem,
    count,
    subtotal,
    retail,
    total,
    points,
    add,
    inc,
    dec,
    remove
  }
}
