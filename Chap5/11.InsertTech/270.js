/**
 * Problem: Write a program to do those stuff bellow
 * + Enter n number from the keyboard
 * + When the enteration finish the array element was sorted
 * in ascending order
 *
 * Understanding the problem
 * + Enter n:
 * + 1
 * + Current Array: [1]
 * + Enter n:
 * + 2
 * + Current Array : [1,2]
 * + Enter n:
 * + 3
 * + Current Array : [1,2,3]
 *
 * ..
 * - a = [1,2,3,4,5]
 * - x = 6
 * - ret = [1,2,3,4,5,6]
 *
 */
const readline = require("readline");

function promiseGetText(question, rl) {
  return new Promise((resolve) => rl.question(question, resolve));
}

async function asyncGetUserInput(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const text = await promiseGetText(question, rl);

  rl.close();

  return text;
}

/**
 *
 * @param {Array} a
 * @param {Number} e
 *
 */
function javascriptArrayPush(a, e) {
  /**
   * Implementation of javascript Array.push()
   *
   * -------0 1 2 3 4---
   * - a = [1,2,3,4,5]
   * - a.push(6)
   * ------------0 1 2 3 4 5------------
   * - result = [1,2,3,4,5,6]
   *
   *
   */
  const result = new Array(a.length + 1);

  result[result.length - 1] = e;

  for (let i = result.length - 2; i >= 0; --i) {
    result[i] = a[i];
  }

  return result;
}

/**
 *
 * @param {Array} a
 * @param {Number} x
 * @param {Number} k
 */
function insertValueToArrayAtPositionType1(a, x, k) {
  /**
   * - a = [1,2,3,4]
   * - x = 6
   * - k = 0
   * - ret = [0,1,2,3,4]
   * When inserted, list element from k move to right 1 unit
   */
  const result = new Array(a.length + 1);

  if (a.length === 0) {
    result[0] = x;
    return result;
  }

  if (k === 0) {
    result[k] = x;
    for (let i = result.length - 1; i >= 1; --i) {
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

  if (k !== a.length - 1 && k !== 0) {
    result[k] = x;

    for (let i = k - 1; i >= 0; --i) {
      result[i] = a[i];
    }

    for (let i = result.length - 1; i >= k + 1; --i) {
      result[i] = a[i - 1];
    }
  }

  return result;
}

async function E270() {
  let currentArray = [];
  while (true) {
    console.log("Press `e` to exit");
    const question = "Enter n: ";
    const n = await asyncGetUserInput(question);

    let valuesSmallerThanN = [];
    for (let i = currentArray.length - 1; i >= 0; --i) {
      if (currentArray[i] <= +n) {
        valuesSmallerThanN = insertValueToArrayAtPositionType1(
          valuesSmallerThanN,
          currentArray[i],
          valuesSmallerThanN.length - 1
        );
      }
    }

    let maxOfValuesSmallerThanN = Number.NEGATIVE_INFINITY;

    for (let i = valuesSmallerThanN.length - 1; i >= 0; --i) {
      if (valuesSmallerThanN[i] >= maxOfValuesSmallerThanN) {
        maxOfValuesSmallerThanN = valuesSmallerThanN[i];
      }
    }

    let k = currentArray.length - 1;

    for (let i = currentArray.length - 1; i >= 0; --i) {
      if (currentArray[i] === maxOfValuesSmallerThanN) {
        k = i;
        break;
      }
    }

    currentArray = insertValueToArrayAtPositionType1(currentArray, +n, k + 1);

    if (n === "e") break;
    console.log("Current array: ", currentArray);
  }
}

function test1() {
  let a = [1, 2, 3, 4, 5];

  E270();
}

{
  test1();
}
