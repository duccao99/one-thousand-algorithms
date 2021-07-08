function E60(n: number): boolean {
  // 1234 -> true
  // 1243 -> false
  /**
   * + check from the back side of n
   * + if i < i -1 then false else true
   *
   */
  var ret: boolean = true;

  for (let i = n; i !== 0; i = Math.floor(i / 10)) {
    var check = (i / 10) % 10;
    if (i % 10 < check) {
      ret = false;
      break;
    }
  }
  return ret;
}

console.log(E60(123456));
console.log(E60(126456));
console.log(E60(123465));
console.log(E60(45678));
