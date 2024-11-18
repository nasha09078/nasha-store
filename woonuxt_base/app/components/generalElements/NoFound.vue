<script setup lang="ts">
const router = useRouter();

const goBack = () => {
  router.back();
};

const props = defineProps({
  header: {
    type: String as PropType<string>,
    required: false,
  },
  img: {
    type: String as PropType<string>,
    required: false,
  },
  description: {
    type: String as PropType<string>,
    required: false,
  },
  icon: {
    type: String as PropType<string>,
    required: false,
  },
  isbutton: {
    type: String as PropType<string>,
    required: false,
    default:false
  }
  buttonText: {
    type: String as PropType<string>,
    required: false,
    default:false
  }
 
});
</script>

<template>
  <main   class="">
    <div class="container flex items-center justify-between py-6 pb-2">
      <div class="flex items-center">
        <SvgIcon icon="ion:arrow-back" class="text-2xl cursor-pointer" @click="goBack" />
      </div>
      <div class=" font-bold">
        {{header}}
      </div>
      <div>
        <SvgIcon :icon="iconEnd" class="text-2xl" @click="goBack" />
        
      </div>
      @click="$emit('click')"
    </div>
  </main>
</template>
