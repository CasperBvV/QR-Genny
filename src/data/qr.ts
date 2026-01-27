
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


import { ref, watch } from 'vue'
import {
  type DrawType,
  type TypeNumber,
  type Mode,
  type ErrorCorrectionLevel,
  type DotType,
  type CornerSquareType,
  type CornerDotType
} from 'qr-code-styling';

export const qrOptions = ref({
  width: 300,
  height: 300,
  type: 'canvas' as DrawType,
  data: 'Hello, World!',
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
    // color: '#000000',
    // gradient: {
    //   type: 'linear', // 'radial'
    //   rotation: 0,
    //   colorStops: [{ offset: 0, color: '#8688B2' }, { offset: 1, color: '#77779C' }]
    // },
    type: 'square' as DotType
  },
  backgroundOptions: {
    // color: '#ffffff',
    // gradient: {
    //   type: 'linear', // 'radial'
    //   rotation: 0,
    //   colorStops: [{ offset: 0, color: '#ededff' }, { offset: 1, color: '#e6e7ff' }]
    // },
  },
  cornersSquareOptions: {
    // color: '#000000',
    type: 'square' as CornerSquareType,
    // gradient: {
    //   type: 'linear', // 'radial'
    //   rotation: 180,
    //   colorStops: [{ offset: 0, color: '#25456e' }, { offset: 1, color: '#4267b2' }]
    // },
  },
  cornersDotOptions: {
    // color: '#000000',
    type: 'square' as CornerDotType,
    // gradient: {
    //   type: 'linear', // 'radial'
    //   rotation: 180,
    //   colorStops: [{ offset: 0, color: '#00266e' }, { offset: 1, color: '#4060b3' }]
    // },
  }
});


export interface colorType {
  type: 'solid' | 'gradient' | 'default',
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
    dotsOptions: colorType
    cornersSquareOptions: colorType
    cornersDotOptions: colorType
    backgroundOptions: colorType
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

  parseContent(newData.content, newData.home?.type || 'text');

  parseDotColorOptions(newData.colour?.dotsOptions);
  parseBackgroundColorOptions(newData.colour?.backgroundOptions);
  parseCornerSquareColorOptions(newData.colour?.cornersSquareOptions);
  parseCornerDotColorOptions(newData.colour?.cornersDotOptions);
}

function parseContent(content: Record<string, string>, type: string) {
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
    case 'vcard':
      dataString = generateVCard(content);
      break;
    default:
      dataString = content[type] || 'https://cbuurman.nl';
  }

  qrOptions.value.data = dataString;
}

function escapeVCardText(text: string | undefined): string {
  return text
    ? text
        .replace(/\\/g, '\\\\')
        .replace(/,/g, '\\,')
        .replace(/;/g, '\\;')
        .replace(/\n/g, '\\n')
    : '';
}
function generateVCard(content: Record<string, string>): string {
  let dataString = '';
  dataString += 'BEGIN:VCARD\nVERSION:3.0\n';


  // Name
  dataString += `N:${escapeVCardText(content.lname)};${escapeVCardText(content.fname)};${escapeVCardText(content.mname)};${escapeVCardText(content.prefix)};${escapeVCardText(content.suffix)}\n`;
  const fullName = [escapeVCardText(content.prefix), escapeVCardText(content.fname), escapeVCardText(content.mname), escapeVCardText(content.lname), escapeVCardText(content.suffix)].filter(Boolean).join(' ');
  dataString += `FN:${fullName}\n`;

  if (content.nickname) {
    dataString += `NICKNAME:${escapeVCardText(content.nickname)}\n`;
  }

  // Contact details
  if (content.phone) {
    dataString += `TEL;TYPE=CELL:${escapeVCardText(content.phone)}\n`;
  }
  if (content.email) {
    dataString += `EMAIL;TYPE=HOME;TYPE=INTERNET:${escapeVCardText(content.email)}\n`;
  }
  if (content.website) {
    dataString += `URL:${escapeVCardText(content.website)}\n`;
  }

  // Work details
  if (content.org || content.department || content.subDepartment) {
    dataString += `ORG:${escapeVCardText(content.org)};${escapeVCardText(content.department)};${escapeVCardText(content.subDepartment)}\n`;
  }
  if (content.title) {
    dataString += `TITLE:${escapeVCardText(content.title)}\n`;
  }
  if (content.workEmail) {
    dataString += `EMAIL;TYPE=WORK;TYPE=INTERNET:${escapeVCardText(content.workEmail)}\n`;
  }
  if (content.workPhone) {
    dataString += `TEL;TYPE=WORK,VOICE:${escapeVCardText(content.workPhone)}\n`;
  }

  dataString += 'END:VCARD';
  return dataString.trim();
}

function parseDotColorOptions(colorData: colorType) {
  if (!colorData?.type) return;

  const data = ref<{ color?: string; type: DotType; gradient?: object }>({
    type: qrOptions.value.dotsOptions.type
  });

  switch (colorData.type) {
    case 'solid':
      data.value = {
        color: colorData.color1 || '#000000',
        type: qrOptions.value.dotsOptions.type
      };
      break;
    case 'gradient':
      data.value = {
        type: qrOptions.value.dotsOptions.type,
        gradient: {
          type: colorData.gradientType || 'linear',
          rotation: colorData.rotation || 0,
          colorStops: [
            { offset: 0, color: colorData.color1 },
            { offset: 1, color: colorData.color2 || colorData.color1 }
          ]
        }
      };
      break;
    case 'default':
      data.value = {
        type: qrOptions.value.dotsOptions.type
      };
      break;
  }

  qrOptions.value.dotsOptions = data.value;
}

function parseBackgroundColorOptions(colorData: colorType) {
  if (!colorData?.type) return;

  const data = ref<{ color?: string; gradient?: object }>({});

  switch (colorData.type) {
    case 'solid':
      data.value = {
        color: colorData.color1
      };
      break;
    case 'gradient':
      data.value = {
        gradient: {
          type: colorData.gradientType || 'linear',
          rotation: colorData.rotation || 0,
          colorStops: [
            { offset: 0, color: colorData.color1 },
            { offset: 1, color: colorData.color2 || colorData.color1 }
          ]
        }
      };
      break;
    case 'default':
      data.value = {};
      break;
  }

  qrOptions.value.backgroundOptions = data.value;
}

function parseCornerSquareColorOptions(colorData: colorType) {
  if (!colorData?.type) return;

  const data = ref<{ color?: string; type: CornerSquareType; gradient?: object }>({
    type: qrOptions.value.cornersSquareOptions.type
  });

  switch (colorData.type) {
    case 'solid':
      data.value = {
        color: colorData.color1 || '#000000',
        type: qrOptions.value.cornersSquareOptions.type
      };
      break;
    case 'gradient':
      data.value = {
        type: qrOptions.value.cornersSquareOptions.type,
        gradient: {
          type: colorData.gradientType || 'linear',
          rotation: colorData.rotation || 0,
          colorStops: [
            { offset: 0, color: colorData.color1 },
            { offset: 1, color: colorData.color2 || colorData.color1 }
          ]
        }
      };
      break;
    case 'default':
      data.value = {
        type: qrOptions.value.cornersSquareOptions.type
      };
      break;
  }

  qrOptions.value.cornersSquareOptions = data.value;
}

function parseCornerDotColorOptions(colorData: colorType) {
  if (!colorData?.type) return;

  const data = ref<{ color?: string; type: CornerDotType; gradient?: object }>({
    type: qrOptions.value.cornersDotOptions.type
  });

  switch (colorData.type) {
    case 'solid':
      data.value = {
        color: colorData.color1 || '#000000',
        type: qrOptions.value.cornersDotOptions.type
      };
      break;
    case 'gradient':
      data.value = {
        type: qrOptions.value.cornersDotOptions.type,
        gradient: {
          type: colorData.gradientType || 'linear',
          rotation: colorData.rotation || 0,
          colorStops: [
            { offset: 0, color: colorData.color1 },
            { offset: 1, color: colorData.color2 || colorData.color1 }
          ]
        }
      };
      break;
    case 'default':
      data.value = {
        type: qrOptions.value.cornersDotOptions.type
      };
      break;
  }

  qrOptions.value.cornersDotOptions = data.value;
}
