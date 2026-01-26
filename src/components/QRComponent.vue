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
  if (qrCode.value && qrInstance) {
    qrInstance.update(newOptions);
  }
});

</script>

<template>

  <div class="qr-code" ref="qrCode"></div>
</template>
