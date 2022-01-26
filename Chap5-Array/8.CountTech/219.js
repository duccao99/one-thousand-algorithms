/**
 * Problem: Count the repetition of x-value in one-dimensional array 
 * of number
 * 
 * Understanding the problem
 * 
 *
  const x = 10;
  const testCase1 = []; // 0
  const testCase2 = [1,2,3,4,10,1,2,3]; // 1
  const testCase3 = [1,2,3,10,123,10,123,10]; // 3
 * 
 */

/**
 *
 * @param {Array} a
 * @param {Number} x
 */
function E219(a, x) {
  let count = 0;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] === x) count++;
  }

  return count;
}

{
  const x = 10;
  const testCase1 = []; // 0
  const testCase2 = [1, 2, 3, 4, 10, 1, 2, 3]; // 1
  const testCase3 = [1, 2, 3, 10, 123, 10, 123, 10]; // 3

  console.log(E219(testCase1, x));
  console.log(E219(testCase2, x));
  console.log(E219(testCase3, x));
  console.log("");
}

/**
 *
 * @param {Array} a
 * @param {Number} x
 */
function E219ArrayReverseTraverse(a, x) {
  let count = 0;

  for (let i = a.length - 1; i >= 0; --i) {
    if (a[i] === x) count++;
  }

  return count;
}

{
  const x = 10;
  const testCase1 = []; // 0
  const testCase2 = [1, 2, 3, 4, 10, 1, 2, 3]; // 1
  const testCase3 = [1, 2, 3, 10, 123, 10, 123, 10]; // 3

  console.log(E219ArrayReverseTraverse(testCase1, x));
  console.log(E219ArrayReverseTraverse(testCase2, x));
  console.log(E219ArrayReverseTraverse(testCase3, x));
}

/**
 *
 * @param {Array} a
 * @param {Number} x
 */
function E219ArrayTraverseFromMidPosition(a, x) {
  let count = 0;

  const right = [...a];

  const mid = Math.round(a.length / 2);

  const left = right.splice(0, mid);

  left.forEach((value) => (value === x ? count++ : void 0));

  right.forEach((value) => (value === x ? count++ : void 0));

  return count;
}

{
  const x = 10;
  const testCase1 = []; // 0
  const testCase2 = [1, 2, 3, 4, 10, 1, 2, 3]; // 1
  const testCase3 = [1, 2, 3, 10, 123, 10, 123, 10]; // 3
  console.log("");
  console.log(E219ArrayTraverseFromMidPosition(testCase1, x));
  console.log(E219ArrayTraverseFromMidPosition(testCase2, x));
  console.log(E219ArrayTraverseFromMidPosition(testCase3, x));
}

/**
 *
 * @param {Array} a
 * @param {Number} x
 */
function E219TraverseArrayFromMidPosition2(a, x) {
  // 1 2 3 4 5
  // mid = round(5/2) = 3
  let count = 0;

  const mid = Math.round(a.length / 2);

  for (let i = mid; i >= 0; i--) {
    if (a[i] === x) count++;
  }

  for (let i = mid; i <= a.length - 1; ++i) {
    if (a[i] === x) count++;
  }

  if (a[mid] === x) count--;

  return count;
}

{
  const x = 10;
  const testCase1 = []; // 0
  const testCase2 = [1, 2, 3, 4, 10, 1, 2, 3]; // 1
  const testCase3 = [1, 2, 3, 10, 123, 10, 123, 10]; // 3
  console.log("");
  console.log(E219TraverseArrayFromMidPosition2(testCase1, x));
  console.log(E219TraverseArrayFromMidPosition2(testCase2, x));
  console.log(E219TraverseArrayFromMidPosition2(testCase3, x));
}
