// for 반복문

// for (초기화; 조건; 증감) {
//   // 반복 실행할 코드
// }

for (let ii = 9; ii>-1; ii-=1) {
  if (ii < 4) {
    break
  }
  console.log(ii)
}

// for of
const fruits = ['apple','banana','cherry']
// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(fruits[i])
// }
for (const fruit of fruits) {
  console.log(fruit)
}

const users = [
  {
    name:'sw',
    age:29
  },{
    name:'neo',
    age:22
  },{
    name:'lewis',
    age:34
  }
]

for (let i = 0; i < users.length; i+=1) {
  console.log(users[i].name)
}

for (const user of users) {
  console.log(user.name)
}

// for in

const usera = {
  name: 'swk',
  age:30,
  isValid:true,
  email:'frontktp@gmail.com'
}

for (const key in usera) {
  console.log(key)
  console.log(usera[key])
}
