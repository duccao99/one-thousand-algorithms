/**
 * Find the array last prime number
 * If it don't have then returns -1
 */

function isPrime(n: number): boolean {
  if (n === 0 || n === 1) return false;

  for (let index = 2; index < n; index++) {
    if (n % index === 0) return false;
  }

  return true;
}

function E148(a: number[]): number {
  let ret: number = -1;

  for (let i = a.length - 1; i >= 0; --i) {
    if (isPrime(a[i])) {
      ret = a[i];
      break;
    }
  }

  return ret;
}

{
  const a = [1, 2, -5, 1, 2, 5, 11]; // 11
  const b = [-1, -2, -1, -1, 2, 4, 3, 4]; // 3
  const c = [1, 0, 1, 4, 6, 8]; // -1

  console.log(E148(a));
  console.log(E148(b));
  console.log(E148(c));
}
