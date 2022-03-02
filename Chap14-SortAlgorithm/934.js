/**
 * Use MergeSort idea to do something  
 * 
 * Problem: Given an array of number a = [1,2,3,4,5], 
 * use the merge sort idea to increase each a's element by 1 value
 * 
 * 
 * Understanding the problem
 * - Merge sort idea: divide into smallest piece, do something, merge
 * + divide
 * + do something
 * + merge
 * 
 * - a = [1,2,3,4,5]
 * - ret = [2,3,4,5,6]
 * 
  const testCase1 = [1,2,3,4,5]; // [2,3,4,5,6]
  const testCase2 = [2,4,6,8]; // [3,5,7,9]
  const testCase3 = [1,3,5,7]; // [2,4,6,8]
 * 
 * 
 * 
 */

/**
 *
 * @param {Array} a
 */
function E934(a) {
  if (a.length <= 1) return a;

  const right = [...a];
  const mid = Math.floor(a.length / 2);
  const left = right.splice(0, mid);

  return increasing(E934(left), E934(right));
}

/**
 *
 * @param {Array} left
 * @param {Array} right
 */
function increasing(left, right) {
  if (left.length > 1 && right.length > 1) {
    return [...left, ...right];
  }

  if (left.length > 1 && right.length <= 1) {
    const ret = [...right];
    for (let i = ret.length - 1; i >= 0; --i) {
      ret[i] += 1;
    }

    return [...left, ...ret];
  }

  if (left.length <= 1 && right.length > 1) {
    const ret = [...left];
    for (let i = ret.length - 1; i >= 0; --i) {
      ret[i] += 1;
    }
    return [...ret, ...right];
  }

  if (left.length <= 1 && right.length <= 1) {
    const ret = [...left, ...right];

    for (let i = ret.length - 1; i >= 0; --i) {
      ret[i] += 1;
    }

    return ret;
  }
}

function test1() {
  const testCase1 = [1, 2, 3, 4, 5]; // [2,3,4,5,6]
  const testCase2 = [2, 4, 6, 8]; // [3,5,7,9]
  const testCase3 = [1, 3, 5, 7]; // [2,4,6,8]

  console.log(E934(testCase1));
  console.log(E934(testCase2));
  console.log(E934(testCase3));
}

{
  test1();
}
