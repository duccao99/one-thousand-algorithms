function factorial(n: number): number {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
function E72(x: number, n: number): number {
  /**
   * s(x,n)=-x+x2/2!-x3/3!+..+(-1)n*xn/n!
   * + 1: make n!
   * + 2: i from 1 to n
   * + 3: ret+=(-1)^i*x^i/i!
   *
   */
  var ret = 0;
  for (let i = 1; i <= n; ++i)
    ret += (Math.pow(-1, i) * Math.pow(x, i)) / factorial(i);
  return ret;
}

console.log(E72(4, 4));
console.log(E72(4, 99));
