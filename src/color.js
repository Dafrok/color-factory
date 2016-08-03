import csscolors from 'color-name'
import getColorType from './color-type.js'
import colorParse, {parseToHex, getLimitedNumber} from './color-parse.js'
import {isLegalRate, isLegalNumber} from './color-validator.js'

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
    if (type === 'unknown') {
      this.R = 0
      this.G = 0
      this.B = 0
      this.H = 0
      this.S = 0
      this.L = 0
      this.A = 0
    } else {
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
  }
  r (val) {
    if (typeof val === 'undefined') {
      return this.R
    } else {
      this.R = getLimitedNumber(val | 0, 255, 0)
      const HSL = colorParse.toHSL(this.toRGB(), 'rgb')
      this.H = HSL.h
      this.S = HSL.s
      this.L = HSL.l
      return this
    }
  }
  g (val) {
    if (typeof val === 'undefined') {
      return this.G
    } else {
      this.G = getLimitedNumber(val | 0, 255, 0)
      const HSL = colorParse.toHSL(this.toRGB(), 'rgb')
      this.H = HSL.h
      this.S = HSL.s
      this.L = HSL.l
      return this
    }
  }
  b (val) {
    if (typeof val === 'undefined') {
      return this.B
    } else {
      this.B = getLimitedNumber(val | 0, 255, 0)
      const HSL = colorParse.toHSL(this.toRGB(), 'rgb')
      this.H = HSL.h
      this.S = HSL.s
      this.L = HSL.l
      return this
    }
  }
  h (val) {
    if (typeof val === 'undefined') {
      return this.H
    } else {
      this.H = (val | 0) % 360
      const RGB = colorParse.toRGB(this.toHSL(), 'hsl')
      this.R = RGB.r
      this.G = RGB.g
      this.B = RGB.b
      return this
    }
  }
  s (val) {
    if (typeof val === 'undefined') {
      return this.S
    } else {
      this.S = getLimitedNumber(parseFloat(val) || 0, 1, 0)
      const RGB = colorParse.toRGB(this.toHSL(), 'hsl')
      this.R = RGB.r
      this.G = RGB.g
      this.B = RGB.b
      return this
    }
  }
  l (val) {
    if (typeof val === 'undefined') {
      return this.L
    } else {
      this.L = getLimitedNumber(parseFloat(val) || 0, 1, 0)
      const RGB = colorParse.toRGB(this.toHSL(), 'hsl')
      this.R = RGB.r
      this.G = RGB.g
      this.B = RGB.b
      return this
    }
  }
  a (val) {
    if (typeof val === 'undefined') {
      return this.A
    } else {
      this.A = getLimitedNumber(parseFloat(val) || 0, 1, 0)
      return this
    }
  }
  getColorType (color) {
    return getColorType(color)
  }
  toHEX () {
    return `#${parseToHex(this.R)}${parseToHex(this.G)}${parseToHex(this.B)}`
  }
  toRGB () {
    return `rgb(${this.R},${this.G},${this.B})`
  }
  toRGBA () {
    return `rgba(${this.R},${this.G},${this.B},${this.A})`
  }
  toHSL () {
    return `hsl(${this.H},${this.S * 100}%,${this.L * 100}%)`
  }
  toHSLA () {
    return `hsla(${this.H},${this.S * 100}%,${this.L * 100}%,${this.A})`
  }
  toSTRING () {
    if (this.A === 0) {
      return 'transparent'
    } else if (this.A === 1) {
      for (const key in csscolors) {
        if (csscolors[key][0] === this.R && csscolors[key][1] === this.G && csscolors[key][2] === this.B) {
          return key
        }
      }
    }
    return ''
  }
}
