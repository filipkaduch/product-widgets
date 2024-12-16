import { mount } from '@vue/test-utils'
import type { VueWrapper } from '@vue/test-utils'
import ProductsContainer from '@/components/ProductsContainer.vue'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import products from '@/mocks/products.json'
import { setActivePinia, createPinia } from 'pinia'
import ProductCard from '@/components/product/ProductCard.vue'

const productWidgets = products.products

vi.mock('@/stores/ProductWidgetsStore', () => ({
  useProductWidgetsStore: vi.fn(() => ({
    getProductWidgets: vi.fn(),
    productWidgets: vi.fn(() => productWidgets),
    isLoadingWidgets: vi.fn(() => false),
  })),
}))

beforeEach(() => {
  setActivePinia(createPinia())
})

describe('Mounting', () => {
  test('Component', () => {
    const component: VueWrapper = mount(ProductsContainer)

    expect(component.exists()).toBeTruthy()
  })
})

describe('Default', () => {
  test('Should display ProductCard', () => {
    const component: VueWrapper = mount(ProductsContainer)

    expect(component.findComponent(ProductCard)).toBeTruthy()
  })
})
