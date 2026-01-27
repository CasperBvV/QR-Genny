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
defineProps<{
  path: string
  first?: boolean
  left?: boolean
  highlight?: boolean
  disabled?: boolean
}>()
</script>

<template>
  <div v-if="disabled" :class="{ first: first, left: left, highlight: highlight, disabled: disabled }">
    <slot></slot>
  </div>
  <router-link :to="path" :class="{ first: first, left: left, highlight: highlight }" v-else>
    <slot />
  </router-link>
</template>

<style scoped lang="scss">
@use '@/assets/variables' as *;

a,
div {
  text-decoration: none;
  color: $color1-lightest;

  text-wrap: nowrap;

  display: block;
  padding: 0.5rem 1rem;
  background-color: $color1-dark;

  &.disabled {
    pointer-events: none;
    opacity: 0.25;
  }

  &.router-link-active,
  &.highlight {
    background-color: $color2-dark;
    color: $color2-lightest;
  }

  &.router-link-active {
    font-weight: bold;
  }

  &:hover {
    text-decoration: underline;
  }

  position: relative;

  &::after,
  &:not(.first)::before {
    content: '';
    background-color: inherit;

    width: $arrow-size;
    height: 100%;
    position: absolute;
    top: 0;
  }

  &::after {
    // Arrow shape full height
    clip-path: polygon(100% 50%, 0 0, -1px 0, -1px 100%, 0 100%);
    right: -$arrow-size;
  }

  &.left::after {
    // Inverted Arrow shape full height
    clip-path: polygon(100% 50%, 0 0, -1px 0, -1px 100%, 0 100%);
    right: auto;
    left: -$arrow-size;
    transform: scaleX(-1);
  }

  &::before {
    // Inverted Arrow shape full height
    clip-path: polygon(100% 0, 0 50%, 100% 100%, -1px 100%, -1px 0);
    left: -$arrow-size;
    transform: scaleX(-1);
  }
}
</style>
