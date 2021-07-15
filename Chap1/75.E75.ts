function twoPowerK(n: number): number[] {
  const ret: number[] = [];

  for (let i = 0; i <= n; ++i) ret.push(Math.pow(2, i));
  return ret;
}

function E75(n: number): boolean {
  /**
   * check type of n is 2^k ?
   * 2^0=1
   * 2^1=2
   * 2^2=4
   * 2^3=8
   * 2^4=16
   *
   * idea:
   * + make list 2^k with value from 1 to 2^n
   * + if n in not in that list return false else true
   */
  var carry = twoPowerK(n);
  var ret = false;
  for (let i = 0; i < carry.length; ++i) {
    if (n === carry[i]) {
      ret = true;
      break;
    }
  }
  return ret;
}
console.log(E75(1));
console.log(E75(2));
console.log(E75(4));
console.log(E75(8));
console.log(E75(16));
console.log(E75(17));
