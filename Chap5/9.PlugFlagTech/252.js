/**
 * Problem: Check if array is an wave-array
 * 
 * Understanding the problem
 * Wave array is an array like this:
 * 
 *         
 *    5   6
 *   / \ / \
 *  1   2   3   4
 *           \ /
 *           -1
 * 
 *   
 *            8           9
 *           / \         / \
 * 3 - 3 - 3    4 - 5 - 5   6 - 7 - 7 
 * 
 * 
  const testCase1 = []; // -1
  const testCase2 = [1]; // -1
  const testCase3 = [1,2]; // 1
  const testCase4 = [1,5,2,6,3,-1,4]; // 1
  const testCase5 = [3,3,3,8,5,5,9,6,7,7]; // 1
 * 
 *
 * Approach:
 *                            wave
 *                            /  \ 
 * + step 1: handle draw 1 - 1    2 - 2 logic - done
 * + step 2: handle draw 1 - 1    2 - 2 logic    
 *                            \   /
 *                            wave 
 *                     
 *                      wave 
 *                       \
 * + step 3: handle draw  1 - 1 logic
 * 
 * + step 4: handle draw  1 - 1 logic
 *                       /
 *                      wave
 *                                 wave
 *                                /
 * + step 5: handle draw 1 - 1 - 1         logic
 * 
 * + step 6: handle draw 1 - 1 - 1         logic
 *                                \
 *                                 wave
 * /

/**
 *
 * @param {Array} a
 * @param {Number} pos
 */
function removeArrayElement(a, pos) {
  if (pos === 0) a.shift();
  if (pos === a.length - 1) a.pop();

  for (let i = pos; i < a.length; ++i) {
    a[i] = a[i + 1];
  }
  a.length--;

  return a;
}

/**
 *
 * @param {Array} a
 */
function E252(a) {
  let flag = -1;

  for (let i = a.length - 2; i >= 1; -i--) {
    if (
      (a[i] > a[i - 1] && a[i] > a[i + 1]) ||
      (a[i] < a[i - 1] && a[i] < a[i + 1])
    ) {
      flag = 1;
      break;
    }
  }

  return flag;
}

/**
 *
 * @param {String} drawWavePoint
 */
function fixDrawWavePoint(drawWavePoint) {
  /**
   * __________8________________9
   * result: __________8_____9
   */

  let length = drawWavePoint.length;
  let startRemoveIndex = -1;
  let removeCountTime = 0;
  let drawWavePointArray = drawWavePoint.split("");

  for (let i = drawWavePoint.length - 1; i >= 0; --i) {
    if (drawWavePoint[length - i - 1] !== "_") {
      startRemoveIndex = length - i - 1 + 1;
      break;
    }
    removeCountTime += 1;
  }

  removeCountTime -= 1;

  for (let j = 0; j < removeCountTime; ) {
    drawWavePointArray = removeArrayElement(
      drawWavePointArray,
      startRemoveIndex
    );

    removeCountTime -= 1;
  }

  return drawWavePointArray.join("");
}

fixDrawWavePoint("__________8________________9");

/**
 *
 * @param {Array} a
 */
function printWaveArray(a) {
  //     5   6
  //    / \ / \
  //   1   2   3   4
  //            \ /
  //            -1

  //            8       9
  //           / \     / \
  //  3 - 3 - 3   5 - 5   6 - 6 - 7

  /**
   * What is
   *
   *           8       9
   *          / \     / \
   * 3 - 3 - 3   5 - 5   6 - 6 - 6
   *
   * Essence ? How to print it?
   *
   * __________8_______9___________
   * _________/ \_____/ \__________
   * 3 - 3 - 3   5 - 5   6 - 6 - 6
   *
   * + step 1: count wave point
   * + step 2:
   * + step 3: throught step 1 draw _____point____point__.....
   * + step 4: throught step 1 draw _____/ \______/ \_____......
   *
   *
   *
   *
   *
   */

  /**
   * ------0  1  2  3  4  5  6  7  8  9------
   * - a= [3, 3, 3, 8, 5, 5, 9, 6, 6, 7]
   * + i = len-1= 9
   * + len - i - 1 = 10 - 9 - 1 = 0
   * + 1 = 10 - 9 = len - i
   *
   * + i = len - 1 - 1 = 8
   * + len - i - 1 = 10 - 8 - 1 = 1
   * + 2 = 10 - 8 = len - i
   */
  const isWaveArray = E252(a);

  if (isWaveArray === 1) {
    let drawer = "";
    let currentSpacing = "";
    let countWavePoint = 0;
    let drawWavePoint = "";
    let drawTwoBackSlash = "";

    for (let i = 0; i < a.length; ++i) {
      // while we loop child round, we can still loop at current round
      if (i !== 0 && i !== a.length - 1) {
        if (
          (a[i] > a[i - 1] && a[i] > a[i + 1]) ||
          (a[i] < a[i - 1] && a[i] < a[i + 1])
        ) {
          // draw two back slack
          let twoBackSlash = "/ \\";
          drawTwoBackSlash += currentSpacing + twoBackSlash;

          // draw wave point
          drawWavePoint += currentSpacing + "_" + a[i];
          let countBackSlack = 0;

          for (let i = drawTwoBackSlash.length - 1; i >= 0; --i) {
            if (drawTwoBackSlash[i] === "/") {
              countBackSlack++;
            }
          }

          if (countBackSlack > 1) {
            let countTemp = 0;
            let startSliceIndex = 0;
            for (let i = 0; i < drawTwoBackSlash.length; ++i) {
              if (drawTwoBackSlash[i] === "/") {
                startSliceIndex = i + 2;
                break;
              }
              countTemp++;
            }
            drawTwoBackSlash = drawTwoBackSlash.replace(
              drawTwoBackSlash.slice(
                startSliceIndex + 1,
                startSliceIndex + countTemp + 2
              ),
              ""
            );
          }

          let drawWaveStartSliceIndex = 0;
          let drawWaveCountTemp = 0;
          /**
           * ------0 1 2 3 4
           * - a = 1 2 3 4 5
           * - a.length = 5
           * - i: length - 1 -> 0
           * - a.length - i - 1
           * + i = 4
           * + a.length - i - 1 = 5 - 4 - 1= 0
           */

          for (let k = 0; k < drawWavePoint.length; ++k) {
            if (drawWavePoint[k] !== "_") {
              drawWaveStartSliceIndex = k + 1;
              break;
            }

            drawWaveCountTemp += 1;
          }

          countWavePoint++;
        }
      }

      for (let j = i + 1; j < a.length; ++j) {
        if (a[i] !== a[j] && a[i] === a[i - 1]) {
          // draw a[i]
          drawer += a[i] + "   ";
          currentSpacing += "___";

          break;
        }
        if (a[i] === a[j]) {
          // draw a[i]
          drawer += a[i] + " - ";
          currentSpacing += "___";

          break;
        }
      }
    }

    drawer += a[a.length - 1];

    drawWavePoint = fixDrawWavePoint(drawWavePoint);

    console.log(drawWavePoint);
    console.log(drawTwoBackSlash);
    console.log(drawer);
  }

  return "This array is not a wave array";
}

function test1() {
  const testCase1 = []; // -1
  const testCase2 = [1]; // -1
  const testCase3 = [1, 2]; // -1
  const testCase4 = [1, 5, 2, 6, 3, -1, 4]; // 1
  const testCase5 = [3, 3, 3, 8, 5, 5, 9, 6, 6, 6]; // 1
  const testCase6 = [1, 2, 1, 2]; // 1

  console.log(E252(testCase1));
  console.log(E252(testCase2));
  console.log(E252(testCase3));
  console.log(E252(testCase4));
  console.log(E252(testCase5));
  console.log(E252(testCase6));
}

{
  // test1();
  const a = [1, 1, 5, 2, 2, 6, 3, 3]; // 1
  const b = [3, 3, 3, 8, 5, 5, 9, 6, 6, 6]; // 1
  printWaveArray(a);
  console.log("");
  printWaveArray(b);
}
