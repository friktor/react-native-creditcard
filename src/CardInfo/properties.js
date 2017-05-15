export const brands = [
  {
    alias: 'visa',
    name: 'Visa',
    codeName: 'CVV',
    codeLength: 3,
    gaps: [4, 8, 12],
    lengths: [16],
    pattern: /^4\d*$/
  },
  {
    alias: 'master-card',
    name: 'MasterCard',
    codeName: 'CVC',
    codeLength: 3,
    gaps: [4, 8, 12],
    lengths: [16],
    pattern: /^(5[1-5]|222[1-9]|2[3-6]|27[0-1]|2720)\d*$/
  },
  {
    alias: 'american-express',
    name: 'American Express',
    codeName: 'CID',
    codeLength: 4,
    gaps: [4, 10],
    lengths: [15],
    pattern: /^3[47]\d*$/
  },
  {
    alias: 'diners-club',
    name: 'Diners Club',
    codeName: 'CVV',
    codeLength: 3,
    gaps: [4, 10],
    lengths: [14],
    pattern: /^3(0[0-5]|[689])\d*$/
  },
  {
    alias: 'discover',
    name: 'Discover',
    codeName: 'CID',
    codeLength: 3,
    gaps: [4, 8, 12],
    lengths: [16, 19],
    pattern: /^(6011|65|64[4-9])\d*$/
  },
  {
    alias: 'jcb',
    name: 'JCB',
    codeName: 'CVV',
    codeLength: 3,
    gaps: [4, 8, 12],
    lengths: [16],
    pattern: /^(2131|1800|35)\d*$/
  },
  {
    alias: 'unionpay',
    name: 'UnionPay',
    codeName: 'CVN',
    codeLength: 3,
    gaps: [4, 8, 12],
    lengths: [16, 17, 18, 19],
    pattern: /^62[0-5]\d*$/
  },
  {
    alias: 'maestro',
    name: 'Maestro',
    codeName: 'CVC',
    codeLength: 3,
    gaps: [4, 8, 12],
    lengths: [12, 13, 14, 15, 16, 17, 18, 19],
    pattern: /^(5[0678]|6304|6390|6054|6271|67)\d*$/
  },
  {
    alias: 'mir',
    name: 'MIR',
    codeName: 'CVC',
    codeLength: 3,
    gaps: [4, 8, 12],
    lengths: [16],
    pattern: /^22\d*$/
  }
]

export const defaultProps = {
  bank: {
    logo: { png: null, svg: null },
    name: { en: null, ru: null },
    country: null,
    alias: null,
    url: null,
    style: {
      gradients: ['#90CAF9', '#3F51B5'],
      png: null, svg: null,
      background: '#eeeeee',
      lightness: 'light',
      text: '#000',
    }
  },

  brand: {
    logo: { svg: null, png: null },
    alias: null,
    name: null,
  },

  numberLengths: [12, 13, 14, 15, 16, 17, 18, 19],
  numberGaps: [4, 8, 12],
  numberBlocks: null,
  codeLength: null,
  numberNice: null,
  numberMask: null,
  codeName: null
}

export const defaultOptions = {
  maskDelimiterSymbol: '-',
  brandLogoPolicy: 'auto',
  gradientDegrees: 135,
  maskDigitSymbol: 'X',
  brandsLogosPath: '',
  banksLogosPath: '',
  preferredExt: 'svg',
}
