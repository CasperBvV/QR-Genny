
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
const latestUpdate = ref<number>(0);
watch(qrData.value, (newData) => {
  latestUpdate.value = Date.now();

  // Wait until no updates for 500ms
  const currentUpdate = latestUpdate.value;
  setTimeout(() => {
    if (currentUpdate === latestUpdate.value) {
      // Apply updates to qrOptions
      applyUpdates(newData);
    }
  }, 500);
}, { deep: true });

function applyUpdates(newData: qrDataType) {
  console.log('Applying updates to qrOptions:', newData);
  // Update qrOptions based on qrData content

  qrOptions.value.data = parseContent(newData.content, newData.home?.type || 'text');
}

function parseContent(content: Record<string, string>, type: string): string {
  let dataString = '';
  content = content || {};

  switch (type) {
    case 'text':
      dataString = content.text || 'Hello, World!';
      break;
    case 'url':
      let input : string = content.url || 'cbuurman.nl';
      if (!input.startsWith('http://') && !input.startsWith('https://')) {
        input = 'https://' + input;
      }
      dataString = input;
      break;
    case 'vCard':
      dataString = generateVCard(content);
      break;
    default:
      dataString = content[type] || 'https://cbuurman.nl';
  }

  return dataString;
}

function generateVCard(content: Record<string, string>): string {
  let dataString = '';
  dataString += 'BEGIN:VCARD\nVERSION:3.0\n';
  for (const [key, value] of Object.entries(content)) {
    dataString += `${key}: ${value}\n`;
  }
  dataString += 'END:VCARD';
  return dataString.trim();
}
