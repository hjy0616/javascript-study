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
if (true) {
  console.log("hello");
}
// else else if, switch
if (false) {
  console.log("여기는 패스");
} else {
  console.log("여기는 나옴");
}

//switch B가 실행이되고 C까지 다 실행되는 경우가 있음 break를 걸면 원하는 case에서 멈춤 조건이랑 맞지않으면 default에 걸림
let value = "B";
switch (value) {
  case "A":
    console.log("A");
    break;
  case "B":
    console.log("B");
    break;
  case "C":
    console.log("C");
    break;
  default:
    console.log("default");
}

//삼항연산자
let value1 = 5 > 0 ? "참입니다." : "틀림";
console.log(value1);

// ======================= 반복문 =====================
// while
let i = 1;
while (i <= 100) {
  console.log(i);
  i++;
}

// for
for (let j = 1; j <= 100; j++) {
  console.log(j);
}

// break continue
let i = 1;
while (true) {
  if (i === 5) break;
  i++;
}
console.log(i);

let i = 0;
while (i < 10) {
  i++;
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

// ============================ 중첩 반복문 ===================
// 구구단
for (let i = 1; i < 10; i++) {
  console.log(`${i}단!!!!`);
  for (let j = 1; j < 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
