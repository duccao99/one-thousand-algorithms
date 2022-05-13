/**
 * - problem: given an array of number, traverse the array
 * if the index was an odd number, multiply the array at
 * index position with the index
 * ---------0 1 2 3 4
 * - a =   [1,2,3,4,5]
 * - ret = [1,2,3,12,5]
 *
 *
 */

/**
 *
 * @param {Array} a
 */
function f(a) {
  console.log(a);

  for (let i = a.length - 1; i >= 0; --i) {
    if (i % 2 !== 0) {
      a[i] = a[i] * i;
    }
  }
  console.log(a);
}

const a = [1, 2, 3, 4, 5];
const b = [1, 2, 3, 4, 5, 6, 7, 8];

f(a);
console.log("");
f(b);
