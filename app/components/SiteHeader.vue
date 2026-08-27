<script setup lang="ts">
import { navItems } from '~/data/catalog'

const route = useRoute()
const { count, open } = useCart()

const isActive = (to: string) => route.path === to || route.path.startsWith(`${to}/`)

const menuItems = computed(() => [navItems.map(item => ({
  label: item.label,
  to: item.to
}))])
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-hairline bg-white">
    <nav class="mx-auto flex h-[70px] max-w-[77.5rem] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
      <NuxtLink
        to="/"
        class="flex shrink-0 items-center"
      >
        <AppLogo class="h-7 sm:h-8" />
      </NuxtLink>

      <div class="hidden items-center gap-1 lg:flex">
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="flex items-center rounded-full px-3.5 py-2 text-[13px] font-medium whitespace-nowrap transition-colors"
          :class="isActive(item.to) ? 'bg-surface-2 text-ink' : 'text-ink/70 hover:text-ink'"
        >
          {{ item.label }}
          <span
            v-if="item.isNew"
            class="ml-1.5 rounded-full bg-green-200 px-1.5 py-0.5 text-[9px] font-bold tracking-wide text-ink uppercase"
          >New</span>
        </NuxtLink>
      </div>

      <div class="flex shrink-0 items-center gap-2">
        <UDropdownMenu
          :items="menuItems"
          :content="{ align: 'end' }"
          class="lg:hidden"
        >
          <UButton
            icon="i-lucide-menu"
            color="neutral"
            variant="ghost"
            aria-label="Menu"
          />
        </UDropdownMenu>

        <UButton
          to="/account"
          icon="i-lucide-circle-user-round"
          color="neutral"
          variant="ghost"
          aria-label="Account"
          class="hidden sm:inline-flex"
        />

        <UChip
          :text="count"
          :show="count > 0"
          color="neutral"
          size="3xl"
          inset
          :ui="{ base: 'h-[18px] min-w-[18px] px-1 text-[11px] font-bold leading-none' }"
        >
          <UButton
            icon="i-lucide-shopping-bag"
            color="neutral"
            variant="ghost"
            aria-label="Cart"
            @click="open = true"
          />
        </UChip>
      </div>
    </nav>

    <PromoBar />
  </header>
</template>
