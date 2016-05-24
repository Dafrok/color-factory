import hslConverter from 'hsl-to-rgb'

function hexToRGB(color) {
  color.length === 4 && (color = `#${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}`)
  return {
    r: parseInt(color.slice(1, 3), 16),
    g: parseInt(color.slice(3, 5), 16),
    b: parseInt(color.slice(5, 7), 16)
  }
}

function rgbaToRGB(color) {
  rgbAry = color.slice(4, -1).split(',')
  return {
    r: rgbAry[0],
    g: rgbAry[1],
    b: rgbAry[2]
  }
}

function hslaToRGB(color) {
  hslAry = color.slice(4, -1).split(',')
  hslAry[1] = parseFloat(hslAry[1].slice(0, -1)) / 100
  hslAry[2] = parseFloat(hslAry[2].slice(0, -1)) / 100
  rgbAry = hslConverter(hslAry[0], hslAry[1], hslAry[2])
  return {
    r: rgbAry[0],
    g: rgbAry[1],
    b: rgbAry[2]
  }
}

export default function (color, type) {
  const RGB = {r: 0, g: 0, b: 0}
  const HSL = {h: 0, s: 0, l: 0}
  return {
    toHSL (color, type) {
      switch (type) {
        'hex':
          break
        'rgb':
          break
        'rgba':
          break
        'hsl':
          break
        'hsla':
          break
        'named':
          break
      }
      return HSL
    },
    toRGB (color, type) {
      switch (type) {
        'hex':
          return hexToRGB(color)
          break
        'rgb':
          return rgbaToRGB(color)
          break
        'rgba':
          return rgbaToRGB(color)
          break
        'hsl':
          return hslaToRGB(color)
          break
        'hsla':
          return hslaToRGB(color)
          break
        'named':
          break
      }
      return RGB
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
}
