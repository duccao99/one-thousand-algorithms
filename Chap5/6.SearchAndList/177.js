/**
 * Problem: List all array value that is belong to [x,y] segment
 *
 */

/**
 *
 * @param {Array} a
 * @param {Number} x
 * @param {Number} y
 */
function E177(a, x, y) {
  const ret = [];
  a.forEach((e) => (e >= x && e <= y ? ret.push(e) : void 0));
  return ret;
}

{
  const a = [1, 2, 3, 4, 5, 6, 7];
  const x = 3;
  const y = 6;
  console.log(E177(a, x, y)); // 3 4 5 6
}
