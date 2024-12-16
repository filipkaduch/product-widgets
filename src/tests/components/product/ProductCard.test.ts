import { mount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import type { VueWrapper } from '@vue/test-utils'
import ProductCard from '@/components/product/ProductCard.vue'
import { beforeEach, describe, expect, test } from 'vitest'
import products from '@/mocks/products.json'
import en from '@/lang/en.json'
import { setActivePinia, createPinia } from 'pinia'
import ProductSettings from '@/components/product/ProductSettings.vue'
import ProductHeader from '@/components/product/ProductHeader.vue'

const id = 'card'

const productWidget = products.products[0]

const defaultProps = {
  id,
  productWidget,
}

const i18n = createI18n({
  locale: 'en',
  messages: {
    en,
  },
})

beforeEach(() => {
  setActivePinia(createPinia())
})

describe('Mounting', () => {
  test('Component', () => {
    const component: VueWrapper = mount(ProductCard, {
      props: defaultProps,
      global: {
        plugins: [i18n],
      },
    })

    expect(component.exists()).toBeTruthy()
  })
})

describe('Visibility', () => {
  let component: VueWrapper

  beforeEach(() => {
    component = mount(ProductCard, {
      props: defaultProps,
      global: {
        plugins: [i18n],
      },
    })
  })

  test('Should display ProductSettings', () => {
    expect(component.findComponent(ProductSettings).exists()).toBeTruthy()
  })

  test('Should display ProductHeader', () => {
    expect(component.findComponent(ProductHeader).exists()).toBeTruthy()
  })
})
