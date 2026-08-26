<script setup lang="ts">
import type { Product } from '~/data/catalog'
import { accordionUi } from '~/utils/ui'

const props = defineProps<{ product: Product }>()
const ui = accordionUi('text-[13.5px] font-semibold py-3.5 px-4', 'text-body text-[13px] leading-relaxed px-4 pb-4')

const items = computed(() => [
  {
    label: 'Description',
    content: `${props.product.sub}. Supplied as a lyophilized powder in a sealed vial, released only after the full eight-assay panel passes at an ISO 17025 accredited laboratory. Strictly for in vitro research use.`
  },
  {
    label: 'Assay panel & certificate',
    content: `Purity by RP-HPLC, net peptide content, identity by retention-time match, appearance, fentanyl screen, heavy metals, sterility, and endotoxin. The certificate for ${props.product.lot} is published in the library.`
  },
  {
    label: 'Storage & handling',
    content: 'Store lyophilized product at 2–8°C, protected from light and moisture. Reconstitute with bacteriostatic water, refrigerate, and log the date on the vial.'
  }
])
</script>

<template>
  <UAccordion
    :items="items"
    :ui="ui"
  />
</template>
