const first = [1, 2];
const second = [5, 6];
const union = [0, ...first, 4, ...second];

function restParameter1(...rest) {
  console.log(rest);
}

function restParameter2(one, two, ...rest) {
  console.log(one);
  console.log(two);
  console.log(rest);
}

restParameter1(...union);
restParameter2(...union);
