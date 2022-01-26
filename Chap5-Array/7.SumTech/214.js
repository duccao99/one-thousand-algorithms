/**
 * Problem: Calculate the average product of all positive values 
 * in one-dimensional array of number
 * 
 * Understanding the problem
 * 
  const testCase1 = []; // 0
  const testCase2 = [-1]; // 0
  const testCase3 = [1,2,3]; // (1 x 2 x 3) / 3 = 2
  const testCase4 = [1,2,3,4,5,6,7,8,9]; // 40320
 * 
 */

/**
 *
 * @param {Array} a
 */
function E214(a) {
  if (a.length === 0) return 0;

  let countPositive = 0;
  let result = 1;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] > 0) {
      result = result * a[i];
      countPositive++;
    }
  }

  if (countPositive === 0) return 0;

  return result / countPositive;
}

{
  const testCase1 = []; // 0
  const testCase2 = [-1]; // 0
  const testCase3 = [1, 2, 3]; // 1 x 2 x 3 / 3 = 2
  const testCase4 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // 40320

  console.log(E214(testCase1));
  console.log(E214(testCase2));
  console.log(E214(testCase3));
  console.log(E214(testCase4));
}
