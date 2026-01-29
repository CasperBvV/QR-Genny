<!--
  Copyright (C) 2026  Casper Buurman

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU Affero General Public License as
  published by the Free Software Foundation, either version 3 of the
  License, or (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU Affero General Public License for more details.

  You should have received a copy of the GNU Affero General Public License
  along with this program.  If not, see <https://www.gnu.org/licenses/>.
-->

<script setup lang="ts">
import { ref, watch } from 'vue'

export interface OptionType {
  label: string
  value: string
}

const props = defineProps<{
  inputType: string
  options?: OptionType[]
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

const userInput = ref<string>('')

// check if userInput changes and emit update event
watch(userInput, (newValue) => {
  emit('update', newValue, props.value)
})

userInput.value = props.prefilled || props.default || ''
</script>

<template>
  <div class="radio" v-if="inputType == 'radio'">
    <label v-for="option in options" :key="option.value">
      <input type="radio" :name="unique + value" :value="option.value" v-model="userInput"
        :checked="userInput === option.value" />
      {{ option.label }}
    </label>
  </div>
  <div class="input-component" v-else>
    <label :for="value" v-if="label">{{ label }}:</label>
    <select :name="value" :id="value" v-model="userInput" v-if="inputType === 'select' && options">
      <option v-for="option in options" :key="option.value" :value="option.value">{{ option.label }}</option>
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

    // Placeholder styling
    &::placeholder {
      color: rgba($textcolor, 0.5);
    }

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
