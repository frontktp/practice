// window.getComputedStyle()
// 요소에 적용된 스타일 객체를 반환.

const el = document.querySelector('.child')
const styles =  window.getComputedStyle(el)

console.log(styles.width)