<template>
  <div class="settings-layout">
    <div class="content">
      <slot name="content"></slot>
    </div>
    <div class="buttons">
      <slot name="buttons"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.settings-layout {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;

  .content {
    flex-grow: 1;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }
}
</style>
