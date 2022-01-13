/**
 * Problem: Calculate the average sum of all values which are 
 * greater than x in one-dimensional array of number
 * 
 * Understanding the problem
 *
 *  
  const x = 30;
  const testCase1 = []; // 0
  const testCase2 = [1,2,3,4,5]; // 0
  const testCase3 = [11,22,33,44,55]; // (33+44+55)/3 = (77+55)/3 = 132/3 = 44
 */

/**
 *
 * @param {Array} a
 * @param {Number} x
 */
function E213(a, x) {
  if (a.length === 0) return 0;

  let count = 0;
  let result = 0;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] > x) {
      count++;
      result += a[i];
    }
  }

  if (count === 0) return result;

  return result / count;
}

{
  const x = 30;
  const testCase1 = []; // 0
  const testCase2 = [1, 2, 3, 4, 5]; // 0
  const testCase3 = [11, 22, 33, 44, 55]; // (33+44+55)/3 = (77+55)/3 = 132/3 = 44
  const testCase4 = [11, 22, 33, 44, 55, 66, 77, 88, 99]; // 66
  console.log(E213(testCase1, x));
  console.log(E213(testCase2, x));
  console.log(E213(testCase3, x));
  console.log(E213(testCase4, x));
}
