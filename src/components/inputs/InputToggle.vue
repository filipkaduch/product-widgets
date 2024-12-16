<template>
  <div>
    <label class="inline-flex items-center cursor-pointer">
      <input
        :id="`${id}-toggle`"
        type="checkbox"
        :checked="modelValue"
        class="sr-only peer"
        @change="handleChange"
      />
      <div :class="classes"></div>
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'

defineProps({
  id: {
    type: String as PropType<string>,
    required: true,
  },
  modelValue: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement

  emit('update:modelValue', target.checked)
}

const classes = computed(() => [
  'relative w-10 h-5 rounded-full shadow-inner border border-green-100',
  'peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full',
  'peer-checked:after:border-green peer-checked:bg-green',
  "after:content-[''] after:absolute after:bg-white after:border-gray",
  'after:border after:shadow after:border-beige after:rounded-full after:h-5 after:w-5 after:top-[-1px] after:start-[-1px] after:transition-all',
  'hover:after:ring-4 hover:after:shadow-lg hover:afer:shadow-green-100 hover:after:ring-green-100',
  'cursor-pointer',
])
</script>
