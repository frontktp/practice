// Promise 클래스로 비동기 제어

const a = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(1)
      resolve()
    }, 1000)
  })
  
}
const b = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(2)
      resolve()
    }, 1000)
  })
  
}
const c = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(3)
      resolve()
    }, 1000)
  })
  
}
const d = () => console.log(4)


a()
  .then(() => b())
  .then(() => c())
  .then(() => {
    d()
  })