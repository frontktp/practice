// Async / Await

const a = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(1)
      resolve()
    }, 1000)
  })
  
}
const b = () => console.log(2)

// a().then(() => b())

const wrap = async () => {
  await a()
  b()
}
wrap()