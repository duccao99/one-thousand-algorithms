function array3k(n: number): number[] {
  var ret = [];

  for (let i = 0; i < n; ++i) {
    ret.push(Math.pow(3, i));
  }
  return ret;
}

function E76(n: number): boolean {
  /**
   * check is n 3^k
   * 3^0=1
   * 3^1=3
   * 3^2=9
   * 3^3=27
   */
  var carry = array3k(n);

  var ret = false;
  for (let i = 0; i < carry.length; ++i) {
    if (n === carry[i]) {
      ret = true;
      break;
    }
  }

  return ret;
}

console.log(E76(1));
console.log(E76(3));
console.log(E76(9));
console.log(E76(27));
console.log(E76(2));
