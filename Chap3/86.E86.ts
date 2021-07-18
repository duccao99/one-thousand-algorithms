function E86(n: number): number {
  /**
   * 1^3+..+n^3
   * + i from 1 to n
   * + ret+=i^3
   *
   * 1+8+27+64+125=225
   */
  var ret = 0;
  for (let i = 1; i <= n; ++i) ret += Math.pow(i, 3);
  return ret;
}
console.log(E86(5));
