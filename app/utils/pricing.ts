import type { Product } from '~/data/catalog'
import { bulkTierTable } from '~/data/catalog'

export interface Dose {
  mg: number
  price: number
  was: number
  perMg: number
}

export interface BulkQuote {
  off: number
  unitPrice: number
  total: number
  saved: number
}

/** "Was" / retail strikethrough prices are shown as if the sale price were this fraction of retail. */
export const RETAIL_MARKUP = 0.65
/** Subscribe & save discount applied on top of the selected dose price. */
export const SUBSCRIPTION_DISCOUNT = 0.15
/** Subscription box discount applied to the 4-item retail total. */
export const BOX_DISCOUNT = 0.4
/** Base loyalty-points earn rate shown across the site (points per dollar spent). */
export const POINTS_PER_DOLLAR = 3.5

function buildDose(basePrice: number, mg: number, multiplier: number): Dose {
  const price = Math.round(basePrice * multiplier) - 0.01
  const was = Math.round(price / RETAIL_MARKUP) - 0.01
  return { mg, price, was, perMg: price / mg }
}

export function money(v: number): string {
  return '$' + v.toFixed(2)
}

export function doses(product: Product): [Dose, Dose, Dose] {
  return [
    buildDose(product.basePrice, 5, 1),
    buildDose(product.basePrice, 10, 1.8),
    buildDose(product.basePrice, 20, 3.2)
  ]
}

export function bulkTierFor(qty: number) {
  return bulkTierTable.find(t => t.qty === qty) || bulkTierTable[1]!
}

/** Bulk pricing is always quoted off the 10mg dose. */
export function bulkQuote(product: Product, qty: number): BulkQuote {
  const base = doses(product)[1].price
  const { off } = bulkTierFor(qty)
  const unitPrice = base * (1 - off / 100)
  const total = unitPrice * qty
  return { off, unitPrice, total, saved: base * qty - total }
}
