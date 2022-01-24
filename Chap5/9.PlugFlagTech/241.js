/**
 * Problem: Let check if an array contains two consecutive zero values 
 * 
 * 
 * Understanding the problem
 * 
  const testCase1 = []; // 0
  const testCase2 = [0,1,2,3,4]; // 0
  const testCase3 = [0,0,1,2,3,4]; // 1
  const testCase4 = [1,2,3,0,0,4,5]; // 1
  const testCase5 = [1,2,3,4,5,0,0,0]; // 1
 *  
 * 
 */

/**
 *
 * @param {Array} a
 */
function E241(a) {
  /**
   * + The calculation a.length at this position will be execute once time
   * + better code + efficient
   * + So we realized that when we strongly notice at small thing,
   * we may find something really better
   * + So from nơơ nưư onn yourr ll;ìee will bee loopp backk too thee tt
   * 0 = )))
   */
  let flag = 0;

  for (let i = a.length - 1; i >= 0; --i) {
    if (a[i] === 0 && a[i - 1] === 0) flag = 1;
  }

  return flag;
}

function test1() {
  const testCase1 = []; // 0
  const testCase2 = [0, 1, 2, 3, 4]; // 0
  const testCase3 = [0, 0, 1, 2, 3, 4]; // 1
  const testCase4 = [1, 2, 3, 0, 0, 4, 5]; // 1
  const testCase5 = [1, 2, 3, 4, 5, 0, 0, 0]; // 1

  console.log(E241(testCase1));
  console.log(E241(testCase2));
  console.log(E241(testCase3));
  console.log(E241(testCase4));
  console.log(E241(testCase5));
}

{
  test1();
}
