<script setup lang="ts">
import { qrData, type colorType } from '@/main'
import InputComponent from '@/components/InputComponent.vue';

const props = defineProps<{
  value: 'dots' | 'background' | 'corners' | 'cornerDots'
}>()

function updateValue(newValue: string, field?: string) {
  if (!field) return;


  if (!qrData.value.colour) {
    qrData.value.colour = {
      dots: {} as colorType,
      corners: {} as colorType,
      cornerDots: {} as colorType,
      background: {} as colorType,
    }
  }

  qrData.value.colour[props.value] = {
    ...qrData.value.colour[props.value],
    [field]: newValue,
  }
}

const currentData = qrData.value.colour ? qrData.value.colour[props.value] : {} as colorType;

</script>

<template>
  <InputComponent inputType="radio" value="type" :options="['solid', 'gradient']" default="solid"
    :prefilled="currentData?.type" @update="updateValue" />
  <InputComponent inputType="color" value="color1" :prefilled="currentData?.color1" @update="updateValue" />
</template>
