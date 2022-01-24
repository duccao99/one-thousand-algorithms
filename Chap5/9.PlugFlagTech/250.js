/**
 * Problem: Was elements in one-dimensional array of number can 
 * be built to arithmetic progression, if yes return the common 
 * difference between terms 
 * 
 * Understanding the problem
 * - Arithmetic progression: An arithmetic progression or
 * arithmetic sequence is a sequence of numbers such that 
 * the difference between the consecutive terms
 * is constant. For instance, the sequence
 * 5,7,9,11,13,15,... is an arithmetic progression
 * with a common difference of 2.
 * 
 * - a1 = 5
 * - a2 = 7 = 5 + 2
 * - a3 = 9 = 7 + 2
 * - a4 = 11 = 9 + 2
 * - a5 = 13 = 11 + 2
 * 
 * ...
 * - an = a(n-1) + 2
 * ...
 * 
 * + a1 = 5
 * + a2 = 7
 * + a3 = 9
 * + a4 = a1 + (4-1).d
 * + a4 = 5 + 3.2 = 5 + 6 = 11
 * + a4 = a2 + (4-2).2
 * + a4 = 7 + 2.2 = 11
 * 
 * + a4 = (a3 + a5)/2
 * + a4 = (9 + 13)/2 = 22/2 = 11
 * 
 * 
 *
 * 
 * - an = a1 + (n-1)d
 * - an = am + (n-m)d
 * - ak = [a(k+1) + a(k-1)]/2
 * 
 * 
  const testCase1 = []; // {isArithmeticSequence:false}
  const testCase2 = [5,7,9,11]; // {isArithmeticSequence:true, commonDifferenceBetweenTerms:2}
  const testCase3 = [3,6,9,12,15,18]; // {isArithmeticSequence:true, commonDifferenceBetweenTerms:3}
  const testCase4 = [0,4,8,12,16,20]; // {isArithmeticSequence:true, commonDifferenceBetweenTerms:4}
  const testCase5 = [0,4,8,12,16,20,21,25]; // {isArithmeticSequence:false}
 * 
 * Approach 1: 
 * + step 1: get commonDifferenceBetweenTerms - (a[i] - a[i-1])
 * 
 * + step 2: check if commonDifferenceBetweenTerms is a constant value then returns ak else returns 
 * {isArithmeticSequence:false}
 * 
 * 
 * Approach 2: using uk - property of arithmetic progression
 * + step 1: calculate uk = (a[i-1] + a[i+1])/2
 * + step 2: compare uk vs a[i], if both aren't equal then flag = 0
 * 
 * 
 */

/**
 *
 * @param {Array} a
 */
function E250UsingCommonDifferenceBetweenTerms(a) {
  if (a.length === 0) return { isArithmeticSequence: false };

  let d = a[1] - a[0];
  let flag = 1;

  for (let i = a.length - 1, temp = d; i > 0; --i) {
    d = a[i] - a[i - 1];

    if (temp !== d) {
      // if new d is difference than old d means d is not a constant value
      flag = 0;
      break;
    }
  }

  return flag === 0
    ? {
        isArithmeticSequence: false,
      }
    : {
        isArithmeticSequence: true,
        commonDifferenceBetweenTerms: d,
      };
}

function test1() {
  const testCase1 = []; // {isArithmeticSequence:false}
  const testCase2 = [5, 7, 9, 11]; // {isArithmeticSequence:true, commonDifferenceBetweenTerms:2}
  const testCase3 = [3, 6, 9, 12, 15, 18]; // {isArithmeticSequence:true, commonDifferenceBetweenTerms:3}
  const testCase4 = [0, 4, 8, 12, 16, 20]; // {isArithmeticSequence:true, commonDifferenceBetweenTerms:4}
  const testCase5 = [0, 4, 8, 12, 16, 20, 21, 25]; // {isArithmeticSequence:false}

  console.log(E250UsingCommonDifferenceBetweenTerms(testCase1));
  console.log(E250UsingCommonDifferenceBetweenTerms(testCase2));
  console.log(E250UsingCommonDifferenceBetweenTerms(testCase3));
  console.log(E250UsingCommonDifferenceBetweenTerms(testCase4));
  console.log(E250UsingCommonDifferenceBetweenTerms(testCase5));
}

/**
 *
 * @param {Array} a
 */
function E250UsingUkProperty(a) {
  if (a.length === 0) return { isArithmeticSequence: false };

  let flag = 1;

  let d = a[1] - a[0];

  for (let i = a.length - 2; i > 0; --i) {
    const uk = (a[i - 1] + a[i + 1]) / 2;
    if (uk !== a[i]) {
      flag = 0;
      break;
    }
  }

  return flag === 1
    ? { isArithmeticSequence: true, commonDifferenceBetweenTerms: d }
    : { isArithmeticSequence: false };
}

function test2() {
  const testCase1 = []; // {isArithmeticSequence:false}
  const testCase2 = [5, 7, 9, 11]; // {isArithmeticSequence:true, commonDifferenceBetweenTerms:2}
  const testCase3 = [3, 6, 9, 12, 15, 18]; // {isArithmeticSequence:true, commonDifferenceBetweenTerms:3}
  const testCase4 = [0, 4, 8, 12, 16, 20]; // {isArithmeticSequence:true, commonDifferenceBetweenTerms:4}
  const testCase5 = [0, 4, 8, 12, 16, 20, 21, 25]; // {isArithmeticSequence:false}

  console.log(E250UsingUkProperty(testCase1));
  console.log(E250UsingUkProperty(testCase2));
  console.log(E250UsingUkProperty(testCase3));
  console.log(E250UsingUkProperty(testCase4));
  console.log(E250UsingUkProperty(testCase5));
}

{
  test1();
  console.log("");
  test2();
}
