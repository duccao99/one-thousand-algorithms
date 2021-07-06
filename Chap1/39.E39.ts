function step1(n: number) {
  var ret = 1;
  for (let i = 2; i <= n; ++i) ret *= i;
  return ret;
}
function E39(n: number) {
  // c(n+1)(n!+...+c3(2!+c2(1!)))
  /**
   * + step 1: make n!
   * + step 2:
   * i=1 -> c2(1!)
   * i=2 -> c3(2!+c2(1!))
   *
   */
  var ret = 0;

  for (let i = 1; i <= n; ++i) {
    ret = Math.pow(step1(i) + ret, 1 / (i + 1));
  }

  return ret;
}

console.log(E39(4));
