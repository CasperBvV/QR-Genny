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

import { useTemplateRef, onMounted, watch } from 'vue';
import QRCodeStyling from 'qr-code-styling';

import { qrOptions } from '@/data/qr';

const qrCode = useTemplateRef('qrCode');

let qrInstance: QRCodeStyling | null = null;

onMounted(() => {
  if (qrCode.value) {
    qrInstance = new QRCodeStyling(qrOptions.value);
    qrInstance.append(qrCode.value);
  }
});

watch(qrOptions.value, (newOptions) => {
  if (qrCode.value) {
    // Recreate the QR code instance with new options
    // This is necessary because QRCodeStyling does not update colors from gradient to solid properly
    qrInstance = new QRCodeStyling(newOptions);
    qrCode.value.innerHTML = '';
    qrInstance.append(qrCode.value);
  }
});

// Listen for download events sibling component
defineExpose({
  downloadQR(format: 'svg' | 'png' | 'jpeg' | 'webp') {
    if (qrInstance) {
      qrInstance.download({ extension: format });
    }
  }
});


</script>

<template>

  <div class="qr-code" ref="qrCode"></div>
</template>

<style scoped lang="scss">
@use '@/assets/variables' as *;

.qr-code {
  width: fit-content;
  max-width: 100%;

  // aspect-ratio: 1 / 1;

  background-color: $card-background;
  border: $card-border;
  border-radius: 0.25rem;
  // overflow: hidden;
  box-sizing: border-box;

  canvas,
  svg {
    height: 250px;
    overflow: hidden;
    display: block;
  }
}
</style>
