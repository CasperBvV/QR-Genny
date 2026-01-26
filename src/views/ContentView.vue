<script setup lang="ts">
import ContentInputComponent from '@/components/ContentPage/ContentInputComponent.vue'
import { qrData } from '@/main'
const currentData = qrData.value.content || {}

interface Field {
  inputType: string
  placeholder: string
  value: string
}

const fields: Record<string, Field[]> = {
  url: [
    {
      inputType: 'text',
      placeholder: 'URL',
      value: 'url',
    },
  ],
  text: [
    {
      inputType: 'text',
      placeholder: 'Enter text',
      value: 'text',
    },
  ],
  vcard: [
    {
      inputType: 'text',
      placeholder: 'Enter name',
      value: 'name',
    },
    {
      inputType: 'text',
      placeholder: 'Enter phone number',
      value: 'phone',
    },
  ],
}

</script>

<template>
  <template v-for="field in fields.vcard" :key="field.value">
    <ContentInputComponent :inputType="field.inputType" :placeholder="field.placeholder" :value="field.value"
      :prefilled="currentData[field.value]" />
  </template>
  <!-- <InputComponent :inputType="fields" placeholder="Enter your name" page="content" value="name"
    :prefilled="currentData.name" /> -->
</template>
