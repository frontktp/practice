// storage

// 도메인 단위로 저장 5mb 제한
// 세션 혹은 영구 저장 가능

// .getItem(): 데이터 조회
// .setItem(): 데이터 추가
// .removeItem(): 데이터 제거
// .clear(): 스토리지 초기화

// sessionStorge: 브라우저 세션이 유지되는 동안에만 데이터 저장
// localStorge: 따로 제거하지 않으면 영구적으로 데이터 저장

localStorage.setItem('a', 'Hello world!')
localStorage.setItem('b', JSON.stringify({ x:1, y:2}))
localStorage.setItem('c', JSON.stringify(123))

console.log(localStorage.getItem('a'))
console.log(JSON.parse(localStorage.getItem('b')))
console.log(JSON.parse(localStorage.getItem('c')))