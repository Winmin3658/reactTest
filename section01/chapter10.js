// // 함수 선언문: 함수 호이스팅
// function add(num1, num2) {
//     console.log(num1 + num2);
// }
// // 함수 표현식: 함수 호이스팅 안 됨
// let sub = function add2(num1, num2) {
//     console.log(num1 + num2) + 1;
// }
// let sub2 = (num1, num2) => console.log(num1 * num2);

// // 함수
// add(10, 20);
// sub(11,20);
// sub2(11,20);

// 콜백 함수 응용
function repeat(count, callback) {
    for (let idx = 1; idx <= count; idx++) {
        callback(idx);
    }
}
function repeat2(count, callback) {
    for (let idx = 1; idx <= count; idx++) {
        let result = callback(idx, idx);
        console.log(`result = ${result}`);
    }
}

// 함수 표현식(화살표 함수)
let kkk = (a,b) => a+b;

repeat2(5, kkk);

repeat(5, (idx) => {
    console.log(idx * 2);
})

repeat2(5, (a, b)=> a*b);