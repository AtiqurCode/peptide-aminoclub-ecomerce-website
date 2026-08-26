<script setup lang="ts">
const target = new Date('2026-09-02T03:19:00')
const countdown = ref('7d 03h 19m')

let timer: ReturnType<typeof setInterval> | undefined

function tick() {
  const diff = Math.max(0, target.getTime() - Date.now())
  const d = Math.floor(diff / 86400000)
  const h = Math.floor((diff % 86400000) / 3600000)
  const m = Math.floor((diff % 3600000) / 60000)
  countdown.value = `${d}d ${String(h).padStart(2, '0')}h ${String(m).padStart(2, '0')}m`
}

onMounted(() => {
  tick()
  timer = setInterval(tick, 30000)
})
onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <div class="relative overflow-hidden border-b border-[#6A3A1E] bg-[linear-gradient(90deg,#2A0F12_0%,#4A1518_50%,#2A0F12_100%)]">
    <div class="mx-auto flex max-w-(--ui-container) flex-wrap items-center justify-center gap-2.5 px-4 py-2.5 sm:gap-4 sm:px-6 lg:px-8">
      <span class="font-serif text-[12px] tracking-[0.3em] text-[#F3E2C2] uppercase sm:text-[13px]">
        End of Summer Sale
      </span>
      <span class="hidden h-3.5 w-px bg-[rgba(232,200,126,0.35)] sm:block" />
      <span class="font-serif text-[16px] text-[#EDC275] italic sm:text-[19px]">
        35% Off Sitewide
      </span>
      <span class="hidden font-mono text-[9px] tracking-[0.3em] text-[rgba(232,200,126,0.75)] uppercase sm:inline">
        Code
      </span>
      <span class="relative hidden overflow-hidden rounded-full bg-[linear-gradient(180deg,#F7E3B2,#C08A3E)] px-4 py-1 text-[12px] font-bold tracking-[0.14em] text-[#3A1B10] sm:inline-block">
        HEAT35
        <span class="animate-shim absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.5),transparent)]" />
      </span>
      <span class="hidden font-mono text-[9px] tracking-[0.3em] text-[rgba(232,200,126,0.75)] uppercase lg:inline">
        Ends in
      </span>
      <ClientOnly>
        <span class="hidden rounded-lg border border-[rgba(232,200,126,0.4)] px-2.5 py-1 font-mono text-[11px] text-[#F3E2C2] lg:inline">
          {{ countdown }}
        </span>
        <template #fallback>
          <span class="hidden rounded-lg border border-[rgba(232,200,126,0.4)] px-2.5 py-1 font-mono text-[11px] text-[#F3E2C2] lg:inline">
            7d 03h 19m
          </span>
        </template>
      </ClientOnly>
    </div>
  </div>
</template>
