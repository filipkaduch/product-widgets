<template>
  <div class="md:flex w-full gap-8 justify-center">
    <div v-if="isLoadingWidgets" class="w-full flex justify-center">
      <BaseLoader />
    </div>
    <template v-else>
      <ProductCard
        v-for="(widget, index) in productWidgets"
        :key="index"
        :product-widget="widget"
        :id="`product_card-${index}`"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { useProductWidgetsStore } from '@/stores/ProductWidgetsStore'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import ProductCard from '@/components/product/ProductCard.vue'
import BaseLoader from '@/components/core/BaseLoader.vue'

const { getProductWidgets } = useProductWidgetsStore()

const { productWidgets, isLoadingWidgets } = storeToRefs(useProductWidgetsStore())

onMounted(async () => {
  await getProductWidgets()
})
</script>
