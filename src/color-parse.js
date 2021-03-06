import hslConverter from 'hsl-to-rgb-for-reals'
import rgbConverter from 'rgb-to-hsl'
import csscolors from 'color-name'

export function parseToHex(num) {
  let ret = num.toString(16)
  return ret.length === 1 ? ('0' + ret) : ret
}

export function getLimitedNumber(num, max, min) {
  return num > max ? max : (num < min ? min : num)
}

function rgbaToHSL (color) {
  const rgbAry = color.slice(color.indexOf('(') + 1, color.indexOf(')')).split(',')
  const hslAry = rgbConverter(getLimitedNumber(rgbAry[0], 255, 0), getLimitedNumber(rgbAry[1], 255, 0), getLimitedNumber(rgbAry[2], 255, 0))
  hslAry[1] = hslAry[1].slice(0, -1) / 100
  hslAry[2] = hslAry[2].slice(0, -1) / 100
  return {
    h: hslAry[0],
    s: hslAry[1],
    l: hslAry[2]
  }
}

function hslaToHSL (color) {
  const rgb = hslaToRGB(color)
  return rgbaToHSL(`rgb(${rgb.r},${rgb.g},${rgb.b})`)
}

function hexToHSL (color) {
  const rgb = hexToRGB(color)
  return rgbaToHSL(`rgb(${rgb.r},${rgb.g},${rgb.b})`)
}

function namedToHSL (color) {
  const rgb = namedToRGB(color)
  return rgbaToHSL(`rgb(${rgb.r},${rgb.g},${rgb.b})`)
}


function hexToRGB(color) {
  color.length === 4 && (color = `#${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}`)
  return {
    r: parseInt(color.slice(1, 3), 16),
    g: parseInt(color.slice(3, 5), 16),
    b: parseInt(color.slice(5, 7), 16)
  }
}

function rgbaToRGB(color) {
  const rgbAry = color.slice(color.indexOf('(') + 1, color.indexOf(')')).split(',')
  return {
    r: getLimitedNumber(+rgbAry[0], 255, 0),
    g: getLimitedNumber(+rgbAry[1], 255, 0),
    b: getLimitedNumber(+rgbAry[2], 255, 0)
  }
}

function hslaToRGB(color) {
  const hslAry = color.slice(color.indexOf('(') + 1, color.indexOf(')')).split(',')
  let h = hslAry[0] % 360
  let s = getLimitedNumber(hslAry[1].slice(0, -1) / 100, 1, 0)
  let l = getLimitedNumber(hslAry[2].slice(0, -1) / 100, 1, 0)
  const rgbAry = hslConverter(h, s, l)
  return {
    r: rgbAry[0],
    g: rgbAry[1],
    b: rgbAry[2]
  }
}

function namedToRGB(color) {
  return {
    r: csscolors[color][0],
    g: csscolors[color][1],
    b: csscolors[color][2]
  }
}

export default {
  toHSL (color, type) {
    switch (type) {
      case 'hex':
        return hexToHSL(color)
      case 'rgb':
      case 'rgba':
        return rgbaToHSL(color)
      case 'hsl':
      case 'hsla':
        return hslaToHSL(color)
      case 'named':
        return namedToHSL(color)
    }
    return {h: 0, s: 0, l: 0}
  },
  toRGB (color, type) {
    switch (type) {
      case 'hex':
        return hexToRGB(color)
      case 'rgb':
      case 'rgba':
        return rgbaToRGB(color)
      case 'hsl':
      case 'hsla':
        return hslaToRGB(color)
      case 'named':
        return namedToRGB(color)
    }
    return {r: 0, g: 0, b: 0}
  },
  getAlpha (color, type) {
    if (color === 'transparent') {
      return 0
    } else if (type === 'rgba' || type === 'hsla') {
      let alpha = parseFloat(color.split(',')[3].slice(0, -1))
      alpha = alpha > 1 ? 1 : alpha
      alpha = alpha < 0 ? 0 : alpha
      return alpha
    } else {
      return 1
    }
  }
}
