/**
 * Problem: List all position where it's value 
 * is euqal to the first negative number in an array number
 * 
 * Understanding the problem
 * 
 * + Scenario 1: [] // []
 * + Scenario 2: [1] // []
 * + Scenario 3: [1,2,-1,2] // [2]
 * + Scenario 4: [1,2,-1,2,-3,5,3] // [2]
 * + Scenario 5: [1,2,-1,2,-3,5,3,-1,1,2,3,-1,4,3] // [2,7,11]
 * 
 * Approach
 * + step 1: find array first negative number
 * + step 2: loop, check if current value is equal to the array first number 
 * then get it's position
 * 
 * 
 * 
 * 
 */


/**
 * 
 * @param {Array} a 
 */
function getArrayFirstNegativeNumber(a) {
  for (let i = 0; i < a.length; ++i) {
    if (a[i] < 0) {
      return a[i];
    }
  }
  return 'This array do not have any negative number';
}

/**
 * 
 * @param {Array} a 
 */
function E186(a) {
  const ret = [];

  const arrayFirstNegativeNumber = getArrayFirstNegativeNumber(a);

  if (typeof arrayFirstNegativeNumber === "string") return [];

  for (let i = 0; i < a.length; ++i) {
    if (a[i] === arrayFirstNegativeNumber) {
      ret.push(i);
    }
  }

  return ret;
}


{
  const testCase1 = []; // []
  const testCase2 = [1]; // []
  const testCase3 = [1, 2, -1, 2]; // [2]
  const testCase4 = [1, 2, -1, 2, -3, 5, 3]; // [2]
  const testCase5 = [1, 2, -1, 2, -3, 5, 3, -1, 1, 2, 3, -1, 4, 3]; // [2,7,11]

  console.log(E186(testCase1));
  console.log(E186(testCase2));
  console.log(E186(testCase3));
  console.log(E186(testCase4));
  console.log(E186(testCase5));
}

