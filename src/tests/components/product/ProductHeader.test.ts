import { mount } from '@vue/test-utils'
import type { VueWrapper } from '@vue/test-utils'
import ProductHeader from '@/components/product/ProductHeader.vue'
import { describe, expect, test } from 'vitest'
import products from '@/mocks/products.json'
import { createI18n } from 'vue-i18n'
import en from '@/lang/en.json'
import { ProductWidgetColor as ProductWidgetColorEnum } from '@/types/product-widget.ts'

const id = 'header'

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

describe('Mounting', () => {
  test('Component', () => {
    const component: VueWrapper = mount(ProductHeader, {
      props: defaultProps,
      global: {
        plugins: [i18n],
      },
    })

    expect(component.exists()).toBeTruthy()
  })
})

describe('Default', () => {
  test('Should render correct classes for light version', () => {
    const wrapper = mount(ProductHeader, {
      props: {
        id,
        productWidget,
      },
      global: {
        plugins: [i18n],
      },
    })

    const rootDiv = wrapper.find('div')

    expect(rootDiv.classes()).toContain(`bg-green`)

    expect(rootDiv.classes()).toContain(`text-white`)
  })

  test('Should render correct classes for dark version', () => {
    const darkWidget = { ...productWidget, selectedColor: ProductWidgetColorEnum.BEIGE }
    const wrapper = mount(ProductHeader, {
      props: {
        id,
        productWidget: darkWidget,
      },
      global: {
        plugins: [i18n],
      },
    })

    const rootDiv = wrapper.find('div')

    expect(rootDiv.classes()).toContain('bg-beige')

    expect(rootDiv.classes()).toContain('text-green')
  })

  test('renders the correct SVG classes based on isDarkVersion', () => {
    const darkWidget = { ...productWidget, selectedColor: ProductWidgetColorEnum.BEIGE }
    const wrapper = mount(ProductHeader, {
      props: {
        id,
        productWidget: darkWidget,
      },
      global: {
        plugins: [i18n],
      },
    })

    const icon = wrapper.findComponent({ name: 'IconGreenspark' })

    expect(icon.classes()).toContain('fill-green')
  })

  test('renders localized title and product details', () => {
    const wrapper = mount(ProductHeader, {
      props: {
        id,
        productWidget,
      },
      global: {
        plugins: [i18n],
      },
    })

    const title = wrapper.find('.leading-4.text-xs')

    const details = wrapper.find('.font-bold.text-lg')

    expect(title.text()).toBe(
      `${en.product.card.header.title.replace('{action}', productWidget.action)}:`,
    )

    expect(details.text()).toBe(`${productWidget.amount} ${productWidget.type}`)
  })
})
