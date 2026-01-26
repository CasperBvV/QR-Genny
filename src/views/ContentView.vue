<script setup lang="ts">
import ContentInputComponent from '@/components/ContentPage/ContentInputComponent.vue'
import { qrData } from '@/main'
const currentData = qrData.value.content || {}

interface Field {
  inputType: string
  label: string
  value: string
}

const fields: Record<string, Field[]> = {
  url: [
    {
      inputType: 'text',
      label: 'URL',
      value: 'text',
    },
  ],
  text: [
    {
      inputType: 'text',
      label: 'Enter text',
      value: 'text',
    },
  ],
  vcard: [
    {
      inputType: 'text',
      label: 'Enter name',
      value: 'name',
    },
    {
      inputType: 'text',
      label: 'Enter phone number',
      value: 'phone',
    },
  ],
}

</script>

<template>
  <template v-for="field in fields.text" :key="field.value">
    <ContentInputComponent :inputType="field.inputType" :label="field.label" :value="field.value"
      :prefilled="currentData[field.value]" />
  </template>
</template>
