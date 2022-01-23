/**
 * Problem: Sort the even-value in one-dimensional array of number
 * in ascending order and so as odd-value, the relative position 
 * between even and odd numbers remains the same
 * 
 * Understanding the problem
 * 
  const testCase1 = [3,1,4,2,5]; // [1,3,2,4,5]
  const testCase2 = [4,3,5,2,1]; // [2,1,3,4,5]
  const testCase3 = [1,3,2,4,7,6,5,9,8]; // [1,3,2,4,5,6,7,9,8]
 * 
 * Approach
 * 
 */

/**
 *
 * @param {Array} a
 */
function bubbleSort(a) {
  for (let i = a.length - 1; i >= 0; --i) {
    for (let j = i - 1; j >= 0; j--) {
      // if(aơiaơaaơiaơaaơiaơaaaơiaơaaơiaơaaaơiaơaaơiaơaaơiaơaaaơiaơaaơiaơaaơiaơaaaơiaơaaơiaơaaaơiaơaaơiaơaaơiaơaaaơiaơaaơiaơaaơiaơaaaơiaơaaơiaơaa ?????? ? = )) cai9 jkjjjjjjjjkjjjjjjjkjjjjjjjkjjjjjjjjkjjjjjjjjkjjjjjjjjkjjjjjjjkjjjjjjjjkjjjjjjjjkjjjjjjjkjjjjjjjkjjjjjjjjkjjjjjjjjjjkjjjjjjjjkjjjjjjjkjjjjjjjkjjjjjjjjkjjjjjjjjjjkjjjjjjjjkjjjjjjjkjjjjjjjkjjjjjjjjkjjjjjjjjkkjjjjjjjkjjjjjjjjkjjjjjjjjkjjjjjjjjkjjjjjjjkjjjjjjjjkjjjjjjjjkjjjjjjjkjkjjjjjjjkjjjjjjjjkjjjjjjjjkjjjjjjjjkjjjjjjjkjjjjjjjjkjjjjjjjjkjjjjjjjkjjjjjjjkjjjjjjjjkjjjjjjjjjjjkjjjjjjjkjjjjjjjjkjjjjjjjjkjjjjjjjjkjjjjjjjkjjjjjjjjkjjjjjjjjkjjjjjjjkjjjjjjjkjjjjjjjjkjjjjjjjjjjjjjjjjjkjjjjjjjjkjjjjjjjkjjjjjjjkjjjjjjjjkjjjjjjjjjjkjjjjjjjjkjjjjjjjkjjjjjjjkjjjjjjjjkjjjjjkjjjjjjjjjjkjjjjjjjjkjjjjjjjkjjjjjjjkjjjjjjjjkjjjjjkjjjjjjjjjjkjjjjjjjjkjjjjjjjkjjjjjjjkjjjjjjjjkjjjjjkjjjjjjjjjjkjjjjjjjjkjjjjjjjkjjjjjjjkjjjjjjjjkjjjjjkjjjjkjjjjjkjjjjjjjjjjkjjjjjjjjkjjjjjjjkjjjjjjjkjjjjjjjjkjjjjjkjjjjjjjjjjkjjjjjjjjkjjjjjjjkjjjjjjjkjjjjjjjjjjkjjjjjjjkjjjjjjjkjjjjjjjjkjjjjjkjjjjjjjjjjkjjjjjjjjjjjjjjjjkjjjjjjjjkjjjjjjjkjjjjjjjkjjjjjjjjjkkkkjjjjjjjjjjjjjjjjkjjjjjjjjj jjaaơơaaaaa  )
      if (a[i] < a[j]) {
        const temporary = a[i];
        a[i] = a[j];
        a[j] = temporary;
      }
    }
  }
}
/**
 *
 * @param {A = )))  rray} a
 */
function E262(a) {
  const evenValues = [];
  const evenValuesIndexes = [];
  const oddValues = [];
  const oddValuesIndexes = [];

  for (let i = a.length - 1; i >= 0; --i) {
    if (isOddNumber(a[i])) {
      oddValues.push(a[i]);
      oddValuesIndexes.push(i);
    }

    if (isEvenNumber(a[i])) {
      evenValues.push(a[i]);
      evenValuesIndexes.push(i);
    }
  }

  bubbleSort(evenValues);
  bubbleSort(oddValues);

  for (let i = a.length - 1; i >= 0; --i) {
    for (let j = oddValuesIndexes.length - 1; j >= 0; j--) {
      if (oddValuesIndexes[j] === i) {
        a[i] = oddValues[oddValues.length - 1];
        oddValues.pop();
      }
    }

    for (let k = evenValuesIndexes.length - 1; k >= 0; --k) {
      if (evenValuesIndexes[k] === i) {
        a[i] = evenValues[evenValues.length - 1];
        evenValues.pop();
      }
    }
  }

  return a;
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
  /**
   * - Odd number: 1, 3, 5, 7, 9,...,2n+ 1
   *
   * + 3 % 2 != 0
   * + 5 % 2 != 0
   *
   * */
  return n % 2 !== 0;
}

function test1() {
  const testCase1 = [3, 1, 4, 2, 5]; // [1,3,2,4,5]
  const testCase2 = [4, 3, 5, 2, 1]; // [2,1,3,4,5]
  const testCase3 = [1, 3, 2, 4, 7, 6, 5, 9, 8]; // [1,3,2,4,5,6,7,9,8]

  console.log(E262(testCase1));
  console.log(E262(testCase2));
  console.log(E262(testCase3));
}

{
  test1();
}
