<script setup lang="ts">
withDefaults(defineProps<{ eyebrow: string, tint?: string }>(), { tint: '' })
</script>

<template>
  <div
    class="rounded-[20px] p-5.5"
    :class="tint ? '' : 'border border-line'"
    :style="tint ? { background: tint } : {}"
  >
    <p
      class="font-mono text-[10px] tracking-[0.2em] uppercase"
      :class="tint ? 'text-ink-green' : 'text-label'"
    >
      {{ eyebrow }}
    </p>
    <slot />
  </div>
</template>
