<template>
  <nav>
    <ul>
      <li><router-link to="/">Content</router-link></li>
      <li><router-link to="/colour">Colour</router-link></li>
      <li><router-link to="/style">Style</router-link></li>
      <li><router-link to="/frame">Frame</router-link></li>
      <li><router-link to="/icon">Icon</router-link></li>
      <li><router-link to="/advanced">Advanced Options</router-link></li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
@use '@/assets/variables' as *;

nav {
  width: 100%;
  overflow: hidden;

  ul {
    $arrow-size: 0.5rem;

    list-style: none;

    display: flex;
    flex-direction: row;
    gap: 1.5rem;

    margin: 0;
    padding: 1rem;
    padding-left: 1rem + $arrow-size;

    box-sizing: border-box;
    overflow-y: hidden;
    overflow-x: auto;

    a {
      text-decoration: none;
      color: $textcolor;

      text-wrap: nowrap;

      display: block;
      padding: 0.5rem 1rem;
      background-color: $color1a;

      &.router-link-active {
        background-color: $color1b;
        font-weight: bold;
      }

      &:hover {
        text-decoration: underline;
      }

      position: relative;

      &::after,
      &::before {
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
  }

  background-color: $bg4;
}
</style>
