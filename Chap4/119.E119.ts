/**
 * List all primes less than n
 *
 * Idea:
 * + What is prime ?
 * - Prime is a number that has divisor is 1 and itself.
 * + function check prime
 * + loop i from 1 to n - 1
 *   if i is prime then push it to ret
 */

function isPrime(n: number): boolean {
  var ret: boolean = true;
  for (let i = 2; i < n; ++i) {
    if (n % i === 0) {
      ret = false;
      break;
    }
  }
  return ret;
}

function E119(n: number): string {
  var ret: number[] = [];

  for (let i = 2; i < n; ++i) if (isPrime(i)) ret.push(i);
  return ret.join(' ');
}

var i = 2;
do {
  i++;
  console.log(`Primes less than ${i}: `, E119(i));
} while (i < 20);
