/**
 * Problem: Please tell me if the elements in the array are equal?
 * 
 * Understanding the problem
 * -------0 1 2 3 4 5 6 7---------
 * - a = [1,1,1,1,1,1,1,1]
 * + i = 7
 *   + j = 6 = 7 - 1 = i - 1 
 * 
  const testCase1 = []; // -1
  const testCase2 = [1]; // 1
  const testCase3 = [1,2]; // -1
  const testCase4 = [1,1,1,1]; // 1
  const testCase5 = [2,2,2,2]; // 1
  const testCase6 = [1,2,1,2]; // -1
  const testCase7 = [1,1,2,2]; // -1
  const testCase8 = [1,1,1,1,1,1,1,1]; // 1
  const testCase9 = [2,2,2,2,2,2,2]; // 1
 * 
 * Approach 1: brute force - n2
 * Approach 2: hash table - 2n
 * + step 1: use hash table to save key-value as element-0
 * + step 2: if the hash table contains more than one key then returns -1 
 * else returns 1
 * 
 * 
 * 
 * 
 */

/**
 *
 * @param {Array} a
 */
function E251Approach1(a) {
  if (a.length === 0) return -1;

  let flag = 1;

  for (let i = a.length - 1; i >= 0; --i) {
    let subFlag = 1;
    for (let j = i - 1; j >= 0; j--) {
      if (a[i] !== a[j]) {
        subFlag = -1;
        break;
      }
    }

    if (subFlag === -1) {
      flag = subFlag;
      break;
    }
  }

  return flag;
}

function test1() {
  const testCase1 = []; // -1
  const testCase2 = [1, 2]; // -1
  const testCase3 = [1, 2, 1, 2]; // -1
  const testCase4 = [1, 1, 2, 2]; // -1
  const testCase5 = [1, 1, 1, 1]; // 1
  const testCase6 = [2, 2, 2, 2]; // 1
  const testCase7 = [1, 1, 1, 1, 1, 1, 1, 1]; // 1
  const testCase8 = [2, 2, 2, 2, 2, 2, 2]; // 1
  const testCase9 = [1]; // 1

  console.log(E251Approach1(testCase1));
  console.log(E251Approach1(testCase2));
  console.log(E251Approach1(testCase3));
  console.log(E251Approach1(testCase4));
  console.log(E251Approach1(testCase5));
  console.log(E251Approach1(testCase6));
  console.log(E251Approach1(testCase7));
  console.log(E251Approach1(testCase8));
  console.log(E251Approach1(testCase9));
}

/**
 *
 * @param {Array} a
 */
function E251Approach2(a) {
  if (a.length === 0) return -1;

  const hashmap = {};

  for (let i = a.length - 1; i >= 0; --i) {
    hashmap[a[i]] = 0;
  }

  let countKey = 0;

  let flag = 1;

  for (const key in hashmap) {
    countKey++;
  }

  if (countKey > 1) {
    flag = -1;
  }

  return flag;
}

function test2() {
  const testCase1 = []; // -1
  const testCase2 = [1, 2]; // -1
  const testCase3 = [1, 2, 1, 2]; // -1
  const testCase4 = [1, 1, 2, 2]; // -1
  const testCase5 = [1, 1, 1, 1]; // 1
  const testCase6 = [2, 2, 2, 2]; // 1
  const testCase7 = [1, 1, 1, 1, 1, 1, 1, 1]; // 1
  const testCase8 = [2, 2, 2, 2, 2, 2, 2]; // 1
  const testCase9 = [1]; // 1

  console.log(E251Approach2(testCase1));
  console.log(E251Approach2(testCase2));
  console.log(E251Approach2(testCase3));
  console.log(E251Approach2(testCase4));
  console.log(E251Approach2(testCase5));
  console.log(E251Approach2(testCase6));
  console.log(E251Approach2(testCase7));
  console.log(E251Approach2(testCase8));
  console.log(E251Approach2(testCase9));
}

{
  // test1();
  test2();
}
