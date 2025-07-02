// 배열 내장 함수(forEach)
const arr=[1,2,3,4];
const newArr = [];

for(let i = 0; i < arr.length; i++ ) {
    // console.log(arr[i]);
}

// 향상된 for문, 일반 for문
// arr.forEach((value, index, array) => {
//     console.log(value);
//     console.log(index);
//     console.log(array);
//     console.log('========');
// });
// arr.forEach((e) => {
//     console.log(e);
//     newArr.push(e);
// });

// console.log(newArr);

// 배열 내장 객체 map => 위도, 경도 => 새로운 리턴
// const newArr2 = arr.map((e) =>  e * 3)
// console.log(newArr2);

// 배열 내장 객체 찾기 3, includes
// arr.forEach((e) => {
//     if(e === 3) {
//         console.log(e);
//     }
// });

// console.log(`4값 체크 유무: ${arr.includes(4)}`);

// 배열 내장 객체 indexof
// arr.indexOf(3);
// console.log(`3값 위치: ${arr.indexOf(3)}`);

// 배열 내장 객체 findIndex
// const resultIndex = arr.findIndex((e) => {
//     return e === 4;
// });
// console.log(`4 findIndex: ${resultIndex}`);

// 배열 내장 객체 find
// let arr5 = [
//     { name: "구길동" },
//     { name: "홍길동" },
// ];

// const resultArray = arr5.find((e) => e.name === "구길동");
// console.log(resultArray);

let arr6 = [
    { name: "구길동", hobby: "테니스" },
    { name: "홍길동", hobby: "테니스" },
    { name: "저길동", hobby: "독서" }
];
// const resultArray2 = arr6.filter((e) => {
//     return e.hobby === '테니스';
// });

// console.log(resultArray2);

// 배열 내장 객체 map
const resultArray3 = arr6.map((e) => e.name)
console.log(resultArray3);