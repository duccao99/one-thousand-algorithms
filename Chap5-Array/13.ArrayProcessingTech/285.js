/**
 * Problem: Reverse positive numbers in array
 * 
 * Understanding the problem
 * 
  const testCase1 = [-1,-2,1,2,-3,3,-4,4,5]; // [-1,-2,5,4,-3,3,-4,2,1]
  const testCase2 = [1,2,3,4,5]; // [5,4,3,2,1]
  const testCase3 = [-1,-2,-3,1,2,3]; // [-1,-2,-3,3,2,1]
  const testCase4 = [-1,2,-3,4,-5,6]; // [-1,6,-3,4,-5,2]
 * 
 * Approach
 * + step 1: write a function to check if a number was a positive number
 * + step 2: get all positive numbers indexes 
 * + step 3: reverse step 2 result 
 */

/**
 *
 * @param {Array} a
 */
function javascriptArrayPush(a, e) {
  const ret = new Array(a.length + 1);

  ret[ret.length - 1] = e;

  for (let i = ret.length - 2; i >= 0; --i) ret[i] = a[i];

  return ret;
}
/**
 *
 * @param {Number} n
 */
function isPositiveNumber(n) {
  return n > 0;
}

/**
 *
 * @param {Array} a
 * @param {Number} i
 * @param {Number} j
 */
function swap(a, i, j) {
  const temporary = a[i];
  a[i] = a[j];
  a[j] = temporary;
}
/**
 *
 * @param {Array} a
 */
function E285(a) {
  let indexes = [];
  for (let i = a.length - 1; i >= 0; --i) {
    if (isPositiveNumber(a[i])) {
      indexes = javascriptArrayPush(indexes, i);
    }
  }

  const mid = Math.floor(indexes.length / 2);

  for (let i = indexes.length - 1; i >= mid; --i) {
    swap(a, indexes[i], indexes[indexes.length - i - 1]);
  }

  return a;
}

function test1() {
  const testCase1 = [-1, -2, 1, 2, -3, 3, -4, 4, 5]; // [-1,-2,5,4,-3,3,-4,2,1]
  const testCase2 = [1, 2, 3, 4, 5]; // [5,4,3,2,1]
  const testCase3 = [-1, -2, -3, 1, 2, 3]; // [-1,-2,-3,3,2,1]
  const testCase4 = [-1, 2, -3, 4, -5, 6]; // [-1,6,-3,4,-5,2]

  console.log(E285(testCase1));
  console.log(E285(testCase2));
  console.log(E285(testCase3));
  console.log(E285(testCase4));
}

{
  test1();
}
