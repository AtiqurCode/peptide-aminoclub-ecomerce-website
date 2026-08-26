import { findProduct } from '~/data/catalog'
import { bulkQuote } from '~/utils/pricing'

export function useBulkPricing(defaultId = 'glp3', defaultQty = 10) {
  const bulkId = ref(defaultId)
  const bulkQty = ref(defaultQty)

  const bulkProduct = computed(() => findProduct(bulkId.value))
  const quote = computed(() => bulkQuote(bulkProduct.value, bulkQty.value))

  return { bulkId, bulkQty, bulkProduct, quote }
}
