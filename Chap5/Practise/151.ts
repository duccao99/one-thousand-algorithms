/**
 * Find the array maximum prime number
 * If it don't have prime then return 0
 *
 * Idea:
 * + func check prime
 * + loop & check max prime
 */

function isPrime(n: number): boolean {
  if (n === 0 || n === 1) return false;

  for (let i = 2; i < n; ++i) if (n % i === 0) return false;

  return true;
}

function E151(a: number[]): number {
  let ret: number = 0;
  let max: number = -1;

  for (let i = 0; i < a.length; ++i) {
    if (isPrime(a[i]) && max < a[i]) {
      max = a[i];
      ret = max;
    }
  }

  return ret;
}

{
  const a = [1, 2, -5, 1, 28, 6, 5, 11, -6, -4, -5]; // 11
  const b = [-1, -2, -1, -1, 2, 4, 3, 4]; // 3
  const c = [1, 0, 1, 4, 6, 8, 28]; // 0
  console.log(E151(a));
  console.log(E151(b));
  console.log(E151(c));
}
