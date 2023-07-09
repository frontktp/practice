// ^ab  줄 시작에 있는 ab와 일치
// ab$  줄 끝에 있는 ab와 일치
// .  임의의 한 문자와 일치
// a|b  a / b 또는 일치
// ab?  b가 없거나 b와 일치

// {3}  3개 연속 일치
// {3,} 3개 이상 연속 일치
// {3,5}  3개 이상 5개 이하 연속 일치
// +  1회 이상 연속 일치, `{1,}`

// [ab] a 또는 b
// [a-z]  a~z 사이의 문자 구간 일치 (영어 소문자)
// [A-Z]  A~Z 사이의 문자 구간 일치 (영어 대문자)
// [0-9]  0~9 사이의 문자 구간에 일치(숫자)
// [가-힣]  가~힣 사이의 문자 구간에 일치(한글)

// \w 63개 문자에 일치(대소문자+숫자+'_')
// \b 63개 문자에 일치하지 않는 문자 경계(Boundary)
// \d 숫자에 일치
// \s 공백에 일치

// (?;) 그룹 지정
// (?=) 앞쪽 일치
// (?<=)  뒤쪽 일치

const str = `
010-1234-5678
aaa@gmail.com
Hello world!
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
hello@naver.com
http://localhost:1234
동해물과 백두산이 마르고 닳도록
abbcccddddeeeee
.`

console.log(str.match(/^h.../gm))
console.log(str.match(/\./))
console.log(str.match(/\.com$/g))
console.log(str.match(/...\.com$/g))
console.log(str.match(/fox|dog/g))
console/log(str.match(/[foxdog]/))
console.log(str.match(/http/g))
console.log(str.match(/\d{3}/g))
console.log(str.match(/\d{3,9}/g))
console.log(str.match(/\d{1,}/g))
console.log(str.match(/\b[0-9]+\b/g))
console.log(str.match(/https?:\/\/(?:\w+\/.?)\/?/g))
console.log(str.match(/.+(?=과)/g))
console.log(str.match(/(?=과).+/g))
console.log(str.match(/\d{3}-\d{4}-\d{4}/g))
console.log(str.match(/\w+@\w+\./g))