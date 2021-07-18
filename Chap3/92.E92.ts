function min(a: number, b: number): number {
  return a < b ? a : b;
}
function E92(a: number, b: number): number {
  /**
   * GCD - greatest common divisor
   * 10 6 -> 2
   * + find min a,b
   * + loop i from 1 to min
   * + check if a%i and b%i are both equal 0 then carry i
   *
   */
  var m = min(a, b);
  var ret = 0;
  for (let i = 1; i <= m; ++i) if (a % i === 0 && b % i === 0) ret = i;
  return ret;
}
console.log(E92(10, 6));
console.log(E92(3, 3));
console.log(E92(100, 25));
