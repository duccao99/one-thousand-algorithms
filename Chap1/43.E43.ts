function E43(n: number) {
  // count the amount of character of n
  // 123 -> 3
  /**
   * i=1, 123/10=12, 1
   * i=2, 12/10=1, 2
   * i=3, 1/10=0, 3
   */
  var ret = 0;
  for (let i = n; i !== 0; i = Math.floor(i / 10)) {
    ret++;
  }
  return ret;
}

console.log(E43(1));
console.log(E43(42));
console.log(E43(123));
console.log(E43(1234));
