/**
 *
 * @param {Array} a
 * @param {Number} length
 *
 */
function reverseLogArrayRecursive(a, length) {
  // 1. reverse log array recursive
  if (length === 1) return console.log(a[0]);

  console.log(a[length - 1]);

  return reverseLogArrayRecursive(a, length - 1);
}

{
  const a = [1, 2, 3, 4, 5];
  reverseLogArrayRecursive(a, a.length);
}

/**
 *
 * @param {Array} a
 * @param {Number} index
 *
 */
function linearLogArrayRecursive(a, index) {
  if (index === 1) return console.log(a[a.length - 1]);

  console.log(a[a.length - index]);

  return linearLogArrayRecursive(a, index - 1);
}

{
  const a = [1, 2, 3, 4, 5];
  console.log("");
  linearLogArrayRecursive(a, a.length);
}
