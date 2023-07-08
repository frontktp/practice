// 포커스 & 폼

// focus  포커스 얻음
// blur 포커스 해제시
// input  값 변경시
// change 상태 변경시
// submit 제출버튼 선택시
// reset  리셋버튼 선택시

const formEl= document.querySelector('.form')
const inputEls = document.querySelectorAll('input')

inputEls.forEach(el => {
  el.addEventListener('focus', () => {
    formEl.classList.add('active')
  })
  el.addEventListener('blur', () => {
    formEl.classList.remove('active')
  })
  el.addEventListener('input', event => {
    console.log(event.target.value)
  })
})

formEl.addEventListener('submit', event => {
  event.preventDefault()
  const data = {
    id: event.target[0].value,
    pw: event.target[1].value
  }
  console.log('제출!', data)
})

formEl.addEventListener('reset', event=> {
  console.log('리셋!')
})