// 얕은 복사 & 깊은 복사

// 참조형은 가변성으로 인해, 데이터 복사시 주의

// 얕은 복사 - 참조형의 1차원 데이터 복사
// 깊은 복사 - 참조형의 모든 차원 데이터를 복사

const a = {x:1}
const b = Object.assign({}, a)
// const b = { ...a }
b.x = 2

console.log(b) // {x:2}
console.log(a) // {x:1}