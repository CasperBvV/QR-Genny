
import { ref, watch } from 'vue'
import {
  type DrawType,
  type TypeNumber,
  type Mode,
  type ErrorCorrectionLevel,
  type DotType,
  type CornerSquareType,
  type CornerDotType,
  // Extension
} from 'qr-code-styling';

export const qrOptions = ref({
  width: 300,
  height: 300,
  type: 'canvas' as DrawType,
  data: 'https://cbuurman.nl',
  // image: '/favicon.ico',
  margin: 10,
  qrOptions: {
    typeNumber: 0 as TypeNumber,
    mode: 'Byte' as Mode,
    errorCorrectionLevel: 'Q' as ErrorCorrectionLevel
  },
  imageOptions: {
    hideBackgroundDots: true,
    imageSize: 0.4,
    margin: 20,
    crossOrigin: 'anonymous',
  },
  dotsOptions: {
    color: '#000000',
    // gradient: {
    //   type: 'linear', // 'radial'
    //   rotation: 0,
    //   colorStops: [{ offset: 0, color: '#8688B2' }, { offset: 1, color: '#77779C' }]
    // },
    type: 'square' as DotType
  },
  backgroundOptions: {
    color: '#ffffff',
    // gradient: {
    //   type: 'linear', // 'radial'
    //   rotation: 0,
    //   colorStops: [{ offset: 0, color: '#ededff' }, { offset: 1, color: '#e6e7ff' }]
    // },
  },
  cornersSquareOptions: {
    color: '#000000',
    type: 'square' as CornerSquareType,
    // gradient: {
    //   type: 'linear', // 'radial'
    //   rotation: 180,
    //   colorStops: [{ offset: 0, color: '#25456e' }, { offset: 1, color: '#4267b2' }]
    // },
  },
  cornersDotOptions: {
    color: '#000000',
    type: 'square' as CornerDotType,
    // gradient: {
    //   type: 'linear', // 'radial'
    //   rotation: 180,
    //   colorStops: [{ offset: 0, color: '#00266e' }, { offset: 1, color: '#4060b3' }]
    // },
  }
});


export interface colorType {
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
    dotStyle: DotType
    cornerStyle: CornerSquareType
    cornerDotStyle: CornerDotType
  },
  frame: unknown,
  icon: {
    hideBackgroundDots: boolean
    size: number
    margin: number
    crossOrigin: string,
  },
  advanced: {
    type: number
    errorCorrectionLevel: ErrorCorrectionLevel
    mode: string
  }
}


export const qrData = ref<qrDataType>({} as qrDataType)
watch(qrData.value, (newData) => {
  const contentString = parseContent(newData.content, newData.home?.type || 'text');
  qrOptions.value.data = contentString;
  console.log('QR Data updated:', qrOptions.value.data);
})

function parseContent(content: Record<string, string>, type: string): string {
  let dataString = '';
  if (type === 'vCard') {
    dataString += 'BEGIN:VCARD\nVERSION:3.0\n';
    for (const [key, value] of Object.entries(content)) {
      dataString += `${key}: ${value}\n`;
    }
    dataString += 'END:VCARD';
  } else {
    dataString = content?.text || 'https://cbuurman.nl';
  }
  return dataString.trim();
}
