<script setup lang="ts">
import { POINTS_BALANCE, POINTS_CREDIT } from '~/composables/useCart'
import { money } from '~/utils/pricing'
</script>

<template>
  <section class="bg-tint-mint">
    <div class="mx-auto grid max-w-[77.5rem] grid-cols-1 items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-17.5">
      <div>
        <p class="font-mono text-[10px] tracking-[0.22em] text-ink-green/55 uppercase">
          Amino Club credit
        </p>
        <h2 class="mt-3.5 font-serif text-[32px] leading-[1.08] text-ink-green sm:text-[38px] lg:text-[44px]">
          Load points once.<br>
          We add up to <span class="text-[#A57B34]">25% on top</span>.
        </h2>
        <p class="mt-3.5 max-w-[430px] text-[15px] leading-relaxed text-[#3E5348] sm:text-[16px]">
          Store credit on your account, applied at checkout in $1 increments. 100 points equals $1 off — the bigger the load, the bigger the bonus.
        </p>
        <UButton
          to="/membership"
          size="xl"
          class="mt-6.5 !bg-ink-green"
        >
          Buy points
        </UButton>
      </div>

      <div class="rounded-3xl border border-ink-green/10 bg-white p-6.5 shadow-[0_16px_46px_rgba(23,56,42,0.1)]">
        <p class="font-mono text-[10px] tracking-[0.2em] text-ink-green/50 uppercase">
          Points balance
        </p>
        <div class="mt-3.5 flex items-end justify-between">
          <p class="font-serif text-[40px] leading-none text-ink-green sm:text-[48px]">
            {{ POINTS_BALANCE.toLocaleString() }}<span class="ml-1.5 text-[18px] text-ink-green/45">pts</span>
          </p>
          <div class="flex size-16 shrink-0 flex-col items-center justify-center rounded-full border-2 border-ink-green text-ink-green">
            <span class="font-serif text-[20px] leading-none">+5%</span>
            <span class="font-mono text-[8px] tracking-[0.18em] uppercase">bonus</span>
          </div>
        </div>
        <div class="mt-4.5 flex justify-between border-t border-dashed border-[#D8DFDC] pt-3.5 font-mono text-[11px] text-[#3E4744]">
          <span>= {{ money(POINTS_CREDIT) }} store credit</span>
          <span>Never expires</span>
        </div>
      </div>
    </div>
  </section>
</template>
