<script setup lang="ts">
import { findProduct } from '~/data/catalog'
import { hideOnError } from '~/utils/image'

const heroA = findProduct('glp1')
const heroB = findProduct('glp2')
</script>

<template>
  <section class="grid grid-cols-1 lg:min-h-[520px] lg:grid-cols-2">
    <div class="flex flex-col justify-center px-4 py-14 sm:px-6 lg:px-8 lg:py-20 xl:pl-16">
      <div class="mx-auto w-full max-w-[560px] lg:mx-0">
        <span class="inline-flex items-center gap-2 rounded-full bg-tint-mint px-3 py-1.5 text-[11.5px] font-semibold text-ink-green">
          <span class="size-1.5 rounded-full bg-green-500" />
          103 published certificates · 50 compounds
        </span>
        <h1 class="mt-5 text-[38px] leading-[1.05] font-semibold tracking-tight text-ink sm:text-[46px] lg:text-[58px] lg:leading-[1.02] lg:tracking-[-0.035em]">
          The lab report behind <span class="font-serif font-normal italic">every vial</span>
        </h1>
        <p class="mt-5 max-w-[430px] text-[15.5px] leading-relaxed text-body lg:text-[16.5px]">
          Research-grade peptides with third-party assays published per batch. Eight tests, one certificate, no batch ships without one.
        </p>
        <div class="mt-7 flex flex-wrap gap-3">
          <UButton
            to="/store"
            size="xl"
            trailing-icon="i-lucide-arrow-right"
          >
            Shop the catalog
          </UButton>
          <UButton
            to="/coa"
            size="xl"
            color="neutral"
            variant="outline"
          >
            Verify a lot
          </UButton>
        </div>
        <div class="mt-8 flex gap-7">
          <div>
            <p class="text-[22px] font-semibold tracking-tight">
              99%+
            </p>
            <p class="mt-0.5 font-mono text-[10px] tracking-[0.14em] text-label uppercase">
              Purity floor
            </p>
          </div>
          <div>
            <p class="text-[22px] font-semibold tracking-tight">
              8
            </p>
            <p class="mt-0.5 font-mono text-[10px] tracking-[0.14em] text-label uppercase">
              Assays / batch
            </p>
          </div>
          <div>
            <p class="text-[22px] font-semibold tracking-tight">
              ISO 17025
            </p>
            <p class="mt-0.5 font-mono text-[10px] tracking-[0.14em] text-label uppercase">
              Accredited lab
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="relative h-72 overflow-hidden bg-[linear-gradient(150deg,#E9EFFB_0%,#FCE7EC_55%,#E9FCE6_100%)] sm:h-96 lg:h-auto">
      <img
        :src="heroA.img"
        :alt="heroA.name"
        class="animate-floaty absolute top-[8%] left-[6%] h-[60%] w-[46%] object-contain drop-shadow-[0_30px_50px_rgba(14,22,33,0.2)] sm:top-[10%] sm:left-[4%] sm:h-[66%] sm:w-[52%]"
        style="animation-duration: 8s"
        @error="hideOnError"
      >
      <img
        :src="heroB.img"
        :alt="heroB.name"
        class="animate-floaty absolute top-[32%] right-[5%] h-[46%] w-[36%] object-contain drop-shadow-[0_24px_44px_rgba(14,22,33,0.16)] sm:top-[34%] sm:right-[3%] sm:h-[52%] sm:w-[40%]"
        style="animation-duration: 10s"
        @error="hideOnError"
      >
      <div class="absolute bottom-[9%] left-1/2 flex -translate-x-1/2 items-center gap-2.5 rounded-full bg-white px-4 py-2.5 whitespace-nowrap shadow-[0_12px_30px_rgba(14,22,33,0.12)]">
        <span class="size-2 rounded-full bg-green-500" />
        <span class="text-[12.5px] font-semibold">99.82% purity</span>
        <span class="font-mono text-[10px] text-label">HPLC · Aug 20, 2026</span>
      </div>
    </div>
  </section>
</template>
