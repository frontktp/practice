// nullish 병합

// null,undefined가 아닌 값 만나면 반환 or 마지막 값
const n = 0
const num2 = n ?? 7
console.log(num2) // 0

console.log(null ?? 1) // 1
console.log(undefined ?? 2) // 2
console.log(null??undefined) // undefined
console.log(null ?? 1 ?? 2) // 1
console.log(false ?? 1 ?? 2) // false
console.log(0??1??2) // 0