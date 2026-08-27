<script setup lang="ts">
import { features } from '~/data/catalog'
</script>

<template>
  <section class="mx-auto max-w-[77.5rem] px-4 py-14 sm:px-6 lg:px-8 lg:py-19">
    <h2 class="text-center text-[26px] font-semibold tracking-tight text-ink sm:text-[32px] lg:text-[36px]">
      Everything you need to succeed
    </h2>
    <div class="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="f in features"
        :key="f.n"
        class="rounded-[18px] border border-line p-5.5"
      >
        <span
          class="block size-6.5 rounded-[9px]"
          :style="{ background: f.tint }"
        />
        <p class="mt-3.5 text-[16px] font-semibold tracking-tight">
          {{ f.n }}
        </p>
        <p class="mt-2 text-[13.5px] leading-relaxed text-body">
          {{ f.d }}
        </p>
      </div>
    </div>
  </section>
</template>
