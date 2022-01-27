/**
 * Problem: Let's remove all negative number in array of number
 * 
 * Understanding the problem
 * 
  const testCase1 = [-1,-2,1,2,3,4,5]; // [1,2,3,4,5]
  const testCase2 = [1,2,-3,4,5,-6]; // [1,2,4,5]
  const testCase3 = [-1,-2,-3,-4,-5]; // []
  const testCase4 = [1,2,3,4,5]; // [1,2,3,4,5]
 * 
 * Approach
 * + step 1: write a function to check if a number was a negative number - done
 * + step 2: traverse input array, save negative number indexes - done
 * + step 3: write a function to remove array element at position k - done
 * + step 4: traverse input array
 *           + traverse indexes array
 *             + remove
 *  
 */

/**
 *
 * @param {Number} n
 */
function isNegativeNumber(n) {
  return n <= 0;
}

/**
 *
 * @param {Array} a
 */
function getNegativeNumberIndexes(a) {
  const ret = [];
  for (let i = a.length - 1; i >= 0; --i) {
    if (isNegativeNumber(a[i])) {
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
function removeArrayElementAtPosition(a, k) {
  if (k < 0 || k > a.length - 1) {
    return a;
  }

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
function E273(a) {
  let negativeNumberIndexes = getNegativeNumberIndexes(a);
  for (let i = a.length - 1; i >= 0; --i) {
    for (let j = negativeNumberIndexes.length - 1; j >= 0; --j) {
      if (negativeNumberIndexes[j] === i) {
        a = removeArrayElementAtPosition(a, i);
        negativeNumberIndexes = removeArrayElementAtPosition(
          negativeNumberIndexes,
          j
        );
        break;
      }
    }
  }
  return a;
}

function test1() {
  const testCase1 = [-1, -2, 1, 2, 3, 4, 5]; // [1,2,3,4,5]
  const testCase2 = [1, 2, -3, 4, 5, -6]; // [1,2,4,5]
  const testCase3 = [-1, -2, -3, -4, -5]; // []
  const testCase4 = [1, 2, 3, 4, 5]; // [1,2,3,4,5]

  console.log(E273(testCase1));
  console.log(E273(testCase2));
  console.log(E273(testCase3));
  console.log(E273(testCase4));
}

{
  test1();
}
