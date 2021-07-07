function E58(n: number): boolean {
  var ret: boolean = true;
  for (let i = n; i !== 0; i = Math.floor(i / 10)) {
    if ((i % 10) % 2 !== 0) {
      ret = false;
    }
  }

  return ret;
}
console.log(E58(2468));
console.log(E58(12312423));
