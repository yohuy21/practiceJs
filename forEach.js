const arrA = ['hello' ,'my', 'name', 'is', 'yoju'];
const arrB =[];
arrA.forEach(str => {
  arrB.push(str.length);
});
console.log(arrB);