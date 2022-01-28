/**
 * Problem: Let's shuttle all even numbers to the begining of the 
 * array of number, odd numbers to the end of the array and zero element 
 * to the middle of the array
 * 
 * Understanding the problem
 * - a = [0,0,1,1,2,2,3,3,4,4,5,5,6,6]
 * - ret = [2,2,4,4,6,6,0,0,1,1,3,3,5,5]
  const testCase1 = [0,0,1,1,2,2,3,3,4,4,5,5,6,6]; // [2,2,4,4,6,6,0,0,1,1,3,3,5,5]
  const testCase2 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 0, 0, 0]; // [2,2,4,4,6,6,0,0,0,5,5,3,3,1,1]
  const testCase3 = [0, 1, 2, 3, 4, 5]; // [2,4,0,5,3,1]
 * 
 * Approach
 * + step 0: Implement helper function - done
 *         + step 0.1: swap(a,i,j)
 *         + step 0.2: isEvenNumber(n)
 *         + step 0.3: isOddNumber(n)
 *         + step 0.4: isZeroNumber(n)
 * + step 1: bring even element to the begining - done
 * + step 2: get the last step 1 last element index - done
 * + step 3: bring the zero element to the step 2 index - done
 * + step 4: get the step 3 last zero element index - done
 * + step 5: bring odd element to step 4 index - done
 */

/**
 *
 * @param {Array} a
 * @param {Number} i
 * @param {Number} j
 */
function swap(a, i, j) {
  /**
   * -------0 1 2 3 4 -----------
   * - a = [1,2,3,4,5]
   * - i = 2
   * - j = 3
   * - swap(a,i,j)
   *
   * + temporary = a[i] = a[2] = 3
   * + a[i] = a[j] = a[3] = 4
   * + a[j] = temporary = 3
   */
  const temporary = a[i];
  a[i] = a[j];
  a[j] = temporary;
}

/**
 *
 * @param {Number} n
 */
function isEvenNumber(n) {
  return n % 2 === 0;
}

/**
 *
 * @param {Number} n
 */
function isOddNumber(n) {
  return n % 2 !== 0;
}

/**
 *
 * @param {Number} n
 */
function isZeroNumber(n) {
  return n === 0;
}

/**
 *
 * @param {Array} a
 */
function E281(a) {
  // 3n^2
  let breakPos = 0;

  for (let i = a.length - 1; i >= breakPos; --i) {
    if (isEvenNumber(a[i]) && !isZeroNumber(a[i])) {
      let swapPos = i;
      for (let j = i; j >= breakPos + 1; --j) {
        swap(a, swapPos, swapPos - 1);
        swapPos--;
      }
      i++;
      breakPos++;
    }
  }

  breakPos--;

  for (let i = a.length - 1; i >= breakPos + 1; --i) {
    if (isZeroNumber(a[i])) {
      let swapPos = i;
      for (let j = i; j >= breakPos + 2; --j) {
        swap(a, swapPos, swapPos - 1);
        swapPos--;
      }
      i++;
      breakPos++;
    }
  }

  for (let i = a.length - 1; i >= breakPos + 1; i--) {
    if (isOddNumber(a[i]) && !isZeroNumber(a[i])) {
      let swapPos = i;
      for (let j = i; j >= breakPos + 2; --j) {
        swap(a, swapPos, swapPos - 1);
        swapPos--;
      }
      i++;
      breakPos++;
    }
  }

  return a;
}

function test1() {
  const testCase1 = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]; // [2,2,4,4,6,6,0,0,5,5,3,3,1,1]
  const testCase2 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 0, 0, 0]; // [2,2,4,4,6,6,0,0,0,5,5,3,3,1,1]
  const testCase3 = [0, 1, 2, 3, 4, 5]; // [2,4,0,5,3,1]
  console.log(E281(testCase1));
  console.log(E281(testCase2));
  console.log(E281(testCase3));
}

{
  test1();
}
