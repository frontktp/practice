// 데이터 타입 확인

const a = 123

console.log(typeof a)
console.log(typeof 'hello' === 'string')
console.log(typeof 123 === 'number')
console.log(typeof undefined === 'undefined')
console.log(typeof null === 'null')
console.log(typeof null === 'object')
console.log(typeof [] === 'object')
console.log(typeof {} === 'object')
console.log(typeof function () {} === 'function')

console.log([].constructor === Array)
console.log({}.constructor === Object)
// console.log(null.constructor === 'null')
function checkType(data) {
  return Object.prototype.toString.call(data).slice(8, -1)
}
console.log(checkType('hello'))
console.log(checkType([]))
console.log(checkType({}))
console.log(checkType(null))