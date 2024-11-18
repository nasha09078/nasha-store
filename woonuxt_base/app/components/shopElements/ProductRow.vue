<script setup>
const props = defineProps({
  products: { type: Array, default: null },
  typecard: { type: String, default: 'default' },
});
</script>

<template>
  <div v-if="products" :class=" typecard == 'bestseller' ? 'flex flex-row overflow-x-auto overflow-y-hidden w-full gap-4' : 'grid gap-4'">
    <ProductCard
      v-for="(node, i) in products"
      :key="node.databaseId"
      class="w-full"
      :node="node"
      :typecard="typecard"
      :index="i"
      :class="{
        hidden: i === products.length - 1,
        'lg:block': i === products.length - 1,
      }" />
  </div>
</template>
