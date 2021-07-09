function E69(x: number, n: number): number {
  /**
   * s(x,n)=x-x^3+x^5+..+(-1)^n*x^(2*n+1)
   * 3-3^3+3^5-3^7
   * idea
   * + i from 0 to n
   * + ret+=(-1)^(i)*x^(2*i+1)
   */
  var ret = 0;
  for (let i = 0; i <= n; i++) ret += Math.pow(-1, i) * Math.pow(x, 2 * i + 1);
  return ret;
}
console.log(E69(3, 3));
