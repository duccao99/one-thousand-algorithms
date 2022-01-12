/**
 *
 * @param {Number} n
 */
function countNumberDigits(n) {
  let ret = 0;

  for (i = n; i !== 0; i = Math.floor(i / 10)) {
    ret++;
  }

  return ret;
}

// 1. Number linear traverse
const n = 123456;
const length = countNumberDigits(n);

const blueColorDontKnowKeywordCode = "\x1b[36m";
const whiteColorDontKnowKeywordCode = "\x1b[0m";

console.log("", blueColorDontKnowKeywordCode);
console.log("Number linear traverse");

for (let i = 0; i < length; ++i) {
  console.log(Math.floor(n / Math.pow(10, length - i - 1)) % 10);
}

// 2. Number reverse traverse
console.log("", blueColorDontKnowKeywordCode);
console.log("Number reverse traverse");

for (let i = 0; i < length; ++i) {
  console.log(Math.floor(n / Math.pow(10, i)) % 10);
}
