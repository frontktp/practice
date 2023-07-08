// 동기와 비동기
// -동기: 순차적으로 코드 실행 O
// -비동기: 순차적으로 코드 실행 X

console.log(1)
setTimeout(() => {console.log(2)}, 1000)
console.log(3)

const btnEl = document.querySelector('h1')
btnEl.addEventListener('click', () => {
  console.log('Clicked!')
})

console.log('Hello world!')


// 콜백 패턴 (지옥)

const a = (callback) => {
  setTimeout(() => {
    console.log(1)
    callback()
  }, 1000)
}
const b = (callback) => {
  setTimeout(() => {
    console.log(2)
    callback()
  }, 1000)
}
const c = () => console.log(3)

a(() => {
  b(() => {
    c()
  })
})