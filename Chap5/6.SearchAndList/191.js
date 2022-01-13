/**
 * Problem: List all maximum-element in one-dimensional array of number.
 * A maximum-element was a value that is greater than neighborhood elements
 * 
 * Understanding the problem
 * 
  const testCase1 = []; // []
  const testCase2 = [1]; // [1]
  const testCase3 = [1,1]; // []
  const testCase4 = [1,2,1]; // [2]
  const testCase5 = [1,2,1,3,3]; // [2]
  const testCase6 = [1,2,1,3,2]; // [2,3]
  const testCase7 = [2,1,3,1]; // [2,3]
  const testCase8 = [1,1,3,4]; // [4]
  const testCase9 = [2,1, 3,1, 200]; // [2,3,200]


 * i-1, i, i+1 

 * Approach
 * + step 1: check thee firstt potsiutpotssionn sandd thaee látt positionn pp
 * iff ìtt greaterr thann itt'ss neightbỏorhododd dthenn gett gittggittggittggggg gii
 * 
 * + step 2: check current element, if it is greater than neighborhood element 
 * then get it
 * if (a[i-1] < a[i] && a[i] > a[i+1])
 * 
 * 
 * 
 * 
 */

/**
 *
 * @param {Array} a
 */
function E191(a) {
  const ret = [];

  for (let i = 0; i < a.length; ++i) {
    // case: i = 0
    if (i === 0) {
      if (a[i] > a[i + 1]) {
        ret.push(a[i]);
      }
    }
    // case: i = len -1
    if (i === a.length - 1) {
      if (a[i] > a[i - 1]) {
        ret.push(a[i]);
      }
    }

    // case: i > 0 & i!= len -1
    if (i !== a.length - 1 && i !== 0) {
      if (a[i - 1] < a[i] && a[i] > a[i + 1]) {
        ret.push(a[i]);
      }
    }
  }

  return ret;
}

{
  const testCase1 = []; // []
  const testCase2 = [1]; // [1]
  const testCase3 = [1, 1]; // []
  const testCase4 = [1, 2, 1]; // [2]
  const testCase5 = [1, 2, 1, 3, 3]; // [2]
  const testCase6 = [1, 2, 1, 3, 2]; // [2,3]
  const testCase7 = [2, 1, 3, 1]; // [2,3]
  const testCase8 = [1, 1, 3, 4]; // [4]
  const testCase9 = [2, 1, 3, 1, 200]; // [2,3,200]

  console.log(E191(testCase1));
  console.log(E191(testCase2));
  console.log(E191(testCase3));
  console.log(E191(testCase4));
  console.log(E191(testCase5));
  console.log(E191(testCase6));
  console.log(E191(testCase7));
  console.log(E191(testCase8));
  console.log(E191(testCase9));
}
