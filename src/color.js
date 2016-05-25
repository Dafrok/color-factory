import getColorType from './color-type.js'
import colorParse, {parseToHex} from './color-parse.js'

class Color {
  constructor (cssColor) {
    const color = cssColor.replace(/ /g, '')
    const type = this.getColorType(color)
    const RGB = colorParse.toRGB(color, type)
    const HSL = colorParse.toHSL(color, type)
    const ALPHA = colorParse.getAlpha(color, type)
    this.r = RGB[0]
    this.g = RGB[1]
    this.b = RGB[2]
    this.h = HSL[0]
    this.s = HSL[1]
    this.l = HSL[2]
    this.a = ALPHA
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
