import { mount } from '@vue/test-utils'
import type { VueWrapper } from '@vue/test-utils'
import { ProductWidgetColor as ProductWidgetColorEnum } from '@/types/product-widget.ts'
import InputColorpicker from '@/components/inputs/InputColorpicker.vue'
import { beforeEach, describe, expect, test } from 'vitest'

const id = 'colorpicker'

const defaultProps = {
  id,
  selected: ProductWidgetColorEnum.GREEN,
}

describe('Mounting', () => {
  test('Component', () => {
    const component: VueWrapper = mount(InputColorpicker, { props: defaultProps })

    expect(component.exists()).toBeTruthy()
  })
})

describe('Defaults', () => {
  let component: VueWrapper

  beforeEach(() => {
    component = mount(InputColorpicker, { props: defaultProps })
  })

  test('Should display Colorpicker', () => {
    expect(component.find(`#${id}-colorpicker`).exists()).toBeTruthy()
  })

  test('Should display all ProductWidgetColor colors', () => {
    const colorPicker = component.find(`#${id}-colorpicker`)

    expect(colorPicker.findAll('div').length).toBe(Object.keys(ProductWidgetColorEnum).length)
  })

  test('Should show selected Color', () => {
    const colorPicker = component.find(`#${id}-colorpicker`)

    const colors = colorPicker.findAll('div')

    colors.forEach((colorBlock, index) => {
      const color = ProductWidgetColorEnum[index]

      if (color === ProductWidgetColorEnum.GREEN) {
        expect(colorBlock.classes().includes('border-2 border-gray')).toBeTruthy()
      }
    })
  })
})

describe('Interactions', () => {
  test('Should emit click', async () => {
    const component = mount(InputColorpicker, { props: defaultProps })

    const colorPicker = component.find(`#${id}-colorpicker`)

    const colors = colorPicker.findAll('div')

    if (colors[0]) {
      await colors[0].trigger('click')

      expect(component.emitted('change')?.[0][0]).toBe(ProductWidgetColorEnum.BLACK)
    }
  })
})
