<script setup lang="ts">
import { POINTS_BALANCE, POINTS_CREDIT } from '~/composables/useCart'
import { money, POINTS_PER_DOLLAR } from '~/utils/pricing'

useSeoMeta({ title: 'Lab account — Amino Club' })
</script>

<template>
  <div class="mx-auto max-w-[77.5rem] px-4 py-9 sm:px-6 lg:px-8 lg:pb-24">
    <h1 class="text-[28px] font-semibold tracking-tight text-ink sm:text-[36px]">
      Lab account
    </h1>
    <p class="mt-2 text-[14.5px] text-body">
      Verified researcher · Insider member since Mar 2026
    </p>

    <div class="mt-6.5 grid grid-cols-1 gap-3.5 sm:grid-cols-3">
      <StatCard
        eyebrow="Points"
        tint="#E9FCE6"
      >
        <p class="mt-2.5 font-serif text-[38px] leading-none text-ink-green">
          {{ POINTS_BALANCE.toLocaleString() }}
        </p>
        <p class="mt-1.5 text-[12.5px] text-[#3E5348]">
          = {{ money(POINTS_CREDIT) }} credit · {{ POINTS_PER_DOLLAR }}× earn rate
        </p>
      </StatCard>

      <StatCard eyebrow="Next box">
        <p class="mt-2.5 text-[22px] font-semibold tracking-tight">
          Sep 12, 2026
        </p>
        <p class="mt-1.5 text-[12.5px] text-body">
          4 compounds + Amino H₂O · $137.98
        </p>
        <div class="mt-3 flex gap-2">
          <UButton
            to="/box"
            size="sm"
            color="neutral"
            variant="outline"
          >
            Edit box
          </UButton>
          <UButton
            size="sm"
            color="neutral"
            variant="outline"
          >
            Skip month
          </UButton>
        </div>
      </StatCard>

      <StatCard eyebrow="Documentation">
        <p class="mt-2.5 text-[22px] font-semibold tracking-tight">
          18 certificates
        </p>
        <p class="mt-1.5 text-[12.5px] text-body">
          Every lot you have received, archived
        </p>
        <UButton
          to="/coa"
          size="sm"
          color="neutral"
          variant="outline"
          class="mt-3"
        >
          Open library
        </UButton>
      </StatCard>
    </div>

    <div class="mt-6.5">
      <OrderHistoryTable />
    </div>
  </div>
</template>
