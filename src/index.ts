import { Hello } from "./hello";
console.log("hello");

const a = [1, 2, 3];

for (const item of a) {
  console.log(item);
  console.log(item);
  const counter = (function () {
    let a = 0;
    return function () {
      return a++;
    };
  })();
  console.log(counter());
  console.log(hoge("yes"));
}

function hoge(longlongtext: string) {
  return "aaaa " + longlongtext;
}

const hello = new Hello("world");
console.log(hello.hello());
