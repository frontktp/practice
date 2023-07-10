// function getNumber() {
//   return 123
// }

const getNumber = function () {
  return 123
}

console.log(getNumber)
console.log(typeof getNumber)
console.log(getNumber()) // console.log(123)
console.log(typeof getNumber())


// 심화
const a = function () {
  console.log('A')
}

const b = function (c) {
  console.log(c)
  c()
}

b(a)