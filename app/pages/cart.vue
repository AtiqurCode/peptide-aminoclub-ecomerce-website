<script setup lang="ts">
import { money } from '~/utils/pricing'
import { POINTS_BALANCE, POINTS_CREDIT } from '~/composables/useCart'

useSeoMeta({ title: 'Cart — Amino Club' })

const { enrichedLines, retail, total, points, redeem, inc, dec, remove } = useCart()
</script>

<template>
  <div class="mx-auto max-w-(--ui-container) px-4 py-9 sm:px-6 lg:px-8 lg:pb-24">
    <h1 class="text-[28px] font-semibold tracking-tight text-ink sm:text-[36px]">
      Cart
    </h1>

    <div class="mt-6 grid grid-cols-1 items-start gap-7 lg:grid-cols-[1fr_360px]">
      <div class="overflow-hidden rounded-3xl border border-line">
        <div
          v-if="enrichedLines.length === 0"
          class="p-14 text-center"
        >
          <p class="text-[15px] text-body">
            Your cart is empty.
          </p>
          <UButton
            to="/store"
            size="lg"
            class="mt-4"
          >
            Browse the catalog
          </UButton>
        </div>
        <div
          v-for="line in enrichedLines"
          :key="line.key"
          class="flex flex-col gap-4 border-b border-line-soft p-4.5 last:border-b-0 sm:flex-row sm:items-center"
        >
          <span
            class="flex size-11.5 shrink-0 items-center justify-center rounded-[11px] text-center font-serif text-base text-ink/70 italic"
            :style="{ background: `linear-gradient(155deg, ${line.product.tint}, #fff)` }"
          >{{ line.product.abbr.slice(0, 2) }}</span>
          <div class="flex-1">
            <p class="text-[14.5px] font-semibold">
              {{ line.product.name }}
            </p>
            <p class="mt-0.5 font-mono text-[10.5px] text-label">
              {{ line.meta }}
            </p>
            <button
              type="button"
              class="mt-1.5 text-[12px] text-label underline transition-colors hover:text-ink"
              @click="remove(line.key)"
            >
              Remove
            </button>
          </div>
          <div class="flex items-center justify-between gap-4 sm:justify-start">
            <div class="flex h-10 items-center gap-0.5 rounded-full border border-line-2 px-1.5">
              <button
                type="button"
                class="flex size-7 items-center justify-center rounded-full text-body transition-colors hover:bg-surface-2"
                @click="dec(line.key)"
              >
                <UIcon
                  name="i-lucide-minus"
                  class="size-3.5"
                />
              </button>
              <span class="min-w-6.5 text-center text-[13.5px] font-semibold">{{ line.qty }}</span>
              <button
                type="button"
                class="flex size-7 items-center justify-center rounded-full text-body transition-colors hover:bg-surface-2"
                @click="inc(line.key)"
              >
                <UIcon
                  name="i-lucide-plus"
                  class="size-3.5"
                />
              </button>
            </div>
            <p class="min-w-21.5 text-right text-[16px] font-semibold tracking-tight">
              {{ line.lineTotal }}
            </p>
          </div>
        </div>
      </div>

      <aside class="rounded-3xl border border-line p-5.5 shadow-[0_14px_40px_rgba(14,22,33,0.06)]">
        <p class="text-[15px] font-semibold">
          Order summary
        </p>
        <div class="mt-4 flex flex-col gap-2.5 text-[13.5px]">
          <div class="flex justify-between text-body">
            <span>Retail</span>
            <span class="line-through">{{ money(retail) }}</span>
          </div>
          <div class="flex justify-between text-green-600">
            <span>HEAT35 sitewide</span>
            <span>−35%</span>
          </div>
          <div class="flex justify-between text-body">
            <span>Shipping + protection</span>
            <span>Free</span>
          </div>
          <button
            type="button"
            class="flex items-center gap-2.5 rounded-xl px-3 py-2.5 transition-colors"
            :class="redeem ? 'border border-[#CFE9C9] bg-green-50' : 'border border-line-soft bg-surface hover:border-line-2'"
            @click="redeem = !redeem"
          >
            <span
              class="flex size-4.25 shrink-0 items-center justify-center rounded-[5px]"
              :class="redeem ? 'bg-ink-green text-white' : 'border border-[#D6DAD8] text-transparent'"
            >
              <UIcon
                name="i-lucide-check"
                class="size-2.5"
              />
            </span>
            <span class="flex-1 text-left text-[12.5px]">
              Redeem {{ POINTS_BALANCE.toLocaleString() }} pts <span class="opacity-60">(−{{ money(POINTS_CREDIT) }})</span>
            </span>
          </button>
          <div class="flex items-baseline justify-between border-t border-line-soft pt-3">
            <span class="font-semibold">Total</span>
            <span class="text-[26px] font-semibold tracking-tight">{{ money(total) }}</span>
          </div>
        </div>
        <UButton
          block
          size="xl"
          class="mt-4"
        >
          Checkout
        </UButton>
        <p class="mt-3 font-mono text-[10.5px] text-label">
          Earns {{ points }} points · ships today if ordered before 2pm ET
        </p>
      </aside>
    </div>
  </div>
</template>
