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
import { qrData } from '@/data/qr'
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
