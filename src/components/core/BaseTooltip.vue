<template>
  <div :id="`${id}-tooltip`" class="relative inline-block" @mouseleave="triggerTooltip(false)">
    <div
      :id="`${id}-tooltip_content`"
      :class="classes"
      @mouseover="triggerTooltip(true, !isVisible)"
    >
      <slot name="content"></slot>
    </div>
    <div @mouseenter="triggerTooltip(true)">
      <slot name="trigger"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, PropType, ref } from 'vue'

defineProps({
  id: {
    type: String as PropType<string>,
    required: true,
  },
})

const isVisible = ref<boolean>(false)

const triggerTooltip = (value: boolean, visible: boolean = false) => {
  if (visible) return

  isVisible.value = value
}

const classes = computed(() => [
  'absolute bottom-full left-1/2 transform -translate-x-1/2',
  'bg-white text-black text-sm text-center rounded drop-shadow-2xl',
  'z-50 w-[240px] py-4 px-3',
  'transition-opacity ease-in duration-300',
  isVisible.value ? 'opacity-100' : 'opacity-0',
])
</script>
