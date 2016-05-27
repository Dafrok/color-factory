import getColorType from './color-type.js'
import colorParse, {parseToHex} from './color-parse.js'

export default class Color {
  constructor (cssColor = {}) {
    if (typeof cssColor === 'string') {
      const color = cssColor.replace(/ /g, '')
      const type = this.getColorType(color)
      const RGB = colorParse.toRGB(color, type)
      const HSL = colorParse.toHSL(color, type)
      const ALPHA = colorParse.getAlpha(color, type)
      this.r = RGB.r
      this.g = RGB.g
      this.b = RGB.b
      this.h = HSL.h
      this.s = HSL.s
      this.l = HSL.l
      this.a = ALPHA
    } else {
      this.r = cssColor.r || 0
      this.g = cssColor.g || 0
      this.b = cssColor.b || 0
      this.h = cssColor.h || 0
      this.s = cssColor.s || 0
      this.l = cssColor.l || 0
      this.a = cssColor.a || 0
    }

  }
  getColorType (color) {
    return getColorType(color)
  }
  toHex () {
    return `#${parseToHex(this.r)}${parseToHex(this.g)}${parseToHex(this.b)}`
  }
  toRGB () {
    return `rgb(${this.r},${this.g},${this.b})`
  }
  toRGBA () {
    return `rgb(${this.r},${this.g},${this.b},${this.a})`
  }
  toHSL () {
    return `rgb(${this.h},${this.s},${this.l})`
  }
  toHSLA () {
    return `rgb(${this.h},${this.s},${this.l},${this.a})`
  }
}
