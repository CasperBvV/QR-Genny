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
import ArrowButton from '@/components/ArrowButton.vue';
import type { OptionType } from '@/components/InputComponent.vue';
import SettingsLayout from '@/components/SettingsLayout.vue';
import StyleInputComponent from '@/components/StylePage/StyleInputComponent.vue';

const dotStyleTypes: OptionType[] = [
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

const cornerStyleTypes: OptionType[] = [
  ...dotStyleTypes,
  {
    label: 'Circle',
    value: 'dot',
  },
]

</script>

<template>
  <SettingsLayout>
    <template #content>
      <h2>Dot Style</h2>
      <StyleInputComponent :styleTypes="dotStyleTypes" field="dotStyle" />

      <h2>Corner Style</h2>
      <StyleInputComponent :styleTypes="cornerStyleTypes" field="cornerStyle" />

      <h2>Corner Dot Style</h2>
      <StyleInputComponent :styleTypes="cornerStyleTypes" field="cornerDotStyle" />
      <!-- Style settings components go here -->
    </template>
    <template #buttons>
      <ArrowButton path="/colour" first left>Back</ArrowButton>
      <ArrowButton path="/frame" first highlight>Next</ArrowButton>
    </template>
  </SettingsLayout>

</template>
