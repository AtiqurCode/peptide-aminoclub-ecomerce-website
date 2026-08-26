<script setup lang="ts">
const emit = defineEmits<{ verified: [] }>()

const age = ref(false)
const researcher = ref(false)
const canEnter = computed(() => age.value && researcher.value)

function enter() {
  if (canEnter.value) emit('verified')
}
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center gap-7 bg-gradient-to-b from-[#F7F9F8] via-[#EEF3F6] to-[#F7F9F8] px-6 py-14">
    <img
      src="/logo-amino.png"
      alt="Amino Club"
      class="h-9 w-auto sm:h-11"
    >

    <div class="w-full max-w-[620px] rounded-3xl border border-line bg-white p-6 shadow-[0_24px_60px_rgba(14,22,33,0.09)] sm:p-10">
      <SectionEyebrow tone="green">
        Restricted catalog
      </SectionEyebrow>
      <h1 class="mt-3 text-[28px] leading-[1.1] font-semibold tracking-tight text-ink sm:text-[34px]">
        Researcher verification
      </h1>
      <p class="mt-3 max-w-[470px] text-[15px] leading-relaxed text-body">
        Amino Club supplies research peptides exclusively to qualified researchers and laboratories for in vitro use. Confirm both statements to continue.
      </p>

      <div class="mt-6 flex flex-col gap-3">
        <button
          type="button"
          class="flex items-start gap-3 rounded-2xl border p-4 text-left transition-colors"
          :class="age ? 'border-[#CFE9C9] bg-green-50' : 'border-line bg-white'"
          @click="age = !age"
        >
          <span
            class="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md text-[11px]"
            :class="age ? 'bg-ink-green text-white' : 'border border-[#D6DAD8] text-transparent'"
          >
            <UIcon
              name="i-lucide-check"
              class="size-3"
            />
          </span>
          <span class="text-[14.5px] leading-relaxed text-ink">
            I am at least <strong class="font-semibold">21 years of age</strong>.
          </span>
        </button>

        <button
          type="button"
          class="flex items-start gap-3 rounded-2xl border p-4 text-left transition-colors"
          :class="researcher ? 'border-[#CFE9C9] bg-green-50' : 'border-line bg-white'"
          @click="researcher = !researcher"
        >
          <span
            class="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md text-[11px]"
            :class="researcher ? 'bg-ink-green text-white' : 'border border-[#D6DAD8] text-transparent'"
          >
            <UIcon
              name="i-lucide-check"
              class="size-3"
            />
          </span>
          <span class="text-[14.5px] leading-relaxed text-ink">
            I am a <strong class="font-semibold">qualified researcher</strong> purchasing for <strong class="font-semibold">in vitro / laboratory research only</strong> — not for human or veterinary use.
          </span>
        </button>
      </div>

      <button
        type="button"
        class="mt-6 flex h-[54px] w-full items-center justify-center rounded-full text-[15px] font-semibold transition-colors"
        :class="canEnter ? 'bg-ink-green text-white' : 'cursor-not-allowed bg-surface-2 text-label'"
        @click="enter"
      >
        Enter Amino Club
        <UIcon
          name="i-lucide-arrow-right"
          class="ml-2 size-4"
        />
      </button>

      <p class="mt-4 text-[12px] leading-relaxed text-label">
        By proceeding you affirm the statements above are true. Products are not for human or veterinary use, not for diagnostic procedures, and have not been evaluated by the U.S. Food and Drug Administration.
      </p>
    </div>

    <p class="text-[13px] text-body">
      Not a researcher? <span class="font-semibold text-ink">Exit</span>
    </p>
  </div>
</template>
