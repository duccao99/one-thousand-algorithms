/**
 * Problem: List all array even value that belong to the [x,y] segment
 */

/**
 *
 * @param {Array} a
 * @param {Number} x
 * @param {Number} y
 */
function E178(a, x, y) {
  const ret = [];
  a.forEach((e) => (e % 2 === 0 && e >= x && e <= y ? ret.push(e) : void 0));
  return ret;
}

{
  const a = [1, 2, 3, 4, 5, 6, 7, 8];
  const x = 3;
  const y = 6;
  console.log(E178(a, x, y)); // 4 6
}
