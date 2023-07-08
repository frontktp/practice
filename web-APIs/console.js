// console
// .log() .warn() .errer() .dir()

// 콘솔에 메세지나 객체를 출력.

// log: 일반
// warn: 경고
// error: 에러
// dir: 속성을 볼 수 있는 객체를 출력

console.log(document.body)
console.warn(document.body)
console.error(document.body)
console.dir(document.body)

// .clear()
// 콘솔에 기록된 메세지를 모두 삭제.

console.log(1)
console.log(2)
console.log(3)
console.clear()

// 서식 문자 치환
// %s 문자로 적용
// %o 객체로 적용
// %c CSS를 적용

const a = 'The brown fox'
const b = 3
const c = {
  f : 'fox',
  d : 'dog'
}

console.log('%s jumps over the lazy dog %s times.', a, b)
console.log('%o is Object!', c)
console.log(
  '%cThe brown fox %cjumps over %cthe lazy dog.',
  'color: brown; font-family:serif; font-size:20px;',
  '',
  'font-size:18px; color: #FFF; background-color:green; border-radius: 4px;'
)