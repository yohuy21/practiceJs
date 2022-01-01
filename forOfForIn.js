let iterable = [3, 5, 7];
iterable.foo = "hello";

for (let i in iterable) {
  //key들 나열
  console.log(i); // 0, 1, 2, "foo"
}

for (let i of iterable) {
  //값들 나열
  console.log(i); // 3, 5, 7
}

for (let i of iterable.foo) {
  //값들 나열
  console.log(i); // h, e, l, l, o
}
