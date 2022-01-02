const arr = [
  {name: 'apple', price : 1000}, 
  {name: 'banana', price : 2000},
  {name: 'apple', price: 3000}
];

function isApple(element) {
  if(element.name === 'apple') {
    return true;
  }
}

const apples = arr.filter(isApple);//callback 함수에 정의한 조건에 부합하는 배열의 모든 값을 새로운 배열로 리턴합니다.

출처: https://hianna.tistory.com/406 [어제 오늘 내일]

console.log('========배열==========');
console.log(apples);

console.log('========길이==========');
console.log(apples.length);

console.log('========배열 첫번째==========');
console.log(apples[0]);

console.log('========배열 두번째==========');
console.log(apples[0].price);



