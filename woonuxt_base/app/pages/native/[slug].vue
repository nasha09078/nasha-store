<script lang="ts" setup>

const route = useRoute();

const slug = route.params.slug as string;

</script>

<template>
    <div class="h-full">
        <AccountMyDetails v-if="slug === 'my-details'" />
        <OrderList v-else-if="slug === 'orders'" />
        <DownloadList v-else-if="slug === 'downloads'" />
        <WishList v-else-if="slug === 'wishlist'" />
    </div>
</template>
