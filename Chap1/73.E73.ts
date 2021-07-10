function f(n: number): number {
  var ret = 1;
  var i = 1;
  do {
    ret *= i;
    i++;
  } while (i <= n);
  return ret;
}
function E73(x: number, n: number): number {
  /**
   * -1+x2/2!-x4/4!+..+(-1)^n+1*x2n/(2n!)
   * 4,3 -> -1+4^2/2!-4^4/4!+4^6/6!
   * + 1: make n!
   * + 2: i from 0 to n
   * + 3: ret+=(-1)^i*x^2i/(2i!)
   */
  var ret = 0;
  for (let i = 0; i <= n; ++i)
    ret += (Math.pow(-1, i + 1) * Math.pow(x, 2 * i)) / f(2 * i);
  return ret;
}

console.log(E73(4, 3));
