import { mount } from '@vue/test-utils'
import type { VueWrapper } from '@vue/test-utils'
import ProductSettings from '@/components/product/ProductSettings.vue'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import products from '@/mocks/products.json'
import { setActivePinia, createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import en from '@/lang/en.json'
import InputCheckbox from '@/components/inputs/InputCheckbox.vue'
import InputToggle from '@/components/inputs/InputToggle.vue'
import InputColorpicker from '@/components/inputs/InputColorpicker.vue'
import BaseTooltip from '@/components/core/BaseTooltip.vue'

const id = 'settings'

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

vi.mock('@/stores/ProductWidgetsStore', () => ({
  useProductWidgetsStore: vi.fn(() => ({
    updateProperty: vi.fn(),
  })),
}))

describe('Mounting', () => {
  test('Component', () => {
    const component: VueWrapper = mount(ProductSettings, {
      props: defaultProps,
      global: {
        plugins: [i18n],
      },
    })

    expect(component.exists()).toBeTruthy()
  })
})

describe('Defaults', () => {
  let component: VueWrapper

  beforeEach(() => {
    component = mount(ProductSettings, {
      props: defaultProps,
      global: {
        plugins: [i18n],
      },
    })
  })

  test('Should display InputCheckbox', () => {
    const checkbox = component.findComponent(InputCheckbox)

    expect(checkbox.exists()).toBe(true)

    expect(checkbox.props('modelValue')).toBe(productWidget.linked)
  })

  test('Should display InputToggle', () => {
    const toggle = component.findComponent(InputToggle)

    expect(toggle.exists()).toBe(true)

    expect(toggle.props('modelValue')).toBe(productWidget.active)
  })

  test('Should display InputColorpicker', () => {
    const colorpicker = component.findComponent(InputColorpicker)

    expect(colorpicker.exists()).toBe(true)

    expect(colorpicker.props('selected')).toBe(productWidget.selectedColor)
  })

  test('Should render Linked label localized text correctly', () => {
    const linkedLabel = component.find('.flex span')

    expect(linkedLabel.text()).toContain(en.product.card.settings.linked.label)
  })

  test('Should render Tooltip localized text correctly', () => {
    const tooltipContent = component.findComponent(BaseTooltip)

    expect(tooltipContent.exists()).toBe(true)

    expect(tooltipContent.text()).toContain(en.product.card.settings.linked.tooltip.text)

    expect(tooltipContent.text()).toContain(en.product.card.settings.linked.tooltip.link)
  })
})
