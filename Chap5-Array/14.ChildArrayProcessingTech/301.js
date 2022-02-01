/**
 * Problem: Given two array of number a and b. Please indicate 
 * whether array a is a sequence of array b or not
 * 
 * Understanding the problem
 * - a = [1,2,3]
 * - b = [1,2,3,4,5]
 * - ret = true
 * 
 * - a = [3,2,1]
 * - b = [1,2,3,4,5]
 * - ret = false
 * 
 * 
  const a1 = [1,2,3]; // true
  const b1 = [1,2,3,4,5]; 

  const a2 = [3,2,1]; // false
  const b2 = [1,2,3,4,5]; 
 * 

 */

/**
 *
 * @param {Array} a
 * @param {Array} b
 */
function E301(a, b) {
  if (a.length > b.length) return false;

  let ret = false;

  for (let i = b.length - 1; i >= 0; --i) {
    if (b[i] === a[a.length - 1]) {
      let checkPos = i;
      let flag = true;
      for (let j = a.length - 1; j >= 0; --j) {
        if (a[j] !== b[checkPos]) {
          flag = false;
          break;
        }
        checkPos--;
      }

      if (flag === true) {
        ret = flag;
        break;
      }
    }
  }

  return ret;
}

function test1() {
  const a1 = [1, 2, 3]; // true
  const b1 = [1, 2, 3, 4, 5];

  const a2 = [3, 2, 1]; // false
  const b2 = [1, 2, 3, 4, 5];

  const a3 = [3, 2, 1, 4, 5]; // true
  const b3 = [1, 2, 3, 4, 5, 3, 2, 1, 4, 5];

  const a4 = [3, 2, 1, 4, 5]; // false
  const b4 = [1, 2, 3, 4, 5, 3, 2, 1, 4, 4];

  console.log(E301(a1, b1));
  console.log(E301(a2, b2));
  console.log(E301(a3, b3));
  console.log(E301(a4, b4));
}

{
  test1();
}
