/**
 * Find the array first prime number.
 * If array don't have prime then returns -1
 *
 * Idea:
 * + check prime func
 * + loop & place guard to get prime number
 *
 */

function isPrime(n: number): boolean {
  if (n === 1 || n === 0) return false;

  for (let i = 2; i < n; ++i) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function E144(a: number[]): number {
  let ret: number = -1;

  for (let index = 0; index < a.length; index++) {
    const element = a[index];
    if (isPrime(element)) {
      ret = element;
      break;
    }
  }

  return ret;
}

{
  const a = [1, 2, 3, 4, 5]; // 2
  const b = [1, 1, 1, 1, 11, 1, 1, 1]; // 11
  const c = [0, 1, 13]; // 13

  console.log(E144(a));
  console.log(E144(b));
  console.log(E144(c));
}
