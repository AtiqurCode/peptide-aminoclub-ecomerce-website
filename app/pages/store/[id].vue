<script setup lang="ts">
import { catalog, findProduct } from '~/data/catalog'

const route = useRoute()
const id = route.params.id as string

if (!catalog.some(p => p.id === id)) {
  throw createError({ statusCode: 404, statusMessage: 'Product not found' })
}

const product = findProduct(id)

useSeoMeta({
  title: `${product.name} — Amino Club`,
  description: `${product.sub}. ${product.purity}% purity, third-party tested, CoA published for ${product.lot}.`
})

const breadcrumbItems = [
  { label: 'Catalog', to: '/store' },
  { label: product.category },
  { label: product.name }
]
</script>

<template>
  <div class="mx-auto max-w-[77.5rem] px-4 py-6 sm:px-6 lg:px-8 lg:pb-24">
    <UBreadcrumb :items="breadcrumbItems" />

    <div class="mt-5 grid grid-cols-1 items-start gap-9 lg:grid-cols-2 lg:gap-13">
      <ProductGallery :product="product" />

      <div>
        <PurchasePanel :product="product" />

        <div class="mt-6.5">
          <AssayPanel :product="product" />
        </div>

        <div class="mt-4">
          <ProductAccordion :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>
