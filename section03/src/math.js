// 모듈, 클래스, 함수(선언, 표현(2))
/* function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
} */
export default function (a,b) {
    return a+b;
} 
export const sub = (a,b) => a-b;

// 모듈을 외부로 공개하는 메시지 => import 
/* module.exports = {
    add: add,
    sub: sub
}; */
// export { add, sub };