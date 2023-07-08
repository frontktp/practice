// 핸들러 한 번만 실행

const parentEl = document.querySelector('.parent')

parentEl.addEventListener('click', event => {
  console.log('Parent!')
}, {
  once: true
})

// 기본 동작과 핸들러 실행 분리
// const parentEl = document.querySelector('.parent')
parentEl.addEventListener('click', event => {
  for (let i = 0; i < 10000; i+=1) {
    console.log(i)
  }
}, {
  passive: true
})