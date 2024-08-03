console.log("hello"); //문자열
console.log(`문자열 2`); //문자열
console.log(123); //number

let server = "set";
let server2 = server;
console.log(server === server2);

/* 상수const 변수var */
const variable = "절대 값 못바꿈";

var variable2 = "변수 줄인말 요즘 안씀 옛날꺼임, 다시 선언도 가능";
var variable2 = "아무런 문제가 없음~~~";

let variable3 = "이건 다시 선언하면 에러남~";

// 두 값을 바꿀려면 사라질 값을 다른 변수에 저장을 하면됌
let a = 3;
let b = 5;
let c;

c = a;
a = b;
b = c;

console.log(a, b);

// if 조건문
