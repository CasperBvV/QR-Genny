<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  inputType: string
  options?: string[]
  placeholder?: string

  value: string
  prefilled?: string
}>()

const emit = defineEmits<{
  (e: 'update', value: string): void
}>()

const userInput = ref<string>(props.prefilled || '')

// check if userInput changes and emit update event
watch(userInput, (newValue) => {
  emit('update', newValue)
})
</script>

<template>
  <div class="input-component">
    <label for="user-input" v-if="placeholder">{{ placeholder }}:</label>
    <select :name="value" :id="value" v-model="userInput" v-if="inputType === 'select' && options">
      <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
    </select>

    <input type="text" id="user-input" v-model="userInput" v-else />
  </div>
</template>
