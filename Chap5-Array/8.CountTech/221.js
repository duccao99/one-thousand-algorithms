/**
 * Problem: Show the correlation between the number of even numbers
 * and the number of odd numbers in one-dimensional array of number
 * + This function return one of three values: -1, 0, 1
 * + The -1 value means the number of even numbers is greater than
 * the number of odd numbers
 * + The 0 value means the number of even numbers is equal to 
 * the number of odd numbers
 * + The 1 value means the number of even numbers is smaller than
 * the number of odd numbers
 * 
 * 
 * Understanding the problem
 * 
  const testCase1 = [0,1,2,3,4,5,6,7,8,9,10]; // -1
  const testCase2 = [2]; // -1
  const testCase3 = []; // 0
  const testCase4 = [1,2,3,4,5,6,7,8,9,10]; // 0
  const testCase5 = [1]; // 1
  const testCase6 = [1,2,3,4,5]; // 1
  const testCase7 = [1,2,3,4,5,6,7,8,9]; // 1
 * 
 * Approach
 * + step 1: write a function which use to check even number - done
 * + step 2: write a function which use to count the number of even numbers
 * in one-dimensional array of number - done
 * + step 3: write a function which use to count the number of odd numbers
 * in one-dimensional array of number - done
 * + step 4: compare result of step 2 and step 3 then return result
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
 * @param {Array} a
 */
function getTheNumberOfEvenNumberInAnArray(a) {
  let count = 0;
  for (let i = a.length - 1; i >= 0; --i) if (isEvenNumber(a[i])) count++;
  return count;
}

/**
 *
 * @param {Array} a
 */
function getTheNumberOfOddNumberInAnArray(a) {
  let count = 0;
  for (let i = a.length - 1; i >= 0; --i) if (!isEvenNumber(a[i])) count++;
  return count;
}

/**
 *
 * @param {Array} a
 */
function E221(a) {
  /**
   * O(2n)
   */
  const evenCounted = getTheNumberOfEvenNumberInAnArray(a);
  const oddCounted = getTheNumberOfOddNumberInAnArray(a);
  if (evenCounted > oddCounted) return -1;
  if (evenCounted === oddCounted) return 0;
  if (evenCounted < oddCounted) return 1;
}

{
  const testCase1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // -1
  const testCase2 = [2]; // -1
  const testCase3 = []; // 0
  const testCase4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // 0
  const testCase5 = [1]; // 1
  const testCase6 = [1, 2, 3, 4, 5]; // 1
  const testCase7 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // 1

  console.log(E221(testCase1));
  console.log(E221(testCase2));
  console.log(E221(testCase3));
  console.log(E221(testCase4));
  console.log(E221(testCase5));
  console.log(E221(testCase6));
  console.log(E221(testCase7));
}

/**
 *
 * @param {Array} a
 */
function E221OneLoop(a) {
  /**
   * O(n)
   */
  let countEvenNumber = 0;
  let countOddNumber = 0;

  for (let i = a.length - 1; i >= 0; --i) {
    if (isEvenNumber(a[i])) {
      countEvenNumber++;
    }
    if (!isEvenNumber(a[i])) {
      countOddNumber++;
    }
  }

  if (countEvenNumber > countOddNumber) return -1;
  if (countEvenNumber === countOddNumber) return 0;
  if (countEvenNumber < countOddNumber) return 1;
}

{
  const testCase1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // -1
  const testCase2 = [2]; // -1
  const testCase3 = []; // 0
  const testCase4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // 0
  const testCase5 = [1]; // 1
  const testCase6 = [1, 2, 3, 4, 5]; // 1
  const testCase7 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // 1

  console.log("");
  console.log(E221OneLoop(testCase1));
  console.log(E221OneLoop(testCase2));
  console.log(E221OneLoop(testCase3));
  console.log(E221OneLoop(testCase4));
  console.log(E221OneLoop(testCase5));
  console.log(E221OneLoop(testCase6));
  console.log(E221OneLoop(testCase7));
}
