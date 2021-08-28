/**
 * Find the array last perfect number
 * If it don't have then returns -1
 *
 * Idea:
 * + find perfect func
 * + loop & check
 */

function nDivisors(n: number): number[] {
  const ret: number[] = [];

  for (let i = 1; i < n; ++i) {
    if (n % i === 0) ret.push(i);
  }

  return ret;
}

function isPerfectNumber(n: number): boolean {
  /**
   * Perfect number is a positive number that is equal to the
   * sum of its proper divisors
   *
   * Idea:
   * + get n divisors func
   * + loop sum and check
   */

  const n_divisors: number[] = nDivisors(n);
  let sum: number = 0;
  for (let i = 0; i < n_divisors.length; ++i) {
    sum += n_divisors[i];
  }
  return sum === n;
}

function E149(a: number[]): number {
  let ret: number = -1;
  for (let i = a.length - 1; i >= 0; --i) {
    if (isPerfectNumber(a[i])) {
      ret = a[i];
      break;
    }
  }
  return ret;
}

{
  const a = [1, 2, -5, 1, 28, 6, 5, 11]; // 6
  const b = [-1, -2, -1, -1, 2, 4, 3, 4]; // -1
  const c = [1, 0, 1, 4, 6, 8, 28]; // 28
  console.log(E149(a));
  console.log(E149(b));
  console.log(E149(c));
}
