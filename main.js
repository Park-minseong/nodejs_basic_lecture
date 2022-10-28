//math-tools 실습(exports)
// const m = require("./math-tools.js");

// console.log(m.PI);
// console.log(m.add(1, 2));
// console.log(m.subtract(1, 2));
// console.log(m.multiply(1, 2));
// console.log(m.divide(1, 2));

//--------------------------------------코어모듈 사용하기1

// const fs = require("fs");

// let fileList = fs.readdirSync(".");
// console.log(fileList);

// fs.writeFileSync("new", "Hello Node.js!");

//--------------------------------------코어모듈 사용하기2

// const os = require("os");

// console.log(os.cpus());

//--------------------------------------서드파트 모듈 사용하기

// const cowsay = require("cowsay");

// console.log(
//   cowsay.say({
//     text: "I love javascript",
//   })
// );

//-------------------------------------------------비동기 이해하기
// console.log("Start");

// let content = fs.readFileSync("./new", "utf8");
// console.log(content);

// console.log("Finish");
////////////////////////////////////
// console.log("Start");

// fs.readFile("./new", "utf8", (err, data) => {
//   console.log(data);
// });

// console.log("Finish");

//-----------------------------------------------------이벤트 사용하여 비동기프로그래밍하기
////코어 모듈의 많은 객체들이 EventEmitter 객체이다.
// const EventEmitter = require("events");
// const myEmitter = new EventEmitter();

// myEmitter.on("test", () => {
//   // test이벤트 발생 시 콜백함수 실행
//   console.log("Success!");
// });

// myEmitter.emit("test");
//// test 이벤트 발생, on메소드롤 이벤트 핸들러 등록 후 실행

//--------------------------------------------------------하나의 이벤트에대해 여러개의 콜백 설정가능

// const EventEmitter = require("events");
// const myEmitter = new EventEmitter();
// const myEmitter2 = new EventEmitter();

// myEmitter.on("test", () => {
//   console.log("1");
// });

// myEmitter.on("test", () => {
//   console.log("2");
// });

// myEmitter2.on("test", () => {
//   //다른 이벤트이미터 객체의 이벤트에 반응하지 않는다
//   console.log("3");
// });

// myEmitter.emit("test");

//------------------------------------------------- 이벤트 발생 시 데이터 전달하기
// const EventEmitter = require("events");
// const myEmitter = new EventEmitter();

// myEmitter.on("test", (arg1, arg2, arg3) => {
//   console.log(arg1);
//   console.log(arg2);
//   console.log(arg3);
// });

// myEmitter.emit("test", "apple", "banana", "pear");

//------------------------------------------------- 이벤트 발생 시 받은 인자를 모두 사용하지 않아도 된다.
// const EventEmitter = require("events");
// const myEmitter = new EventEmitter();

// myEmitter.on("test", (arg1, arg2, arg3) => {
//   console.log(arg1);
//   console.log(arg2);
// });

// myEmitter.emit("test", "apple", "banana", "pear");

//------------------------------------------------- 이벤트 발생 시 받은 인자보다 더 많은 인자를 받으려고하면 undifined
// const EventEmitter = require("events");
// const myEmitter = new EventEmitter();

// myEmitter.on("test", (arg1, arg2, arg3, arg4) => {
//   console.log(arg1);
//   console.log(arg2);
//   console.log(arg3);
//   console.log(arg4);
// });

// myEmitter.emit("test", "apple", "banana", "pear");

//------------------------------------------------- 이벤트 발생 시 많은 인자전달시 객체를 전달하는게 효율적이다.
// const EventEmitter = require("events");
// const myEmitter = new EventEmitter();

// const obj = { type: "text", data: "Hello node", date: "2022-10-24" };

// myEmitter.on("test", (info) => {
//   console.log(info);
// });

// myEmitter.emit("test", obj);

//------------------------------------------------- EventEmitter.on / .once 차이 once 는 한번만 반응한다.
// const EventEmitter = require("events");
// const myEmitter = new EventEmitter();

// myEmitter.once("test", (info) => {
//   console.log(info);
// });

// myEmitter.emit("test", "once");
// myEmitter.emit("test", "once");

// myEmitter.on("test2", (info) => {
//   console.log(info);
// });

// myEmitter.emit("test2", "on");
// myEmitter.emit("test2", "on");

//------------------------------------------------- EventEmitter.listeners 메소드 - 해당 이벤트에 설정된 이벤트 핸들러를 조회한다
// const EventEmitter = require("events");

// const myEmitter = new EventEmitter();

// myEmitter.once("test", () => {
//   console.log("A");
// });

// myEmitter.once("test", () => {
//   console.log("B");
// });

// myEmitter.once("test", () => {
//   console.log("C");
// });

// console.log(myEmitter.listeners("test"));

//------------------------------------------------- EventEmitter.off 메소드
// const EventEmitter = require("events");

// const myEmitter = new EventEmitter();

// myEmitter.on("test", () => {
//   // --- (A)
//   console.log("Success!");
// });

// myEmitter.off("test", () => {
//   // --- (B)
//   console.log("Success!");
// });

// myEmitter.emit("test");

////////////////////////////////////// 이벤트 핸들러를 나중에 off 메소드에서도 참조할 수 있도록 변수에 할당해준다

// const EventEmitter = require("events");

// const myEmitter = new EventEmitter();

// const callback = () => {
//   console.log("Success!");
// };

// myEmitter.on("test", callback);

// myEmitter.off("test", callback);

// myEmitter.emit("test");
///////////////////////////////////////////// 여러 개의 이벤트 핸들러인 경우 배열에 넣어서 관리해줘야 합니다.

// const EventEmitter = require("events");

// const myEmitter = new EventEmitter();

// const cbArr = [];

// cbArr[0] = () => {
//   console.log("A");
// };

// cbArr[1] = () => {
//   console.log("B");
// };

// myEmitter.on("test", cbArr[0]);
// myEmitter.on("test", cbArr[1]);

// myEmitter.off("test", cbArr[0]);
// myEmitter.off("test", cbArr[1]);

// myEmitter.emit("test");

//--------------------------------------------------------------간단 서버 만들어보기
const http = require('http');

const express = require('express');

const app = express();

const users = ['Joe', 'Kim', 'Park'];

// const server = http.createServer((request, response) => {
//   // Arrow Function, const
//   if (request.url === "/") {
//     response.end("<h1>Welcome!</h1>");
//   } else if (request.url === "/users") {
//     response.end(`<h1>${users}/h1>`); // Template String
//   } else if (request.url.split("/")[1] === "users") {
//     // url : /users/1, /users/2, .. // etc
//     const userIdx = request.url.split("/")[2];
//     const userName = users[userIdx - 1]; // etc

//     response.end(`<h1>${userName}</h1>`); // Template String
//   } else {
//     response.end("<h1>Page Not Available</h1>");
//   }
// });

// server.listen(3000);

app.get('/', (request, response) => {
  response.end('<h1>Welcome!</h1>');
});

app.get('/users', (request, response) => {
  response.end(`<h1>${users}</h1>`);
});

app.get('/users/:id', (request, response) => {
  const userName = users[request.params.id - 1];
  response.end(`<h1>${userName}</h1>`);
});

app.get('*', (request, response) => {
  response.end('<h1>Page Not Available</h1>');
});

app.listen(3000);
//------------------------------------------------------------
let url = new URL('http://example.com/ssd/dgd/item?dfsf=sdg&id=123');
console.log(url.protocol);
console.log(url.host);
console.log(url.pathname);
console.log(url.search);
//------------------------------------------------------------
// npm 명령어들
// npm search express
// npm info express
// npm list
// npm audit
