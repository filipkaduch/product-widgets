import { mount } from '@vue/test-utils'
import type { VueWrapper } from '@vue/test-utils'
import InputCheckbox from '@/components/inputs/InputCheckbox.vue'
import IconCheckmark from '@/components/icons/IconCheckmark.vue'
import { beforeEach, describe, expect, test } from 'vitest'

const id = 'checkbox'

const defaultProps = {
  id,
}

describe('Mounting', () => {
  test('Component', () => {
    const component: VueWrapper = mount(InputCheckbox, { props: defaultProps })

    expect(component.exists()).toBeTruthy()
  })
})

describe('Defaults', () => {
  let component: VueWrapper

  beforeEach(() => {
    component = mount(InputCheckbox, { props: defaultProps })
  })

  test('Should display Checkbox input', () => {
    expect(component.find(`#${id}-checkbox`).exists()).toBeTruthy()
  })

  test('Should not display Checked icon', () => {
    expect(component.findComponent(IconCheckmark).exists()).toBeFalsy()
  })
})

describe('Props', () => {
  let component: VueWrapper

  test('Should display Checked icon with modelValue being true', () => {
    component = mount(InputCheckbox, { props: { ...defaultProps, modelValue: true } })

    expect(component.findComponent(IconCheckmark).exists()).toBeTruthy()
  })
})
