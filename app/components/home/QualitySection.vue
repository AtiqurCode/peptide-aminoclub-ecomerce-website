<script setup lang="ts">
import { assayData, coaMini } from '~/data/catalog'

const activeIndex = ref(0)
const tabItems = assayData.map(a => ({ label: a.n }))

const active = computed(() => assayData[activeIndex.value]!)
const activeResult = computed(() => {
  if (activeIndex.value === 0) return 'Result: 99.82% — passes the 99% release standard'
  if (activeIndex.value === 4) return 'Result: not detected'
  return 'Result: pass — within specification'
})
</script>

<template>
  <section class="mx-auto max-w-(--ui-container) px-4 py-14 sm:px-6 lg:px-8 lg:py-19">
    <div class="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
      <div>
        <h2 class="text-[28px] leading-[1.1] font-semibold tracking-tight text-ink sm:text-[34px] lg:text-[40px]">
          Quality you can <span class="font-serif font-normal italic">verify</span>, not just trust
        </h2>
        <p class="mt-3 max-w-[520px] text-[15px] leading-relaxed text-body sm:text-[16px]">
          Every batch runs the same eight-assay panel at an accredited lab. Here is what each test proves, published on the certificate.
        </p>
      </div>
      <UButton
        to="/coa"
        color="neutral"
        variant="outline"
        size="lg"
        trailing-icon="i-lucide-arrow-right"
        class="shrink-0"
      >
        Certificate library
      </UButton>
    </div>

    <div class="mt-7 grid grid-cols-1 items-start gap-7 lg:grid-cols-[1.3fr_1fr]">
      <div>
        <div class="flex gap-6 border-b border-hairline pb-5 sm:gap-10">
          <div>
            <p class="text-[26px] font-semibold tracking-tight sm:text-[30px]">
              99%+
            </p>
            <p class="mt-0.5 font-mono text-[10px] tracking-[0.14em] text-label uppercase">
              Purity floor
            </p>
          </div>
          <div>
            <p class="text-[26px] font-semibold tracking-tight sm:text-[30px]">
              8
            </p>
            <p class="mt-0.5 font-mono text-[10px] tracking-[0.14em] text-label uppercase">
              Assays / batch
            </p>
          </div>
          <div>
            <p class="text-[26px] font-semibold tracking-tight sm:text-[30px]">
              100%
            </p>
            <p class="mt-0.5 font-mono text-[10px] tracking-[0.14em] text-label uppercase">
              Batches published
            </p>
          </div>
        </div>

        <div class="mt-5 flex flex-wrap gap-1.5">
          <button
            v-for="(t, i) in tabItems"
            :key="t.label"
            type="button"
            class="rounded-full px-3.5 py-2 text-[12.5px] font-medium transition-colors"
            :class="activeIndex === i ? 'bg-ink text-white' : 'border border-line-2 text-[#3B4741] hover:border-ink/40'"
            @click="activeIndex = i"
          >
            {{ t.label }}
          </button>
        </div>

        <div class="mt-4.5 rounded-[20px] border border-line p-6">
          <p class="font-mono text-[9.5px] tracking-[0.18em] text-ink-green uppercase">
            {{ active.method }}
          </p>
          <p class="mt-2.5 text-[20px] font-semibold tracking-tight">
            {{ active.n }}
          </p>
          <p class="mt-2.5 max-w-[470px] text-[14px] leading-relaxed text-body">
            {{ active.d }}
          </p>
          <div class="mt-4.5 flex items-center gap-3 rounded-[13px] bg-[#F3F9F1] px-4 py-3.5">
            <span class="flex size-5 items-center justify-center rounded-full bg-green-500 text-white">
              <UIcon
                name="i-lucide-check"
                class="size-3"
              />
            </span>
            <span class="flex-1 text-[13px] text-green-600">{{ activeResult }}</span>
            <span class="font-mono text-[10.5px] text-[#7E9A85]">Lot 240038</span>
          </div>
        </div>
      </div>

      <div class="rounded-[22px] border border-[#E4EAE7] bg-[linear-gradient(165deg,#E9EFFB,#F1FBEE)] p-5.5">
        <div class="flex items-center justify-between">
          <p class="text-[13.5px] font-semibold">
            Certificate of Analysis
          </p>
          <span class="inline-flex items-center gap-1.5 font-mono text-[9.5px] text-green-600">
            <span class="size-1.5 rounded-full bg-green-500" />
            ISO 17025
          </span>
        </div>
        <div class="mt-3.5 rounded-2xl bg-white p-4.5">
          <p class="font-mono text-[10px] tracking-[0.16em] text-label uppercase">
            GLP-3 (RT) · Lot 240038
          </p>
          <p class="mt-2.5 font-serif text-[40px] leading-none text-ink-green">
            99.82%
          </p>
          <div class="mt-3.5 flex flex-col gap-1.5">
            <div
              v-for="c in coaMini"
              :key="c.n"
              class="flex justify-between font-mono text-[10.5px]"
            >
              <span class="text-label">{{ c.n }}</span>
              <span class="text-green-600">{{ c.v }}</span>
            </div>
          </div>
        </div>
        <UButton
          to="/coa"
          block
          class="mt-3.5"
          trailing-icon="i-lucide-arrow-right"
        >
          See the proof
        </UButton>
      </div>
    </div>
  </section>
</template>
