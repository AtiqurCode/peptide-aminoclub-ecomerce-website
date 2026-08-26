<script setup lang="ts">
import { money } from '~/utils/pricing'

const { open, enrichedLines, subtotal, count, inc, dec, remove } = useCart()

function goCart() {
  open.value = false
  navigateTo('/cart')
}
</script>

<template>
  <USlideover
    v-model:open="open"
    :ui="{ content: 'w-full sm:max-w-[400px]' }"
  >
    <template #content>
      <div class="flex h-full flex-col">
        <div class="flex items-center justify-between border-b border-line-soft px-5 py-4">
          <p class="text-[16px] font-semibold">
            Cart · {{ count }}
          </p>
          <UButton
            icon="i-lucide-x"
            color="neutral"
            variant="ghost"
            size="sm"
            @click="open = false"
          />
        </div>

        <div class="flex-1 overflow-auto px-5 py-3.5">
          <p
            v-if="enrichedLines.length === 0"
            class="mt-6 text-[14px] text-label"
          >
            Nothing here yet.
          </p>
          <div
            v-else
            class="flex flex-col gap-2.5"
          >
            <div
              v-for="line in enrichedLines"
              :key="line.key"
              class="flex items-start gap-3 rounded-2xl bg-surface p-2.5"
            >
              <span
                class="flex size-[46px] shrink-0 items-center justify-center rounded-[11px] font-serif text-lg text-ink/70 italic"
                :style="{ background: `linear-gradient(155deg, ${line.product.tint}, #fff)` }"
              >{{ line.product.abbr.slice(0, 2) }}</span>
              <div class="min-w-0 flex-1">
                <div class="flex items-start justify-between gap-2">
                  <div class="min-w-0">
                    <p class="truncate text-[13.5px] font-semibold">
                      {{ line.product.name }}
                    </p>
                    <p class="mt-0.5 font-mono text-[10px] text-label">
                      {{ line.meta }}
                    </p>
                  </div>
                  <UButton
                    icon="i-lucide-trash-2"
                    color="neutral"
                    variant="ghost"
                    size="xs"
                    :aria-label="`Remove ${line.product.name}`"
                    class="shrink-0"
                    @click="remove(line.key)"
                  />
                </div>
                <div class="mt-2 flex items-center justify-between gap-2">
                  <div class="flex h-8 items-center gap-0.5 rounded-full border border-line px-1">
                    <button
                      type="button"
                      class="flex size-6 items-center justify-center rounded-full text-body transition-colors hover:bg-white"
                      :aria-label="`Decrease ${line.product.name} quantity`"
                      @click="line.qty <= 1 ? remove(line.key) : dec(line.key)"
                    >
                      <UIcon
                        name="i-lucide-minus"
                        class="size-3"
                      />
                    </button>
                    <span class="min-w-5 text-center text-[12.5px] font-semibold">{{ line.qty }}</span>
                    <button
                      type="button"
                      class="flex size-6 items-center justify-center rounded-full text-body transition-colors hover:bg-white"
                      :aria-label="`Increase ${line.product.name} quantity`"
                      @click="inc(line.key)"
                    >
                      <UIcon
                        name="i-lucide-plus"
                        class="size-3"
                      />
                    </button>
                  </div>
                  <p class="text-[14px] font-semibold">
                    {{ line.lineTotal }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="border-t border-line-soft px-5 py-4.5">
          <div class="flex items-baseline justify-between">
            <span class="text-[13.5px] text-body">Subtotal</span>
            <span class="text-[22px] font-semibold tracking-tight">{{ money(subtotal) }}</span>
          </div>
          <UButton
            block
            size="xl"
            class="mt-3.5 rounded-full"
            :disabled="enrichedLines.length === 0"
            @click="goCart"
          >
            View cart & checkout
          </UButton>
        </div>
      </div>
    </template>
  </USlideover>
</template>
