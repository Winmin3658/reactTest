let num1 = 10;
let num2 = 3;

// number 타입 Infinity(양수 무한대) -Infinity(음수), NaN(Not a Number)
let num3 = 2 * "3abc";

console.log(num3);
console.log(typeof num3);

// null 타입과 undefined 차이점
let num4;
console.log(num4);

// 형변환(강제 형변환)
let str1 = "10";
let str2 = "10";
let strToNum1 = Number(str1);
// console.log(10 + strToNum1);
// console.log(str1 + str2);

// 형변환을 했는데 결과값 NaN
let num5 = Number("a20");
let num6 = parseInt("a20");
// console.log(num5);
// console.log(num6);

// Null 병합 연산자
// a 변수에는 절대로 null, undefined 오면 안 되는 변수
let a;
let b = 200;
a = b;
// console.log(a);
a = b ?? 0;
// console.log(`a = ${a}`);
// if(b === 'null' || b === undefined) {
//     console.log('a값은 null, undefined은 안 됨');
// } else {
//     a = b;
//     console.log(`a = ${a}`);
// }