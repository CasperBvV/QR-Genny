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
import FooterComponent from './components/FooterComponent.vue'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="container">
    <NavBar class="nav" />
    <div class="main">
      <router-view />
    </div>
    <div class="result">Result</div>
  </div>

  <FooterComponent />
</template>

<style scoped lang="scss">
.container {
  display: grid;

  // grid-template-rows: auto 1fr;
  // grid-template-columns: fill 300px;
  grid-template: none / auto 300px;

  max-width: 1200px;
  margin: 0 auto;

  .nav {
    grid-column: 1 / 3;
  }
  .main {
    grid-column: 1 / 2;
    padding: 1rem;
  }
  .result {
    grid-column: 2 / 3;
    padding: 1rem;
  }
}
</style>
