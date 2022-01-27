/**
 * Problem: Let's remove all prime numbers in an array of number
 * 
 * Understanding the problem
 * 
  const testCase1 = [1,2,3,4,5]; // [1,4]
  const testCase2 = [1,2,3,4,5,6,7,8,9]; // [1,4,6,8,9]
  const testCase3 = [2,3,5,7,11]; // []
 * 
 * Approach
 * + step 1: write a function to check if a number was a prime number - done
 * + step 2: get all prime numbers indexes 
 * + step 3: write a function to remove array element at position k - done
 * + step 4: traverse input array & indexes array, match, remove
 * 
 */

/**
 *
 * @param {Number} n
 */
function isPrimeNumber(n) {
  if (n === 1 || n === 0) return false;

  let flag = true;

  for (let i = 2; i <= Math.sqrt(n); ++i) {
    if (n % i === 0) {
      flag = false;
      break;
    }
  }

  return flag;
}

/**
 *
 * @param {Array} a
 * @param {any} e
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
function getAllPrimeNumbersIndexes(a) {
  let ret = [];

  for (let i = a.length - 1; i >= 0; --i) {
    if (isPrimeNumber(a[i])) {
      ret = javascriptArrayPush(ret, i);
    }
  }

  return ret;
}

/**
 *
 * @param {Array} a
 */
function E277(a) {
  let primeNumbersIndexes = getAllPrimeNumbersIndexes(a);

  for (let i = a.length - 1; i >= 0; --i) {
    for (let j = primeNumbersIndexes.length - 1; j >= 0; --j) {
      if (primeNumbersIndexes[j] === i) {
        a = removeArrayElementAtPositionK(a, i);
        primeNumbersIndexes = removeArrayElementAtPositionK(
          primeNumbersIndexes,
          j
        );
        break;
      }
    }
  }

  return a;
}

function test1() {
  const testCase1 = [1, 2, 3, 4, 5]; // [1,4]
  const testCase2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // [1,4,6,8,9]
  const testCase3 = [2, 3, 5, 7, 11]; // []

  console.log(E277(testCase1));
  console.log(E277(testCase2));
  console.log(E277(testCase3));
}

{
  test1();
}
