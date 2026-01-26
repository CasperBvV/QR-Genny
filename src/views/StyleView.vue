<script setup lang="ts">
import ArrowButton from '@/components/ArrowButton.vue';
import SettingsLayout from '@/components/SettingsLayout.vue';

</script>

<template>
  <SettingsLayout>
    <template #content>
      <h2>Style Settings Coming Soon</h2>
      <!-- Style settings components go here -->
    </template>
    <template #buttons>
      <ArrowButton path="/colour" first left>Back</ArrowButton>
      <ArrowButton path="/frame" first highlight>Next</ArrowButton>
    </template>
  </SettingsLayout>

</template>
