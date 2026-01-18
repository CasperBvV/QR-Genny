<script setup lang="ts">
defineProps<{
  path: string
  first?: boolean
}>()
</script>

<template>
  <router-link :to="path" :class="{ first: first }">
    <slot />
  </router-link>
</template>

<style scoped lang="scss">
@use '@/assets/variables' as *;

a {
  text-decoration: none;
  color: $color1-lightest;

  text-wrap: nowrap;

  display: block;
  padding: 0.5rem 1rem;
  background-color: $color1-dark;

  &.router-link-active {
    background-color: $color2-dark;
    color: $color2-lightest;
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
    clip-path: polygon(100% 50%, 0 0, 0 100%);
    right: -$arrow-size;
  }

  &::before {
    // Inverted Arrow shape full height
    clip-path: polygon(0 0, 100% 50%, 0 100%, 100% 100%, 100% 0);
    left: -$arrow-size;
  }
}
</style>
