import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { ProductWidget } from '@/types/product-widget'
import { ProductMutableProperties } from '@/types/product-widget'
import useProductWidgets from '@/composables/useProductWidgets'

export const useProductWidgetsStore = defineStore('productWidgetsStore', () => {
  const { fetchProductWidgets } = useProductWidgets()

  const productWidgets = ref<ProductWidget[]>([])

  const isLoadingWidgets = ref<boolean>(true)

  const getProductWidgets = async () => {
    try {
      isLoadingWidgets.value = true

      productWidgets.value = await fetchProductWidgets()
    } catch (err) {
      console.error(err)
    } finally {
      isLoadingWidgets.value = false
    }
  }

  const updateProperty = <K extends keyof ProductWidget>(
    property: K,
    value: ProductWidget[K],
    id: string,
  ) => {
    const index = productWidgets.value.findIndex((widget) => widget.id === id)

    if (index > -1) {
      productWidgets.value[index][property] = value

      if (property === ProductMutableProperties.ACTIVE && value === true) {
        productWidgets.value.forEach((widget) => {
          if (widget.id !== id) {
            widget.active = false
          }
        })
      }
    }
  }

  return {
    getProductWidgets,
    isLoadingWidgets,
    productWidgets,
    updateProperty,
  }
})
