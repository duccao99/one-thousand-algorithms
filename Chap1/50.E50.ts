function E50(n: number) {
  // 1234 -> 4321
  // 1532 -> 2351
  /**
   * solution 1:
   * + step 1: using cut number technique to cut n from the last num to the first num
   * + step 2: using array to carry the number which was cut then join it to string
   * and then parse it to number
   */
  var ret = [];
  for (let i = n; i !== 0; i = Math.floor(i / 10)) {
    ret.push(i % 10);
  }
  return Number(ret.join(''));
}

console.log(E50(1234));
