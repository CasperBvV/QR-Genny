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
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

type FileFormat = 'svg' | 'png' | 'jpeg' | 'webp';

// Define the emits for this component
const emit = defineEmits<{
  download: [format: FileFormat];
}>();

// Emit an event to the parent component to handle the export
function downloadQR(format: FileFormat) {
  emit('download', format);
}

</script>


<template>
  <div class="export-buttons">
    <button class="downloadButton" @click="downloadQR('svg')">
      <div class="iconBox">
        <FontAwesomeIcon :icon="faDownload" />
      </div>
      <span class="text">SVG</span>
    </button>

    <button class="downloadButton" @click="downloadQR('png')">
      <div class="iconBox">
        <FontAwesomeIcon :icon="faDownload" />
      </div>
      <span class="text">PNG</span>
    </button>

    <button class="downloadButton" @click="downloadQR('jpeg')">
      <div class="iconBox">
        <FontAwesomeIcon :icon="faDownload" />
      </div>
      <span class="text">JPG/JPEG</span>
    </button>

    <button class="downloadButton" @click="downloadQR('webp')">
      <div class="iconBox">
        <FontAwesomeIcon :icon="faDownload" />
      </div>
      <span class="text">WEBP</span>
    </button>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/variables' as *;

.export-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;

  height: fit-content;

  .downloadButton {
    height: fit-content;
    display: flex;
    align-items: center;
    flex-direction: row;

    font-size: 1.2rem;

    gap: 1rem;
    padding: 0;

    background-color: $color1-dark;
    color: $textcolor;
    border: none;
    border-radius: 0.25rem;
    overflow: hidden;

    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: $color1;
      transform: scale(1.03);
    }

    .iconBox {
      height: 100%;
      aspect-ratio: 1 / 1;

      padding: 1rem;

      background-color: $color2;
      display: block;

      box-sizing: border-box;

      svg {
        height: 100%;
      }
    }

    .text {
      padding: 0.5rem 1rem;
    }
  }

  @media not screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
    align-content: start;
    height: 100%;

    .downloadButton {
      flex-direction: column;
      padding: 1rem;

      .iconBox {
        width: 100%;
        aspect-ratio: auto;
        background-color: transparent;
        color: $color2;
        padding: 0;
      }
    }
  }
}
</style>
