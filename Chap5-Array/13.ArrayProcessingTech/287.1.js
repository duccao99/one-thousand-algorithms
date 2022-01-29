/**
 * Problem: Let's shift right rotate k-times all array element
 * 
 * Understanding the problem
 * -------0 1 2 3 4------
 * - a = [1,2,3,4,5]
 * - k = 3 
 * + i = 1
 *   + a = [5,1,2,3,4]
 * + i = 2
 *   + a = [4,5,1,2,3]
 * + i = 3
 *   + a = [3,4,5,1,2]
 * 
 * 
 * -> loop i from 1 to k
 *   + temporary = a[a.len - 1]
 *   + move a[0:3] to a[1:4]
 *   + a[0] = temporary 
 * 
 const a1 = [1,2,3,4,5]; // [3,4,5,1,2]
  const k1 = 3 

 * 
 * 
 */

/**
 *
 * @param {Array} a
 * @param {Number} k
 */
function E287(a, k) {
  for (let i = k; i >= 1; --i) {
    const temporary = a[a.length - 1];

    for (let j = a.length - 2; j >= 0; --j) {
      a[j + 1] = a[j];
    }

    a[0] = temporary;
  }

  return a;
}

function test1() {
  const a1 = [1, 2, 3, 4, 5]; // [3,4,5,1,2]
  const k1 = 3;

  const a2 = [1, 2, 3, 4, 5]; // [4,5,1,2,3]
  const k2 = 2;

  console.log(E287(a1, k1));
  console.log(E287(a2, k2));
}

{
  test1();
}
