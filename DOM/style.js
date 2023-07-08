// E.style
// 요소의 style 속성(인라인)의 css 속성 값을 얻거나 지정.

const el= document.querySelector('.child')
// 개별 지정
el.style.width = '100px'
el.style.fontsize = '20px'
el.style.backgroundColor = 'green'
el.style.position = 'absolute'

// 한 번에 지정
// Object.assign(el.style, {
//   width: '100px',
//   fontsize: '20px',
//   backgroundColor: 'green',
//   position: 'absolute'
// })

console.log(el.style)
console.log(el.style.width)
console.log(el.style.fontsize)
console.log(el.style.backgroundColor)
console.log(el.style.position)