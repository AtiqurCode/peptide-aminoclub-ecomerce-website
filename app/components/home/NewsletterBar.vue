<script setup lang="ts">
const email = ref('')
</script>

<template>
  <section class="mx-auto max-w-[77.5rem] px-4 py-11 sm:px-6 lg:px-8 lg:py-16">
    <div class="flex flex-col items-start gap-6 rounded-[20px] bg-tint-violet p-6 sm:p-7.5 lg:flex-row lg:items-center">
      <div class="flex-1">
        <p class="text-[18px] font-semibold tracking-tight sm:text-[19px]">
          Research updates from Amino Club
        </p>
        <p class="mt-1.5 max-w-[440px] text-[13.5px] leading-relaxed text-[#4B4470]">
          New compounds, new certificates, and restock notices. For researchers only — no marketing noise.
        </p>
      </div>
      <div class="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
        <UInput
          v-model="email"
          type="email"
          placeholder="Enter your email"
          size="xl"
          class="w-full sm:w-[250px]"
        />
        <UButton size="xl">
          Subscribe
        </UButton>
      </div>
    </div>
  </section>
</template>
