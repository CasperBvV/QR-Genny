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
  <div id="wrapper">
    <div class="content">
      <NavBar class="nav" />
      <div class="main">
        <router-view />
      </div>
      <div class="result">Result</div>
    </div>

    <FooterComponent />
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/variables' as *;
#wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.content {
  display: flex;
  flex-direction: column;
  height: 100%;

  @media not screen and (max-width: 768px) {
    width: 100%;
    max-width: 1200px;
    padding: 25px;
    box-sizing: border-box;
    margin: 0 auto;

    display: grid;
    gap: 10px;
    grid-template: none / auto min(50%, 350px);

    height: fit-content;

    .main,
    .result {
      background-color: $bg3;
    }
  }

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

    background-color: $bg3;
    flex-grow: 1;
  }
}
</style>
