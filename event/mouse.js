// Mouse & Pointer

// click  클릭
// dbclick  더블 클릭
// mouseup  버튼을 누를 때
// mousedown  버튼을 뗄 때
// mouseenter 포인터가 요소 위로 들어갈 때
// mouseleave 포인터가 요소 밖으로 나갈 때
// mousemove  움직일 때
// contextmenu  우클릭
// wheel  휠버튼 회전

const parentEl = document.querySelector('.parent')
const childEl = document.querySelector('.child')

childEl.addEventListener('click', () => {
  childEl.classList.toggle('active')
})

window.addEventListener('wheel',)