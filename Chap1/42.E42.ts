function nSum(n: number) {
  var ret = 0;
  for (let i = 1; i <= n; ++i) ret += i;
  return ret;
}
function E42(n: number) {
  // s(k)=1+2+..+k
  // n
  // find k max that s(k)<n
  /**
   * n=10,
   * k=4 -> sk=1+2+3+4=10 nope
   * k=3 -> sk=1+2+3=6 -> yes -> max k is 3
   * so the idea is:
   * + loop k from n-1 to 1
   * + check sum(i) < n ? yes break save i
   */
  for (let i = n - 1; i >= 1; i--) {
    var sum_k = nSum(i);
    if (sum_k < n) {
      return i;
    }
  }
}

console.log(E42(40));
