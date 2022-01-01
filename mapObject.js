const emptMap = new Map([
  ["key1", "value1"],
  ["key4", "value4"],
  ["key2", "value2"],
  ["key3", "value3"],
]);

console.log(emptMap.get("key1")); //value1

for (const [key, value] of emptMap) {
  console.log(emptMap.get(key)); // 1-> 4 -> 2 -> 3 - > temp 순서가 보장된다.
}

for (const kval of emptMap) {
  console.log(kval); // 1-> 4 -> 2 -> 3 - > temp 순서가 보장된다.
}
