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
