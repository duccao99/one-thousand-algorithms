function E61(n: number): boolean {
  // 4321 -> true
  // 3421 -> false
  /**
   * + check from the back side
   * + if i > i-1 then false else true
   *
   */
  var ret: boolean = true;

  for (let i = n; i !== 0; i = Math.floor(i / 10)) {
    var check = Math.floor(i / 10) % 10;

    if (i % 10 > check && check !== 0) {
      ret = false;
      break;
    }
  }

  return ret;
}

console.log(E61(1234));
console.log(E61(4321));
console.log(E61(9876543210));
console.log(E61(987654987654));
console.log(E61(3421));
