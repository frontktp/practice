// 전개연산자

const a = [1,2,3]
const b = [4,5,6]
// console.log(...a) // 1,2,3
// console.log(1,2,3)

const c = a.concat(b)
console.log(c)

// const d = [a,b]
// console.log(d) // [[1,2,3], [4,5,6]]

const d = [...a, ...b]
console.log(d) // [1,2,3,4,5,6]

const aa = {x:1,y:2}
const bb = {y:3,z:4}

const cc = Object.assign({}, a, b)
console.log(cc) // {x:1,y:3,z:4}

const dd = {...aa, ...bb}
console.log(dd) // {x:1, y:3, z:4}


function fn(x,y,z) {
  console.log(x,y,z)
}

fn(1,2,3)

const f = [1,2,3]

fn(...f) // 1 2 3