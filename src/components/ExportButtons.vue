<script setup lang="ts">

type FileFormat = 'svg' | 'png' | 'jpeg' | 'webp';

const emit = defineEmits<{
  download: [format: FileFormat];
}>();

function downloadQR(format: FileFormat) {
  // Emit an event to the parent component to handle the export

  emit('download', format);
}

</script>


<template>
  <div class="export-buttons">
    <button @click="downloadQR('svg')">Export as SVG</button>
    <button @click="downloadQR('png')">Export as PNG</button>
    <button @click="downloadQR('jpeg')">Export as JPG/JPEG</button>
    <button @click="downloadQR('webp')">Export as WEBP</button>
  </div>
</template>
