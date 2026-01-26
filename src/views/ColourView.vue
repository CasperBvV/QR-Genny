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
