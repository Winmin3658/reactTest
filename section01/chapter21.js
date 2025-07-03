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

// Shift(pop보다 속도가 느림)
// 배열의 맨 앞에 있는 요소를 제거, 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
console.log(shiftedItem);

// Unshift(push보다 속도가 느림)
// 배열의 맨 앞에 새로운 요소를 추가하는 매서드
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0); // 변경된 배열의 길이를 반환
console.log(arr4);