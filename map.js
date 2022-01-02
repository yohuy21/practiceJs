const arrayA = [2, 4, 5, 7, 8];
const mapA = arrayA.map(x => x * 2);
console.log(mapA);

const parse = ['1', '2', '3'].map(parseInt);
console.log(parse);

//배열에서 문자열 길이만 획득하기
const arrA = ['hello' ,'my', 'name', 'is', 'yoju'];

const arrB = arrA.map(str => {
  return str.length;
  });
  console.log(arrB);
  console.log(arrB.length);
