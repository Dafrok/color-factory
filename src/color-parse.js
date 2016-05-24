export default function (color, type) {
  let RGB = {}
  let HSL = {}
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
    'transparent':
      break
  }
  return {
    toHSL (color, type) {

    },
    toRGB (color, type) {

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
