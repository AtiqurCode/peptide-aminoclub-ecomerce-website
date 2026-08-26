<script setup lang="ts">
import { findProduct, guarantees } from '~/data/catalog'
import { hideOnError } from '~/utils/image'

const heroC = findProduct('tesa')
</script>

<template>
  <section class="grid grid-cols-1 lg:min-h-[430px] lg:grid-cols-2">
    <div class="relative h-64 overflow-hidden bg-[linear-gradient(160deg,#EFE9FB_0%,#FBEEF2_100%)] sm:h-80 lg:h-auto">
      <img
        :src="heroC.img"
        :alt="heroC.name"
        class="absolute top-1/2 left-1/2 h-[62%] w-[54%] -translate-x-1/2 -translate-y-1/2 -rotate-6 object-contain drop-shadow-[0_30px_54px_rgba(14,22,33,0.2)] sm:h-[74%] sm:w-[62%]"
        @error="hideOnError"
      >
      <span class="absolute bottom-5 left-6 font-mono text-[10px] tracking-[0.2em] text-ink/42 uppercase">
        Lot 240038 · released Aug 18, 2026
      </span>
    </div>
    <div class="flex items-center px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div class="max-w-[500px]">
        <SectionEyebrow>Our commitment</SectionEyebrow>
        <h2 class="mt-3.5 text-[30px] leading-[1.1] font-semibold tracking-tight text-ink sm:text-[38px]">
          The Amino Club <span class="font-serif font-normal italic">guarantee</span>
        </h2>
        <p class="mt-3 text-[15.5px] leading-relaxed text-body">
          Documented quality for research and laboratory use. Every batch meets an internal write-up standard before it is allowed to ship.
        </p>
        <div class="mt-6 flex flex-col gap-2.5">
          <div
            v-for="g in guarantees"
            :key="g.n"
            class="flex items-center gap-3.5 rounded-2xl border border-hairline bg-white p-4"
          >
            <span
              class="size-[30px] shrink-0 rounded-[9px]"
              :style="{ background: g.tint }"
            />
            <span class="flex-1">
              <span class="block text-[14.5px] font-semibold">{{ g.n }}</span>
              <span class="mt-0.5 block text-[12.5px] text-label">{{ g.d }}</span>
            </span>
            <UIcon
              name="i-lucide-chevron-right"
              class="size-4 text-line"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
