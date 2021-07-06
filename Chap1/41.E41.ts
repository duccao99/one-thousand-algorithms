function E41(n: number) {
  //1/(1+(1/(1+..+1/(1+1/(1+1)))))
  /**
   * i=1, 1+1/(1+1)
   * i=2, 1/(1+1/(1+1))
   * i=3, 1/
   *
   */
  var ret = 1;

  for (let i = 1; i <= n; ++i) {
    ret = 1 / (1 + ret);
  }

  return ret;
}
/**
 * i=1, ret=1/(1+1) -> ret=0 initial
 *
 *
 */

console.log(E41(4));
