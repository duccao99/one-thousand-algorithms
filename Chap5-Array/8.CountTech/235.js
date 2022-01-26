/**
 * Problem: Given two one-dimensional array of number a,b. List values 
 * which are appear once a or b
 * 
 * Understanding the problem
 * - a = [1,2,3,4]
 * - b = [1, 3, 4, 5, 6]
 * + a: 2
 * + b: 5 6
 * + result: 2 5 6
 * 
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
 * Approach 1: brute force - 2n^2
 * Approach 2: hash table - 4n || 2n + 2n^2
 * 
 * 
 * 
 */

/**
 *
 * @param {Array} a
 * @param {Array} b
 */
function E235HashTable(a, b) {
  const result = [];
  const aLength = a.length;
  const bLength = b.length;

  for (let i = 0; i < aLength; ++i) {
    let flag = false;
    for (let j = 0; j < bLength; ++j) {
      if (a[i] === b[j]) {
        flag = true;
        break;
      }
    }

    if (!flag) {
      result.push(a[i]);
    }
  }

  for (let i = 0; i < bLength; ++i) {
    let flag = false;
    for (let j = 0; j < aLength; ++j) {
      if (b[i] === a[j]) {
        flag = true;
        break;
      }
    }

    if (!flag) {
      result.push(b[i]);
    }
  }

  return result;
}

function test1() {
  const a1 = [1, 2, 3, 4];
  const b1 = [1, 3, 4, 5, 6];

  const a2 = [];
  const b2 = [];

  const a3 = [1, 2, 3, 4, 5];
  const b3 = [6, 7, 8, 9];

  const a4 = [1, 2, 3, 4, 5];
  const b4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

  console.log(E235HashTable(a1, b1)); // [2,5,6]
  console.log(E235HashTable(a2, b2)); // []
  console.log(E235HashTable(a3, b3)); // [1,2,3,4,5,6,7,8,9]
  console.log(E235HashTable(a4, b4)); // [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
}

{
  test1();
}

/**
 *
 * @param {Array} a
 * @param {Array} b
 */
function E235HashTable(a, b) {
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

  const result = [];

  for (const value in aHashMap) {
    if (!(value in bHashMap)) {
      result.push(+value);
    }
  }

  for (const value in bHashMap) {
    if (!(value in aHashMap)) {
      result.push(+value);
    }
  }

  return result;
}

function test2() {
  const a1 = [1, 2, 3, 4];
  const b1 = [1, 3, 4, 5, 6];

  const a2 = [];
  const b2 = [];

  const a3 = [1, 2, 3, 4, 5];
  const b3 = [6, 7, 8, 9];

  const a4 = [1, 2, 3, 4, 5];
  const b4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

  console.log(E235HashTable(a1, b1)); // [2,5,6]
  console.log(E235HashTable(a2, b2)); // []
  console.log(E235HashTable(a3, b3)); // [1,2,3,4,5,6,7,8,9]
  console.log(E235HashTable(a4, b4)); // [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
}

{
  test2();
}
