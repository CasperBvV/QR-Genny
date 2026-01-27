<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <footer>
    <div class="copyright">
      <span>© 2026 Casper Buurman</span>
      <span>'QR Code' is a registered trademark of DENSO WAVE INCORPORATED</span>
    </div>
    <div class="links">
      <RouterLink to="/legal" target="_blank" rel="noopener noreferrer">Legal Information</RouterLink>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use '@/assets/variables' as *;

footer {
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  padding: 2rem 1rem;
  background-color: $bg1;

  .copyright {
    display: flex;
    font-size: 0.875rem;
    gap: 10px;

    &>*:not(:last-child)::after {
      content: '•';
      margin-left: 10px;
    }
  }

  .links {
    display: flex;
    align-items: center;
  }
  a {
    color: $color1;
  }
}
</style>
