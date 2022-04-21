let n1 = 123321;
let n = 12321;

const nTotalDigits = getNTotalDigits(n);

for (let i = nTotalDigits / 2; i >= 1; --i) {
  console.log(`n = ${n}`);

  const firstDigit = Math.floor(n / 10 ** (getNTotalDigits(n) - 1));
  const lastDigit = n % 10;
  console.log("firstDigit: ", firstDigit);
  console.log("lastDigit: ", lastDigit);

  n = Math.floor(n / 10);
  n = n % 10 ** (getNTotalDigits(n) - 1);
}

/**
 *
 * @param {number} n
 */
function getNTotalDigits(n) {
  let ret = 0;

  while (n !== 0) {
    ret++;
    n = Math.floor(n / 10);
  }

  return ret;
}
