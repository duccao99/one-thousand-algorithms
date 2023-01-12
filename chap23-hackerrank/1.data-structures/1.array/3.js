/**
 *
 * @param {Array} a
 */
function advanceLogArray2d(a) {
  console.log("Advance Log Array 2D Program");
  let columnIndicates = "-- ";
  const lastColumnIndex = a.length - 1;

  for (let i = 0; i <= lastColumnIndex; ++i) {
    columnIndicates += i + " ";
  }

  console.log(columnIndicates);
}

/**
 *
 * @param {Array} a
 */
function f(a) {
  advanceLogArray2d(a);

  return a;
}

const a = [
  [-1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, -1, 1, 0, 0, 0],
  [0, 0, 2, 4, -4, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, -4, 0],
];

console.log(f(a));
