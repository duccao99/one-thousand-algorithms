/**
 * Problem: Given an one-dimension array of integer which have distict element.
 * List all triple values (a,b,c)
 * which satisfies the condition a = b + c and a, b, c are distinct.
 * 
 * Understanding the problem
 * (6,2,4), 6 = 2 + 4
 * 
  const testCase1 = []; // []
  const testCase2 = [6,2,4]; // [[6,2,4]]
  const testCase3 = [1,2,3,4,5]; // [[3,2,1],[5,3,2]]
 * 
 * First approach
 * + step 1: sort the input array in descending order
 * + step 2: loop three rounds, check, get result
 * 
 * 
 * 
 * 
 */

/**
 *
 * @param {Array} a
 */
function mergeSortDescendingOrder(a) {
  if (a.length <= 1) return a;

  const right = [...a];
  const mid = Math.round(a.length / 2);
  const left = right.splice(0, mid);

  return mergingAndSortingLeftAndRightArray(
    mergeSortDescendingOrder(left),
    mergeSortDescendingOrder(right)
  );
}

/**
 *
 * @param {Array} left
 * @param {Array} right
 */
function mergingAndSortingLeftAndRightArray(left, right) {
  const sortedResult = [];

  while (left.length && right.length) {
    if (left[0] >= right[0]) {
      sortedResult.push(left[0]);
      left.shift();
    }
    if (left[0] < right[0]) {
      sortedResult.push(right[0]);
      right.shift();
    }
  }

  return [...sortedResult, ...left, ...right];
}

/**
 *
 * @param {Array} a
 */
function E195(a) {
  a = mergeSortDescendingOrder(a);
  const ret = [];

  for (let i = 0; i < a.length; ++i) {
    for (let j = i + 1; j < a.length; ++j) {
      for (let k = j + 1; k < a.length; ++k) {
        if (a[i] === a[j] + a[k]) {
          ret.push([a[i], a[j], a[k]]);
        }
      }
    }
  }

  return ret;
}

{
  const testCase1 = []; // []
  const testCase2 = [6, 2, 4]; // [[6,2,4]]
  const testCase3 = [1, 2, 3, 4, 5]; // [[5,4,1],[5,3,2],[4,3,1],[3,2,1]]

  console.log(E195(testCase1));
  console.log(E195(testCase2));
  console.log(E195(testCase3));
}
