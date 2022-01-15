/**
 * Problem: Determine the number of adjacent-values which are both 
 * have opposite signs
 * 
 * Understanding the problem
 * 
  const testCase1 = []; // 0
  const testCase2 = [1]; // 0
  const testCase3 = [-1,1]; // 2
  const testCase4 = [-1,1,2,3,4,5,-1]; // 4
  const testCase5 = [-1,1,2,-3,4,5,-1]; // 7
 * 
 * Approach 1
 * + step 1: Write a function to check if the adjacent-values at
 * 0 position and len-1 position are opposite signs, count
 * + step 2: check at position != 0 and != len-1, count
 * + step 3: total step 1 + step 2 
 * 
 * 
 * 
 */

/**
 *
 * @param {Array} a
 */
function countAreAdjacentValueHaveOppositeSignAt0AndLengthMinusOnePosition(a) {
  /**
   * Problem: How to know if a and b have opposite sign?
   * + a*b < 0 then both of them have opposite sign
   */
  let count = 0;
  if (a.length === 1) return 0;

  if (a.length === 2) {
    if (a[0] * a[1] < 0) count += 2;
    return count;
  }

  if (a[0] * a[1] < 0) count += 2;

  if (a[a.length - 1] * a[a.length - 2] < 0) count += 2;

  return count;
}

/**
 *
 * @param {Array} a
 */
function countAreAdjacentValueHaveOppositeSignAtExclamationMark0AndLengthMinusOnePosition(
  a
) {
  /**
   * Problem: How to know if a and b have opposite sign?
   * + a*b < 0 then both of them have opposite sign
   */
  let count = 0;

  for (let i = 1; i <= a.length - 2; ++i) {
    /**
     * + i * (i - 1) < 0
     * + i * (i + 1) < 0
     *
     * + i * (i - 1) < 0 && i * (i + 1) < 0
     * + i * (i - 1) < 0 && i * (i + 1) > 0
     *
     * + i * (i - 1) > 0 && i * (i + 1) < 0
     * + i * (i - 1) > 0 && i * (i + 1) > 0
     *
     *
     *
     *
     */
  }
  return count;
}

/**
 *
 * @param {Array} a
 */
function E227(a) {
  /**
   * O(n^2 + n)
   */
  let count = 0;
  let countedElements = [];

  for (let i = 0; i < a.length; ++i) {
    if (a[i] * a[i + 1] > 0) continue;
    if (a[i] * a[i + 1] < 0) {
      count += 2;
      countedElements.push(a[i]);
      countedElements.push(a[i + 1]);
    }
  }

  for (let j = 0; j < countedElements.length; ++j) {
    if (countedElements[j] === countedElements[j - 1]) {
      count--;
    }
  }

  return count;
}

{
  const testCase1 = []; // 0
  const testCase2 = [1]; // 0
  const testCase3 = [-1, 1]; // 2
  const testCase4 = [-1, 1, 2, 3, 4, 5, -1]; // 4
  const testCase5 = [-1, 1, 2, -3, 4, 5, -1]; // 7
  const testCase6 = [-1, 1, 2, -3, 4, -3, 5, -4, -1]; // 8

  /**
   * Stuff Human do?
   * + -1 * 1 < 0 -> count = 2, (-1,1)
   * +  1 * 2 > 0 -> count = 2, (-1,1)
   * +  2 * -3 < 0 -> count = 4, (-1,1,2,-3)
   * +  -3 * 4 < 0 -> count = 6, (-1,1,2,-3,-3,4)
   * -> -3 is counted -> remove -3
   * +  count = 5, (-1,1,2,-3,4)
   * +  4 * 5 > 0 -> count = 5, (-1,1,2,-3,4)
   * +  5 * -1 < 0 -> count = 7, (-1,1,2,-3,4,5,-1)
   * +  -1 end -> count = 7, (-1,1,2,-3,4,5,-1)
   * Computer do?
   * + traverse each element - for i from 0 to len
   * + a[i] * a[i+1] < 0 -> count
   * + a[i] * a[i+1] > 0 -> not count
   * + how to teach computer know if an element was counted?
   *   + const countedElements = []
   *   + if(element is being count) countedElements.push(element)
   *   + traverse countedElements, check a[i], a[i-1]
   *
   */

  console.log(E227(testCase1));
  console.log(E227(testCase2));
  console.log(E227(testCase3));
  console.log(E227(testCase4));
  console.log(E227(testCase5));
  console.log(E227(testCase6));
}
