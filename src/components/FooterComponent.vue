<template>
  <footer>
    <div class="copyright">
      <p>© 2026 Casper Buurman</p>
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
}
</style>
