/**
 * Problem: was n digits decrease
 *
 *
 * Understanding the problem
 *
 * - n = 123
 * - ret = false
 *
 * - n = 321
 * - ret = true
 *
 * - n = 123
 * - previous digit = 3
 * - n = 12 = floor(n / 10)
 * + 1th loop
 *   + current digit = 2 = n % 10
 *   + if current digit < previous digit - ret = false, break
 *   + if current digit > previous digit - previous digit = current digit
 *
 *
 *
 *
 *
 */

/**
 *
 * @param {number} n
 *
 */
function fx(n) {
  let previousDigit = n % 10;

  let ret = true;

  n = Math.floor(n / 10);

  while (n !== 0) {
    const currentDigit = n % 10;

    if (currentDigit < previousDigit) {
      ret = false;
      break;
    }

    if (currentDigit > previousDigit) {
      previousDigit = currentDigit;
    }

    n = Math.floor(n / 10);
  }

  return ret;
}

{
  const n1 = 123;
  const n2 = 321;
  const n3 = 1234321;
  const n4 = 4321;
  const n5 = 54321;

  console.log(`n = ${n1} - was digits decrease: ${fx(n1)}`);
  console.log(`n = ${n2} - was digits decrease: ${fx(n2)}`);
  console.log(`n = ${n3} - was digits decrease: ${fx(n3)}`);
  console.log(`n = ${n4} - was digits decrease: ${fx(n4)}`);
  console.log(`n = ${n5} - was digits decrease: ${fx(n5)}`);
}
