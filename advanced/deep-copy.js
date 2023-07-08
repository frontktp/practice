// 얕은 복사 & 깊은 복사

// 참조형은 가변성으로 인해, 데이터 복사시 주의

// 얕은 복사 - 참조형의 1차원 데이터 복사
// 깊은 복사 - 참조형의 모든 차원 데이터를 복사

import { cloneDeep } from "lodash"

const a = {x:{y:1}}
const b = cloneDeep(a) // 깊은 복사

b.x.y = 2

console.log(b)
console.log(a)

const c = [1,2,3]
const d = c.concat([]) // 병합

d[0] = 4

console.log(d)
console.log(c)