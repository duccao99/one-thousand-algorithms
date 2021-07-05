function E13(n: number, x: number) {
  // x^2+x4+...+x2n
  // loop i from 1 to n
  // ret+=x^2i
  var ret = 0;
  for (let i = 1; i <= n; ++i) {
    ret += Math.pow(x, 2 * i);
  }
  return ret;
}
console.log(E13(4, 4));
