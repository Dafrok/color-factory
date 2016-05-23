function isHexColor(color) {
  const colorValue = parseInt(color.substring(1, 7), 16)
  return color[0] === '#' && (color.length === 7 || color.length === 4) &&　colorValue >=0 && colorValue <=16777215
}

function isNamedColor(color) {
  if (window) {
    const el = document.createElement('i')
    el.style.color = ''
    el.style.color = color
    return !!el.style.color && el.style.color !== 'transparent'
    // return computedColor = (el.currentStyle ? el.currentStyle : window.getComputedStyle(el, null)).color
  } else {
    return color in csscolors[color]
  }
}

function isTransparent(color) {
  return color === 'transparent'
}

function isRGB(color) {
  return
}

function isRGBA(color) {
  return
}

function isHSL(color) {
  return
}

function isHSLA(color) {
  return
}

export default function (color) {
  const type = color.match(/^(hsl|hsla|rgba|rgb)\(.+\)$/)
  if (type) {
    const result = type[1]
    switch (type[1]) {
      'rgb':
        return isRGB(color) && result
      'rgba':
        return isRGBA(color) && result
      'hsl':
        return isHSL(color) && result
      'hsla':
        return isHSLA(color) && result
      default:
        throw new Error('Illegal color string.')
    }
  } else if (isHexColor(color)) {
    return 'hex'
  } else if (isNamedColor(color)) {
    return 'named'
  } else if (isTransparent(color)) {
    return 'transparent'
  } else {
    throw new Error('Illegal color string.')
  }
}
