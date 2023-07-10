// 논리

// and 연산자
// const a = true
// const b = false

// if (a && b) {
//   console.log('모두 참')
// }

// if (a||b) {
//   console.log('하나 이상이 참')
// }

console.log(true && false)
console.log(1 && 0) // 0, 가장 먼저 만나는 거짓 반환
console.log(1 && 0 && 2) // 0 
console.log('a'&&'b'&&'c') // 'c'

console.log(false || true) // true, 가장 먼저 만나는 참 반환
console.log(0 || 1) // 1
console.log(false||0||NaN|undefined||null|1) // 1
