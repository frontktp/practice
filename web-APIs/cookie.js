// Cookie
// 도메인 단위로 저장
// 사이트당 최대 20개 및 4kb로 제한
// 영구 저장 불가능

// domain: 유효 도메인 설정
// path: 유효 경로 설정
// expires: 만료 날짜 설정
// max-age: 만료 타이머(s) 설정

document.cookie = 'a=1; domain=localhost; path=/; max-age=3'
document.cookie = `b=2; expires=${new Date(2023, 11, 31).toUTCString()}`
document.cookie = 'a=3'

console.log(document.cookie)