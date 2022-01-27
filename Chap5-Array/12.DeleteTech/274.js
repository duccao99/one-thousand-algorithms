/**
 * Problem: Let's remove all even number in array of number
 * 
 * Understanding the problem
 * 
  const testCase1 = [1,2,3,4,5]; // [1,3,5]
  const testCase2 = [1,3,5]; // [1,3,5]
  const testCase3 = [2,4,6]; // []
 * 
 * Approach
 * + step 1: write a function to check if a number was a even number - done
 * + step 2: get even number indexes - done
 * + step 3: write a function to remove array element at position k - done
 * + step 4: traverse input array - done
 *           + traverse indexes 
 *             + if match, remove
 * 
 * 
 */

/**
 *
 * @param {Number} n
 */
function isEvenNumber(n) {
  return n % 2 === 0;
}

/**
 *
 * @param {Array} a
 */
function getEvenNumbersIndexes(a) {
  const ret = [];
  for (let i = a.length - 1; i >= 0; --i) {
    if (isEvenNumber(a[i])) {
      ret.push(i);
    }
  }
  return ret;
}

/**
 *
 * @param {Array} a
 * @param {Number} k
 */
function removeArrayElementAtPositionK(a, k) {
  const aLengthMinusOne = a.length - 1;

  if (k < 0 || k > aLengthMinusOne) return a;

  const ret = new Array(aLengthMinusOne);

  if (k === 0) {
    for (let i = ret.length - 1; i >= 0; --i) {
      ret[i] = a[i + 1];
    }
  }

  if (k === aLengthMinusOne) {
    for (let i = ret.length - 1; i >= 0; --i) {
      ret[i] = a[i];
    }
  }

  if (k !== 0 && k !== aLengthMinusOne) {
    for (let i = k - 1; i >= 0; --i) {
      ret[i] = a[i];
    }

    for (let i = ret.length - 1; i >= k; --i) {
      ret[i] = a[i + 1];
    }
  }

  return ret;
}

/**
 *
 * @param {Array} a
 */
function E274(a) {
  let evenNumbersIndexes = getEvenNumbersIndexes(a);

  for (let i = a.length - 1; i >= 0; --i) {
    for (let j = evenNumbersIndexes.length - 1; j >= 0; --j) {
      if (evenNumbersIndexes[j] === i) {
        a = removeArrayElementAtPositionK(a, i);
        evenNumbersIndexes = removeArrayElementAtPositionK(
          evenNumbersIndexes,
          j
        );
        break;
      }
    }
  }

  return a;
}

function test1() {
  const testCase1 = [1, 2, 3, 4, 5]; // [1,3,5]
  const testCase2 = [1, 3, 5]; // [1,3,5]
  const testCase3 = [2, 4, 6]; // []
  const testCase4 = [2, 4, 6, 8, 1, 2, 1, 4, 1, 6]; // [1,1,1]

  console.log(E274(testCase1));
  console.log(E274(testCase2));
  console.log(E274(testCase3));
  console.log(E274(testCase4));
}

{
  test1();
}
