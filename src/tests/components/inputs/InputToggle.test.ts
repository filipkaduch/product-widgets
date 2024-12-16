import { mount } from '@vue/test-utils'
import type { VueWrapper } from '@vue/test-utils'
import InputToggle from '@/components/inputs/InputToggle.vue'
import { describe, expect, test } from 'vitest'

const id = 'toggle'

const defaultProps = {
  id,
}

describe('Mounting', () => {
  test('Component', () => {
    const component: VueWrapper = mount(InputToggle, { props: defaultProps })

    expect(component.exists()).toBeTruthy()
  })
})
