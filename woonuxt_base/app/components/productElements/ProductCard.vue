<script setup lang="ts">
import type { PropType } from 'vue';
import { StockStatusEnum, ProductTypesEnum, type AddToCartInput } from '#woo';

const route = useRoute();
const { storeSettings } = useAppConfig();
const props = defineProps({
  node: { type: Object as PropType<Product>, required: true },
  index: { type: Number, default: 1 },
  typecard: { type: String, default: 'default' }, // 'default', 'featured', or 'bestseller'
});

const imgWidth = computed(() => props.typecard === 'bestseller' ? 80 : 220);
const imgHeight = computed(() => Math.round(imgWidth.value * (props.typecard === 'bestseller' ? 1 : 1.125)));

// Filter logic
const filterQuery = ref(route.query?.filter as string);
const paColor = ref(filterQuery.value?.split('pa_color[')[1]?.split(']')[0]?.split(',') || []);

watch(
  () => route.query,
  () => {
    filterQuery.value = route.query.filter;
    paColor.value = filterQuery.value?.split('pa_color[')[1]?.split(']')[0]?.split(',') || [];
  },
);

// Image computation
const mainImage = computed<string>(() => 
  props.node?.image?.producCardSourceUrl || 
  props.node?.image?.sourceUrl || 
  '/images/placeholder.jpg'
);

const imagetoDisplay = computed<string>(() => {
  if (paColor.value.length) {
    const activeColorImage = props.node?.variations?.nodes.filter((variation) => {
      const hasMatchingAttributes = variation.attributes?.nodes.some(
        (attribute) => paColor.value.some((color) => attribute.value.includes(color))
      );
      const hasMatchingSlug = paColor.value.some((color) => variation.slug?.includes(color));
      return hasMatchingAttributes || hasMatchingSlug;
    });
    if (activeColorImage?.length) {
      return (
        activeColorImage[0].image?.producCardSourceUrl ||
        activeColorImage[0].image?.sourceUrl ||
        mainImage.value
      );
    }
  }
  return mainImage.value;
});

// Cart functionality
const { arraysEqual, formatArray, checkForVariationTypeOfAny } = useHelpers();
const { addToCart, isUpdatingCart } = useCart();
const errorMessage = ref('');
const quantity = ref<number>(1);
const activeVariation = ref<Variation | null>(null);
// const variation = ref<Attribute[]>([]);
// const indexOfTypeAny = ref<number[]>([]);
// const attrValues = ref();

const handleAddToCart = async (input: AddToCartInput) => {
  isUpdatingCart.value = true;
  errorMessage.value = '';

  try {
    await addToCart(input);
  } catch (error: any) {
    console.error('Error adding item to cart:', error);
    errorMessage.value = error || 'There was an error adding the item to your cart. Please try again.';
  } finally {
    isUpdatingCart.value = false;
  }
};

// Product type computations
const isSimpleProduct = computed<boolean>(() => props.node?.type === ProductTypesEnum.SIMPLE);
const isVariableProduct = computed<boolean>(() => props.node?.type === ProductTypesEnum.VARIABLE);
const type = computed(() => activeVariation.value || props.node);
const selectProductInput = computed<AddToCartInput>(() => ({
  productId: type.value?.databaseId,
  quantity: quantity.value,
}));

// Wishlist functionality
const { addToWishlist, removeFromWishlist, isInList } = useWishlist();
const isWishlisted = computed(() => (props.node.databaseId ? isInList(props.node.databaseId) : false));
const toggleWishlist = () => {
  if (isWishlisted.value && props.node.databaseId) {
    removeFromWishlist(props.node.databaseId);
  } else {
    addToWishlist(props.node);
  }
};

// Stock status
const stockStatus = computed(() => {
  if (isVariableProduct.value) {
    return activeVariation.value?.stockStatus || StockStatusEnum.OUT_OF_STOCK;
  }
  return type.value?.stockStatus || StockStatusEnum.OUT_OF_STOCK;
});

const disabledAddToCart = computed(() => {
  if (isSimpleProduct.value) {
    return !type.value || stockStatus.value === StockStatusEnum.OUT_OF_STOCK || isUpdatingCart.value;
  }
  return (
    !type.value ||
    stockStatus.value === StockStatusEnum.OUT_OF_STOCK ||
    !activeVariation.value ||
    isUpdatingCart.value
  );
});

// Layout-specific classes
const cardClasses = computed(() => ({
  default: 'relative product-card p-2 max-h-[360px] flex w-full max-w-xs flex-col justify-between overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md',
  featured: 'relative product-card flex-shrink-0 w-64 bg-gray-800 rounded-lg overflow-hidden shadow-lg',
  bestseller: 'relative product-card bg-red-300 text-black-900 rounded-lg overflow-hidden shadow-lg p-4 w-full min-w-96 gap-4 flex flex-col justify-between'
})[props.typecard]);

const isNative = storeSettings.isNative;

</script>

<template>
  <div :class="[cardClasses, isNative ? 'max-h-[360px]' : '']">
    <!-- Default Layout -->
    <template v-if="props.typecard === 'default'">
      <NuxtLink :to="`/product/${decodeURIComponent(node.slug)}`" :title="node.name">
        <SaleBadge :node="node" class="absolute top-2 right-2" />
        <NuxtImg
          v-if="imagetoDisplay"
          :width="imgWidth"
          :height="imgHeight"
          :src="imagetoDisplay"
          :alt="node.image?.altText || node.name || 'Product image'"
          :title="node.image?.title || node.name"
          :loading="index <= 3 ? 'eager' : 'lazy'"
          :sizes="`${imgWidth / 2}px md:${imgWidth}px`"
          placeholder
          placeholder-class="blur-xl"
        />
      </NuxtLink>
   
      <div class=" flex flex-col gap-2">
      <StarRating
        v-if="storeSettings.showReviews"
        :rating="node.averageRating"
        :count="node.reviewCount"
      />
      <NuxtLink
        :to="`/product/${decodeURIComponent(node.slug)}`"
        :title="node.name"
      >
        <n-ellipsis
          class="mb-2 font-light leading-tight"
          :line-clamp="2"
        >
          {{ node.name }}
        </n-ellipsis>
        <!-- <h2 class="mb-2 font-light leading-tight">{{ node.name }}</h2> -->
      </NuxtLink>
    </div>
    <div class="text-sm">
      <ProductPrice
        :sale-price="node.salePrice"
        :regular-price="node.regularPrice"
      />
    </div>
    <div class="flex   self-justify-end gap-4 justify-between items-end ">
      <div>
        <button
          type="button"
          class="cursor-pointer flex mt-4 text-sm text-gray-400 gap-2 items-center"
          @click="toggleWishlist"
        >
          <Icon
            v-if="isWishlisted"
            name="ion:heart"
            size="30"
            class="text-red-400"
          />
          <Icon
            v-else
            name="ion:heart-outline"
            size="30"
          />

        </button>
      </div>

      <form @submit.prevent="handleAddToCart(selectProductInput)">
        <AttributeSelections
          v-if="node.type == 'VARIABLE' && node.attributes && node.variations"
          class="mt-8 mb-8"
          :attributes="node.attributes.nodes"
          :defaultAttributes="node.defaultAttributes"
          :variations="node.variations.nodes"
          @attrs-changed="updateSelectedVariations"
        />

        <input
          v-model="quantity"
          type="number"
          :hidden=true
          min="1"
          aria-label="Quantity"
        />
        <AddToCartButton
          class=""
          :disabled="disabledAddToCart"
          :class="{ loading: isUpdatingCart }"
          :only-icon="true"
        />


      </form>

  


  </div>

    </template>

    <!-- Featured Layout -->
    <template v-else-if="props.typecard === 'featured'">
      <NuxtImg
        v-if="imagetoDisplay"
        :width="imgWidth"
        :height="imgHeight"
        :src="imagetoDisplay"
        :alt="node.image?.altText || node.name"
        class="w-full h-48 object-cover"
      />
      <div class="p-4">
        <h3 class="text-lg font-semibold text-white">{{ node.name }}</h3>
        <ProductPrice
          :sale-price="node.salePrice"
          :regular-price="node.regularPrice"
          class="text-white"
        />
        <AddToCartButton
          :disabled="disabledAddToCart"
          :class="['mt-2 w-full', { loading: isUpdatingCart }]"
        />
      </div>
    </template>

    <!-- Best Seller Layout -->
    <template v-else-if="props.typecard === 'bestseller'">
      <div class="flex flex-col gap-4 items-center">
        <NuxtImg
          v-if="imagetoDisplay"
          :width="imgWidth"
          :height="imgHeight"
          :src="imagetoDisplay"
          :alt="node.image?.altText || node.name"
          class="w-20 h-20 object-cover rounded-full mr-4"
        />
        <div class="flex-1">
          <h3 class="text-lg font-semibold text-white">{{ node.name }}</h3>
          <ProductPrice
            :sale-price="node.salePrice"
            :regular-price="node.regularPrice"
            class="text-white"
          />
          <StarRating
            v-if="storeSettings.showReviews"
            :rating="node.averageRating"
            :count="node.reviewCount"
          />
        </div>
      </div>
      <AddToCartButton
        :disabled="disabledAddToCart"
        :class="['mt-4 w-full', { loading: isUpdatingCart }]"
      />
    </template>
  </div>
</template>

<style lang="postcss">
.product-card img {
  @apply rounded-lg object-top object-cover w-full;
}

.product-card:hover h2 {
  @apply text-primary;
}

/* Layout-specific styles */
.product-card.featured {
  @apply transition-transform duration-200;
}

.product-card.featured:hover {
  @apply transform scale-105;
}

.product-card.bestseller {
  @apply transition-colors duration-200;
}

.product-card.bestseller:hover {
  @apply bg-gray-700;
}
</style>
