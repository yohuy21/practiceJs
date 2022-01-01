let dataList = [(age = 20), (address = "suwon"), (tel = "010 - 2222 - 3333")];
let dataList2 = {
  age: 20,
  address: "suwon",
  tel: "010 - 2222 - 3333",
};
const emptMap = new Map([
  ["key1", "value1"],
  ["key4", "value4"],
  ["key2", "value2"],
  ["key3", "value3"],
]);

console.log(dataList[1]);
for (const [key, value] of emptMap) {
  console.log(emptMap.get(key)); // 1-> 4 -> 2 -> 3 - > temp 순서가 보장된다.
}
console.log(Object.keys(dataList));
console.log(Object.values(dataList));
console.log(dataList2.age);
