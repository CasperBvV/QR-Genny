<script setup lang="ts">

import { useTemplateRef, onMounted, watch } from 'vue';
import QRCodeStyling from 'qr-code-styling';

import { qrOptions } from '@/main';

const qrCode = useTemplateRef('qrCode');

onMounted(() => {
  if (qrCode.value) {
    const qr = new QRCodeStyling(qrOptions.value);
    qr.append(qrCode.value);
  }
});

watch(qrOptions.value, (newOptions) => {
  console.log('QR options changed:', newOptions);
  if (qrCode.value) {
    const qr = new QRCodeStyling(newOptions);
    qrCode.value.innerHTML = '';
    qr.append(qrCode.value);
  }
});

</script>

<template>

  <div class="qr-code" ref="qrCode"></div>
</template>
