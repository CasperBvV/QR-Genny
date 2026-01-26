/**
 *   Copyright (C) 2026  Casper Buurman
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU Affero General Public License as
 *   published by the Free Software Foundation, either version 3 of the
 *   License, or (at your option) any later version.
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU Affero General Public License for more details.
 *
 *   You should have received a copy of the GNU Affero General Public License
 *   along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import './assets/main.scss'

import { createApp, ref, watch } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

interface colorType {
  type: 'solid' | 'gradient',
  gradientType?: 'linear' | 'radial',
  color1: string,
  color2?: string,
  rotation?: number
}

interface qrDataType {
  home: {
    type: string
  }
  content: Record<string, string>
  colour: {
    dots: colorType
    corners: colorType
    cornerDots: colorType
    background: colorType
  },
  style: {
    dotStyle: string
    cornerStyle: string
    cornerDotStyle: string
  },
  frame: unknown,
  icon: unknown,
  advanced: {
    type: number
    errorCorrectionLevel: 'L' | 'M' | 'Q' | 'H'
    mode: string
  }
}


export const qrData = ref<qrDataType>({} as qrDataType)
watch(qrData.value, (newData) => {
  console.log('main.ts qrData changed:', newData)
})
