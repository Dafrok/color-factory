export function isLegalRate (rates) {
  const regexp = /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/
  for (let rate of rates) {
    if (rate[rate.length - 1] !== '%' || !regexp.test(+rate.slice(0, rate.length - 1))) {
      return false
    }
  }
  return true
}

export function isLegalNumber (numbers) {
  const regexp = /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/
  for (let number of numbers) {
    if (!regexp.test(+number)) {
      return false
    }
  }
  return true
}
