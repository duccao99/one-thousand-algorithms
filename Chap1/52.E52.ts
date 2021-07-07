function E52(n: number) {
  // 1234 -> 1
  // 785749109 -> 0
  /**
   * + step 1: turn n into array
   * + step 2: find min of that arr
   *
   */
  var carry = [];
  for (let i = n; i !== 0; i = Math.floor(i / 10)) carry.push(i % 10);
  var min = carry[0];
  for (let i = 0; i < carry.length; ++i) if (min > carry[i]) min = carry[i];
  return min;
}
console.log(E52(1234));
console.log(E52(785749109));
