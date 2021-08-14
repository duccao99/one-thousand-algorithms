/**
 * Write a function to count the amount of prime that is less than 100 in an array
 *
 * Idea:
 * + function check prime
 * + loop and check < 100
 */

function isPrime(n: number): boolean {
  /**
   * Prime? 2 3 5 7,...
   */
  if (n === 1) return false;
  for (let i = 2; i < n; ++i) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function E125(a: number[]): number {
  let count = 0;
  for (let i = 0; i < a.length; ++i) if (isPrime(a[i]) && a[i] < 100) count++;
  return count;
}

console.log(E125([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(E125([100, 111]));
