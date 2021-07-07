function E57(n: number): boolean {
  // is n full even ?
  /**
   * check if n contains odd then false else true
   */
  var ret: boolean = true;

  for (let i = n; i !== 0; i = Math.floor(i / 10)) {
    if ((i % 10) % 2 !== 0) ret = false;
  }

  return ret;
}
console.log(E57(1234));
console.log(E57(2468));
