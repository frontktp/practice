# JavaScript 공부
폴더별로 관련된 JavaScript 공부한 내용을 정리한 프로젝트
폴더 내부의 각 파일들은 설명과 예시를 포함하고 있습니다.

## JS-data
JavaScript의 원시형과 참조형 데이터에 대해 정리한 폴더입니다.
- array.js
  - Array(배열)과 인덱싱
- function.js
  - 함수의 기본
- object.js
  - 객체의 사용 방식들
- truthyFalsy.js
  - 참과 거짓 판별
- typeConversion.js
  - 형 변환
- typeof.js
  - 데이터 타입 확인
 
## operator
연산자와 구문에 관련된 내용을 정리한 폴더입니다.

- arithmetic.js
  - 산술(Arithmetic), 할당, 증감
- destructuring.js
  - 구조 분해 할당(Destructuring assignment)
- for.js
  - for 반복문
- ifSwitch.js
  - if 조건문, switch 조건문
- logical.js
  - 논리 연산자
- negation-comparison
  - 부정과 비교
- nullish.js
  - nullish 병합
- optionalChaning.js
  - 선택적 체이닝(Optional Chaining)
- spread.js
  - 전개 연산자
- ternary.js
  - 삼항(ternary) 연산자
- whild.js
  - while, do whild 반복문
 

## DOM
JavaScript의 DOM과 관련된 내용을 정리한 폴더입니다.
노드와 요소, 검색과 탐색, 생성, 조회, 수정, 크기 좌표의 내용이 포함되어 있습니다.
- dom.js
  - DOM이란 HTML 문서를 객체로 표현한 것으로, JS에서 HTML을 제어할 수 있게 해줍니다.
- attribute.js
  - 태그의 속성을 변경하거나 지정하는 방법
- classList.js
  - 요소의 class 속성 값을 제어
- className.js
  - 요소의 class 속성 값을 얻거나 지정
- create,modify1.js
  - 요소 생성, 노드 삽입, 요소 삽입과 제거, 노드의 후손 확인, 텍스트 변경, 요소의 HTML 내용 지정
- dataset.js
  - 요소의 각 'data-' 속성 값을 얻거나 지정.
- getComputedStyle.js
  - 요소에 적용된 스타일 객체를 반환.
- id.js
  - 요소의 id 속성 값을 얻거나 지정.
- nodeVsElement.js
  - 노드(Node): HTML 요소, 텍스트, 주석 등 모든 것을 의미 요소의 상위개념
  - 요소(Element): HTML 요소를 의미
- search.js
  - 각종 검색 내용
- style.js
  - 요소의 style 속성(인라인)의 css 속성 값을 얻거나 지정.
- tagName.js
  - 요소의 태그 이름을 반환합니다.


## event
JavaScrpit의 이벤트(Evnets)에 대해 정리한 폴더입니다.
이벤트와 옵션, 위임, 커스텀 이벤트, 버블링, 캡쳐링, 마우스 관련 내용이 있습니다.
- events.js
  - 이벤트 등록과 제거, 기본 동작 방지
- bubbling.js
  - 이벤트 전파(버블) 정지
  - 버블: 후손에서 상위로 전파
- capturing.js
  - 중간에 이벤트를 캡쳐하여 핸들러가 먼저 발생하게 만듬
- event-custom-dispatch.js
  - 커스텀 이벤트와 디스패치
- event-delegation.js
  - 비슷한 패턴의 여러 요소에서 핸들링 해야하는 경우
  - 단일 조상 요소에서 제어하는 이벤트 위임 패턴을 사용할 수 있다.
  - index2.html와 연결
- event-option.js
  - 핸들러 한 번만 실행
  - 기본 동작과 핸들러 실행 분리
- focusNform.js
  - focus  포커스 얻음
  - blur 포커스 해제시
  - input  값 변경시
  - change 상태 변경시
  - submit 제출버튼 선택시
  - reset  리셋버튼 선택시
- input.js
  - 키보드 이벤트
- mouse.js
  - 마우스 이벤트


## module
모듈이란 특정 데이터들의 집합(파일)입니다.
모듈의 개요와 가져오기, 내보내기 패턴에 대해 정리한 폴더입니다.
- main.js
  - 모듈 가져오기
- module.js
  - 기본 내보내기
  - 이름 내보내기
- utils.js


## synchronous
JavaScript의 동기와 비동기에 대해 정리한 폴더입니다.
- main.js
  - 동기: 순차적으로 코드 실행 O
  - 비동기: 순차적으로 코드 실행 X
- AsyncAwait.js
  - Async / Await
- fetch.js
  - 네트워크를 통해 리소스의 요청(Request) 및 응답(Response)을 처리할 수 있다.
  - Promise 인스턴스를 반환.
- promise.js
  - Promise 클래스로 비동기 제어
- repeat.js
  - 반복문에서 비동기 처리
- resolve,reject.js
  - Resolve, Reject 그리고 에러 핸들링


## web-APIs
기타 web-API에 대한 폴더로 콘솔, 쿠키, 히스토리에 대해 정리한 폴더입니다.
- console.js
  - 콘솔에 메세지나 객체를 출력.
  - .log() .warn() .errer() .dir()
- console-count.js
  - 콘솔에 메소드 호출의 누적횟수를 출력하거나 초기화.
- console-time.js
  - 타이머가 시작해서 종료되기까지의 시간을 출력
- console-trace.js
  - 메소드 호출 스택을 추적해 출력.
- cookie.js
  - 도메인 단위로 저장
  - 사이트당 최대 20개 및 4kb로 제한
  - 영구 저장 불가능
- history.js
  - 브라우저 히스토리(세션기록) 정보를 반환/제어
- history2.js
  - 히스토리 관련 예제
  - index.html 연결
- location.js
  - 현재 페이지 정보를 반환/제어
- storage.js
  - 도메인 단위로 저장 5mb 제한
  - 세션 혹은 영구 저장 가능


## advanced
심화 학습으로 심볼,빅인트 데이터, 불변성과 가변성, 얕은/깊은 복사, 가비지 컬렉션, 클로저와 메모리 누수에 대해 정리한 폴더입니다.
- BigInt.js
  - BigInt는 길이 제한이 없는 정수
  - 숫자 데이터가 안정적으로 표시할 수 있는, 최대치(2^53-1)보다 큰 정수를 표현할 수 있다
- GC.js
  - 가비지 컬렉션
  - 메모리에서 불필요한 데이터를 해제
- Symbol.js
  - 심볼
  - 변경이 불가능한 데이터, 유일한 식별자를 만들어 데이터 보호 용도로 사용
- closure.js
  - 클로저
  - 함수가 선언될 때의 유효범위를 기억하고 있다가,
  - 함수가 외부에서 호출될 때 그 유효범위의 특정 변수를 참조할 수 있는 개념을 말한다.
- shallow-copy.js
  - 얕은 복사 - 참조형의 1차원 데이터 복사
- deep-copy.js
  - 깊은 복사 - 참조형의 모든 차원 데이터를 복사
- memory-leak.js
  - 메모리 누수, 더이상 필요하지 않은 데이터가 해제되지 못하고 메모리를 계속 차지하는 현상.
- mutability.js
  - 불변성, 가변성
  - 자바스크립트 원시형은 불변성, 참조형은 가변성을 가지고 있음.


## regExp
정규표현식과 관련된 폴더입니다.
정규식 생성, 메소드, 플래그, 패턴에 대해 정리되어 있습니다.
- regExp.js
  - 정규표현식(RegExp)
  - 문자 검색(Search)
  - 문자 대체(Replace)
  - 문자 추출(Extract)
- regExp-flag.js
  - g : 모든 문자 일치(global)
  - i : 영어 대소문자를 구분 않고 일치(Ignore case)
  - m : 여러 줄 일치(Multi line), 각 줄을 시작과 끝으로 인식
- regExp-method.js
  - 정규식.test(문자열) - 일치 여부 반환
  - 문자열.match(정규식) - 일치하는 문자의 배열 반환
  - 문자열.replace(정규식, 대체문자) - 일치하는 문자를 대체
- pattern.js
  - 정규표현식의 기호 모음
