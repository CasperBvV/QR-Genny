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
import InputComponent, { type OptionType } from '@/components/InputComponent.vue';
import type { CornerDotType, CornerSquareType, DotType } from 'qr-code-styling';

// type DotType = "dots" | "rounded" | "classy" | "classy-rounded" | "square" | "extra-rounded";
const styletypes: OptionType[] = [
  {
    label: 'Square',
    value: 'square',
  },
  {
    label: 'Dots',
    value: 'dots',
  },
  {
    label: 'Rounded',
    value: 'rounded',
  },
  {
    label: 'Classy',
    value: 'classy',
  },
  {
    label: 'Classy Rounded',
    value: 'classy-rounded',
  },
  {
    label: 'Extra Rounded',
    value: 'extra-rounded',
  },
]

function updateValue(newValue: string, field?: string) {
  if (!field) return;


  if (!qrData.value.style) {
    qrData.value.style = {
      dotStyle: {} as DotType,
      cornerStyle: {} as CornerSquareType,
      cornerDotStyle: {} as CornerDotType,
    }
  }

  qrData.value.style['dotStyle'] = newValue as DotType;


}

const currentData = qrData.value.style ? qrData.value.style['dotStyle'] : {} as DotType;

</script>

<template>
  <InputComponent inputType="radio" :unique="'dotStyle'" value="type" :options="styletypes" default="square"
    :prefilled="currentData" @update="updateValue" />
</template>

<style scoped>
.row {
  display: flex;
  gap: 1rem;
}
</style>
