// while 반복문
// 조건이 거짓일 경우에 멈추고 그 때깍지 무한 반복함

let n = 0
while (n<4) {
  console.log(n)
  n+=1
}

// do while 반복문

// do 의 결과를 먼저 실행
// 거짓이어도 최초 1회는 실행함

let m = 0
do {
  console.log(m)
  m+=1
} while (m<4)