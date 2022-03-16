/**
 * Problem: write a function to calculate the S(n) = 1^2 + 2^2 + .. + n^2
 *
 * Understanding the problem
 * - What is S(n) = 1^2 + 2^2 + .. + n^2 ?
 * - Example:
 *   + S(1) = 1^2
 *   + S(2) = 1^2 + 2^2
 *   + S(3) = 1^2 + 2^2 + 3^2
 *
 * Approach 1: use loop
 * + ret = 0
 * + i from 1 to n
 *   + ret = ret + i^2
 *
 * Approach 2: use math equation
 *
 *  + S(n) = 1^2 + 2^2 + .. + n^2 =  n.(n+1).(2n+1)/6
 *
 */

function fx1(n) {
  let ret = 0;

  for (let i = n; i >= 1; --i) {
    ret += i ** 2;
  }

  return ret;
}
function fx2(n) {
  return (n * (n + 1) * (2 * n + 1)) / 6;
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
