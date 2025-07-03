// 향상된 for문으로 객체의 키값을 가져오는 방법
let person = {
    name: "홍길동",
    age: 27,
    hobby: "테니스",
};
let personArray = [{
    name: "홍길동",
    age: 27,
    hobby: "테니스",
},
{
    name: "홍길동",
    age: 27,
    hobby: "테니스",
}];

// for( : ), for ( of (배열)), for ( in (객체, 배열))
for(let person of personArray) {
    console.log(person);
}
for(let data in person) {
    console.log(`${data} = ${person[data]}`);
}