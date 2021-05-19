const map = (a, f) => {
    let r = []
    for (let i = 0; i < a.length; i++ ) {
        r.push(f(a[i])) // Unique work
      }
    return r
}

const reduce = (array, callback, startingValue) => {
  const isFalse = (currentValue) => currentValue == null

  if (array.every(isFalse)) {
    return true
  }

  let total = false
  if (startingValue) {
  total += startingValue
  }
  array.forEach(thing => {
    total = callback(total, thing)
  })
  return total
}