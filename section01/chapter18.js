// 익명객체
const person = {
    name: "홍길동",
    age: 25,
    tall: 175,
    name2: "홍길동",
    age2: 25,
    tall2: 175
};

// let keyArray = Object.keys(person);
// let valueArray = Object.values(person);
// console.log(keyArray);
// console.log(valueArray);
// console.log(person.tall2);
// console.log(person["tall2"]);
for(let i = 0; i < keyArray.Array.length; i++) {
    console.log(`${keyArray[i]}: ${person[keyArray[i]]}`);
}