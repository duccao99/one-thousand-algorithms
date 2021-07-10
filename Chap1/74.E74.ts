function f(n: number): number {
  if (n === 0 || n === 1) return 1;
  return f(n - 1) * n;
}
function E74(x: number, n: number): number {
  /**
   * s(x,n)=1-x+x3/3!+..+(-1)n+1*x2n+1/2n+1!
   */
  var ret = 0;
  for (let i = 1; i <= n; ++i)
    ret += (Math.pow(-1, i + 1) * Math.pow(x, 2 * i + 1)) / f(2 * i + 1);
  return ret + 1 - x;
}

console.log(E74(3, 3));
