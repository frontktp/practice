// .trace()
// 메소드 호출 스택을 추적해 출력.

function a() {
  function b() {
    function c() {
      console.log('Log!')
      console.trace('Trace!')
    }
    c()
  }
  b()
}
a()