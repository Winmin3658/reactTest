// 배열의 구조 분해 할당
let arr = [1, 2, 3];
let arr2 = arr;
let one = [];
console.log(one, two, three);


// 얕은 복수(주소 공유) 깊은 복사(또 다른 주소)
let { age: myAge, hobby, name, extra = "hello"} = person;
console.log(myAge, name, hobby, extra);

// 객체 구조 분해 할당
let person = {
    name: "홍길동",
    age: 27,
    hobby:"테니스"
};
const func = ({ age: myAge, hobby, name, extra = "hello"})
=> {
    console.log(name, myAge, hobby, extra);
};

func(person2);