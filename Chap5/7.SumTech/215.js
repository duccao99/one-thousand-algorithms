/**
 * Problem: Calculate the average sum of all elements spacing
 * in one-dimensional array of number
 * 
 * Understanding the problem
 * 
  const testCase1 = []; // 0
  const testCase2 = [1]; // 0
  const testCase3 = [1,2]; // |2-1|/1 = 1
  const testCase4 = [1,2,3]; // (|1-2|+|1-3|+|2-3|)/3 = (1+2+1)/3 = 4/3 = 1.3333...
  const testCase6 = [1, 2, 3, 4, 5, 6, 7, 8, 9] // 3.333..33...

 * Approach
 * + step 1: two loop nested, get spacing
 * + step 2: calculate average
 */

/**
 *
 * @param {Array} a
 */
function E215(a) {
  if (a.length === 0 || a.length === 1) return 0;

  let spacing = 0;
  let countSpacing = 0;

  for (let i = 0; i < a.length; ++i) {
    for (let j = i + 1; j < a.length; ++j) {
      spacing += Math.abs(a[i] - a[j]);
      countSpacing++;
    }
  }

  return spacing / countSpacing;
}

{
  const testCase1 = []; // 0
  const testCase2 = [1]; // 0
  const testCase3 = [1, 2]; // |2-1|/1 = 1
  const testCase4 = [1, 2, 3]; // (|1-2|+|1-3|+|2-3|)/3 = (1+2+1)/3 = 4/3 = 1.3333...
  const testCase6 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(E215(testCase1));
  console.log(E215(testCase2));
  console.log(E215(testCase3));
  console.log(E215(testCase4));
  console.log(E215(testCase6));

  const testCase5 = [];

  for (let i = -9999; i < 9999; ++i) {
    testCase5.push(i);
  }
  console.log(E215(testCase5));
}
