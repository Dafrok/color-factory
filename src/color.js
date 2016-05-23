import getColorType from './color-type.js'

class Color {
  constructor (cssColor) {
    const color = cssColor.replace(/ /g, '')
    const type = this.getColorType(color)
    switch (type) {
      'hex':
      'rgb':
      'rgba':
      'hsl':
      'hsla':
      'named':
      'transparent':
        break
    }
  }
  getColorType (color) {
    return getColorType(color)
  }
  toHex () {

  }
  toRGB () {

  }
  toRGBA () {

  }
  toHSL () {

  }
  toHSLA () {

  }
  toString () {

  }
}
