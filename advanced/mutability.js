// 불변성, 가변성

// 자바스크립트 원시형은 불변성, 참조형은 가변성을 가지고 있음.
// 원시형 - 숫자, 문자열, 불린, null, undefined, symbol
let a = {x:1}
let b = a

b.x = 2

console.log(b)
console.log(a)

a.x = 7

console.log(b)
console.log(a)

b.x=1

console.log(b)
console.log(a)

console.log(a === b) // 메모리 주소가 같은지 확인