/**
 * Problem: write a function to calculate the
 * S(n) = 1/1 + 1/(1+2) + 1/(1+2+3) + .. + 1/(1+2+..+n)
 *
 *
 * Understanding the problem
 * - What is S(n) = 1/1 + 1/(1+2) + 1/(1+2+3) + .. + 1/(1+2+..+n)
 * - Example:
 *   + S(1) = 1
 *   + S(2) = 1/1 + 1/(1+2)
 *   + S(3) = 1/1 + 1/(1+2) + 1/(1+2+3)
 *
 */

function fx(n) {
  let ret = 0;

  for (let i = n; i >= 1; --i) {
    let sum = 0;
    for (let j = i; j >= 1; --j) {
      sum += j;
    }
    ret = ret + 1 / sum;
  }

  return ret;
}

{
  console.log(fx(1));
  console.log(fx(2));
  console.log(fx(3));
}
