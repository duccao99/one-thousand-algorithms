/**
 * Problem: List all positions where it's value is equal to
 * the minimum value in an array number
 * 
 * 
 * 
 * Understanding the problem
 * 
 * + Scenario 1: [] // []
 * + Scenario 2: [1] // [0]
 * + Scenario 3: [1,2] // [0]
 * + Scenario 4: [1,2,3] // [0]
 * + Scenario 5: [1, 2, 3, 2, 1, 3] // [0,4]
 * + Scenario 6: [5, 2, 2, 1, 2, 1, 3, 1]; // [3,5,7]
 * 
 * 
 * 
 * 
 * Approach
 * + step 1: find array minimum value
 *  + step 1.1: sort the array in ascending order
 *  + step 1.2: first element in the sorted array will be a minimum value
 * 
  * + step 2: loop, check if current value is equal to array minimum value 
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
function mergeSort(a) {
  if (a.length <= 1) return a;
  const right = [...a];
  const mid = Math.round(a.length / 2);
  const left = right.splice(0, mid);

  return mergeUnsortedArray(mergeSort(left), mergeSort(right));
}


/**
 * 
 * @param {Array} left 
 * @param {Array} right 
 */
function mergeUnsortedArray(left, right) {
  const sortedItems = [];

  while (left.length && right.length) {
    // while still exists left element || right element 
    // then do something

    if (left[0] <= right[0]) {
      sortedItems.push(left[0]);
      left.shift();
    }

    if (left[0] > right[0]) {
      sortedItems.push(right[0]);
      right.shift();
    }
  }

  return [...sortedItems, ...left, ...right];
}


/**
 * 
 * @param {Array} a 
 */
function getArrayMinimumValue(a) {
  if (a.length === 0) return null;
  return mergeSort(a)[0];
}


/**
 * 
 * @param {Array} a 
 */
function E187(a) {
  const ret = [];

  const arrayMinimumValue = getArrayMinimumValue(a);

  if (arrayMinimumValue === null) return [];

  for (let i = 0; i < a.length; ++i) {
    if (a[i] === arrayMinimumValue) {
      ret.push(i);
    }
  }

  return ret;
}


{
  const testCase1 = []; // []
  const testCase2 = [1]; // [0]
  const testCase3 = [1, 2]; // [0]
  const testCase4 = [1, 2, 3]; // [0]
  const testCase5 = [1, 2, 3, 2, 1, 3]; // [0,4]
  const testCase6 = [5, 2, 2, 1, 2, 1, 3, 1]; // [3,5,7]




  console.log(E187(testCase1));
  console.log(E187(testCase2));
  console.log(E187(testCase3));
  console.log(E187(testCase4));
  console.log(E187(testCase5));
  console.log(E187(testCase6));

}

