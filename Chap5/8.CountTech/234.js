/**
 * Problem: Given a,b as an one-dimensional array of number.
 * Count the number of value which is appear once in a or b
 * 
 * Understanding the problem
 * a = [1,2,3,4]
 * b = [1,3,4,5,6]
 * + a: 2 -> count = 1
 * + b: 5,6 -> count = 3
 * 
 *
  const a1 = [1, 2, 3, 4];
  const b1 = [1, 3, 4, 5, 6];

  const a2 = [];
  const b2 = [];

  const a3 = [1, 2, 3, 4, 5];
  const b3 = [6, 7, 8, 9];



  const a4 = [1, 2, 3, 4, 5];
  const b4 = [6, 7, 8, 9,10,11,12,13,14,15,16,17];
 * 
 * Approach 1: brute force (2n^2)
 * Approach 2: hash table (2n^2 + 2n || 4n)
 * 
 * 
 * 
 * 
 * 
 */

/**
 *
 * @param {Array} a
 * @param {Array} b
 */
function E234BruteForce(a, b) {
  /**
   * O(2 * n^2)
   */
  let count = 0;

  let aLength = a.length;
  let bLength = b.length;

  for (let i = 0; i < aLength; ++i) {
    let flag = false;

    for (let j = 0; j < bLength; ++j) {
      if (a[i] === b[j]) {
        flag = true;
        break;
      }
    }

    if (!flag) {
      count++;
    }
  }

  for (let i = 0; i < b.length; ++i) {
    let flag = false;
    for (let j = 0; j < a.length; ++j) {
      if (b[i] === a[j]) {
        flag = true;
        break;
      }
    }

    if (flag === false) {
      count++;
    }
  }

  return count;
}

/**
 *
 * @param {Array} a
 * @param {Array} b
 */
function E234ArrayLength(a, b) {
  const aLength = a.length;
  const bLength = b.length;

  let count = 0;

  if (aLength >= bLength) {
    const kPos = aLength - bLength;

    for (let i = 0; i < bLength; ++i) {
      if (b[i] === a[i]) count++;
    }

    for (let i = kPos; i < aLength; ++i) {}
  }

  if (aLength < bLength) {
  }
}

function test1() {
  const a1 = [1, 2, 3, 4];
  const b1 = [1, 3, 4, 5, 6];

  const a2 = [];
  const b2 = [];

  const a3 = [1, 2, 3, 4, 5];
  const b3 = [6, 7, 8, 9];

  console.log(E234BruteForce(a1, b1)); // 3
  console.log(E234BruteForce(a2, b2)); // 0
  console.log(E234BruteForce(a3, b3)); // 9
}

{
  // test1();
}

/**
 *
 * @param {Array} a
 * @param {Array} b
 */
function E234HashTable(a, b) {
  const aHashMap = {};
  const bHashMap = {};
  const aLength = a.length;
  const bLength = b.length;

  for (let i = 0; i < aLength; ++i) {
    aHashMap[a[i]] = 0;
  }

  for (let i = 0; i < bLength; ++i) {
    bHashMap[b[i]] = 0;
  }

  let count = 0;
  for (const key in aHashMap) {
    if (!(key in bHashMap)) {
      count++;
    }
  }

  for (const key in bHashMap) {
    if (!(key in aHashMap)) {
      count++;
    }
  }

  return count;
}

function test2() {
  const a1 = [1, 2, 3, 4];
  const b1 = [1, 3, 4, 5, 6];

  const a2 = [];
  const b2 = [];

  const a3 = [1, 2, 3, 4, 5];
  const b3 = [6, 7, 8, 9];

  const a4 = [1, 2, 3, 4, 5];
  const b4 = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

  console.log(E234BruteForce(a1, b1)); // 3
  console.log(E234BruteForce(a2, b2)); // 0
  console.log(E234HashTable(a3, b3)); // 9
  console.log(E234BruteForce(a4, b4)); // 17
}

{
  test2();
}
