import { mount } from '@vue/test-utils'
import type { VueWrapper } from '@vue/test-utils'
import BaseLoader from '@/components/core/BaseLoader.vue'
import { describe, expect, test } from 'vitest'

describe('Mounting', () => {
  test('Component', () => {
    const component: VueWrapper = mount(BaseLoader)

    expect(component.exists()).toBeTruthy()
  })
})
