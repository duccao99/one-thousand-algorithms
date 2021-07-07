function E49(n: number) {
  // 123 -> 1
  // 4312312 -> 4
  /**
   * using cut number technique, cut until we find the first number
   *
   */
  var ret = 0;
  for (let i = n; i !== 0; i = Math.floor(i / 10)) {
    ret = i;
  }
  return ret;
}
console.log(E49(1234));
console.log(E49(4321));
