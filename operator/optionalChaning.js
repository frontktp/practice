// 선택적 체이닝(Optional Chaining)

const user = null
// const user = undefined
console.log(user?.name) // null

const userA = {
  name:'sw',
  age:29,
  address:{
    country: 'korea',
    city:'iksan'
  }
}
const userB = {
  name:'neo',
  age:22
}

function getCity(users) {
  return user.address?.city || '주소 없음'
}

console.log(getCity(userA))
console.log(getCity(userB)) // undefined