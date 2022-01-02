const obj = {
  1: "1입니다.",
  false: "거짓",
  objData: "test",
};
const objKy = Object.keys(obj); // 키값들을 문자로 반환한다.
console.log(objKy);

//서로 같다.
console.log("obj['1'] :", obj[1]); //1입니다.
console.log("obj['1'] :", obj["1"]); //1입니다.
console.log("obj['objData'] :", obj["objData"]); //1입니다.
//console.log("obj['objData'] :", obj[objData]); //에러 발생, 문자열 필요

//Symbol(유일한 식별자)->유일성 보장
const a = Symbol(); // new를 붙이지 않습니다!
const b = Symbol();

console.log(a); //Symbol()
console.log(b); //Symbol()
console.log(a === b); //일치연산자, false
console.log(a == b); //동등연산자, false
