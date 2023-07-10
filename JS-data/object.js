// Object(객체)

// 리터럴 방식 (권장)
const user = {
  name:'sw',
  age:29
}

console.log(user)
console.log(user.name) // 점 표기법
console.log(user['age']) // 대괄호 표기법

// 생성자 방식
// const user = new Object()
// user.name = 'sw'
// user.age = 29

// 함수 내부에서 this 키워드로 속성을 추가하는 방식
// function User() {
//   this.name = 'sw'
//   this.age = 29
// }

// const user = new User()


const userA = {
  name:'firstman',
  age:29
}
const userB = {
  name:'neo',
  age:30,
  parent:userA
}

console.log(userB.parent.name)
console.log(userB['parent'].name)
console.log(userB['parent']['name'])

const users = [userA, userB]
console.log(users[0].name)
