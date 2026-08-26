<script setup lang="ts">
import type { MembershipTier } from '~/data/catalog'

const props = defineProps<{ tier: MembershipTier, index: number }>()

const isDark = computed(() => props.index === 3)
const isHighlighted = computed(() => props.index === 2)
</script>

<template>
  <div
    class="relative rounded-[22px] p-6"
    :class="isDark ? 'bg-ink text-white' : isHighlighted ? 'border-[1.5px] border-ink bg-white' : 'border border-line bg-white'"
  >
    <span
      v-if="tier.flag"
      class="absolute -top-2.5 left-6 rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wide uppercase"
      :class="isHighlighted ? 'bg-green-200 text-ink-green' : 'bg-ink text-white'"
    >{{ tier.flag }}</span>

    <p class="text-[19px] font-semibold tracking-tight">
      {{ tier.n }}
    </p>
    <p
      class="mt-1.5 text-[12.5px] leading-relaxed"
      :class="isDark ? 'text-white/70' : 'text-body'"
    >
      {{ tier.d }}
    </p>
    <p class="mt-4 text-[30px] font-semibold tracking-tight">
      {{ tier.price }}<span class="text-[14px] font-normal opacity-60">{{ tier.per }}</span>
    </p>

    <div
      class="mt-4 flex flex-col gap-2.5 border-t pt-4"
      :class="isDark ? 'border-white/22' : 'border-[rgba(127,137,131,0.22)]'"
    >
      <div
        v-for="perk in tier.perks"
        :key="perk.t"
        class="flex items-center gap-2.5"
        :class="!perk.on && 'opacity-38 line-through'"
      >
        <span
          class="flex size-4.25 shrink-0 items-center justify-center rounded-full"
          :class="isDark ? 'bg-white/16 text-green-200' : 'bg-ink text-white'"
        >
          <UIcon
            name="i-lucide-check"
            class="size-2.5"
          />
        </span>
        <span class="text-[12.5px]">{{ perk.t }}</span>
      </div>
    </div>

    <UButton
      block
      size="lg"
      class="mt-5"
      :class="[
        index === 0 && '!bg-surface-2 !text-label',
        index === 3 && '!bg-white !text-ink'
      ]"
      @click="navigateTo('/cart')"
    >
      {{ tier.cta }}
    </UButton>
  </div>
</template>
