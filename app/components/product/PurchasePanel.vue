<script setup lang="ts">
import type { Product } from '~/data/catalog'
import { money, POINTS_PER_DOLLAR, SUBSCRIPTION_DISCOUNT } from '~/utils/pricing'

const props = defineProps<{ product: Product }>()

const { add: addToCart } = useCart()
const { addItem: addToBox, isFull: boxFull } = useBox()
const { doseList, doseIndex, selected } = useDoseSelector(props.product)

const plan = ref<'once' | 'sub'>('once')
const qty = ref(1)

const planMultiplier = computed(() => plan.value === 'sub' ? 1 - SUBSCRIPTION_DISCOUNT : 1)
const unitPrice = computed(() => selected.value.price * planMultiplier.value)
const total = computed(() => unitPrice.value * qty.value)
const points = computed(() => Math.round(total.value * POINTS_PER_DOLLAR).toLocaleString())

const doseRows = computed(() => doseList.map(d => ({
  ...d,
  save: Math.round((1 - d.perMg / doseList[0].perMg) * 100)
})))

function handleAddToCart() {
  addToCart(props.product.id, selected.value.mg, unitPrice.value, plan.value, qty.value)
}

function handleAddToBox() {
  if (boxFull.value) return
  const ok = addToBox(props.product.id, selected.value.mg)
  if (ok) navigateTo('/box')
}
</script>

<template>
  <div>
    <div class="flex flex-wrap items-center gap-2">
      <span class="rounded-full bg-tint-mint px-2.5 py-1 text-[11px] font-semibold text-ink-green">{{ product.category }}</span>
      <span class="rounded-full bg-surface-2 px-2.5 py-1 text-[11px] font-semibold text-body">{{ product.kind }}</span>
      <span class="font-mono text-[10.5px] text-label">In stock · ships today</span>
    </div>
    <h1 class="mt-3.5 text-[30px] leading-[1.08] font-semibold tracking-tight text-ink sm:text-[36px] lg:text-[42px]">
      {{ product.name }}
    </h1>
    <p class="mt-2.5 max-w-[480px] text-[15px] leading-relaxed text-body sm:text-[15.5px]">
      {{ product.sub }}. Lyophilized, sealed under nitrogen, and released only after the full eight-assay panel passes.
    </p>

    <div class="mt-6.5 flex gap-2">
      <button
        type="button"
        class="flex flex-1 flex-col gap-0.5 rounded-2xl px-4 py-3.5 text-left transition-colors"
        :class="plan === 'once' ? 'border-[1.5px] border-ink bg-white' : 'border border-line-2 bg-surface hover:border-ink/40'"
        @click="plan = 'once'"
      >
        <span class="text-[13px] font-semibold">One-time</span>
        <span class="text-[11px] opacity-70">Ships today</span>
      </button>
      <button
        type="button"
        class="flex flex-1 flex-col gap-0.5 rounded-2xl px-4 py-3.5 text-left transition-colors"
        :class="plan === 'sub' ? 'border-[1.5px] border-ink-green bg-green-50' : 'border border-line-2 bg-surface hover:border-ink-green/40'"
        @click="plan = 'sub'"
      >
        <span class="text-[13px] font-semibold">Subscribe · save 15%</span>
        <span class="text-[11px] opacity-70">Monthly, cancel anytime</span>
      </button>
    </div>

    <div class="mt-5 overflow-hidden rounded-[20px] border border-line">
      <div class="flex items-center justify-between bg-surface px-4.5 py-3.5">
        <p class="text-[13px] font-semibold">
          Select dose
        </p>
        <p class="font-mono text-[10.5px] text-label">
          Price per mg shown
        </p>
      </div>
      <button
        v-for="(d, i) in doseRows"
        :key="d.mg"
        type="button"
        class="flex w-full items-center gap-3.5 border-b border-line-soft px-4.5 py-4 text-left last:border-b-0"
        :class="doseIndex === i ? 'bg-green-50' : 'bg-white hover:bg-surface'"
        @click="doseIndex = i"
      >
        <span
          class="size-[19px] shrink-0 rounded-full"
          :class="doseIndex === i ? 'border-[6px] border-ink-green' : 'border-[1.5px] border-[#D6DAD8]'"
        />
        <span class="flex-1">
          <span class="block text-[15px] font-semibold">{{ d.mg }}mg</span>
          <span class="mt-0.5 block font-mono text-[10.5px] text-label">${{ (d.perMg * planMultiplier).toFixed(2) }} / mg · {{ product.lot }}</span>
        </span>
        <span
          v-if="d.save > 0"
          class="rounded-full bg-green-200 px-2.5 py-1 text-[10.5px] font-bold text-ink-green"
        >
          Save {{ d.save }}%
        </span>
        <span class="min-w-24 text-right">
          <span class="block text-[11.5px] text-[#A3ABA6] line-through">{{ money(d.was) }}</span>
          <span class="block text-[17px] font-semibold tracking-tight">{{ money(d.price * planMultiplier) }}</span>
        </span>
      </button>
    </div>

    <div class="mt-4 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
      <div class="flex h-[50px] items-center gap-0.5 self-start rounded-full border border-line-2 px-1.5">
        <button
          type="button"
          class="flex size-8.5 items-center justify-center rounded-full text-body transition-colors hover:bg-surface-2"
          @click="qty = Math.max(1, qty - 1)"
        >
          <UIcon
            name="i-lucide-minus"
            class="size-4"
          />
        </button>
        <span class="min-w-7.5 text-center text-[14px] font-semibold">{{ qty }}</span>
        <button
          type="button"
          class="flex size-8.5 items-center justify-center rounded-full text-body transition-colors hover:bg-surface-2"
          @click="qty += 1"
        >
          <UIcon
            name="i-lucide-plus"
            class="size-4"
          />
        </button>
      </div>
      <UButton
        size="xl"
        class="flex-1"
        @click="handleAddToCart"
      >
        Add to cart · {{ money(total) }}
      </UButton>
      <UButton
        size="xl"
        color="neutral"
        variant="outline"
        :disabled="boxFull"
        @click="handleAddToBox"
      >
        {{ boxFull ? 'Box full' : '+ Box' }}
      </UButton>
    </div>
    <p class="mt-2.5 font-mono text-[10.5px] text-label">
      Free shipment protection · earns {{ points }} points · 10 in stock
    </p>
  </div>
</template>
