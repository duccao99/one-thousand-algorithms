/**
 * Problem: was n was a palindrome number
 *
 *
 * Understanding the problem
 * - n = 123
 * - ret = false
 *
 * - n = 12321
 * - ret = true
 *
 *
 *
 */

/**
 *
 * @param {number} n
 */
function getNTotalDigits(n) {
  let ret = 0;

  while (n !== 0) {
    ret = ret + 1;
    n = Math.floor(n / 10);
  }

  return ret;
}

/**
 *
 * @param {number} n
 *
 */
function fx(n) {
  /**
   * - n = 123321
   * + 1
   * 123321
   * + 2
   * 2332
   * + 3 - break = n total digits / 2 = 6 / 2
   * 33
   *
   * - n = 12321
   * - n total digits = 5
   *
   * + 1
   * n = 12321
   *
   * + 2
   * n = 232
   *
   * + 3
   * n = 3
   *
   *
   *
   */

  let wasPalindromeNumber = true;

  const nTotalDigits = getNTotalDigits(n);

  for (let i = nTotalDigits / 2; i >= 1; --i) {
    const firstDigit = Math.floor(n / 10 ** (getNTotalDigits(n) - 1));
    const lastDigit = n % 10;

    if (firstDigit !== lastDigit) {
      wasPalindromeNumber = false;
      break;
    }

    n = Math.floor(n / 10);
    n = n % 10 ** (getNTotalDigits(n) - 1);
  }

  return wasPalindromeNumber;
}

{
  const n1 = 1;
  const n2 = 12;
  const n3 = 12321;
  const n4 = 123321;

  console.log(`n = ${n1} - was palindrome number: ${fx(n1)}`);
  console.log(`n = ${n2} - was palindrome number: ${fx(n2)}`);
  console.log(`n = ${n3} - was palindrome number: ${fx(n3)}`);
  console.log(`n = ${n4} - was palindrome number: ${fx(n4)}`);
}
