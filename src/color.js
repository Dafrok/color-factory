import csscolors from 'css-color-names'
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
      'string':
        break
    }
  }
  _isHex (color) {
    const colorValue = parseInt(color.subString(1, 7), 16)
    return color[0] && (color.length === 7 || color.length === 4) &&　colorValue >=0 && colorValue <=16777215
  }
  _getColorFromString (color) {
    if (window) {
      const el = document.createElement('i')
      el.style.color = color
      return computedColor = (el.currentStyle ? el.currentStyle : window.getComputedStyle(el, null)).color
    } else {
      return csscolors[color] || 'rgb(0, 0, 0)'
    }
  }
  _getColorType (color) {
    const type = color.match(/^(hsl|hsla|rgba|rgb)\(.+\)$/)
    if (type) {
      return type[1]
    } else if (_isHex(color)) {
      return 'hex'
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
