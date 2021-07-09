function E68(x: number, n: number): number {
  /**
   * -x^2+x^4+..+(-1)^n*x^2n
   * -3^2+3^4-3^6
   * idea
   * + loop i from 1 to n
   * + ret=(-1)^i*x^2i
   */
  var ret: number = 0;
  for (let i = 1; i <= n; ++i) ret += Math.pow(-1, i) * Math.pow(x, 2 * i);
  return ret;
}
console.log(E68(3, 3));
