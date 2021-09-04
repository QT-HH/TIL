const log = console.log

// map
const map = (f, iter) => {
  res = []
  for (const el of iter) {
    res.push(f(el))
  }
  return res
}

// filter
const filter = (f, iter) => {
  res = []
  for (const el of iter) {
    if (f(el)) res.push(el)
  }
  return res
}

// reduce
const reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]()
    acc = iter.next().value
  }

  for (const a of iter) {
    acc = f(acc, a)
  }
  return acc
}