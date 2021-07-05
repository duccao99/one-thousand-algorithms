function E31(n: number) {
  // n, check n is prime ?
  // prime is a number that have two divisor: 1 and itself
  // idea
  // loop i from 2 to sqrt n if n%i===0 then false else true

  for (let i = 2; i <= Math.floor(Math.sqrt(n)); ++i) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(E31(6));
console.log(E31(11));
console.log(E31(100));
console.log(E31(13));

/**
 * why we stop at sqrt(n) ?
 * suppose n is not a prime number so we have
 * n = ab (1 <= a <=b <n)
 * -> a^2 <= ab
 * -> ab <= b^2
 * -> a^2 <= ab <= b^2
 * -> a^2 <= n <= b^2
 * because a,b is positive then
 * -> a <= sqrt(n) <= n
 * so we should check till sqrt(n) to find the a
 *
 *
 */
