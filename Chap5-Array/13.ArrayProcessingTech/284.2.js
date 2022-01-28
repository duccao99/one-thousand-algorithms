/**
 * Problem: Let's reverse even element order in an array of number
 * 
 * Understanding the problem
 * 
  const testCase1 = [1,2,3,4,5]; // [1,4,3,2,5]
  const testCase2 = [1,2,3,4,5,6]; // [1,6,3,4,5,2]
  const testCase3 = [1,2,3,4,5,6,7,8,9]; // [1,8,3,6,5,4,3,2,1]
  const testCase4 = [1,3,5,7,9]; // [1,3,5,7,9] 
  const testCase5 = [2,4,6,8]; // [8,6,4,2]
 * 
 * Approach
 * + step 0: write hepler function
 *        0.1: Array.push()
 * 
 * + step 1: write a function to check if a number was an even number
 * + step 2: traverse input, get all even numbers indexes
 * + step 3: reverse stuff in step 2
 * 
 */

/**
 *
 * @param {Array} a
 */
function javascriptArrayPush(a, e) {
  const ret = new Array(a.length + 1);

  ret[ret.length - 1] = e;

  for (let i = ret.length - 2; i >= 0; --i) {
    ret[i] = a[i];
  }

  return ret;
}

/**
 *
 * @param {Number} n
 */
function isEvenNumber(n) {
  return n % 2 === 0;
}

/**
 *
 * @param {Array} a
 */
function E284(a) {
  let indexes = [];

  for (let i = a.length - 1; i >= 0; --i) {
    if (isEvenNumber(a[i])) {
      indexes = javascriptArrayPush(indexes, i);
    }
  }

  let mid = Math.round(indexes.length / 2);

  for (let i = indexes.length - 1; i >= mid; --i) {
    const temporary = a[indexes[i]];
    a[indexes[i]] = a[indexes[indexes.length - i - 1]];
    a[indexes[indexes.length - i - 1]] = temporary;
  }

  return a;
}

function test1() {
  const testCase1 = [1, 2, 3, 4, 5]; // [1,4,3,2,5]
  const testCase2 = [1, 2, 3, 4, 5, 6]; // [1,6,3,4,5,2]
  const testCase3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // [1,8,3,6,5,4,3,2,1]
  const testCase4 = [1, 3, 5, 7, 9]; // [1,3,5,7,9]
  const testCase5 = [2, 4, 6, 8]; // [8,6,4,2]

  console.log(E284(testCase1));
  console.log(E284(testCase2));
  console.log(E284(testCase3));
  console.log(E284(testCase4));
  console.log(E284(testCase5));
}

{
  test1();
}
