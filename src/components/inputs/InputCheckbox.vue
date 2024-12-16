<template>
  <div class="flex items-center justify-center relative">
    <label
      :id="`${id}_label`"
      :for="`${id}-checkbox`"
      class="relative flex items-center after:hover:right-[-50%] after:hover:bg-green-100 after:hover:rounded-full after:hover:p-6 after:absolute"
    >
      <input
        :id="`${id}-checkbox`"
        :name="`${id}-checkbox`"
        :checked="modelValue"
        type="checkbox"
        :class="classes"
        @change="handleChange"
      />
      <span v-if="modelValue" class="z-10 cursor-pointer">
        <IconCheckmark class="h-6 w-6" />
      </span>
    </label>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { computed } from 'vue'
import IconCheckmark from '@/components/icons/IconCheckmark.vue'

const props = defineProps({
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
  'appearance-none border border-2 border-black rounded h-6 w-6',
  'hover:bg-green-100 hover:border-gray hover:p-2',
  'cursor-pointer z-10 bg-transparent',
  props.modelValue ? 'peer hidden' : '',
])
</script>
