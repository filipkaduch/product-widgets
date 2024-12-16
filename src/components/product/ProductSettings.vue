<template>
  <div class="flex flex-col text-green gap-3 text-sm leading-4">
    <span class="flex w-full justify-between items-center">
      <span class="flex">
        {{ $t('product.card.settings.linked.label') }}
        <BaseTooltip :id="id">
          <template #trigger>
            <IconInfo class="cursor-pointer" />
          </template>
          <template #content>
            <div class="flex flex-col items-center gap-3">
              <span>
                {{ $t('product.card.settings.linked.tooltip.text') }}
              </span>
              <a class="text-green font-semibold cursor-pointer">
                {{ $t('product.card.settings.linked.tooltip.link') }}
              </a>
            </div>
          </template>
        </BaseTooltip>
      </span>
      <InputCheckbox
        :id="id"
        v-model="checkedWidget"
        @update:model-value="(value: boolean) => update(ProductMutableProperties.LINKED, value)"
      />
    </span>
    <span class="flex w-full justify-between items-center">
      {{ $t('product.card.settings.color.label') }}
      <InputColorpicker
        :id="id"
        :selected="productWidget.selectedColor"
        @change="
          (value: ProductWidgetColor) => update(ProductMutableProperties.SELECTED_COLOR, value)
        "
      />
    </span>
    <span class="flex w-full justify-between items-center">
      {{ $t('product.card.settings.active.label') }}
      <InputToggle
        :id="id"
        v-model="activeWidget"
        @update:model-value="(value: boolean) => update(ProductMutableProperties.ACTIVE, value)"
      />
    </span>
  </div>
</template>

<script setup lang="ts">
import InputCheckbox from '@/components/inputs/InputCheckbox.vue'
import InputToggle from '@/components/inputs/InputToggle.vue'
import InputColorpicker from '@/components/inputs/InputColorpicker.vue'
import IconInfo from '@/components/icons/IconInfo.vue'
import BaseTooltip from '@/components/core/BaseTooltip.vue'
import { ref, watch, type PropType } from 'vue'
import type { ProductWidget, ProductWidgetColor } from '@/types/product-widget'
import { ProductMutableProperties } from '@/types/product-widget'
import { useProductWidgetsStore } from '@/stores/ProductWidgetsStore'

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

const { updateProperty } = useProductWidgetsStore()

const activeWidget = ref<boolean>(props.productWidget.active)

const checkedWidget = ref<boolean>(props.productWidget.linked)

watch(
  () => props.productWidget,
  (val: ProductWidget) => {
    activeWidget.value = val.active

    checkedWidget.value = val.linked
  },
  {
    deep: true,
    immediate: true,
  },
)

const update = (property: keyof ProductWidget, value: string | boolean) => {
  updateProperty(property, value, props.productWidget.id)
}
</script>
