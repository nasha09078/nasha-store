<script setup lang="ts">
const { siteName } = useAppConfig();
const runtimeConfig = useRuntimeConfig();
const img = useImage();
// const logoUrl = runtimeConfig?.public?.LOGO ? img(runtimeConfig?.public?.LOGO) : null;
// const faviconUrl = '/icon-only.png';
const { storeSettings } = useAppConfig();

const isNative = storeSettings.isNative;
</script>

<template>
  <NuxtLink v-if="!isNative" to="/" class="cursor-pointer">
    <!-- <img v-if="logoUrl" :src="logoUrl" alt="Logo" class="object-contain rounded h-10" /> -->
    <div  class="flex items-center gap-2 text-lg font-bold">
      <!-- <img class="rounded-full" :src="faviconUrl" alt="Logo" width="38" height="42" /> -->
      <span class="gtext md:text-xl">{{ siteName }}</span>
    </div>
  </NuxtLink>
  <div v-else class="cursor-pointer">
    <div  class="flex items-center gap-2 text-lg font-bold">
      <span class="gtext md:text-xl">{{ siteName }}</span>
    </div>
  </div>
</template>
