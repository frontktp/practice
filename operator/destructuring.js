// 구조 분해 할당(Destructuring assignment)

const arr = [1,2,3]
// const a = arr[0]
// const b = arr[1]
// const c = arr[2]
// ;const [a,b,c] = arr

console.log(a,b,c)

const [a,rest] = arr

console.log(a,rest) // 1 2
console.log(a,...rest) // 1 [2,3]

const obj = {
  aa:1,
  bb:2,
  cc:3,
  xx:7
}
const {aa,bb} = obj
console.log(aa,bb,) // 1 2
const {xx=4, aa:sw, yy:ten=10} = obj // xx의 기본값(7)이 없으면 4로 반환
console.log(xx,sw,ten)