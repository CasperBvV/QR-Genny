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
import { qrData, type colorType } from '@/data/qr'
import InputComponent from '@/components/InputComponent.vue';
import { ref } from 'vue';

const props = defineProps<{
  value: 'dotsOptions' | 'backgroundOptions' | 'cornersSquareOptions' | 'cornersDotOptions'
}>()

function updateValue(newValue: string, field?: string) {
  if (!field) return;


  if (!qrData.value.colour) {
    qrData.value.colour = {
      dotsOptions: {} as colorType,
      cornersSquareOptions: {} as colorType,
      cornersDotOptions: {} as colorType,
      backgroundOptions: {} as colorType,
    }
  }

  qrData.value.colour[props.value] = {
    ...qrData.value.colour[props.value],
    [field]: newValue,
  }

  if (field === 'type') {
    isSolid.value = newValue === 'solid';
    isGradient.value = newValue === 'gradient';
  }

}

const currentData = qrData.value.colour ? qrData.value.colour[props.value] : {} as colorType;
const isSolid = ref<boolean>(currentData?.type === 'solid');
const isGradient = ref<boolean>(currentData?.type === 'gradient');

// updateValue(currentData?.type, 'type'); // initialize isGradient
if (props.value == 'backgroundOptions' && !currentData?.type) {
  updateValue('default', 'type'); // initialize background type if not set
  updateValue('#ffffff', 'color1'); // default background color
}
</script>

<template>
  <InputComponent inputType="radio" :unique="value" value="type" :options="['default', 'solid', 'gradient']"
    default="default" :prefilled="currentData?.type" @update="updateValue" />

  <div class="row">
    <InputComponent v-if="isGradient || isSolid" inputType="color" value="color1" :prefilled="currentData?.color1"
      @update="updateValue" />
    <InputComponent v-if="isGradient" inputType="color" value="color2" :prefilled="currentData?.color2"
      @update="updateValue" />
  </div>
</template>

<style scoped>
.row {
  display: flex;
  gap: 1rem;
}
</style>
