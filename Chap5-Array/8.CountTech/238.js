/**
 * Problem: List values in one-dimensional array of number
 * which have the maximum number of repetition
 * 
 * Understanding the problem
 * 
  const testCase1 = []; // []
  const testCase2 = [1]; // [1]
  const testCase3 = [1,2]; // [1,2]
  const testCase4 = [1,2,2]; // [2]
  const testCase5 = [1,2,2,3,3,3,4,4,4,4]; // [4]
  const testCase6 = [1,2,2,3,3,3,4,4,4,4,5,5,5,5]; // [4,5]
 * 
 * Approach 1: Array - 5n
 * Approach 2: Hash Table - 3n
 * 
 * 
 */

/**
 *
 * @param {Array} a
 */
function E238Array(a) {
  const countRepetitions = [];
  const aLength = a.length;

  let aMaxValue = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < aLength; ++i) {
    if (a[i] > aMaxValue) {
      aMaxValue = a[i];
    }
  }

  for (let i = 0; i <= aMaxValue; ++i) {
    countRepetitions.push(0);
  }

  for (let i = 0; i < aLength; ++i) {
    countRepetitions[a[i]] += 1;
  }

  const countRepetitionsLength = countRepetitions.length;
  let maxRepetition = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < countRepetitionsLength; ++i) {
    if (countRepetitions[i] > maxRepetition) {
      maxRepetition = countRepetitions[i];
    }
  }

  const result = [];

  for (let i = 0; i < countRepetitionsLength; ++i) {
    if (countRepetitions[i] === maxRepetition) {
      result.push(i);
    }
  }

  return result;
}

function test1() {
  const testCase1 = []; // []
  const testCase2 = [1]; // [1]
  const testCase3 = [1, 2]; // [1,2]
  const testCase4 = [1, 2, 2]; // [2]
  const testCase5 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]; // [4]
  const testCase6 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5]; // [4,5]

  console.log(E238Array(testCase1));
  console.log(E238Array(testCase2));
  console.log(E238Array(testCase3));
  console.log(E238Array(testCase4));
  console.log(E238Array(testCase5));
  console.log(E238Array(testCase6));
}

/**
 *
 * @param {Array} a
 */
function E238HashTable(a) {
  const hashmap = {};
  const aLength = a.length;

  for (let i = 0; i < aLength; ++i) {
    hashmap[a[i]] = (hashmap[a[i]] || 0) + 1;
  }

  let maxRepetition = Number.NEGATIVE_INFINITY;

  for (const value in hashmap) {
    if (hashmap[value] > maxRepetition) {
      maxRepetition = hashmap[value];
    }
  }

  const result = [];

  for (const value in hashmap) {
    if (hashmap[value] === maxRepetition) {
      result.push(+value);
    }
  }

  return result;
}

function test2() {
  const testCase1 = []; // []
  const testCase2 = [1]; // [1]
  const testCase3 = [1, 2]; // [1,2]
  const testCase4 = [1, 2, 2]; // [2]
  const testCase5 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]; // [4]
  const testCase6 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5]; // [4,5]

  console.log(E238HashTable(testCase1));
  console.log(E238HashTable(testCase2));
  console.log(E238HashTable(testCase3));
  console.log(E238HashTable(testCase4));
  console.log(E238HashTable(testCase5));
  console.log(E238HashTable(testCase6));
}

{
  // test1();
  test2();
}
