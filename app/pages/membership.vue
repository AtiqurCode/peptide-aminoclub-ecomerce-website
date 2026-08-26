<script setup lang="ts">
import { tierData } from '~/data/catalog'

useSeoMeta({
  title: 'Membership — Amino Club',
  description: 'Every order earns points and 100 points is $1 off the next one. Membership multiplies the rate and covers shipping.'
})

const infoCards = [
  { eyebrow: 'Earn', bg: '#E9FCE6', eyebrowColor: '#17382A', title: 'On every order', d: '2.5 to 10 points per dollar based on your tier, credited when the order ships.', textColor: '#3E5348' },
  { eyebrow: 'Bonuses', bg: '#FEFECA', eyebrowColor: '#5E5518', title: '+100 signup, +250 phone', d: 'One-time bonuses for finishing your account, so you start with points banked.', textColor: '#57511F' },
  { eyebrow: 'Redeem', bg: '#E9E7FB', eyebrowColor: '#413A6B', title: '100 pts = $1 off', d: 'Apply at checkout in $1 increments. Return an order and the points come back first.', textColor: '#443E70' }
]
</script>

<template>
  <div class="mx-auto max-w-(--ui-container) px-4 py-9 sm:px-6 lg:px-8 lg:pb-24">
    <div class="text-center">
      <SectionEyebrow>Membership</SectionEyebrow>
      <h1 class="mt-2.5 text-[32px] font-semibold tracking-tight text-ink sm:text-[38px] lg:text-[42px]">
        Points are <span class="font-serif font-normal italic">cash back</span>
      </h1>
      <p class="mx-auto mt-2.5 max-w-[560px] text-[15px] leading-relaxed text-body sm:text-[16px]">
        Every order earns points and 100 points is $1 off the next one. Membership multiplies the rate and covers shipping.
      </p>
    </div>

    <div class="mt-8.5 grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <MembershipTierCard
        v-for="(t, i) in tierData"
        :key="t.n"
        :tier="t"
        :index="i"
      />
    </div>

    <div class="mt-8.5 grid grid-cols-1 gap-3.5 sm:grid-cols-3">
      <div
        v-for="c in infoCards"
        :key="c.eyebrow"
        class="rounded-[18px] p-5.5"
        :style="{ background: c.bg }"
      >
        <p
          class="font-mono text-[10px] tracking-[0.2em] uppercase"
          :style="{ color: c.eyebrowColor }"
        >
          {{ c.eyebrow }}
        </p>
        <p class="mt-2.5 text-[17px] font-semibold">
          {{ c.title }}
        </p>
        <p
          class="mt-2 text-[13px] leading-relaxed"
          :style="{ color: c.textColor }"
        >
          {{ c.d }}
        </p>
      </div>
    </div>
  </div>
</template>
