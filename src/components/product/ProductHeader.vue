<template>
  <div
    class="flex p-4 rounded-lg mb-3"
    :class="`bg-${productColor} text-${isDarkVersion ? ProductWidgetColorEnum.GREEN : ProductWidgetColorEnum.WHITE}`"
  >
    <span class="pr-4 flex flex-col items-center">
      <IconGreenspark
        class="h-auto w-10"
        :class="{
          'fill-green': isDarkVersion,
          'fill-base': !isDarkVersion,
        }"
      />
    </span>
    <div class="flex flex-col justify-between">
      <span class="w-full font-normal leading-4 text-xs pb-1">
        {{ $t('product.card.header.title', { action: productWidget.action }) }}:
      </span>
      <span class="font-bold text-lg leading-5">
        {{ `${productWidget.amount} ${productWidget.type}` }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconGreenspark from '@/components/icons/IconGreenspark.vue'
import type { ProductWidget, ProductWidgetColor } from '@/types/product-widget'
import { ProductWidgetColor as ProductWidgetColorEnum } from '@/types/product-widget.ts'
import { computed } from 'vue'
import type { PropType } from 'vue'

const props = defineProps({
  id: {
    type: String as PropType<string>,
    required: true,
  },
  productWidget: {
    type: Object as PropType<ProductWidget>,
    required: true,
  },
})

const productColor = computed<ProductWidgetColor>(() => props.productWidget.selectedColor)

const isDarkVersion = computed<boolean>(() => {
  const darkVersions = [ProductWidgetColorEnum.BEIGE, ProductWidgetColorEnum.WHITE]

  return darkVersions.includes(productColor.value)
})
</script>
