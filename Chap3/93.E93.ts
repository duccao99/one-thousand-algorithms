function E93(n: number): boolean {
  /**
   * Is n was a prime number ?
   * Prime number is a number that has factors are 1 and itself
   * 2,3,5,....
   * + loop i from 2 to n-1
   * + if n%i=0 then false else true
   *
   */
  if (n === 0 || n === 1) return false;
  for (let i = 2; i < n - 1; ++i) if (n % i === 0) return false;
  return true;
}

console.log(E93(100));
console.log(E93(10));

console.log(E93(3));
console.log(E93(2));
console.log(E93(1));
