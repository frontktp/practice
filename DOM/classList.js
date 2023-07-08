// E.classList
// 요소의 class 속성 값을 제어.

// .add() : 새로운 값을 추가
// .remove() : 기존 값 제거
// .toggle() : 값을 토글
// .contains() : 값을 확인

const el = document.querySelector('.child')

el.classList.add('active')
console.log(el.classList.contains('active')) // true

el.classList.remove('active')
console.log(el.classList.contains('active')) // false

el.addEventListener('click', () => {
  el.classList.toggle('active')
  console.log(el.classList.contains('active'))
})