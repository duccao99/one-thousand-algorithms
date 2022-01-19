let s = "12345";
// remove 23 means pos = 1,  pos = 2 -> not see the essence, please see through the
// essence
// + step 1: remove 2 means pos = 1
// -> step 1 result: 1345
// + step 2: remove 3 means pos = 1
// -> step 2 result: 145

// result: 145

let sArray = s.split("");

removeArrayElement(sArray, 1);
removeArrayElement(sArray, 1);
console.log(sArray.join(""));

/**
 *
 * @param {Array} a
 * @param {Number} pos
 */
function removeArrayElement(a, pos) {
  /**
   * - a = [1,2,3,4,5,6,7,8,9]
   * - pos = 1
   * - result: 1 3 4 5 6 7 8 9
   *
   *
   */
  if (pos === 0) a.shift();
  if (pos === a.length - 1) a.pop();

  for (let i = pos; i < a.length; ++i) {
    a[i] = a[i + 1];
  }

  a.length--;

  return a;
}

let a = [
  "_",
  "_",
  "_",
  "_",
  "_",
  "_",
  "_",
  "_",
  "_",
  "_",
  "8",
  "_",
  "_",
  "_",
  "_",
  "_",
  "_",
  "_",
  "_",
  "_",
  "_",
  "_",
  "_",
  "_",
  "_",
  "_",
  "_",
  "9",
];

for (let i = 0; i < 10; ++i) {
  a = removeArrayElement(a, 11);
}

console.log(a);
