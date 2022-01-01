const emptMap1 = new Map([
  ["key1", "value1"],
  ["key4", "value4"],
  ["key2", "value2"],
  ["key3", "value3"],
]);

let entryOb = Object.fromEntries(emptMap1); //객체로 변환
console.log("entryOb :", entryOb);
console.log("entryOb.length :", Object.keys(entryOb).length); //객체의 속성 수 -> 4
let conFs = [];
function consPush() {
  for (let name in entryOb) {
    conFs.push(entryOb[name]);
  }
}
consPush();
console.log("conFs", conFs);
