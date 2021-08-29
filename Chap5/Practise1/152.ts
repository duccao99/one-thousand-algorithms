/**
 * Find the array minimum perfect number.
 * If it don't have then return 0
 *
 * Idea:
 * + find perfect func
 * + loop & place guard & check
 */

function nDivisors(n: number): number[] {
  const ret: number[] = [];

  for (let i = 1; i < n; ++i) if (n % i === 0) ret.push(i);

  return ret;
}

function isPerfectNumber(n: number): boolean {
  if (n === 0) return false;

  const n_divisors: number[] = nDivisors(n);
  let sum: number = 0;

  for (let i = 0; i < n_divisors.length; ++i) {
    sum += n_divisors[i];
  }

  return sum === n;
}

function E152(a: number[]): number {
  let min: number = 9999999;
  let ret: number = 0;

  for (let i = 0; i < a.length; ++i) {
    if (isPerfectNumber(a[i]) && a[i] < min) {
      min = a[i];
      ret = min;
    }
  }

  return ret;
}

{
  const a = [1, 2, -5, 1, 28, 6, 5, 11, -6, -4, -5]; // 6
  const b = [-1, -2, -1, -1, 2, 4, 3, 4]; // 0
  const c = [1, 0, 1, 4, 6, 8, 28]; // 6
  console.log(E152(a));
  console.log(E152(b));
  console.log(E152(c));
}
