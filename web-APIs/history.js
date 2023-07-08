// History
// 브라우저 히스토리(세션기록) 정보를 반환/제어

// .length: 등록 히스토리 갯수
// .scrollRestoration: 히스토리 탐색시 스크롤 위치 복원 여부 확인 및 지정
// .state: 현재 히스토리에 등록된 데이터(상태)

// .back()
// .forward()
// .go(): 현재 페이지 기준 특정 히스토리 '위치'로 이동

// .pushState(상태, 제목, 주소): 히스토리에 상태 및 주소 추가
// .replaceState(상태, 제목, 주소): 현재 히스토리의 상태 및 주소를 교체
// > 모든 브라우저(Safari 제외)는 '제목' 옵션을 무시.

console.log(history)