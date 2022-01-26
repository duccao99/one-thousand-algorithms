/**
 * Problem: Sort values at odd position in one-dimensional array of number
 * in ascending order, other values at other position keep the same 
 * values and position
 * 
 * Understanding the problem
 * -------0  1  2  3  4--------
 * - a = [1, 4, 3, 2, 5]
 * 
 * - result = [1, 2, 3, 4, 5]
 * 
 * - aLength - 1, odd
 *  + start loop at aLength - 1, i-=2
 * - aLength - 1, even
 *  + start loop at aLength - 1 - 1, i-=2
 * 
  const testCase1 = [1,4,3,2,5]; // [1,2,3,4,5]
  const testCase2 = [1,5,3,2,4]; // [1,2,3,5,4]
  const testCase3 = [2,1,3,5,4]; // [2,1,3,5,4]
  const testCase4 = [3,1,2,6,5,4,7]; // [3,1,2,4,5,6,7]
 * 
 * 
 * 
 */

/**
 *
 * @param {Number} n
 */
function isOddNumber(n) {
  return n % 2 !== 0;
}

/**
 *
 * @param {Array} a
 * @param {Number} i
 * @param {Number} j
 */
function swapArrayElementAtIJPosition(a, i, j) {
  const temporary = a[i];
  a[i] = a[j];
  a[j] = temporary;
}

/**
 *
 * @param {Array} a
 */
function E257(a) {
  const aLength = a.length;

  if (isOddNumber(aLength - 1)) {
    for (let i = aLength - 1; i >= 0; i -= 2) {
      for (let j = i - 2; j >= 0; j -= 2) {
        if (a[j] > a[i]) {
          swapArrayElementAtIJPosition(a, i, j);
        }
      }
    }
  }

  if (!isOddNumber(aLength - 1)) {
    for (let i = aLength - 1 - 1; i >= 0; i -= 2) {
      for (let j = i - 2; j >= 0; j -= 2) {
        if (a[j] > a[i]) {
          swapArrayElementAtIJPosition(a, i, j);
        }
      }
    }
  }

  return a;
}

function test1() {
  const testCase1 = [1, 4, 3, 2, 5]; // [1,2,3,4,5]
  const testCase2 = [1, 5, 3, 2, 4]; // [1,2,3,5,4]
  const testCase3 = [2, 1, 3, 5, 4]; // [2,1,3,5,4]
  const testCase4 = [3, 1, 2, 6, 5, 4, 7]; // [3,1,2,4,5,6,7]

  console.log(E257(testCase1));
  console.log(E257(testCase2));
  console.log(E257(testCase3));
  console.log(E257(testCase4));
}

/**
 *
 * @param {Array} a
 */
function E257BetterCode(a) {
  for (
    let i = isOddNumber(a.length - 1) ? a.length - 1 : a.length - 1 - 1;
    i >= 0;
    i -= 2
  ) {
    for (let j = i - 2; j >= 0; j -= 2) {
      if (a[j] > a[i]) {
        swapArrayElementAtIJPosition(a, i, j);
      }
    }
  }
  return a;
}

function test2() {
  const testCase1 = [1, 4, 3, 2, 5]; // [1,2,3,4,5]
  const testCase2 = [1, 5, 3, 2, 4]; // [1,2,3,5,4]
  const testCase3 = [2, 1, 3, 5, 4]; // [2,1,3,5,4]
  const testCase4 = [3, 1, 2, 6, 5, 4, 7]; // [3,1,2,4,5,6,7]

  console.log(E257BetterCode(testCase1));
  console.log(E257BetterCode(testCase2));
  console.log(E257BetterCode(testCase3));
  console.log(E257BetterCode(testCase4));
}

{
  console.log("test 1");
  test1();
  console.log("test 2");
  test2();
}
