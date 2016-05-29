const regexp = /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/

export function isLegalRate (rates) {
  for (let rate of rates) {
    if (rate[rate.length - 1] !== '%' || !regexp.test(+rate.slice(0, rate.length - 1))) {
      return false
    }
  }
  return true
}

export function isLegalNumber (numbers) {
  for (let number of numbers) {
    if (!regexp.test(+number)) {
      return false
    }
  }
  return true
}
