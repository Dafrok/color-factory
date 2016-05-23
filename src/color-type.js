import csscolors from 'css-color-names'
function isHex(color) {
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

function isLegalRate (rates) {
  const regexp = /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?%$/
  for (let rate of rates) {
    if (rate[rate.length - 1] !== '%' || regexp.test(+rate.slice(0, rate.length - 1))) {
      return false
    }
  }
  return true
}

function isLegalNumber (numbers) {
  const regexp = /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/
  for (let number of numbers) {
    if (!regexp.test(+number)) {
      return false
    }
  }
  return true
}

function isTransparent(color) {
  return color === 'transparent'
}

function isRGB(colorAry) {
  return colorAry.length === 3 && isLegalNumber(colorAry)
}

function isRGBA(colorAry) {
  return colorAry.length === 4 && isLegalNumber(colorAry)
}

function isHSL(colorAry) {
  return colorAry.length === 3 && isLegalNumber(colorAry.slice(0, 1)) && isLegalRate(colorAry.slice(1))
}

function isHSLA(colorAry) {
  return colorAry.length === 4 && isLegalNumber([colorAry[0], colorAry[3]]) && isLegalRate(colorAry.slice(1, 3))
}

export default function (color) {
  const type = color.match(/^(hsl|hsla|rgba|rgb)\(.+\)$/)
  if (type) {
    let ret = null
    const result = type[1]
    const colorAry = color.replace(/rgba|hsla|rgb|hsl|\(|\)/g, '').split(',')
    switch (type[1]) {
      case 'rgb':
        ret = isRGB(colorAry) && result
        break
      case 'rgba':
        ret = isRGBA(colorAry) && result
        break
      case 'hsl':
        ret = isHSL(colorAry) && result
        break
      case 'hsla':
        ret = isHSLA(colorAry) && result
        break
    }
    if (ret) {
      return ret
    } else {
      throw new Error('Illegal color string.')
    }
  } else if (isHex(color)) {
    return 'hex'
  } else if (isNamedColor(color)) {
    return 'named'
  } else if (isTransparent(color)) {
    return 'transparent'
  } else {
    throw new Error('Illegal color string.')
  }
}
