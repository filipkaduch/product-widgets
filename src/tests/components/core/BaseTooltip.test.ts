import { mount } from '@vue/test-utils'
import type { VueWrapper } from '@vue/test-utils'
import BaseTooltip from '@/components/core/BaseTooltip.vue'
import { beforeEach, describe, expect, test } from 'vitest'

const id = 'tooltip'

const defaultProps = {
  id,
}

describe('Mounting', () => {
  test('Component', () => {
    const component: VueWrapper = mount(BaseTooltip)

    expect(component.exists()).toBeTruthy()
  })
})

describe('Defaults', () => {
  let component: VueWrapper

  beforeEach(() => {
    component = mount(BaseTooltip, { props: defaultProps })
  })

  test('Should display tooltip wrapper', () => {
    expect(component.find(`#${id}-tooltip`).exists()).toBeTruthy()
  })

  test('Should display tooltip content with opacity-0', () => {
    expect(component.find(`#${id}-tooltip_content`).classes().includes('opacity-0')).toBeTruthy()
  })
})
