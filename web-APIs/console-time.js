// .time(), .timeEnd()
// 타이머가 시작해서 종료되기까지의 시간을 출력

console.time('반복문')

for (let i=0; i<10000; i+=1) {
  console.log(i)
}
console.timeEnd('반복문')

