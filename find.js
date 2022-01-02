class Student {
  constructor(name, age, enrolled, score) {
    this.nameKey = name;
    this.ageKey = age;
    this.enrolledKey = enrolled;
    this.scroeKey = score;
  }
}

const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, true, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, true, 66),
  new Student("E", 18, true, 88),
  new Student("F", 18, true, 45),
];
//find()
//callback 함수에 정의한 조건에 부합하는 배열의 첫 번째 값을 리턴합니다.
//조건에 부합하는 배열 값이 없을 경우 undefined를 리턴합니다.
//출처: https://hianna.tistory.com/406 [어제 오늘 내일]
const result = students.find(function(student, index) {
  console.log(student, index);
});

console.log('============1============');
const result1 = students.find((student) => student.scroeKey === 45);
console.log(result1);

console.log('============2============');
const result2 = students.find(function(student) {
  console.log(student);
});

console.log('============3============');
const result3 = students.find(function(student) {
  console.log(student);
});

console.log('============4============');
const result4 = students.find(function() {
  console.log(students[0]);
});

console.log('============5============');
const result5 = students.find((student) => students[0]);
console.log(result5);

console.log('============6============');
const result6 = students.find(() => students[0]);
console.log(result6);

