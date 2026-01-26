<script setup lang="ts">
import ArrowButton from '@/components/ArrowButton.vue';
import SettingsLayout from '@/components/SettingsLayout.vue';

</script>

<template>
  <SettingsLayout>
    <template #content>
      <h2>Frame Settings Coming Soon</h2>
      <!-- Frame settings components go here -->
    </template>
    <template #buttons>
      <ArrowButton path="/style" first left>Back</ArrowButton>
      <ArrowButton path="/icon" first highlight>Next</ArrowButton>
    </template>
  </SettingsLayout>

</template>
