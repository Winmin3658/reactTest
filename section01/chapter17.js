// 단락평가 테스팅
let testA = () => {
    //console.log("false 함수");
    return false;
}
let testB = () => {
    //console.log("true 함수");
    return true;
}

// console.log(true && false);
// console.log(testA() && testB());
// console.log(testB() || testA());
// console.log(testA() || testB());

function printName(person) {
    const name = person && person.name;
    console.log(name || "person의 값이 없음");
} 

printName();
printName({name: "홍길동"});