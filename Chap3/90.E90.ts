function s(n: number): number {
  var ret = 0;
  for (let i = 1; i <= n; ++i) ret += n;
  return ret;
}

function E90(n: number): number {
  /**
   * find max m that 1+2+..+m < n
   * + s(n)
   * + i from 1 to m, s(i) < n -> i
   */
  var ret = 0;
  var carry = 0;
  for (let i = 1; i <= n; ++i) {
    carry = s(i);
    if (carry < n) ret = i;
  }
  return ret;
}

// 10 -> 1+2+3
// 100 -> 1+2+3+..+9
// 5 -> 1+2
console.log(E90(10));
console.log(E90(100));
console.log(E90(5));
