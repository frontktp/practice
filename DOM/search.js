// document.getElementById()
// HTML 'id' 속성값으로 검색한 요소 반환.
// 여러 요소가 검색되면, 가장 먼저 찾은 요소만 반환.
// 가장검색 결과가 없으면, 'null' 반환.

const el = document.getElementById('child2')
console.log(el)


// document.querySelector()
// CSS 선택자로 검색한 요소를 하나 반환. 가장 먼저 찾은 요소 반환.
// 검색 결과 없으면 'null'반환

const el2 = document.querySelector('.child:first-child')
console.log(el2)

// document.querySelectorAll()
// CSS 선택자로 검색한 모든 요소를 'NodeList'로 반환.
// NodeList 객체는 .forEach()를 사용 가능.

const nodeList = document.querySelectorAll('.child')
console.log(nodeList)
nodeList.forEach(el3 => console.log(el3.textContent))

// N.parentElement
// 노드의 부모 요소를 반환.

const el4= document.querySelector('.child')
console.log(el.parentElement)

// E.closest()
// 자신을 포함한 조상 요소 중 CSS선택자와 일치하는 가장 가까운 요소 반환.
// 요소를 찾지 못하면 'null' 반환

const el5 = document.querySelector('.child')
console.log(el5.closest('div'))
console.log(el5.closest('body'))
console.log(el5.closest('.hello'))

// N.previousSibling / N.nextSibling
// 노드의 이전 형제 혹은 다음 형제 노드를 반환.

const el6 = document.querySelector('.child')
console.log(el6.previousSibling)
console.log(el6.nextSibling)

// E.children
// 요소의 모든 자식 요소 반환

const el7 = document.querySelector('.parent')
console.log(el7.children)

// E.firstElentChild / E.lastElementChild
// 요소의 첫번째 자식 혹은 마지막 자식 반환
const el8 = document.querySelector('.parent')
console.log(el8.firstElementChild)
console.log(el8.lastElementChild)