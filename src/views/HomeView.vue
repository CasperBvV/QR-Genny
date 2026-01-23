<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
  <div class="wrapper">
    <div class="types column">
      <div class="card">
        <div class="icon">
          <FontAwesomeIcon :icon="faLink" />
        </div>
        URL
      </div>
      <div class="card">URL</div>
      <div class="card">URL</div>
      <div class="card">URL</div>
      <div class="card">URL</div>
      <div class="card">URL</div>
      <div class="card">URL</div>
      <div class="card">URL</div>

      <div class="card">
        <RouterLink to="/content">Go to Content</RouterLink>
      </div>
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

  height: 100%;
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
    min-width: none;
    flex: 2;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));

    align-content: start;

    gap: 15px;

    padding: 5px;
    overflow-y: auto;

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
      }

      .icon svg {
        width: 50px;
        height: auto;
      }
    }
  }
}
</style>
