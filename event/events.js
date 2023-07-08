// .addEventListener()
// 대상에 지정한 이벤트가 발생할 때 지정 함수(핸들러)호출

const parentEl = document.querySelector('.parent')
const childEl = document.querySelector('.child')

parentEl.addEventListener('click', () => {
  console.log('Parent!')
})

childEl.addEventListener('click', () => {
  console.log('child!')
})

// .removeEventListner()
// 대상에 등록했던 이벤트 리스너 제거


// 이벤트 객체, 는 대상에서 발생한 이벤트 정보를 담고 있다.

parentEl.addEventListener('click', event => {
  console.log(event.target, event.currentTarget)
  console.log(event)
})

// 기본 동작 방지
// 마우스 휠의 스크롤 동작 방지
// const parentEl = document.querySelector('.parent')
parentEl.addEventListener('wheel', event => {
  event.preventDefault()
  console.log('Wheel!')
})

// <a> 태그에서 페이지 이동 방지
const anchorEl = document.querySelector('a')
anchorEl.addEventListener('click', event => {
  event.preventDefault()
  console.log('Click!')
})

// 