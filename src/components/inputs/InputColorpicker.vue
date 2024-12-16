<template>
  <div class="flex gap-1" :id="`${id}-colorpicker`">
    <div
      v-for="(color, index) in ProductWidgetColorEnum"
      :key="`${id}-color-${index}`"
      class="shadow cursor-pointer h-4 w-4 hover:opacity-50"
      :class="`bg-${color} ${selectedColor(color) ? 'border-2 border-gray' : ''}`"
      @click="emit('change', color)"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { ProductWidgetColor as ProductWidgetColorEnum } from '@/types/product-widget.ts'
import type { ProductWidgetColor } from '@/types/product-widget.ts'

const props = defineProps({
  id: {
    type: String as PropType<string>,
    required: true,
  },
  selected: {
    type: String as PropType<ProductWidgetColor>,
    required: true,
  },
})

const selectedColor = (color: ProductWidgetColor): boolean => color === props.selected

const emit = defineEmits<{ change: [value: ProductWidgetColorEnum] }>()
</script>
