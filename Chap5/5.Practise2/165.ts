/**
 * Find the array first number that has the first digit was an odd number
 *
 * Dabble
 * 1234 -> how to get 1 ?
 * 1234/1000 = 1 -> 1000 = 10 * 100 = 10^3 = 10^(n.length - 1)
 *
 * 421/100 = 4 -> 100 = 10^2
 *
 * Idea:
 * + func check odd number
 * + func get number first digit
 * + loop i from 0 to n - 1
 * + check a[i] first digit is odd ? -> ret
 * +
 */

function isOdd(n: number): boolean {
  return n % 2 !== 0;
}

function numberFirstDigit(n: number): number {
  return Math.floor(n / Math.pow(10, n.toString().length - 1));
}

function E165(a: number[]): number {
  let ret: number = -1;

  for (let i = 0; i < a.length; ++i) {
    if (isOdd(numberFirstDigit(a[i]))) {
      ret = a[i];
      break;
    }
  }

  return ret;
}

{
  console.log(numberFirstDigit(123)); /// 1
  console.log(numberFirstDigit(223)); // 2
  console.log(numberFirstDigit(423)); // 4
}

{
  const a = [234, 1234, 45, 5434]; //1234
  const b = [23, 42, 677]; // -1
  const c = [234, 234, 213, 567]; // 567
  console.log(E165(a));
  console.log(E165(b));
  console.log(E165(c));
}
