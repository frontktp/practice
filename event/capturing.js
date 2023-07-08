// 중간에 이벤트를 캡쳐하여 핸들러가 먼저 발생하게 만듬

const parentEl = document.querySelector('.parent')
const childEl= document.querySelector('.child')
const anchorEl = document.querySelector('a')

window.addEventListener('click', event => {
  console.log('Window!')
}, {capture:true} ) 
document.body.addEventListener('click', event => {
  console.log('Body!')
})
parentEl.addEventListener('click', event => {
  console.log('Parent!')
})
childEl.addEventListener('click', event => {
  console.log('Child!')
})
anchorEl.addEventListener('click', event => {
  console.log('Anchor!')
})