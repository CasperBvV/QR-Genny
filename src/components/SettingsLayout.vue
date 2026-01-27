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
@use '@/assets/variables' as *;

.settings-layout {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;

  .content {
    flex-grow: 1;
    padding: 1rem;
    overflow: auto;
    @extend .scrollbar;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    padding: 1rem;
  }
}
</style>
