/**
 * Problem: Write a function to enter an one-dimensional array of number
 * such that when the input array is done, the array value was sorted
 * in descending order (Do not sort after enter the input)
 *
 * Understanding the problem
 * + Enter value:
 *   + 3
 *   + current array: [3]
 *
 * + Enter value;
 *   + 4
 *   + current array: [4,3]
 * + Enter value:
 *   + 1
 *   ------------------------0 1------
 *   + before insert array: [3,4]
 *   + insert 1 at position = len - 1
 *   + current array: [4,3,1]
 *
 *
 *
 */

const readline = require("readline");

/**
 *
 * @param {String} ask
 * @param {readline.Interface} rl
 * @returns
 */
function asyncGetText(ask, rl) {
  return new Promise((resolve) => {
    rl.question(ask, resolve);
  });
}

async function asynAskUserInput(ask) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const text = await asyncGetText(ask, rl);

  rl.close();

  return text;
}

/**
 *
 * @param {Array} a
 * @param {Number} x
 * @param {Number} k
 */
function insertValueToArrayAtPosition(a, x, k) {
  const result = new Array(a.length + 1);
  if (k === 0) {
    result[k] = x;
    for (let i = result.length - 1; i >= 1; --i) {
      result[i] = a[i - 1];
    }
  }

  if (k !== 0 && k !== a.length - 1) {
    result[k] = x;
    for (let i = k - 1; i >= 0; --i) {
      result[i] = a[i];
    }
    for (let i = result.length - 1; i >= k + 1; --i) {
      result[i] = a[i - 1];
    }
  }

  if (k === a.length - 1) {
    result[k] = x;
    result[k + 1] = a[a.length - 1];

    for (let i = result.length - 3; i >= 0; --i) {
      result[i] = a[i];
    }
  }

  return result;
}

/**
 *
 * @param {Array} a
 */
function javascriptArrayUnshift(a, e) {
  /**
   * Implementation of javascript Array.unshift() method
   *
   * -------0 1 2 3 4-----
   * - a = [1,2,3,4,5]
   * - e = 6
   * ------------0 1 2 3 4 5------------
   * - result = [6,1,2,3,4,5]
   */
  const result = new Array(a.length + 1);

  result[0] = e;

  for (let i = result.length - 1; i >= 1; --i) {
    result[i] = a[i - 1];
  }

  return result;
}

/**
 *
 * @param {Array} a
 * @param {Number} e
 */
function findPositionToInsert(a, e) {
  /**
   * Problem: find suitable position to insert an element to array
   *
   * -------0 1 2 3 4----------
   * - a = [1,2,3,5,6]
   * - e = 4
   * - result = 3
   * + step 1: get all element which are smaller than e
   * + step 2: get max step 1
   * + step 3: get position from step 2
   *
   */

  const smallerThanE = [];

  for (let i = a.length - 1; i >= 0; --i) {
    if (a[i] <= e) {
      smallerThanE.push(a[i]);
    }
  }

  let maxSmallerThanE = Number.NEGATIVE_INFINITY;

  for (let i = smallerThanE.length - 1; i >= 0; --i) {
    if (smallerThanE[i] > maxSmallerThanE) {
      maxSmallerThanE = smallerThanE[i];
    }
  }

  for (let i = a.length - 1; i >= 0; --i) {
    if (a[i] === maxSmallerThanE) {
      return i;
    }
  }
}

async function E267() {
  let currentArray = [];

  while (true) {
    console.log("Press `e` to exit");

    const ask = "Enter value:";
    const text = await asynAskUserInput(ask);

    let isInserted = false;

    for (let i = currentArray.length - 1; i >= 0; --i) {
      if (currentArray[i] < +text) {
        const e = +text;
        const x = +text;
        const k = findPositionToInsert(currentArray, e);

        currentArray = insertValueToArrayAtPosition(currentArray, x, k);
        isInserted = true;
        break;
      }
    }

    if (isInserted === false) {
      currentArray.push(+text);
    }

    if (text === "e") {
      break;
    }

    console.log("Current array: ", currentArray);
  }
}

function test1() {
  E267();
}

{
  test1();
}
