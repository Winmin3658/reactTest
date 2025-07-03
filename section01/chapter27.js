// 스프레드 연산자 [a, b, c, d, e, f, g, ~] => ...
let arr1 = [1,2,3];
let arr2 = [5,...arr1, 6, 7];
let arr3 = [...arr1];
console.log(arr1);
console.log(arr3);

// Spread 연산자(객체)
let obj1 = {
    a: 1,
    b: 2,
};

let obj2 = {
    ...obj1,
    c: 3,
    d: 4
};

console.log(obj2);

// spread 강력한 힘은 깊은 복사
let obj3 = {...obj2}; // 얕은 복사
console.log(obj3);
obj3.d = 10;
console.log('========');
console.log(obj2);
console.log(obj3);

// Spread 연산자(함수 매개변수)
let arr4 = [1, 2, 3];
function funcA([p1, p2, p3]) {
    console.log(p1, p2, p3);
}

funcA(...arr4);

// rest 매개변수: rest는 나머지, 나머지 매개변수
arr5 = [1, 2, 3];
function funcB(one, ...ds) {
    console.log(ds);
}
funcB(...arr5);

// 깊은 복사끼리 내용이 같은지 비교를 하려면
let o1 = {name: "홍길동"};
let o2 = {...o1};
let o3 = o1;

console.log(o1 === o2);
console.log(JSON.stringify(o1) === JSON.stringify(o2));
console.log(typeof JSON.stringify(o1));