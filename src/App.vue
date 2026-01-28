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
import { ref, useTemplateRef, watch } from 'vue';
import FooterComponent from './components/FooterComponent.vue'
import NavBar from './components/NavBar.vue'

const fullPage = ref<boolean>();
import { useRoute } from 'vue-router';
import QRComponent from './components/QRComponent.vue';
import ExportButtons from './components/ExportButtons.vue';

const route = useRoute();
const qrComponent = useTemplateRef<InstanceType<typeof QRComponent>>('qrComponent');

watch(route, (newRoute) => {
  fullPage.value = Boolean(newRoute.meta.fullPage);
});

function downloadQR(format: 'svg' | 'png' | 'jpeg' | 'webp') {
  if (qrComponent.value) {
    qrComponent.value.downloadQR(format);
  }
}

</script>

<template>
  <div id="wrapper">
    <RouterView class="fullcontent" v-if="fullPage === true" />

    <div class="content" v-else-if="fullPage === false">
      <NavBar class="nav" />
      <div class="main">
        <RouterView />
      </div>
      <div class="result">
        <QRComponent ref="qrComponent" />

        <ExportButtons @download="downloadQR" />

      </div>
    </div>

    <FooterComponent class="footer" />
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/variables' as *;

#wrapper {
  height: fit-content;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media not screen and (max-width: 768px) {
    height: 100vh;
  }

}

.fullcontent {
  flex-grow: 1;
  height: 50%;
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
    margin: 15px auto;

    display: grid;
    gap: 10px;
    overflow: hidden;
    grid-template: auto 1fr / auto min(50%, 350px);

    .main,
    .result {
      background-color: $bg3;
      background: radial-gradient(circle at 50% 100%, $bg4 0%, $bg3 100%);
      height: 100%;
      overflow: hidden;

      box-sizing: border-box;
    }

    .nav,
    .main,
    .result {
      border-radius: 8px;
      border: 1px solid $bg4;
    }
  }


  .nav {
    grid-column: 1 / 3;
  }

  .main {
    grid-column: 1 / 2;
    overflow: hidden;

    border-bottom: 1px solid $bg4;
  }

  .result {
    grid-column: 2 / 3;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    border-top: 1px solid $bg4;

    @extend .scrollbar;
    overflow: auto;
  }
}

.footer {
  margin-top: auto;
}
</style>
