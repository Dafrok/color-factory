import getColorType from './color-type.js'
import colorParse, {parseToHex} from './color-parse.js'

export default class Color {
  constructor (cssColor = {r: 0, g: 0, b: 0, h: 0, s: 0, l: 0, a: 0}) {
    let color
    let type
    if (typeof cssColor === 'string') {
      color = cssColor.replace(/ /g, '')
      type = this.getColorType(color)
    } else {
      if (cssColor.r || cssColor.g || cssColor.b) {
        color = `rgba(${cssColor.r || 0},${cssColor.g || 0},${cssColor.b || 0},${cssColor.a || 1})`
        type = 'rgba'
      } else {
        color = `hsl(${cssColor.h || 0},${(cssColor.s || 0) * 100}%,${(cssColor.l || 0) * 100}%,${cssColor.a || 1})`
        type = 'hsla'
      }
    }
    const RGB = colorParse.toRGB(color, type)
    const HSL = colorParse.toHSL(color, type)
    const ALPHA = colorParse.getAlpha(color, type)
    this.R = RGB.r
    this.G = RGB.g
    this.B = RGB.b
    this.H = HSL.h
    this.S = HSL.s
    this.L = HSL.l
    this.A = ALPHA
  }
  // r (val) {
  //   if (type of val === 'undefined') {
  //     return this.R
  //   } else {
  //     this.R = val
  //     return this
  //   }
  // }
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
