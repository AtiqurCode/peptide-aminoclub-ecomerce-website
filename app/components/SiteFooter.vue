<script setup lang="ts">
import { footerColumns, paymentIcons, socialLinks } from '~/data/catalog'
</script>

<template>
  <footer class="bg-footer text-white">
    <div class="mx-auto grid max-w-(--ui-container) grid-cols-2 gap-8 px-4 py-12 sm:grid-cols-3 sm:px-6 lg:grid-cols-5 lg:px-8">
      <div class="col-span-2 sm:col-span-3 lg:col-span-1">
        <AppLogo
          inverted
          class="h-6"
        />
        <p class="mt-4 max-w-[250px] text-[13px] leading-relaxed text-white/62">
          Research-grade peptides for controlled laboratory studies. Third-party tested with a Certificate of Analysis on every batch.
        </p>
        <div class="mt-5 flex items-center gap-2.5">
          <button
            v-for="s in socialLinks"
            :key="s.label"
            type="button"
            :aria-label="s.label"
            class="flex size-8 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-white/16 hover:text-white"
          >
            <UIcon
              :name="s.icon"
              class="size-3.5"
            />
          </button>
        </div>
      </div>

      <div
        v-for="col in footerColumns"
        :key="col.h"
      >
        <p class="mb-3.5 text-[11px] font-semibold tracking-[0.16em] text-white/50 uppercase">
          {{ col.h }}
        </p>
        <div class="flex flex-col gap-2.5">
          <NuxtLink
            v-for="link in col.links"
            :key="link.t"
            :to="link.to"
            class="text-[13px] text-white/72 hover:text-white"
          >
            {{ link.t }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="mx-auto max-w-(--ui-container) px-4 pb-7 sm:px-6 lg:px-8">
      <div class="rounded-lg border-l-4 border-amber-400 bg-amber-400/8 px-4.5 py-4">
        <p class="flex items-center gap-1.5 text-[11px] font-bold tracking-[0.14em] text-amber-400 uppercase">
          <UIcon
            name="i-lucide-triangle-alert"
            class="size-3.5"
          />
          FDA disclaimer
        </p>
        <p class="mt-2 text-[11.5px] leading-relaxed text-white/66">
          Statements made regarding these products have not been evaluated by the U.S. Food and Drug Administration. These products are not intended to diagnose, treat, cure, or prevent any disease. All products are sold strictly for laboratory research use by qualified professionals and are not for human, veterinary, or food use in any form.
          <NuxtLink
            to="/contact"
            class="font-semibold text-amber-400 underline"
          >Read the full disclaimer →</NuxtLink>
        </p>
      </div>

      <div class="mt-5 flex items-center justify-center gap-3 border-t border-white/10 pt-4.5">
        <span class="text-[11px] text-white/40">We accept</span>
        <UIcon
          v-for="icon in paymentIcons"
          :key="icon"
          :name="icon"
          class="size-5 text-white/50"
        />
      </div>

      <div class="mt-4 flex flex-col items-center justify-between gap-2 text-[12px] text-white/50 sm:flex-row">
        <span>© {{ new Date().getFullYear() }} Amino Club. All rights reserved.</span>
        <span class="flex flex-wrap gap-4">
          <span>SSL secured</span>
          <span>99%+ purity</span>
          <span>Shipment protection</span>
        </span>
      </div>
    </div>
  </footer>
</template>
