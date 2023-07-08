// 메모리 누수

// 더이상 필요하지 않은 데이터가 해제되지 못하고 메모리를 계속 차지하는 현상.

// 불필요한 전역 변수 사용
window.hello = 'Hello world!'
window.sw = {name: 'sw', age:29}

// 분리된 노드 참조
const btn = document.querySelector('button')
const parent = document.querySelector('parent')

btn.addEventListener('click', () => {
  console.log(parent)
  parent.remove() //parent. && parent.remove()
})

// 해제하지 않은 타이머
let a = 0
setInterval(() => { // const intervalID = setInterval(() => {})
  a += 1
}, 100)

setTimeout(() =>{
  console.log(a) // clearInterval(intervalId)
}, 1000)

// 잘못된 클로저 사용

const getFn = () => {
  let a = 0
  return name => {
    a +=1 // 제거
    console.log(a) // 제거
    return `Hello ${name}~`
  }
}

const fn = getFn()
console.log(fn('sw'))
console.log(fn('sw2'))
console.log(fn('sw3'))