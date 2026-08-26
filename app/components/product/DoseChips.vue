<script setup lang="ts">
import type { Dose } from '~/utils/pricing'

const props = defineProps<{ doses: Dose[], modelValue: number }>()
const emit = defineEmits<{ 'update:modelValue': [number] }>()

function pick(i: number, event: Event) {
  event.stopPropagation()
  event.preventDefault()
  emit('update:modelValue', i)
}
</script>

<template>
  <div class="flex gap-1.5">
    <button
      v-for="(d, i) in props.doses"
      :key="d.mg"
      type="button"
      class="rounded-lg px-2.5 py-1 text-[11px] font-medium transition-colors"
      :class="i === modelValue ? 'border border-ink bg-ink text-white' : 'border border-line-2 bg-white text-body'"
      @click="pick(i, $event)"
    >
      {{ d.mg }}mg
    </button>
  </div>
</template>
