
let a = 100;

import {name, age, add} from './one.js'

import {name as tname} from './two.js'

import * as one from './one.js';


import prints from './one.js'

console.log(add(1, 3))

console.log(name)
console.log(tname)

prints('我是缺省导出');

console.log(one.add(100, 200));