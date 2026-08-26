import type { Product } from '~/data/catalog'
import { doses } from '~/utils/pricing'

export function useDoseSelector(product: Product, defaultIndex = 1) {
  const doseList = doses(product)
  const doseIndex = ref(defaultIndex)
  const selected = computed(() => doseList[doseIndex.value]!)

  return { doseList, doseIndex, selected }
}
