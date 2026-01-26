<template>
  <footer>
    <div class="copyright">
      <p>© 2026 Casper Buurman</p>
      <p>'QR Code' is a registered trademark of DENSO WAVE INCORPORATED</p>
    </div>
    <div class="links"></div>
  </footer>
</template>

<style scoped lang="scss">
@use '@/assets/variables' as *;

footer {
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  padding: 1rem;
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
}
</style>
