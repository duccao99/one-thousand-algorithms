function E67(x: number, n: number): number {
  /**
   * s(x,n)=x-x2+x3-x4+...+(-1)^(n+1)*x^n
   * 3,3 -> 3-3^2+3^3
   * idea
   * + loop i from 1 to n
   * + ret=x^i*(-1)^(i+1)
   *
   */

  var ret = 0;
  for (let i = 1; i <= n; ++i) ret += Math.pow(x, i) * Math.pow(-1, i + 1);
  return ret;
}

console.log(E67(3, 3));
