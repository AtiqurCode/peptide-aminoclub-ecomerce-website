<script setup lang="ts">
const { verified, verify } = useVerification()

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Instrument+Serif:ital@0;1&family=IBM+Plex+Mono:wght@400;500&display=swap' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'Amino Club — Research peptides, third-party tested'
const description = 'Research-grade peptides with third-party assays published per batch. Eight tests, one certificate — no batch ships without one.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/logo-amino.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <AgeGate
      v-if="!verified"
      @verified="verify"
    />
    <NuxtLayout v-else>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
