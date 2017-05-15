import banksAndPrefixes from "./banksAndPrefixes"
import autobind from "autobind-decorator"
import _ from "lodash"

import {
  defaultOptions,
  defaultProps,
  brands
} from "./properties"

const { banks, prefixes } = banksAndPrefixes

// @INFO: Inspided and start refactored from https://github.com/iserdmi/card-info
// @TODO: Clean and repalce card info code

@autobind
export default class CardInfo {
  constructor(numberSource = "", options = {}) {
    this.numberSource = numberSource
    this.number = this.getNumber(numberSource)

    _.assign(this, defaultProps, {
      options: {
        ...defaultOptions,
        ...options
      }
    })

    return this.info()
  }

  getNumber(numberSource) {
    var numberSourceString = numberSource + ''
    return /^[\d ]*$/.test(numberSourceString) ? numberSourceString.replace(/\D/g, '') : ''
  }

  getBank(number) {
    if (number.length < 6) return undefined
    var prefix = number.substr(0, 6)
    return prefixes[prefix] ? banks[prefixes[prefix]] : undefined
  }

  getBrand(number) {
    var _brands = []
    for (var i = 0; i < brands.length; i++) {
      if (brands[i].pattern.test(number)) {
        _brands.push(brands[i])
      }
    }
    
    if (_brands.length === 1) {
      return _brands[0]
    }
  }

  getLogo(dirname, basename, extname) {
    return basename ? dirname + (extname ? basename + '.' + extname : basename) : null
  }

  getBrandLogoBasename(brandAlias, brandLogoPolicy, backgroundLightness, bankLogoStyle) {
    switch (brandLogoPolicy) {
      case 'auto': return brandAlias + '-' + (bankLogoStyle || 'colored')
      case 'colored': return brandAlias + '-colored'
      case 'mono': return brandAlias + (backgroundLightness === 'light' ? '-black' : '-white')
      case 'black': return brandAlias + '-black'
      case 'white': return brandAlias + '-white'
    }
  }

  getBlocks(numberGaps, numberLengths) {
    var numberLength = numberLengths[numberLengths.length - 1]
    var blocks = []

    for (var i = numberGaps.length - 1; i >= 0; i--) {
      var blockLength = numberLength - numberGaps[i]
      numberLength -= blockLength
      blocks.push(blockLength)
    }

    blocks.push(numberLength)
    return blocks.reverse()
  }

  getMask(maskDigitSymbol, maskDelimiterSymbol, numberBlocks) {
    var mask = ''
    for (var i = 0; i < numberBlocks.length; i++) {
      mask += (i ? maskDelimiterSymbol : '') + Array(numberBlocks[i] + 1).join(maskDigitSymbol)
    }
    return mask
  }

  getNumberNice(number, numberGaps) {
    var offsets = [0].concat(numberGaps).concat([number.length])
    var components = []
    for (var i = 0; offsets[i] < number.length; i++) {
      var start = offsets[i]
      var end = Math.min(offsets[i + 1], number.length)
      components.push(number.substring(start, end))
    }
    return components.join(this.options.maskDelimiterSymbol)
  }

  registerBank() {
    var { banksLogosPath, banksLogosPath, preferredExt } = this.options
    var info = this.getBank(this.number)

    if (info) {
      var bank = {}
      bank.logo = {
        png: this.getLogo(banksLogosPath, info.logoPng),
        svg: this.getLogo(banksLogosPath, info.logoSvg),
        style: info.logoStyle
      }

      bank.name = { ru: info.name, en: info.nameEn }
      bank.country = info.country
      bank.alias = info.alias
      bank.url = info.url

      bank.style = {
        lightness: info.backgroundLightness,
        gradients: info.backgroundColors,
        background: info.backgroundColor,
        text: info.text
      }

      this.bank = bank
    }
  }

  registerBrand() {
    var info = this.getBrand(this.number)
    var { brandLogoPolicy, maskDigitSymbol, maskDelimiterSymbol } = this.options

    if (info) {
      this.codeLength = info.codeLength
      this.codeLengths = info.lengths
      this.codeName = info.codeName
      this.numberGaps = info.gaps

      var brand = {}
      
      brand.alias = info.alias
      brand.name = info.name

      var logoBasename = this.getBrandLogoBasename(brand.alias, brandLogoPolicy, this.bank.style.lightness, this.bank.logo.style)
      brand.logo = {
        basename: logoBasename,
        png : this.getLogo(this.options.brandsLogosPath, logoBasename, 'png'),
        svg : this.getLogo(this.options.brandsLogosPath, logoBasename, 'svg'),
      }

      this.brand = brand
    }

    this.numberBlocks = this.getBlocks(this.numberGaps, this.numberLengths)
    this.numberMask = this.getMask(maskDigitSymbol, maskDelimiterSymbol, this.numberBlocks)
    this.numberNice = this.getNumberNice(this.number, this.numberGaps)
  }

  info() {
    this.registerBank()
    this.registerBrand()
  }
}