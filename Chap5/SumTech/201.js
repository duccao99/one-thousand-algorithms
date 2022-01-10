/**
 * Problem: Sum all positive values in one-dimensional array of number
 * 
 * Understanding the problem
 * 
  const testCase1 = []; // 0
  const testCase2 = [-1]; // 0
  const testCase3 = [1]; // 1
  const testCase4 = [1,2,3,4,5]; // 15
  const testCase5 = [-1,-2,1,2]; // 3

 * Approach
 * + step 1: loop, check positive, sum
 * 
 */

/**
 *
 * @param {Array} a
 */
function E201(a) {
  let ret = 0;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] > 0) {
      ret += a[i];
    }
  }

  return ret;
}

/**
 *
 * @param {Array} a
 */
function E201Second(a) {
  let ret = 0;

  for (let i = 0; i < a.length / 2; ++i) {
    if (i !== a.length - i - 1) {
      /**
       * + a[i] > 0 && a[len-i-1] > 0
       * + a[i] > 0 && a[len-i-1] < 0
       * + a[i] < 0 && a[len-i-1] > 0
       * + a[i] < 0 && a[len-i-1] < 0
       *
       */
      if (a[i] > 0) {
        if (a.length - i - 1 > 0) {
          ret += a[i] + a[a.length - i - 1];
        }
        if (a.length - i - 1 < 0) {
          ret += a[i];
        }
      }
      if (a[i] < 0) {
        if (a.length - i - 1 > 0) {
          ret += a[a.length - i - 1];
        }
        if (a.length - i - 1 < 0) {
        }
      }
    }

    if (i === a.length - i - 1) {
      if (a[i] > 0) {
        ret += a[i];
      }
    }
  }

  return ret;
}

{
  const testCase1 = []; // 0
  const testCase2 = [-1]; // 0
  const testCase3 = [1]; // 1
  const testCase4 = [1, 2, 3, 4, 5]; // 15
  const testCase5 = [-1, -2, 1, 2]; // 3

  console.log(E201(testCase1));
  console.log(E201(testCase2));
  console.log(E201(testCase3));
  console.log(E201(testCase4));
  console.log(E201(testCase5));
}

{
  const testCase1 = []; // 0
  const testCase2 = [-1]; // 0
  const testCase3 = [1]; // 1
  const testCase4 = [1, 2, 3, 4, 5]; // 15
  const testCase5 = [-1, -2, 1, 2]; // 3
  const testCase6 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // 45

  console.log(E201Second(testCase1));
  console.log(E201Second(testCase2));
  console.log(E201Second(testCase3));
  console.log(E201Second(testCase4));
  console.log(E201Second(testCase5));
  console.log(E201Second(testCase6));
}
