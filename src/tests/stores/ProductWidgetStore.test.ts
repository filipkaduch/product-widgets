import products from '@/mocks/products.json'
import { useProductWidgetsStore } from '@/stores/ProductWidgetsStore'
import { setActivePinia, createPinia, storeToRefs } from 'pinia'
import { beforeEach, describe, expect, test } from 'vitest'
import { ProductMutableProperties } from '@/types/product-widget'

describe('ProductWidgetStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('getProductWidgets', async () => {
    const { getProductWidgets } = useProductWidgetsStore()

    const { productWidgets } = storeToRefs(useProductWidgetsStore())

    await getProductWidgets()

    expect(productWidgets.value.length).toBe(products.products.length)
  })

  test('updateProperty', async () => {
    const { getProductWidgets, updateProperty } = useProductWidgetsStore()

    const { productWidgets } = storeToRefs(useProductWidgetsStore())

    await getProductWidgets()

    updateProperty(ProductMutableProperties.ACTIVE, true, products.products[0].id)

    expect(productWidgets.value[0].active).toBe(true)

    // change of ACTIVE property should trigger swap of other product's ACTIVE properties
    expect(productWidgets.value[2].active).toBe(false)
  })
})
