<script setup lang="ts">
withDefaults(defineProps<{ tone?: 'default' | 'green' }>(), { tone: 'default' })
</script>

<template>
  <p
    :class="[
      'font-mono text-[10px] tracking-[0.22em] uppercase',
      tone === 'green' ? 'text-ink-green/60' : 'text-label'
    ]"
  >
    <slot />
  </p>
</template>
