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
const newArr2 = arr.map((e) =>  e * 4)
// console.log(newArr2);

// 배열 내장 객체 찾기 3, includes
arr.forEach((e) => {
    if(e === 3) {
        console.log(true);
    }
});

// console.log(`3값 체크 유무: ${arr.includes(3)}`);

// 배열 내장 객체 indexof
let count = 0;
let findIndex = -1;
arr.forEach((e) => {
    count++;
    if(e === 3) {
        findIndex = count;
    }
});
// console.log(findIndex);

arr.indexOf(3);
// console.log(`3값 위치: ${arr.indexOf(3)}`)

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
// console.log(resultArray3);

// 배열 내장 객체 slice
let arr7 = [
    { name: "구길동", hobby: "테니스" },
    { name: "홍길동", hobby: "테니스" },
    { name: "저길동", hobby: "독서" },
    { name: "저길동", hobby: "독서" },
    { name: "저길동", hobby: "독서" },
];
// console.log(arr7.slice(0,4));

// 배열 내장 객체 concat
let arr8 = [
    { name: "구길동", hobby: "테니스" },
    { name: "홍길동", hobby: "테니스" },
];
let arr9 = [
    { name: "저길동", hobby: "독서" },
    { name: "저길동", hobby: "독서" },
];

// console.log(arr8.concat(arr9));

// 배열 내장 객체 sort
let charArray = ["라", "가", "다"];
// console.log(charArray.sort());

// 배열 내장 객체 sort 역정렬, 정렬(기준)
let numArray = [1,20,11,34,50,15,100];
// console.log(numArray.sort());

numArray.sort((a, b) => a - b);
// console.log(numArray);

// 배열 내장 객체 toSorted 역정렬, 정렬 (기준) 새로운 정렬된 배열 리턴
const sortedArray = numArray.toSorted((a,b) => b - a);
// console.log(numArray);
// console.log(sortedArray);

// 배열 내장 객체 join
const arr10 = ["홍길동", "님", "안녕하세요", "반가워요"];
const resultStr = arr10.join("===");
console.log(resultStr);

// 배열 삽입 push: 자바 Stack 생각
let arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1);
const newLength = arr1.push(5, 6, 7); // push는 배열의 길이를 리턴
console.log(arr1);
console.log(newLength);

// 배열 내용 삭제 pop: 자바 Stack 생각
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop(); // 제거한 값 반환
console.log(poppedItem);
console.log(arr2);