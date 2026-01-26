<script setup lang="ts">
import ColourInputComponent from '@/components/ColourPage/ColourInputComponent.vue';

</script>

<template>
  <h2>Dots Colour</h2>
  <ColourInputComponent value="dotsOptions" />

  <h2>Corners Colour</h2>
  <ColourInputComponent value="cornersSquareOptions" />

  <h2>Corner Dots Colour</h2>
  <ColourInputComponent value="cornersDotOptions" />

  <h2>Background Colour</h2>
  <ColourInputComponent value="backgroundOptions" />
</template>
