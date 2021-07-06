function nRoot(n: number) {
  // what is square root n ?
  // example: c5(5) , c3(3)
  /**
   * c(5)^5=5
   * c(2)^2=2
   *
   * c5(5)=5^(1/5)
   *
   *
   */
  return Math.pow(n, 1 / n);
}

function E37(n: number) {
  // cn(n+cn-1(n-1+...+c3(3+c2(2))))
  // + step 1: make cn(n)
  // + step 2: recursive, if n=1 then 1 else cn(n+e(n-1))
  // + the question is how to make the square root n ?

  var ret = 0;
  for (let i = 2; i <= n; ++i) {
    ret = Math.pow(i + ret, 1 / i);
  }
  return ret;
}
console.log(E37(4));
/**
 * i=2, ret=c2(2)
 * i=3, ret=c3(3+c2(2))
 * i=4, ret=c4(4+c3(3+c2(2)))
 */
