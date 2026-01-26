<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  inputType: string
  options?: string[]
  default?: string
  label?: string
  placeholder?: string

  value: string
  prefilled?: string
}>()

const emit = defineEmits<{
  (e: 'update', value: string): void
}>()

const userInput = ref<string>(props.prefilled || props.default || '')

// check if userInput changes and emit update event
watch(userInput, (newValue) => {
  emit('update', newValue)
})
</script>

<template>
  <div class="radio" v-if="inputType == 'radio'">
    <label v-for="option in options" :key="option">
      <input type="radio" :name="value" :value="option" v-model="userInput" :checked="userInput === option" />
      {{ option }}
    </label>
  </div>
  <div class="input-component" v-else>
    <label :for="value" v-if="label">{{ label }}:</label>
    <select :name="value" :id="value" v-model="userInput" v-if="inputType === 'select' && options">
      <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
    </select>

    <input :type="inputType" :id="value" v-model="userInput" :placeholder="props.placeholder" v-else />
  </div>
</template>
