<script setup lang="ts">
useSeoMeta({
  title: 'Contact — Amino Club',
  description: 'Research support handles orders, documentation requests, bulk quotes, and anything about your account.'
})
</script>

<template>
  <div>
    <section class="bg-[linear-gradient(160deg,#E9EFFB,#DDEBFA)] px-4 py-14 text-center sm:px-6 lg:px-8 lg:py-17.5">
      <span class="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[11.5px] font-semibold">
        <span class="size-1.5 rounded-full bg-green-500" />
        Typically responds within 24 hours
      </span>
      <h1 class="mt-4 text-[30px] font-semibold tracking-tight text-ink sm:text-[38px] lg:text-[46px]">
        How can we help?
      </h1>
      <p class="mx-auto mt-3 max-w-[520px] text-[15px] leading-relaxed text-[#3E5670] sm:text-[16px]">
        Research support handles orders, documentation requests, bulk quotes, and anything about your account.
      </p>
      <UButton
        size="xl"
        icon="i-lucide-mail"
        class="mt-5.5"
      >
        Email us
      </UButton>
    </section>

    <section class="mx-auto max-w-[1000px] px-4 py-11 sm:px-6 lg:px-8 lg:py-20">
      <div class="flex items-center gap-3.5 rounded-2xl border border-[#E7EEF5] bg-[#F6F9FC] p-4.5">
        <span class="flex size-9.5 shrink-0 items-center justify-center rounded-full bg-white">
          <UIcon
            name="i-lucide-search"
            class="size-4"
          />
        </span>
        <div class="flex-1">
          <p class="text-[14px] font-semibold">
            Looking for your order?
          </p>
          <p class="mt-0.5 text-[13px] text-body">
            Track status, shipping updates, and tracking number — no account needed.
          </p>
        </div>
        <UIcon
          name="i-lucide-chevron-right"
          class="size-4.5 text-label"
        />
      </div>

      <h2 class="mt-9 text-center text-[24px] font-semibold tracking-tight sm:text-[28px]">
        Support FAQ
      </h2>
      <div class="mt-5.5">
        <FaqAccordion />
      </div>
    </section>
  </div>
</template>
