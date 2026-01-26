<script setup lang="ts">
import { qrData } from '@/main'
import InputComponent from '@/components/InputComponent.vue';

const props = defineProps<{
  inputType: string
  options?: string[]
  label?: string
  placeholder?: string

  value: string
  prefilled?: string
}>()

function updateValue(newValue: string) {
  qrData.value.content = {
    ...qrData.value.content,
    [props.value]: newValue,
  }
}

</script>

<template>
  <InputComponent :inputType="inputType" :label="label" :options="options" :placeholder="placeholder" :value="value"
    :prefilled="prefilled" @update="updateValue" />
</template>
