/**
 * Find the array first perfect number
 * If it don't have then returns -1
 *
 * Idea:
 * + func to check perfect number
 * + guard tech
 */

function nDivisors(n: number): number[] {
  const ret: number[] = [];
  for (let i = 1; i < n; ++i) {
    if (n % i === 0) {
      ret.push(i);
    }
  }
  return ret;
}

function isPerfectNumber(n: number): boolean {
  /**
   * Perfect number is a number that has sum of their divisor is equal to it.
   * In the sum not counted itself
   *
   * 6 -> 1 + 2 + 3 = 6
   *
   * Idea:
   * + get n divisor not contains itself
   * + sum, loop & check
   */
  const n_divisors: number[] = nDivisors(n);
  let sum: number = 0;

  for (let index = 0; index < n_divisors.length; index++) {
    sum += n_divisors[index];
  }
  return sum === n;
}

function E145(a: number[]): number {
  let ret: number = -1;

  for (let index = 0; index < a.length; index++) {
    const element = a[index];
    if (isPerfectNumber(element)) {
      ret = element;
      break;
    }
  }

  return ret;
}

{
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]; // 6
  const b = [1, 2, 6, 6, 6, 7, 8]; // 6
  const c = [1, 2, 28, 6, 6, 7, 8]; // 28

  console.log(E145(a));
  console.log(E145(b));
  console.log(E145(c));
}
