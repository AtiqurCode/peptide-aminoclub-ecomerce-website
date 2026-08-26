<script setup lang="ts">
import { faqData } from '~/data/catalog'
import { accordionUi } from '~/utils/ui'

const items = faqData.map(f => ({ label: f.q, content: f.a }))
const ui = accordionUi('text-sm font-medium py-4 px-4', 'text-body text-[13.5px] leading-relaxed px-4 pb-4')
</script>

<template>
  <UAccordion
    :items="items"
    :ui="ui"
  />
</template>
