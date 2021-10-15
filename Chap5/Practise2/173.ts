/**
 * Given an array of integer. Find the element which appear less the most
 *
 * voc
 * [1,2,2,3,3,3,1,1,1]
 * + 1: 4
 * + 2: 2
 * + 3: 3
 * -> 2
 *
 * solution:
 * + count the number appear of element
 * + get min
 *
 */

function E173(a: number[]): number {
  const carry = a.reduce((prev: any, curr) => {
    prev[curr] = (prev[curr] || 0) + 1;

    return prev;
  }, {});

  let minAppear = 9999;
  let ret = -1;

  for (let e in carry) {
    if (carry[e] < minAppear) {
      minAppear = carry[e];
      ret = +e;
    }
  }

  a.forEach((e) => {
    /**
     * [1, 2, 2, 3, 3, 3, 1, 1, 1]
     * + e = 1
     * carry[1] = (carry[1] || 0) + 1 = 1
     * carry = {'1' : 1}
     *
     * + e = 2
     * carry[2] = (carry[2] || 0) + 1 = 1
     * carry = {'1':1, '2':1}
     *
     * + e = 2
     * carry[2] = (carry[2] || 0) + 1 = 2
     * carry = {'1':1, '2':2 }
     *
     *
     *
     */
    /**
     *     checkCarry[e] = checkCarry[e] || 0 + 1;
    console.log(checkCarry);
    
     * [1, 2, 2, 3, 3, 3, 1, 1, 1]
     *
     * + e = 1
     * carry[1] = carry[1] || 0 + 1 = 1
     * carry = {'1':1}
     *
     * + e = 2
     * carry[2] = carry[2] || 0 + 1 = 1
     * carry = {'1':1, '2':1}
     *
     * + e = 2
     * carry[2] = carry[2] || 0 + 1 = 1
     */
  });

  return ret;
}

{
  const a = [1, 2, 2, 3, 3, 3, 1, 1, 1]; // 2
  const b = [1, 2, 2, 3, 3, 3, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4]; // 4
  const c = [1, 2, 2, 3, 3, 3, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3]; // 1

  console.log(E173(a));
  console.log(E173(b));
  console.log(E173(c));
}
