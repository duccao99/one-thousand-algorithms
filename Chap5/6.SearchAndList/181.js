/**
 * Problem: Given an integer array. Write a function to list
 * all even value which have neighborhood is also even value
 */

/**
 *
 * @param {Array} a
 */
function E181(a) {
  const ret = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 === 0 && (a[i - 1] % 2 === 0 || a[i + 1] % 2 === 0)) {
      ret.push(a[i]);
    }
  }

  return ret;
}

{
  const a = [1, 2, 3, 4, 5];
  const b = [1, 2, 4, 6, 5];
  const c = [1, 4, 2, 5, 3];

  console.log(E181(a)); // []
  console.log(E181(b)); // 2 4 6
  console.log(E181(c)); // 4 2
}
