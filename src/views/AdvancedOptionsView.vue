<script setup lang="ts">
import ArrowButton from '@/components/ArrowButton.vue';
import SettingsLayout from '@/components/SettingsLayout.vue';

</script>

<template>
  <SettingsLayout>
    <template #content>
      <h2>Advanced Options Coming Soon</h2>
      <!-- Advanced options components go here -->
    </template>
    <template #buttons>
      <ArrowButton path="/icon" first left>Back</ArrowButton>
      <ArrowButton path="" first highlight disabled>Next</ArrowButton>
    </template>
  </SettingsLayout>

</template>
