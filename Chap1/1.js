/**
 * Problem: write a function to calculate the S(n) = 1 + 2 + .. + n
 *
 * Understanding the problem
 * - What is S(n) = 1 + 2 + .. + n ?
 * - Example:
 *   + S(1) = 1
 *   + S(2) = 1 + 2
 *   + S(3) = 1 + 2 + 3
 *
 * Approach 1: use loop
 * + ret = 0
 * + i from 1 to n
 *   + ret = ret + i
 *
 * Approach 2: use math equation
 *                            n x (n + 1)
 *  + S(n) = 1 + 2 + .. + n = ___________ (Why we have this stuff?)
 *                                 2
 *
 *  + Why S(n) = n x (n+1) / 2 ?
 *    + S(3) = 1 + 2 + 3 = 6
 *    + S(3) = 3 x (3 + 1) / 2 = 3 x 4 / 2 = 12 / 2 = 6
 *
 *
 *
 */

function fx1(n) {
  let ret = 0;

  for (let i = n; i >= 1; --i) {
    ret += i;
  }

  return ret;
}
function fx2(n) {
  return (n * (n + 1)) / 2;
}

function testFx1() {
  for (let n = 100; n >= 1; --n) {
    console.log(`n = ${n} - S(${n}) = ${fx1(n)}`);
  }
}
function testFx2() {
  for (let n = 100; n >= 1; --n) {
    console.log(`n = ${n} - S(${n}) = ${fx2(n)}`);
  }
}

{
  testFx1();
  // testFx2();
}
