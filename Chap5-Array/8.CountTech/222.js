/**
 * Problem: Count the number of elements which are both larger
 * or smaller then their surrounding elements
 * 
 * Understanding the problem
 * 
  const testCase1 = []; // 0 
  const testCase2 = [1,2,3,4,5]; // 2
  const testCase3 = [1,2,3,2,1,2,3,2]; // 5
 * 
 * Approach
 * + step 1: Write a function which use to get the count of number
 * of extreme elements at i = 0 and i = len - 1 - done
 * + step 2: Write a function which use to get the count of number
 * of extreme elements at i either != 0 or != len - 1 - done
 * + step 3: calculate sum of step 1 result and step 2 result
 */

/**
 *
 * @param {Array} a
 */
function countTheNumberOfExtremeElementAtTwoEnds(a) {
  let count = 0;

  if (a[0] > a[1] || a[0] < a[1]) count++;

  if (a[a.length - 1] > a[a.length - 2] || a[a.length - 1] < a[a.length - 2])
    count++;

  return count;
}

/**
 *
 * @param {Array} a
 */
function countTheNumberOfExtremeElementNotAtTwoEnds(a) {
  let count = 0;

  for (let i = 1; i <= a.length - 2; ++i) {
    if (
      (a[i] > a[i - 1] && a[i] > a[i + 1]) ||
      (a[i] < a[i - 1] && a[i] < a[i + 1])
    ) {
      count++;
    }
  }

  return count;
}

/**
 *
 * @param {Array} a
 */
function E222(a) {
  const countExtremeElementAtTwoEnds =
    countTheNumberOfExtremeElementAtTwoEnds(a);

  const countExtremeElementNotAtTwoEnds =
    countTheNumberOfExtremeElementNotAtTwoEnds(a);

  return countExtremeElementAtTwoEnds + countExtremeElementNotAtTwoEnds;
}

{
  const testCase1 = []; // 0
  const testCase2 = [1, 2, 3, 4, 5]; // 2
  const testCase3 = [1, 2, 3, 2, 1, 2, 3, 2]; // 5

  console.log(E222(testCase1));
  console.log(E222(testCase2));
  console.log(E222(testCase3));
}

/**
 *
 * @param {Array} a
 */
function E222RefactorCode(a) {
  let count = 0;

  if (a[0] > a[1] || a[0] < a[1]) count++;
  if (a[a.length - 1] > a[a.length - 2] || a[a.length - 1] < a[a.length - 2])
    count++;

  for (let i = 1; i <= a.length - 2; ++i) {
    if (
      (a[i] > a[i - 1] && a[i] > a[i + 1]) ||
      (a[i] < a[i - 1] && a[i] < a[i + 1])
    )
      count++;
  }

  return count;
}

{
  const testCase1 = []; // 0
  const testCase2 = [1, 2, 3, 4, 5]; // 2
  const testCase3 = [1, 2, 3, 2, 1, 2, 3, 2]; // 5

  console.log("");
  console.log(E222RefactorCode(testCase1));
  console.log(E222RefactorCode(testCase2));
  console.log(E222RefactorCode(testCase3));
}
