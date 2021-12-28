/**
 * Problem: List all negative numbers in an array
 *
 */
function E176(a) {
  const ret = [];
  a.forEach((e) => (e < 0 ? ret.push(e) : void 0));
  return ret;
}

{
  const a = [1, 2, 3, -3, 2, -1];
  console.log(E176(a)); // -3 -1
}
