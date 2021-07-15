function sn(n: number): number {
  return (n * (n + 1)) / 2;
}
function E80(x: number, n: number): number {
  /**
   * x+x2/1+2+..xn/1+..+n
   * + 1+..+n
   * + i 1->n
   * + x^i/s(i)
   *
   * 3+9/3+27/6
   */
  var ret: number = 0;
  for (let i = 1; i <= n; ++i) ret += Math.pow(x, i) / sn(i);
  return ret;
}
console.log(E80(3, 3));
console.log(E80(3, 10));
