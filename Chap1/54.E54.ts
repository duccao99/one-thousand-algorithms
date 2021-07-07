function minN(n: number): number {
  var ret: number = n % 10;
  for (let i = n; i !== 0; i = Math.floor(i / 10)) {
    if (ret > i % 10) {
      ret = i % 10;
    }
  }
  return ret;
}
function E54(n: number) {
  // 123412341234 -> 111 -> 3
  // 1230412981021329 -> 00 -> 2
  /**
   * + find min of n
   * + count it
   *
   */
  var min = minN(n);
  var ret = 0;
  for (let i = n; i !== 0; i = Math.floor(i / 10)) {
    if (min === i % 10) ret++;
  }
  return ret;
}

console.log(E54(1234));
console.log(E54(123412341234));
console.log(E54(1230412981021329));
console.log(E54(100000000));
