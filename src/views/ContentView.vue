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
import ArrowButton from '@/components/ArrowButton.vue'
import ContentInputComponent from '@/components/ContentPage/ContentInputComponent.vue'
import SettingsLayout from '@/components/SettingsLayout.vue'
import { qrData } from '@/data/qr'
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
      value: 'url',
    },
  ],
  text: [
    {
      inputType: 'textarea',
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
  <SettingsLayout>
    <template #content>
      <template v-if="!qrData.home?.type">
        Please select a content type.
        <RouterLink to="/">Go to Home</RouterLink>
      </template>
      <template v-for="field in fields[qrData.home?.type]" :key="field.value">
        <ContentInputComponent :inputType="field.inputType" :label="field.label" :value="field.value"
          :prefilled="currentData[field.value]" />
      </template>
    </template>
    <template #buttons>
      <ArrowButton path="/" first left>Back</ArrowButton>
      <ArrowButton path="/colour" first highlight>Next</ArrowButton>
    </template>

  </SettingsLayout>



</template>
