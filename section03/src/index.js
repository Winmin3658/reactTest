// const moduleData = require('./math');
import add, {sub} from './math.js';
import randomcolor from 'randomcolor';
// 외부의 공개 모듈을 가져와야 한다. import

// console.log(moduleData);
console.log(add(10,20));
console.log(sub(10,20));

let color = randomcolor();
console.log(`color = ${color}`);