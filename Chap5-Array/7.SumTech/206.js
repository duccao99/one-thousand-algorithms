/**
<<<<<<< HEAD:Chap5/SumTech/206.js
 * Problem: Sum all values which is greater than their around values 
=======
 * Problem: Sum all values which are greater than their around values
>>>>>>> 10cbe81d4c131b02045ddc393c9a011940f102b2:Chap5/7.SumTech/206.js
 * 
 * Understanding the problem
 * 
  const testCase1 = []; // 0
<<<<<<< HEAD:Chap5/SumTech/206.js
  const testCase2 = [1,2]; // 2
  const testCase3 = [1,2,1]; // 2 
  const testCase4 = [1,2,3,4,5]; // 5
  const testCase5 = [1,2,1,3,1]; // 5
  const testCase6 = [1]; // 1

 * 
 * Approach
 * 
 * 
 */
=======
  const testCase2 = [1]; // 1
  const testCase3 = [1,2]; // 2
  const testCase4 = [1,2,1,3,1]; // 5
  const testCase5 = [1,2,3,2,1]; // 3
  const testCase6 = [1,2,3,2,5]; // 8
 * 
 * Approach
 * + step 1: check a[0]
 * + step 2: check a[len - 1]
 * + step 3: check a[i]
 */

>>>>>>> 10cbe81d4c131b02045ddc393c9a011940f102b2:Chap5/7.SumTech/206.js
/**
 *
 * @param {Array} a
 */
function E206(a) {
<<<<<<< HEAD:Chap5/SumTech/206.js
  if (a.length === 1) {
    return a[0];
  }

  if (a.length === 2) {
    return a[0] > a[1] ? a[0] : a[1];
  }

  let ret = 0;

  for (let i = 0; i < a.length; ++i) {
    if (i === a.length - 1) {
      if (a[i] > a[i - 1]) {
        ret += a[i];
      }
    }

    if (i !== a.length - 1) {
      if (a[i] > a[i - 1] && a[i] > a[i + 1]) {
        ret += a[i];
      }
=======
  let ret = 0;

  if (a.length === 1) return a[0];

  if (a[0] > a[1]) {
    ret += a[0];
  }

  if (a[a.length - 1] > a[a.length - 2]) {
    ret += a[a.length - 1];
  }

  for (let i = 1; i < a.length - 1; ++i) {
    if (a[i] > a[i - 1] && a[i] > a[i + 1]) {
      ret += a[i];
>>>>>>> 10cbe81d4c131b02045ddc393c9a011940f102b2:Chap5/7.SumTech/206.js
    }
  }

  return ret;
}
<<<<<<< HEAD:Chap5/SumTech/206.js
{
  const testCase1 = []; // 0
  const testCase2 = [1, 2]; // 2
  const testCase3 = [1, 2, 1]; // 2
  const testCase4 = [1, 2, 3, 4, 5]; // 5
  const testCase5 = [1, 2, 1, 3, 1]; // 5
  const testCase6 = [1]; // 1
=======

{
  const testCase1 = []; // 0
  const testCase2 = [1]; // 1
  const testCase3 = [1, 2]; // 2
  const testCase4 = [1, 2, 1, 3, 1]; // 5
  const testCase5 = [1, 2, 3, 2, 1]; // 3
  const testCase6 = [1, 2, 3, 2, 5]; // 8
>>>>>>> 10cbe81d4c131b02045ddc393c9a011940f102b2:Chap5/7.SumTech/206.js

  console.log(E206(testCase1));
  console.log(E206(testCase2));
  console.log(E206(testCase3));
  console.log(E206(testCase4));
  console.log(E206(testCase5));
  console.log(E206(testCase6));
}
