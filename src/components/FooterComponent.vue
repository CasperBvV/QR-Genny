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
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

</script>


<template>
  <footer>
    <div class="copyright">
      <span>© 2026 Casper Buurman</span>
      <span>'QR Code' is a registered trademark of DENSO WAVE INCORPORATED</span>
    </div>
    <div class="links">
      <a class="socialIcon" href="https://cbuurman.nl" target="_blank" rel="noopener noreferrer"
        aria-label="Visit my personal website">
        <img src="@/assets/img/cbuurman.svg" alt="cbuurman.nl" class="icon" />
      </a>
      <a class="socialIcon" href="https://github.com/CasperBvV/QR-Genny" target="_blank" rel="noopener noreferrer"
        aria-label="View this project on GitHub">
        <FontAwesomeIcon class="icon" style="color: white" :icon="faGithub" />
      </a>
      <RouterLink to="/legal" target="_blank" rel="noopener noreferrer">Legal Information</RouterLink>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use '@/assets/variables' as *;

footer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  padding: 1.5rem 1rem;
  background-color: $bg1;

  @media not screen and (max-width: 600px) {
    flex-direction: row;
    align-items: center;
  }

  .copyright {
    display: flex;
    flex-direction: inherit;
    flex-wrap: wrap;
    font-size: 0.875rem;

    $flex-gap: 10px;
    gap: $flex-gap;

    overflow: hidden;

    span {
      $gap: 20px;
      margin-left: -$gap;
      display: flex;

      &:not(:last-child) {
        padding-right: $gap - $flex-gap;
      }

      &::before {
        content: '•';
        display: inline-block;
        // margin: 0 8px;
        width: $gap;
        text-align: center;
      }
    }
  }

  .links {
    display: flex;
    gap: 1rem;
    align-items: center;

    .socialIcon {
      transition: transform 0.2s ease-in-out;

      &:hover {
        transform: scale(1.25);
      }
    }
  }

  a {
    color: $color1;

    display: flex;
    align-items: center;

    .icon {
      height: 40px;
      width: 40px;
      font-size: 40px;
    }
  }
}
</style>
