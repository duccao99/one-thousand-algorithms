function amountNumberOfN(n: number): number {
  var ret: number = 0;
  for (let i = n; i !== 0; i = Math.floor(i / 10)) ret++;
  return ret;
}
function E59Way1(n: number): boolean {
  // 1234321 -> true
  // 1 -> true
  // 123321 -> true
  // 1234421 -> false
  /**
   * idea:
   * + step 1: count the amount number of n
   * + step 2: using n%(10^i) tech to get ele from left to right of n
   * + step 3: compare left to mid vs right to mid
   * -> not working
   */
  var ret: boolean = true;
  var amount = amountNumberOfN(n);
  var mid = Math.floor(amountNumberOfN(n) / 2);
  for (
    let i = n;
    i !== n % Math.pow(10, mid);
    i = Math.floor(i / 10), amount = amount * 10
  ) {
    var left = n % Math.pow(10, amount);
    if (left !== i % 10) {
      ret = false;
    }
  }
  return ret;
}

// console.log(amountNumberOfN(1234));
// console.log(amountNumberOfN(123456789));
// console.log(amountNumberOfN(1));

function E59(n: number) {
  var flag = true;
  var carry = [];
  for (let i = n; i !== 0; i = Math.floor(i / 10)) {
    carry.push(i % 10);
  }
  for (let i = 0; i < Math.floor(carry.length / 2); ++i) {
    if (carry[i] !== carry[carry.length - i - 1]) {
      flag = false;
    }
  }
  return flag;
}

console.log(E59(12321));
console.log(E59(123321));
console.log(E59(1234321));
console.log(E59(12342321));
