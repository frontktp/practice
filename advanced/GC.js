// 가비지 컬렉션

// 메모리에서 불필요한 데이터를 해제
// 가비지 컬렉션은 직접 강제 실행하거나 관리 불가.

let a = {x:1}
let b = a

b.x=2
console.log(b)
console.log(a)

// x:1은 불필요하여 없어질 수 있음

const user = {
  name: 'sw',
  age: 29,
  emails:['frontktp@gmail.com, tjsdn95@gmail.com']
}

delete user.emails
console.log(user)