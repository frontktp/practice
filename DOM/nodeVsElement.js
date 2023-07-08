// Node vs Element 

// - 노드(Node): HTML 요소, 텍스트, 주석 등 모든 것을 의미 요소의 상위개념
// - 요소(Element): HTML 요소를 의미

const parent = document.querySelector('.parent')

// 부모 요소의 모든 자식 노드 확인!
console.log(parent.childNodes)
// 부모 요소의 모든 자식 요소 확인!
console.log(parent.children)

class N {}
class E extends N {}

console.dir(E)
console.dir(N)
console.dir(E.__proto__)

console.dir(Element)
console.dir(Node)
console.dir(Element.__proto__)