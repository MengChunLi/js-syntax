function* hello() {
  const name = yield
  const hi = yield "hi, " + name + " welcome."
}

const hey = hello();
hey.next()
console.log(hey.next("momo").value)
  // console.log(hey.next("momo").value)
  // console.log(hey.next().value)