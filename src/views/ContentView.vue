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
  placeholder?: string
}

const fields: Record<string, Field[]> = {
  url: [
    {
      inputType: 'text',
      label: 'URL',
      value: 'url',
      placeholder: 'https://example.com',
    },
  ],
  text: [
    {
      inputType: 'textarea',
      label: 'Enter text',
      value: 'text',
      placeholder: 'Your text here...',
    },
  ],
  vcard: [
    { inputType: 'spacer', label: 'Name', value: 'hideLine', },
    {
      inputType: 'text',
      label: 'First Name',
      value: 'fname',
      placeholder: 'John',
    },
    {
      inputType: 'text',
      label: 'Nickname',
      value: 'nickname',
      placeholder: 'Jon,Johnny',
    },
    {
      inputType: 'text',
      label: 'Middle Name',
      value: 'mname',
      placeholder: 'A.',
    },
    {
      inputType: 'text',
      label: 'Last Name',
      value: 'lname',
      placeholder: 'Doe',
    },
    {
      inputType: 'text',
      label: 'Prefix',
      value: 'prefix',
      placeholder: 'Dr.,Mr.,Ms.',
    },
    {
      inputType: 'text',
      label: 'Suffix',
      value: 'suffix',
      placeholder: 'Jr.,Sr.,III',
    },

    { inputType: 'spacer', label: 'Contact Info', value: '', },

    {
      inputType: 'email',
      label: 'Email Address',
      value: 'email',
      placeholder: 'john.doe@example.com',
    },
    {
      inputType: 'tel',
      label: 'Phone Number',
      value: 'phone',
      placeholder: '+1 234 567 8901',
    },
    {
      inputType: 'text',
      label: 'Website',
      value: 'website',
      placeholder: 'https://example.com',
    },

    { inputType: 'spacer', label: 'Work Info', value: '', },

    {
      inputType: 'text',
      label: 'Organization',
      value: 'org',
      placeholder: 'Company Inc.',
    },
    {
      inputType: 'text',
      label: 'Job Title',
      value: 'title',
      placeholder: 'Software Engineer',
    },
    {
      inputType: 'text',
      label: 'Department',
      value: 'department',
      placeholder: 'Development',
    },
    {
      inputType: 'text',
      label: 'Sub-Department',
      value: 'subDepartment',
      placeholder: 'Mobile Team',
    },
    {
      inputType: 'email',
      label: 'Work Email Address',
      value: 'workEmail',
      placeholder: 'john.doe@example.com',
    },
    {
      inputType: 'tel',
      label: 'Work Phone Number',
      value: 'workPhone',
      placeholder: '+1 234 567 8902',
    }
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
      <div :class="qrData.home?.type">
        <template v-for="field in fields[qrData.home?.type]" :key="field.value">
          <div v-if="field.inputType === 'spacer'" class="spacer">
            <hr v-if="field.value !== 'hideLine'" />
            <h2 v-if="field.label !== ''">{{ field.label }}</h2>
          </div>
          <ContentInputComponent v-else :class="field.value" :inputType="field.inputType" :label="field.label"
            :value="field.value" :prefilled="currentData[field.value]" :placeholder="field.placeholder" />
        </template>
      </div>
    </template>
    <template #buttons>
      <ArrowButton path="/" first left>Back</ArrowButton>
      <ArrowButton path="/colour" first highlight>Next</ArrowButton>
    </template>

  </SettingsLayout>



</template>

<style scoped lang="scss">
@use '@/assets/variables' as *;

.vcard {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;


  .spacer {
    grid-column: 1 / 3;
    display: flex;
    flex-direction: column;

    hr {
      border: none;
      width: 100%;
      border-top: 1px solid $color2;
    }

    h2 {
      margin: 0;
      color: $color1;
      font-weight: bold;
    }
  }
}
</style>
