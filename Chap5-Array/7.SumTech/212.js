/**
 * Problem: Calculate the average sum of all positive values in
 * one-dimensional array of number
 * 
 * Understanding the problem
 * 
  const testCase1 = []; // 0
  const testCase2 = [-1]; // 0
  const testCase3 = [-1,-2,1,2,3,4,5]; // (1+2+3+4+5)/5 = 3
 */

/**
 *
 * @param {Array} a
 */
function E212(a) {
  if (a.length === 0) return 0;

  let result = 0;
  let countPositive = 0;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] > 0) {
      result += a[i];
      countPositive++;
    }
  }

  if (countPositive === 0) {
    return result;
  }

  return result / countPositive;
}

{
  const testCase1 = []; // 0
  const testCase2 = [-1]; // 0
  const testCase3 = [-1, -2, 1, 2, 3, 4, 5]; // (1+2+3+4+5)/5 = 3

  // console.log(E212(testCase1));
  // console.log(E212(testCase2));
  // console.log(E212(testCase3));

  const startTime = performance.now();
  const testCase4 = [];

  for (let i = -9999999; i <= 99999999; ++i) {
    testCase4.push(i);
  }

  console.log(E212(testCase4));
  const endTime = performance.now();
  console.log(`E212 executed time: ${(endTime - startTime) / 1000} seconds`);
}

/**
 *
 * @param {Array} a
 */
function E212Second(a) {
  const aLength = a.length;
  let countPositive = 0;
  let result = 0;

  for (let i = 0; i < aLength / 2; ++i) {
    /**
     * + a[i] > 0 && a[len - i - 1] > 0
     * + a[i] > 0 && a[len - i - 1] < 0
     * + a[i] < 0 && a[len - i - 1] > 0
     * + a[i] < 0 && a[len - i - 1] < 0
     *
     */

    if (i === aLength - i - 1) {
      if (a[i] > 0) {
        countPositive++;
        result = result + a[i];
      }
    }

    if (i !== aLength - i - 1) {
      if (a[i] > 0 && a[aLength - i - 1] > 0) {
        countPositive += 2;
        result = result + a[i] + a[aLength - i - 1];
      }

      if (a[i] > 0 && a[aLength - i - 1] < 0) {
        countPositive++;
        result = result + a[i];
      }

      if (a[i] < 0 && a[aLength - i - 1] > 0) {
        countPositive++;
        result = result + a[aLength - i - 1];
      }
    }
  }

  if (countPositive === 0) return result;

  return result / countPositive;
}

{
  const testCase1 = []; // 0
  const testCase2 = [-1]; // 0
  const testCase3 = [-1, -2, 1, 2, 3, 4, 5]; // (1+2+3+4+5)/5 = 3

  // console.log(E212Second(testCase1));
  // console.log(E212Second(testCase2));
  // console.log(E212Second(testCase3));

  const startTime = performance.now();
  const testCase4 = [];

  for (let i = -9999999; i <= 99999999; ++i) {
    testCase4.push(i);
  }

  console.log(E212Second(testCase4));
  const endTime = performance.now();
  console.log(
    `E212Second executed time: ${(endTime - startTime) / 1000} seconds`
  );
}

{
  /**
   * - 1 2 3 4
   * + a.length/2 = 2
   *
   * - 1 2 3 4 5
   * + a.length/2 = 2.5
   */
  const a = [1, 2, 3, 4]; // 2.5
  const b = [1, 2, 3, 4, 5]; // 3
  // console.log(E212(a));
  // console.log(E212Second(a));

  // console.log(E212(b));
  // console.log(E212Second(b));
}
