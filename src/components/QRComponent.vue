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

</script>

<template>

  <div class="qr-code" ref="qrCode"></div>
</template>
