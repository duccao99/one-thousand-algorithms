/**
 * Problem: Reverse even elements and odd elements and still keep 
 * their relative positions
 * 
 * Understanding the problem
 * 
  const testCase1 = [1,2,3,4,5]; // [5,4,3,2,1]
  const testCase2 = [2,4,5,1]; // [4,2,1,5]
  const testCase3 = [1,3,5,7,9]; // [9,7,5,3,1]
  const testCase4 = [2,4,6,8]; // [8,6,4,2]
  const testCase5 = [1,2,2,1,3,3,4,4]; // [3,4,4,3,1,1,2,2]
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
 * @param {Number} n
 */
function isOddNumber(n) {
  return n % 2 !== 0;
}

/**
 *
 * @param {Array} a
 * @param {any} e
 */
function push(a, e) {
  const ret = new Array(a.length + 1);
  ret[ret.length - 1] = e;
  for (let i = ret.length - 2; i >= 0; --i) {
    ret[i] = a[i];
  }
  return ret;
}

/**
 *
 * @param {Array} a
 * @param {Number} i
 * @param {Number} j
 */
function swap(a, i, j) {
  const temporary = a[i];
  a[i] = a[j];
  a[j] = temporary;
}

/**
 *
 * @param {Array} a
 */
function E290(a) {
  let evensIndexes = [];
  let oddsIndexes = [];

  for (let i = a.length - 1; i >= 0; --i) {
    if (isEvenNumber(a[i])) {
      evensIndexes = push(evensIndexes, i);
    }
    if (isOddNumber(a[i])) {
      oddsIndexes = push(oddsIndexes, i);
    }
  }

  const evensIndexesMid = Math.round(evensIndexes.length / 2);
  const oddsIndexesMid = Math.round(oddsIndexes.length / 2);

  for (let i = evensIndexes.length - 1; i >= evensIndexesMid; --i) {
    swap(a, evensIndexes[i], evensIndexes[evensIndexes.length - i - 1]);
  }

  for (let i = oddsIndexes.length - 1; i >= oddsIndexesMid; --i) {
    swap(a, oddsIndexes[i], oddsIndexes[oddsIndexes.length - i - 1]);
  }

  return a;
}

function test1() {
  const testCase1 = [1, 2, 3, 4, 5]; // [5,4,3,2,1]
  const testCase2 = [2, 4, 5, 1]; // [4,2,1,5]
  const testCase3 = [1, 3, 5, 7, 9]; // [9,7,5,3,1]
  const testCase4 = [2, 4, 6, 8]; // [8,6,4,2]
  const testCase5 = [1, 2, 2, 1, 3, 3, 4, 4]; // [3,4,4,3,1,1,2,2]

  console.log(E290(testCase1));
  console.log(E290(testCase2));
  console.log(E290(testCase3));
  console.log(E290(testCase4));
  console.log(E290(testCase5));
}

{
  test1();
}
