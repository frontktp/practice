// if 조건문

// if (조건) {
  
// } else if (조건2) {
  
// } else {
  
// }

function isPositive(number) {
  if (number > 0) {
    return '양수'
  } else if (number <0) {
    return '음수'
  } else {
    return '0'
  }
} 
console.log(isPositive(1))
console.log(isPositive(-2))
console.log(isPositive(0))

// switch 조건문

// switch (조건) {
//   case 값1:
//     // 조건이 '값1'일 때 실행
//     break
//   case 값2:
//     break
//   default:
// }

function price(fruit) {
  switch (fruit) {
    case 'apple' :
      return 1000
    break
    case 'banana' :
      return 1500
    break
    case 'cherry' :
      return 2000
    break
    default:
      return 0
  }
}