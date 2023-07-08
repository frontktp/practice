// 모듈 가져오기
import xy, {str as xyz, arr, hello} from './module.js'

console.log(xy)
console.log(xyz)
console.log(arr)
console.log(hello)

import * as abc from './module.js'
console.log(abc)


setTimeout(async() => {
  const abc = await import('./module.js')
  console.log(abc)

  // import('./module.js').then(abc => {
  //   console.log(abc)
  // })
}, 1000)

import { a } from './a.js'
import { b } from './a.js'
import {a, b} from './utils.js'
console.log(a())
console.log(b())