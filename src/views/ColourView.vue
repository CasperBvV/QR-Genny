<script setup lang="ts">
import ColourInputComponent from '@/components/ColourPage/ColourInputComponent.vue';

</script>

<template>
  <h2>Dots Colour</h2>
  <ColourInputComponent value="dots" />

  <h2>Corners Colour</h2>
  <ColourInputComponent value="corners" />

  <h2>Corner Dots Colour</h2>
  <ColourInputComponent value="cornerDots" />

  <h2>Background Colour</h2>
  <ColourInputComponent value="background" />
</template>
