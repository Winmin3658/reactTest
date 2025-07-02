// // 변수 선언(let, const: 상수-수정 X, 선언할 때 )
// const animal = {
//     type: "고양이",
//     name: "나비",
//     color: "black",
// };

// animal.type = 10;
// animal.세현 = "바보";
// delete animal.세현;
// console.log(animal);

const person = {
    name: "홍길동",
    // 메서드 선언
    sayHi() {
        console.log("안녕!");
    },
    // 익명 함수 가능
    sayHi : function () {
        console.log("안녕2!");
    },
    // 화살표 함수 가능
    sayHi3 : () => {
        console.log("안녕3!");
    },
    // 매서드 선언 방식
    sayHi4() {
        console.log("안녕4!");
    },
};
console.log(person);