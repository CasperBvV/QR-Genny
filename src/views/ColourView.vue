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
import ColourInputComponent from '@/components/ColourPage/ColourInputComponent.vue';
import SettingsLayout from '@/components/SettingsLayout.vue';

</script>

<template>
  <SettingsLayout>
    <template #content>
      <h2>Dots Colour</h2>
      <ColourInputComponent value="dotsOptions" />

      <h2>Corners Colour</h2>
      <ColourInputComponent value="cornersSquareOptions" />

      <h2>Corner Dots Colour</h2>
      <ColourInputComponent value="cornersDotOptions" />

      <h2>Background Colour</h2>
      <ColourInputComponent value="backgroundOptions" />
    </template>
    <template #buttons>
      <ArrowButton path="/content" first left>Back</ArrowButton>
      <ArrowButton path="/style" first highlight>Next</ArrowButton>
    </template>
  </SettingsLayout>
</template>
