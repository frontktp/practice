// 클로저

// 함수가 선언될 때의 유효범위를 기억하고 있다가,
// 함수가 외부에서 호출될 때 그 유효범위의 특정 변수를 참조할 수 있는 개념을 말한다.

function createCount() {
  let a = 0
  return function () {
    return a += 1
  }
}

const count = createCount()

console.log(count()) // 1
console.log(count()) // 2
console.log(count()) // 3

const count2 = createCount()