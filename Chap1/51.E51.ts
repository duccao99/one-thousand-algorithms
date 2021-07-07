function E51Way1(n: number) {
  // 12234 -> 4
  // 42108109 -> 9
  /**
   * idea 1:
   * + step 1: we have [0,1,...,9]
   * + step 2: using cut number technique, check i is in step 1 ? return i
   * not working
   */
  var carry = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = carry.length; i >= 0; i--) {
    for (let j = n; j !== 0; j = Math.floor(j / 10)) {
      if (j === carry[i]) {
        return j;
      }
    }
  }
}

function maxElementOfAnArray(a) {
  /**
   * 5 4 1 2 3 -> 5
   * idea:
   * + carry=0;
   * + if carry < a[i] then carry = a[i]
   * + loop it until we find the max value
   *
   */
  var ret = 0;
  for (let i = 0; i < a.length; ++i) if (a[i] > ret) ret = a[i];
  return ret;
}
function E51(n: number) {
  // 12234 -> 4
  // 42108109 -> 9
  /**
   * + turn n into array
   * + find max element of array
   */
  var carry = [];
  for (let i = n; i !== 0; i = Math.floor(i / 10)) {
    carry.push(i % 10);
  }
  var max = maxElementOfAnArray(carry);
  return max;
}

console.log(E51(1234));
console.log(E51(67841901));
