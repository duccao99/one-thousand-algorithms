function E12(n: number, x: number) {
  // x+x2+x3+...+xn
  // loop i from 1 to n
  // ret+=x^i
  var ret = 0;
  for (let i = 1; i <= n; ++i) ret += Math.pow(x, i);
  return ret;
}

console.log(E12(4, 4));
