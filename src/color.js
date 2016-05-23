import csscolors from 'css-color-names'
import colorParse from 'color-parse'
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
