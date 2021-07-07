function E56(n: number): boolean {
  // is n full odd ?
  // 1357 -> true
  // 135732 -> false
  /**
   * + step 1: if n contains even then false else true
   *
   */
  var ret: boolean = true;

  for (let i = n; i !== 0; i = Math.floor(i / 10))
    if ((i % 10) % 2 === 0) ret = false;

  return ret;
}

console.log(E56(1357));

console.log(E56(135732));
console.log(E56(10));
