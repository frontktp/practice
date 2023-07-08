// .getAttribute() / .setAttribute()
// 요소에서 특정 속성 값을 얻거나 지정.

const el = document.querySelector('.child')

el.setAttribute('title', 'Hello world!')
console.log(el.getAttribute('title'))

// E.hasAttribute() / E.removeAttribute()
// 요소에서 특정 속성을 확인하거나 제거

console.log(el.hasAttribute('class'))
el.removeAttribute('class')
console.log(el.hasAttribute('class'))
console.log(el)