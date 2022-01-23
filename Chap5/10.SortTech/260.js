/**
 * Problem: Given two one-dimensional arrays of number a, b.
 * Determine whether b was a permutation of a
 * 
 * Understanding the problem
 * - Array permutation: [a,b,c]
 * - Permutation amount: n!
 * - Permutation essence: change the position of stuff that 
 * will be affect to the result
 * 
 * + 3! = 3 x 2 x 1 = 6 
 * + [a,b,c]
 * + [a,c,b]
 * + [b,a,c]
 * + [b,c,a]
 * + [c,a,b]
 * + [c,b,a]
 * 
 * - a = [1,2,3]
 * - b = [1,2] | [1,2,3,4]
 * + if a.length != b.length return -1 (*)
 * 
 * - a = [1,2,3]
 * - b = [3,2,1]
 * + if a.length = b.length
 *   + if all a[i] was in b[i] then true else false
 * 
 * 
 * 
 * 
  const a1 = [1,2,3]; // 
  const b1 = [2,1,3]; // 

  const a2 = [1,2,3]; // 
  const b2 = [2]; // 

  const a3 = [1,2,3]; // 
  const b3 = [2,1,3,4]; // 

  const a4 = [1,2,3,4]; // 
  const b4 = [2,1,3,5]; // 

  const a5 = [1,2,3,4]; // 
  const b5 = [3,2,1,4]; // 
 * 
 * 
 */

/**
 *
 * @param {Array} a
 * @param {Array} b
 */
function E260(a, b) {
  if (a.length !== b.length) return false;

  const length = a.length;
  let isBWasAnPermutationOfA = true;

  for (let i = length; i >= 0; --i) {
    let isFound = false;
    for (let j = length; j >= 0; --j) {
      if (b[j] === a[i]) {
        isFound = true;
        break;
      }
    }

    if (isFound === false) {
      isBWasAnPermutationOfA = false;
      break;
    }
  }

  return isBWasAnPermutationOfA;
}

function test1() {
  const a1 = [1, 2, 3]; //
  const b1 = [2, 1, 3]; //

  const a2 = [1, 2, 3]; //
  const b2 = [2]; //

  const a3 = [1, 2, 3]; //
  const b3 = [2, 1, 3, 4]; //

  const a4 = [1, 2, 3, 4]; //
  const b4 = [2, 1, 3, 5]; //

  const a5 = [1, 2, 3, 4]; //
  const b5 = [3, 2, 1, 4]; //

  console.log(E260(a1, b1)); // true
  console.log(E260(a2, b2)); // false
  console.log(E260(a3, b3)); // false
  console.log(E260(a4, b4)); // false
  console.log(E260(a5, b5)); // true
}

{
  test1();
}
