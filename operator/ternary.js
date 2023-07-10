// 삼항(ternary)
const a = 1

if (a<2) {
  console.log('참')
} else {
  console.log('거짓...')
}
// 삼항연산자 조건?참 : 거짓
console.log(a<2?'참':'거짓...')

function getAlert(message) {
  return message ? message : '메세지가 존재하지 않습니다'
}
console.log(getAlert('안녕하세요'))
console.log(getAlert(''))