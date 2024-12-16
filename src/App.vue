<template>
  <header class="font-bold leading-9 text-3xl font-['Cabin']">
    {{ $t('product.title') }}
    <div class="w-full border border-gray my-4" />
  </header>

  <main class="font-['Cabin']">
    <ProductsContainer />
  </main>
</template>

<script setup lang="ts">
import ProductsContainer from '@/components/ProductsContainer.vue'
</script>
