<script setup lang="ts">
withDefaults(defineProps<{ inverted?: boolean }>(), { inverted: false })
</script>

<template>
  <img
    src="/logo-amino.png"
    alt="Amino Club"
    width="282"
    height="96"
    :class="['h-8 w-auto shrink-0', inverted && 'brightness-0 invert']"
  >
</template>
