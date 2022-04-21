/**
 * Problem: was n digits increase, left to right
 *
 *
 * Understanding the problem
 *
 * - n = 123
 * - ret = true
 *
 * - n = 321
 * - ret = false
 *
 * - n = 123
 *   + previous digit = 3
 * - n = 12
 *
 * + 1th loop
 *   + current digit = 2
 *   + current digit > previous digit - return false
 *   + current digit < previous digit - previous digit = current digit
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

  n = Math.floor(n / 10);

  let isIncrease = true;

  while (n !== 0) {
    const currentDigit = n % 10;

    if (currentDigit > previousDigit) {
      isIncrease = false;
      break;
    }

    if (currentDigit < previousDigit) {
      previousDigit = currentDigit;
    }

    n = Math.floor(n / 10);
  }

  return isIncrease;
}

{
  const n1 = 123;
  const n2 = 321;
  const n3 = 1234321;

  console.log(`n = ${n1} -  ${fx(n1)}`);
  console.log(`n = ${n2} -  ${fx(n2)}`);
  console.log(`n = ${n3} -  ${fx(n3)}`);
}
