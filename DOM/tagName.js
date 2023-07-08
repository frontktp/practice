// E.tagName
// 요소의 태그 이름을 반환합니다.

const parentEl = document.querySelector('.parent')
const childEl = document.querySelector('.child')
const el = document.createElement('span')

console.log(parentEl.tagName)
console.log(childEl.tagName)
console.log(el.tagName)
console.log(document.body.tagName)