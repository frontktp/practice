// document.createElement()
// 메모리에만 존재하는 새로운 HTML 요소를 생성해 반환.

const divEl = document.createElement('div')
console.log(divEl)

const inputEl = document.createElement('input')
console.log(inputEl)

// E.prepend / E.append
// 노드를 요소의 첫 번째 혹은 마지막 자식으로 삽입.

const parentEl = document.querySelector('.parent')

const el = document.createElement('div')
el.textContent = 'Hello~'

parentEl.prepend(new Comment(' 주석 '))
parentEl.append(el)
parentEl.append('Text!')

// E.remove()
// 요소를 제거.

const el2 = document.querySelector('.child')
// el2.remove()

// E.insertAdjacentElement()
// 대상 요소의 지정한 위치에 새로운 요소 삽입.
// 대상요소.insertAdjacentElement(위치, 새로운 요소)

const childEl = document.querySelector('.child')
const newEl = document.createElement('span')
newEl.textContent = 'Hello~'

childEl.insertAdjacentElement('beforebegin', newEl)

// .insertBefore()
// 부모 노드의 자식인 기준 노드의 이전 형제로 노드를 삽입.
// 부모노드.insertBefore(노드 , 기준 노드)

const parentEl2= document.querySelector('.parent')
const childEl2= document.querySelector('.child')
const newEl2= document.createElement('span')
newEl2.textContent= 'Bye'

parentEl2.insertBefore(newEl2, childEl2)

// N.contains()
// 주어진 노드가 노드의 자신을 포함한 후손인지 확인
// N.contains(주어진 노드)

console.log(parentEl.contains(childEl)) // true

// N.textContent
// 노드의 모든 텍스트를 얻거나 변경.
const el3 = document.querySelector('.child')
console.log(el3.textContent)

el3.textContent = '7'
console.log(el3.textContent)

// E.innerHTML
// 요소의 모든 HTML 내용을 하나의 문자로 얻거나 새로운 HTML 지정.

const el4 = document.querySelector('.parent')
console.log(el4.innerHTML)
// el4.innerHTML=`<span style="color:red;">Hello~</span>`