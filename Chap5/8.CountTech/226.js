/**
 * Problem: Determine the number of adjacent elements that are both even
 *   
 * 
 * Understanding the problem
 * 
  const testCase1 = []; // 0
  const testCase2 = [1]; // 0
  const testCase3 = [1,2]; // 0
  const testCase4 = [1,2,3,4,5]; // 0
  const testCase5 = [1,2,2,1]; // 2
  const testCase6 = [1,2,2,4,5]; // 3
  const testCase7 = [1,2,2,4,6,8]; // 5
 * 
 * Approach
 * + step 1: isEvenNumber function
 * + step 2: traverse input array, check were adjacent elements are both even
 * then count
 * i && i - 1 || i && i + 1 
 */

/**
 *
 * @param {Number} n
 */
function isEvenNumber(n) {
  return !(n & 1);
}

/**
 *
 * @param {Number} ai
 * @param {Number} aiMinus1
 * @param {Number} aiPlus1
 *
 */
function doAdjationNumbersAreBothEven(ai, aiMinus1, aiPlus1) {
  return (
    (isEvenNumber(ai) && isEvenNumber(aiMinus1)) ||
    (isEvenNumber(ai) && isEvenNumber(aiPlus1))
  );
}

/**
 *
 * @param {Array} a
 */
function E226(a) {
  if (a.length === 0) return 0;

  let count = 0;
  const aLength = a.length;

  if (isEvenNumber(a[0]) && isEvenNumber(a[1])) count++;
  if (isEvenNumber(a[aLength - 1]) && isEvenNumber(a[aLength - 2])) count++;

  for (let i = 1; i <= aLength - 2; ++i) {
    if (doAdjationNumbersAreBothEven(a[i], a[i - 1], a[i + 1])) {
      count++;
    }
  }

  return count;
}

{
  const testCase1 = []; // 0
  const testCase2 = [1]; // 0
  const testCase3 = [1, 2]; // 0
  const testCase4 = [1, 2, 3, 4, 5]; // 0
  const testCase5 = [1, 2, 2, 1]; // 2
  const testCase6 = [1, 2, 2, 4, 5]; // 3
  const testCase7 = [1, 2, 2, 4, 6, 8]; // 5

  console.log(E226(testCase1));
  console.log(E226(testCase2));
  console.log(E226(testCase3));
  console.log(E226(testCase4));
  console.log(E226(testCase5));
  console.log(E226(testCase6));
  console.log(E226(testCase7));
}
