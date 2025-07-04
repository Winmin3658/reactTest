// 비동기로 처리한 방식(Web APIs에서 실행)
console.log(1);

// web apis 전송
setTimeout(() => {
    console.log(2);
}, 3000);

console.log(3);

function task() {
    setTimeout(() => {
        console.log('hello');
    }, 3000);
}
task();

function add(a, b, callback) {
    setTimeout(() => {
        const sum = a + b;
        console.log(sum);
    }, 3000);
}

let callback = (sum) => console.log(sum);
callback(10);

// add(a, b, callback)
add(1, 2, (sum) => {
    console.log(sum);
});

// 1단계 음식을 주문하는 상황
function orderFood(food, callback) {
    console.log(food + '음식 주문');
    setTimeout(() => {
        callback(food);
    }, 3000);
}

orderFood('백숙', (food) => {
    console.log(food + '주문 완료');
});

// 1단계 음식을 냉동주문하는 상황
function freezeFood(food, callback) {
    console.log(food + '냉동 주문');
    setTimeout(() => {
        callback(food);
    }, 3000);
}
freezeFood('백숙', (food) => {
    console.log(food+ '냉동 완료');
});

// 2단계 [콜백지옥] 음식 주문(주문 완료) => 음식 차게 주문(음식 차게 완료)
orderFood('백숙', (food) => {
    console.log(food + '주문 완료');
    orderFood('백숙', (food) => {
    console.log(food + '차게 완료');
    freezeFood('백숙', (food) => {
        console.log(food + '냉동 완료');
    })
    });
});

// 3단계 [콜백지옥]
// 음식 주문(주문 완료 30분) => 차게 주문(차게 완료 30분) => 냉동 주문(냉동완료 20분)
