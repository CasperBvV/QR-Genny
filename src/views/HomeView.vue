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
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLink, faClipboard, faIdCard } from '@fortawesome/free-solid-svg-icons'

import { qrData } from '@/data/qr';

function updateType(type: string) {
  // Navigation logic can be added here if needed
  qrData.value.home = {
    ...qrData.value.home,
    type,
  }
}

const types = {
  url: {
    icon: faLink,
    label: 'URL',
  },
  text: {
    icon: faClipboard,
    label: 'Text',
  },
  // vcard: {
  //   icon: faIdCard,
  //   label: 'vCard',
  // },
}

</script>

<template>
  <div class="wrapper">
    <div class="types column">
      <RouterLink v-for="type in types" :key="type.label" to="/content" class="card"
        @click="updateType(type.label.toLowerCase())">
        <div class="icon">
          <FontAwesomeIcon :icon="type.icon" />
        </div>
        {{ type.label }}

      </RouterLink>
    </div>

    <div class="column">Image</div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/variables' as *;

.wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  max-width: 1200px;
  margin: 15px auto;
  padding: 25px;
  box-sizing: border-box;

  gap: 10px;

  .column {
    height: 100%;
    min-width: 300px;
    flex: 1;

    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }

  .types {
    flex: 2;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));

    align-content: start;

    gap: 15px;

    padding: 50px;
    overflow-x: hidden;
    overflow-y: auto;

    height: fit-content;
    max-height: 100%;

    .card {
      background-color: $card-background;
      background: $card-background-gradient;
      border: $card-border;
      border-radius: 8px;

      height: 100px;
      padding: 1rem;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;

      cursor: pointer;
      text-decoration: none;
      color: inherit;

      position: relative;

      &::before {
        position: absolute;
        content: '';

        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        border-radius: 8px;

        background-color: $card-hover-background;

        opacity: 0;
        transition: all 0.2s ease;
        z-index: -1;
      }

      transition: all 0.2s ease;

      &:hover {
        &::before {
          opacity: 1;
        }

        transform: scale(1.03);

        .icon svg * {
          fill: $color2;
        }
      }

      .icon {
        display: flex;
        flex-direction: row;
        align-items: center;

        overflow: hidden;

        flex-grow: 1;
      }

      .icon svg {
        width: 50px;
        height: auto;

        * {
          transition: fill 0.2s ease;
          fill: $color1;
        }
      }
    }
  }
}
</style>
