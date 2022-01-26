/**
 * 1. Palindromic number - Số gánh
 * A palindromic number (numeral palindrome or a numeric palindrome) is a number
 * that remains the same when its digits are reversed, it has reflectional symmetry
 * across a vertical axis symmetry
 *
 * Example: 121, 12321, 1234321, 0, 1, 2, 11, 22
 *
 * 2. Find the array first palindromic number
 *
 * Idea:
 * + func check palindromic
 * + loop check break
 */

function isPalindromicNumber(n: number): boolean {
  /**
   * Dabble
   * 12321
   * [1,2,3,2,1]
   * a[0] = a[5 - 1] ?
   * a[i] = a[n - i - 1] ?
   *
   * Idea:
   * + cast n to array
   * + loop i from 0 to floor(n/2)
   * + check if a[i] != a[n - i -1] ? flag = false : flag = true
   * + return flag
   *
   */

  let flag: boolean = true;

  let a: number[] = String(n)
    .split('')
    .map((ele) => +ele);

  for (let i = 0; i <= Math.floor(a.length / 2); ++i) {
    if (a[i] !== a[a.length - i - 1]) {
      flag = false;
      break;
    }
  }

  return flag;
}

function E164(a: number[]): number {
  let ret: number = -1;

  for (let i = 0; i < a.length; ++i) {
    if (isPalindromicNumber(a[i])) {
      ret = a[i];
      break;
    }
  }

  return ret;
}

{
  console.log(isPalindromicNumber(12321));
  console.log(isPalindromicNumber(121));
  console.log(isPalindromicNumber(11));
  console.log(isPalindromicNumber(1));
  console.log(isPalindromicNumber(12334));
}

{
  const a = [123, 345, 343, 12321, 5]; // 343
  const b = [1, 2, 3, 4, 5]; // 1
  const c = [321, 123, 4543]; // -1
  console.log(E164(a));
  console.log(E164(b));
  console.log(E164(c));
}
