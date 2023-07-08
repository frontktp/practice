// E.className
// 요소의 class 속성 값을 얻거나 지정.

const el = document.querySelector('.child')
console.log(el.className)

el.className += ' child1 active'
console.log(el.className) // child child1 active
console.log(el)