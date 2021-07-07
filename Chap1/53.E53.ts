function E53(n: number) {
  // 12344321 -> 44 -> 2
  // 123984402991230 -> 999 -> 3
  /**
   * + try to not turn n to arr
   * + step 1: find max value of n
   * + step 2: count it
   */

  var max = 0;
  for (let i = n; i !== 0; i = Math.floor(i / 10)) {
    if (max < i % 10) {
      max = i % 10;
    }
  }
  var ret = 0;
  for (let i = n; i !== 0; i = Math.floor(i / 10)) {
    if (i % 10 === max) ret++;
  }

  return ret;
}

console.log(E53(1234));
console.log(E53(5783459129));
console.log(E53(12344321));
console.log(E53(123984402991230));
