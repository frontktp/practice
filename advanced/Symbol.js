// 심볼

// 변경이 불가능한 데이터, 유일한 식별자를 만들어 데이터 보호 용도로 사용
// 심볼로 만들어진 코드는 일반적으로 조회할 수 없다

const sKey = Symbol('Hello!')
const user = {
  key: '일반정보',
  [sKey]: '민감한 정보'
}

console.log(user.key)
console.log(user['key'])
console.log(user[sKey])
console.log(user[Symbol('Hello!')])