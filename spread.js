const first = [1, 2];
const second = [5, 6];
const union = [0, ...first, 4, ...second];
console.log("union :", union);

const myname = "김석진";
console.log("...myname :", ...myname);
console.log("[...myname] :", [...myname]);

function paramChect(one, two) {
  console.log(one, two);
}

paramChect(...union);
