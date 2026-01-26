<script setup lang="ts">
import ArrowButton from './ArrowButton.vue'
</script>

<template>
  <nav>
    <ul>
      <li><arrow-button path="/" first>QR-Type</arrow-button></li>
      <li><arrow-button path="/content">Content</arrow-button></li>
      <li><arrow-button path="/colour">Colour</arrow-button></li>
      <li><arrow-button path="/style">Style</arrow-button></li>
      <li><arrow-button path="/frame">Frame</arrow-button></li>
      <li><arrow-button path="/icon">Icon</arrow-button></li>
      <li><arrow-button path="/advanced">Advanced Options</arrow-button></li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
@use '@/assets/variables' as *;

nav {
  width: 100%;
  overflow: hidden;
  height: fit-content;

  ul {
    list-style: none;

    display: flex;
    flex-direction: row;
    gap: 1.5rem;

    margin: 0;
    padding: 1rem;
    padding-left: 1rem + $arrow-size;

    box-sizing: border-box;
    overflow-y: hidden;
    overflow-x: auto;
  }

  background-color: $bg3;
  background: radial-gradient(circle at 50% 0, $bg4 0%, $bg3 100%);
}
</style>
