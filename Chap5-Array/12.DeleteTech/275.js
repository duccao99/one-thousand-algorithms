/**
 * Problem: Let's remove all square number in array of number
 * 
 * Understanding the problem
 * 
  const testCase1 = [1, 3, 5, 7, 9]; // [3,5,7]
  const testCase2 = [1, 2, 3, 9, 5, 6, 7, 25, 1, 2, 3]; // [2,3,5,6,7,2,3]
  const testCase3 = [4, 9, 25]; // []
 * 
 * Approach
 * + step 1: write a function to check if a number was a square number - done
 * + step 2: write a function to get all square numbers indexes - done
 * + step 3: write a function to remove array element at position k 
 * + step 4: traverse input array, traverse indexes array, match, remove
 * 
 */

/**
 *
 * @param {Number} n
 */
function isSquareNumber(n) {
  return Math.floor(Math.sqrt(n)) - Math.sqrt(n) === 0;
}

/**
 *
 * @param {Array} a
 */
function getAllSquareNumbersIndexes(a) {
  const ret = [];
  for (let i = a.length - 1; i >= 0; --i) {
    if (isSquareNumber(a[i])) {
      ret.push(i);
    }
  }
  return ret;
}

/**
 *
 * @param {Array} a
 * @param {Number} k
 */
function removeArrayElementAtPositionK(a, k) {
  if (k < 0 || k > a.length - 1) return a;

  const ret = new Array(a.length - 1);

  if (k === 0) {
    for (let i = ret.length - 1; i >= 0; --i) {
      ret[i] = a[i + 1];
    }
  }

  if (k === a.length - 1) {
    for (let i = ret.length - 1; i >= 0; --i) {
      ret[i] = a[i];
    }
  }

  if (k !== 0 && k !== a.length - 1) {
    for (let i = k - 1; i >= 0; --i) {
      ret[i] = a[i];
    }
    for (let i = ret.length - 1; i >= k; --i) {
      ret[i] = a[i + 1];
    }
  }

  return ret;
}

/**
 *
 * @param {Array} a
 */
function E275(a) {
  let squareNumbersIndexes = getAllSquareNumbersIndexes(a);

  for (let i = a.length - 1; i >= 0; --i) {
    for (let j = squareNumbersIndexes.length - 1; j >= 0; --j) {
      if (squareNumbersIndexes[j] === i) {
        a = removeArrayElementAtPositionK(a, i);
        squareNumbersIndexes = removeArrayElementAtPositionK(
          squareNumbersIndexes,
          j
        );
        break;
      }
    }
  }

  return a;
}

function test1() {
  const testCase1 = [1, 3, 5, 7, 9]; // [3,5,7]
  const testCase2 = [1, 2, 3, 9, 5, 6, 7, 25, 1, 2, 3]; // [2,3,5,6,7,2,3]
  const testCase3 = [4, 9, 25]; // []

  console.log(E275(testCase1));
  console.log(E275(testCase2));
  console.log(E275(testCase3));
}

{
  test1();
}
