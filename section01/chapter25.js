// 기본 날짜
let date = new Date();
console.log(date);

// 내가 설정한 기본 날짜
let date2 = new Date(2025, 7-1, 2, 23, 59, 59);
console.log(date2);

// 타임 스탬프
let date3 = new Date();
let timeValue = date3.getTime;
console.log(timeValue);

// 타임 스탬프 => 날짜 바꾸기
let date4 = new Date(timeValue);
console.log(date4);