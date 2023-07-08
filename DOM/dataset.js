// E.dataset
// 요소의 각 'data-' 속성 값을 얻거나 지정.

const el = document.querySelector('.child')
const str = 'Hello world!'
const obj = {a:1,b:2}

el.dataset.helloWorld= str
el.dataset.object = JSON.stringify(obj)

console.log(el.dataset.helloWorld)
console.log(el.dataset.object)
console.log(JSON.parse(el.dataset.object))
