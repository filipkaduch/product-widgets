<template>
  <div class="flex flex-col w-full mb-4">
    <ProductHeader :id="id" :product-widget="productWidget" />

    <ProductSettings :id="id" :product-widget="productWidget" />
  </div>
</template>

<script setup lang="ts">
import type { ProductWidget } from '@/types/product-widget'
import type { PropType } from 'vue'
import ProductSettings from '@/components/product/ProductSettings.vue'
import ProductHeader from '@/components/product/ProductHeader.vue'

defineProps({
  id: {
    type: String as PropType<string>,
    required: true,
  },
  productWidget: {
    type: Object as PropType<ProductWidget>,
    required: true,
  },
})
</script>
