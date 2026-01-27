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
const dependencies = [
  {
    name: 'Create Vue',
    url: '',
    git: 'https://github.com/vuejs/create-vue',
    license: 'MIT License',
    lincenseurl: '/licenses/createVueMIT.txt',
  },
  {
    name: 'Vue 3',
    url: 'https://vuejs.org/',
    git: 'https://github.com/vuejs/vue',
    license: 'MIT License',
    lincenseurl: '/licenses/vueMIT.txt',
  },
  {
    name: 'Vite',
    url: 'https://vite.dev/',
    git: 'https://github.com/vitejs/vite',
    license: 'MIT License',
    lincenseurl: '/licenses/viteMIT.txt',
  },
  {
    name: 'Vue Router',
    url: 'https://router.vuejs.org/',
    git: 'https://github.com/vuejs/router',
    license: 'MIT License',
    lincenseurl: '/licenses/routerMIT.txt',
  },
  {
    name: 'QRCodeStyling',
    url: 'https://github.com/kozakdenys/qr-code-styling',
    git: 'https://github.com/kozakdenys/qr-code-styling',
    license: 'MIT License',
    lincenseurl: '/licenses/qrCodeStylingMIT.txt',
  },
  {
    name: 'SASS Embedded',
    url: 'https://sass-lang.com/documentation/js-api/',
    git: 'https://github.com/sass/embedded-host-node',
    license: 'MIT License',
    lincenseurl: '/licenses/sassEmbeddedMIT.txt',
  }
];

const trademarks = [
  {
    name: 'QR Code',
    owner: 'Denso Wave Incorporated',
    url: 'https://www.denso-wave.com/en/technology/vol1.html',
  },
];

</script>

<template>
  <div class="legal-view">
      <h2>License</h2>
    <section>
      <p>
        QR-Genny is published under the GNU AGPLv3 License.
      </p>
    </section>

    <h2>Direct Dependencies</h2>
    <p>The following open source libraries are used directly in this project:</p>
    <section v-for="dep in dependencies" :key="dep.name">
      <h3>{{ dep.name }}</h3>
      <div v-if="dep.url">
        <span>Website: </span>
        <a :href="dep.url" target="_blank" rel="noopener noreferrer">{{ dep.url }}</a>
      </div>
      <div v-if="dep.git">
        <span>Source Code: </span>
        <a :href="dep.git" target="_blank" rel="noopener noreferrer">{{ dep.git }}</a>
      </div>
      <div v-if="dep.lincenseurl">
        <span>License: </span>
        <a :href="dep.lincenseurl" target="_blank" rel="noopener noreferrer">{{ dep.license }}</a>
      </div>
      <div v-else-if="dep.license">
        <span>License: </span>
        <span>{{ dep.license }}</span>
      </div>
    </section>

    <h2>Trademarks</h2>
    <p>The following trademarks are acknowledged in this project:</p>
    <section v-for="tm in trademarks" :key="tm.name">
      <h3>{{ tm.name }}</h3>
      <div v-if="tm.owner">
        <span>Owner: </span>
        <span>{{ tm.owner }}</span>
      </div>
      <div v-if="tm.url">
        <span>More Info: </span>
        <a :href="tm.url" target="_blank" rel="noopener noreferrer">{{ tm.url }}</a>
      </div>
    </section>

  </div>
</template>


<style scoped lang="scss">
@use '@/assets/variables' as *;

.legal-view {
  display: flex;
  flex-direction: column;
  gap: 20px;

  justify-content: center;
  align-items: center;
  padding: 40px;

  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  box-sizing: border-box;
}

section {
  width: 100%;
  padding: 20px;
  border-radius: 8px;

  background-color: $bg3;
  background: radial-gradient(circle at 50% 100%, $bg4 0%, $bg3 100%);
  height: 100%;

  box-sizing: border-box;

  a {
    color: $color1;
    word-break: break-all;
  }
}
</style>
