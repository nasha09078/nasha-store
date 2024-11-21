<script lang="ts" setup>
import { ref } from 'vue'
import { ProductsOrderByEnum } from '#woo'
const { siteName, description, shortDescription, siteImage } = useAppConfig()
const {isDataIndexFetched} = useHelpers()
const { storeSettings } = useAppConfig()
const { t } = useI18n()
const { isNative } = storeSettings
const {
  productCategories,
  popularProducts,
  newArrivalProducts,
  fetchData,
  isLoadingCategories,
  isLoadingProducts,
} = useProducts();

// Fetch data on mount if not already loaded
onMounted(async () => {
  await fetchData();
});
// SEO Meta
useSeoMeta({
  title: `Home`,
  ogTitle: t('messages.general.siteName'),
  description: t('messages.general.description'),
  ogDescription: t('messages.general.shortDescription'),
  ogImage: siteImage,
  twitterCard: `summary_large_image`,
})
</script>

<template>
  <main>
    <div class="m-4 mt-2 space-y-3">
      <ProductSearch
        v-if="isNative"
        class="flex w-full"
      />

      <HeroBanner v-if="!isNative" />
      
      <n-carousel
        :class="!isNative ? 'mt-4' : ''"
        class="rounded-md"
        show-arrow
        autoplay
      >
        <!-- Carousel content remains the same -->
      </n-carousel>
    </div>

    <!-- Shop by Category Section -->
    <section :class="isNative ? 'container my-12 mx-2' : 'container my-11'">
      <div class="flex items-end justify-between">
        <h2 class="text-lg font-semibold md:text-2xl">
          {{ $t('messages.shop.shopByCategory') }}
        </h2>
        <NuxtLink
          class="text-primary"
          to="/categories"
        >
          {{ $t('messages.general.viewAll') }}
        </NuxtLink>
      </div>
      
      <div v-if="isLoadingCategories" class="grid justify-center grid-cols-3 gap-4 mt-8 md:grid-cols-3 lg:grid-cols-6">
        <CategoryCardSkeleton v-for="i in 6" :key="i" />
      </div>
      
      <div v-else class="grid justify-center grid-cols-3 gap-4 mt-8 md:grid-cols-3 lg:grid-cols-6">
        <CategoryCard
          v-for="(category, i) in productCategories"
          :key="i"
          class="w-full"
          :node="category"
        />
      </div>
    </section>

    <!-- Popular Products Section   v-if="popularProducts.length" -->
    <section
    
      class="container mt-8"
    >
      <div class="flex items-end justify-between">
        <h2 class="text-lg font-semibold md:text-2xl">
          {{ $t('messages.shop.popularProducts') }}
        </h2>
        <NuxtLink
          class="text-primary"
          to="/products"
        >
          {{ $t('messages.general.viewAll') }}
        </NuxtLink>
      </div>
      
      <div v-if="isLoadingProducts" class="grid gap-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mt-8">
        <ProductCardSkeleton v-for="i in 5" :key="i" />
      </div>
      
      <ProductRow
        v-else
        :products="popularProducts"
        class="grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mt-8"
      />
    </section>

    <!-- New Arrivals Section -->
    <!-- <section
      class="container mt-8"
      v-if="newArrivalProducts.length"
    >
      <div class="flex items-end justify-between">
        <h2 class="text-lg font-semibold md:text-2xl">{{ $t('messages.shop.newArrivals') }}</h2>
        <NuxtLink
          class="text-primary"
          to="/products?category=new-arrivals"
        >{{ $t('messages.general.viewAll') }}</NuxtLink>
      </div>
      <template v-if="loadingProducts">
        <div class="grid gap-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mt-8">
          <ProductCardSkeleton
            v-for="i in 5"
            :key="i"
          />
        </div>
      </template>
      <template v-else>
        <ProductRow
     typecard="bestseller"
          :products="newArrivalProducts"
         class="flex max-h-64  mt-8"
        />
      </template>
    </section> -->




  </main>
</template>


<style scoped>
.brand img {
  max-height: min(8vw, 120px);
  object-fit: contain;
  object-position: center;
}

.carousel-img {
  width: 100%;
  height: 280px;
  object-fit: cover;
}

.custom-arrow {
  display: flex;
  position: absolute;
  bottom: 25px;
  right: 10px;
}

.custom-arrow button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  margin-right: 12px;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  border-width: 0;
  border-radius: 8px;
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-arrow button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.custom-arrow button:active {
  transform: scale(0.95);
  transform-origin: center;
}

.custom-dots {
  display: flex;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 20px;
  left: 20px;
}

.custom-dots li {
  display: inline-block;
  width: 12px;
  height: 4px;
  margin: 0 3px;
  border-radius: 4px;
  background-color: rgba(5, 20, 51, 0.4);
  transition:
    width 0.3s,
    background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-dots li.is-active {
  width: 40px;
  background: #031835;
}


/* Custom scrollbar styles */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #2d3748;
}

::-webkit-scrollbar-thumb {
  background: #4a5568;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #718096;
}
</style>