<script setup lang="ts">
import ArrowButton from '@/components/ArrowButton.vue';
import SettingsLayout from '@/components/SettingsLayout.vue';

</script>

<template>
  <SettingsLayout>
    <template #content>
      <h2>Icon Settings Comming Soon</h2>
      <!-- Icon settings components go here -->
    </template>
    <template #buttons>
      <ArrowButton path="/frame" first left>Back</ArrowButton>
      <ArrowButton path="/advanced" first highlight>Next</ArrowButton>
    </template>
  </SettingsLayout>

</template>
