<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  inputType: string
  options?: string[]
  default?: string
  label?: string
  placeholder?: string

  unique?: string
  value: string
  prefilled?: string
}>()

const emit = defineEmits<{
  (e: 'update', value: string, field?: string): void
}>()

const userInput = ref<string>(props.prefilled || props.default || '')

// check if userInput changes and emit update event
watch(userInput, (newValue) => {
  emit('update', newValue, props.value)
})
</script>

<template>
  <div class="radio" v-if="inputType == 'radio'">
    <label v-for="option in options" :key="option">
      <input type="radio" :name="unique + value" :value="option" v-model="userInput" :checked="userInput === option" />
      {{ option }}
    </label>
  </div>
  <div class="input-component" v-else>
    <label :for="value" v-if="label">{{ label }}:</label>
    <select :name="value" :id="value" v-model="userInput" v-if="inputType === 'select' && options">
      <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
    </select>

    <textarea :id="value" v-model="userInput" :placeholder="props.placeholder"
      v-else-if="inputType === 'textarea'"></textarea>

    <input :type="inputType" :id="value" v-model="userInput" :placeholder="props.placeholder" v-else />
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/variables' as *;

.input-component {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-weight: bold;
  }

  input,
  select,
  textarea {
    padding: 0.5rem;
    border-radius: 4px;
    font-size: 1rem;

    background-color: rgba($bg4, 0.75);
    color: inherit;
    border: 1px solid $bg5;
    box-shadow: 0 0 5px rgba($bg4, 0.75);

    &:focus {
      outline: none;
      border-color: $color1;
      box-shadow: 0 0 5px rgba($color1, 0.75);
    }

    &[type='color'] {
      padding: 0;
      height: 40px;
      width: 100px;
    }
  }

  textarea {
    resize: vertical;
    min-height: 80px;
  }
}
</style>
