/**
 * Problem: Don't use any sort you have known. Create your own sort algorithm
 *
 *
 */

/**
 *
 * @param {Array} a
 */
function bringIncreasinglyElementToTheIncreasinglyIndexAscendingOrderSort(a) {
  /**
   * - Bá dơ sort
   * -------0 1 2 3 4
   * - a = [1,2,3,4,5]
   * + step 1: get minimum value of array - done
   * + step 2: write a function to find the closest greater than the number n - done
   * + step 3: move those element to the start index 0,1,2,..
   *
   * -------0 1 2 3 4
   * - a = [1,2,5,4,3]
   * + i = 4
   *   + a[i] = 3
   *   + greaterNear = 4 = a[3]
   *   + swap
   *   + a = [1,2,5,3,4]
   *
   *
   *
   */
  /**
   *
   * @param {Array} a
   */
  function getArrayMinimumNumber(a) {
    let minimumNumber = Number.POSITIVE_INFINITY;

    for (let i = a.length - 1; i >= 0; --i) {
      if (a[i] < minimumNumber) {
        minimumNumber = a[i];
      }
    }

    return minimumNumber;
  }
  /**
   *
   * @param {Array} a
   * @param {Number} n
   */
  function getClosestGreaterNumberNInArrayCorpse(a, n) {
    /**
     * - n > 0
     * -------0 1 2 3 4
     * - a = [1,2,3,4,5]
     * - n = 2
     * - ret = 3
     *
     * + i = 0
     *   + a[i] = a[0] = 1 > 2 ? -> false
     * + i = 1
     *   + a[i] = a[1] = 2 > 2 ? -> false
     * + i = 2
     *   + a[i] = a[2] = 3 > 2 ? -> true
     *   + saveNumber = 3
     * + i = 3
     *   + a[i] = a[3] = 4 > 2 ? -> true
     *     + a[i] <= saveNumber ? saveNumber = a[i] : i++
     *
     *
     * - a = [1,3,5,2,4]
     * - n = 2
     * - ret = 3
     *
     * + step 1: get |n-a[i]| array
     * + step 2: get min && min > 0 step 1
     * + step 3: get a[min index]
     *
     * + n < 0
     * - n = -2
     * --------0  1 2  3 4
     * - a = [-1,-3,5,-2,4]
     * - ret = -1 = a[0]
     *
     * + i = 4
     *   + abs(n-a[i]) = |-2-4| = |-6| = 6
     * + i = 3
     *   + abs(n-a[i]) = |-2--2| = |0| = 0
     * + i = 2
     *   + abs(n-a[i]) = |-2-5| = |-7| = 7
     * + i = 1
     *   + abs(n-a[i]) = |-2--3| = |1| = 1
     * + i = 0
     *   + abs(n-a[i]) = |-2--1| = |-1| = 1
     *
     * - abs = [1,1,7,0,6]
     * - min abs = 1
     *
     *
     * - n = -1
     * --------0  1 2  3 4
     * - a = [-1,-3,5,-2,4]
     * - ret = 4 = a[4]
     * - abs (n-a[i]) = [0,2,6,1,5]
     *
     *
     * + i = 4
     *   + abs(n-a[i]) = |-1-4| = |-5| = 5
     * + i = 3
     *   + abs(n-a[i]) = |-1--2| = |1| = 1
     * + i = 2
     *   + abs(n-a[i]) = |-1-5| = |-6| = 6
     * + i = 1
     *   + abs(n-a[i]) = |-1--3| = |2| = 2
     * + i = 0
     *   + abs(n-a[i]) = |-1--1| = |0| = 0
     * - abs = [0,2,6,1,5]
     * - min abs = 1
     * - need abs[4]
     *
     *
     * - n = -1
     * --------0  1 2  3 4
     * - a = [-1,-3,5,-2,4]
     * - ret = 4 = a[4]
     * + i = 4
     *   + a[i] > n && a[i] < ret  ? ret = a[i]
     *   + ret  = a[4] = 4
     * + i = 3
     *   + a[i] > n && a[i] < ret  ? ret = a[i]
     * + i = 2
     * + i = 1
     * + i = 0
     *
     *
     *
     * - a = [-13, -77, 91, -75, -48, -62]
     *
     *
     */
    let arrayOfTheAbsoluteSubtractionOfNAndAllArrayElement = [];

    for (let i = a.length - 1; i >= 0; --i) {
      arrayOfTheAbsoluteSubtractionOfNAndAllArrayElement = reversePush(
        arrayOfTheAbsoluteSubtractionOfNAndAllArrayElement,
        Math.abs(n - a[i])
      );
    }

    let minimumButNotZero = Number.POSITIVE_INFINITY;
    console.log("n: ", n);
    console.log("a: ", a);
    console.log(
      "arrayOfTheAbsoluteSubtractionOfNAndAllArrayElement: ",
      arrayOfTheAbsoluteSubtractionOfNAndAllArrayElement
    );

    for (
      let i = arrayOfTheAbsoluteSubtractionOfNAndAllArrayElement.length - 1;
      i >= 0;
      --i
    ) {
      if (
        arrayOfTheAbsoluteSubtractionOfNAndAllArrayElement[i] !== 0 &&
        arrayOfTheAbsoluteSubtractionOfNAndAllArrayElement[i] <
          minimumButNotZero
      ) {
        minimumButNotZero =
          arrayOfTheAbsoluteSubtractionOfNAndAllArrayElement[i];
      }
    }

    console.log("minimumButNotZero: ", minimumButNotZero);

    let ret = null;

    for (let i = a.length - 1; i >= 0; --i) {
      if (
        Math.abs(n - a[i]) !== 0 &&
        Math.abs(n - a[i]) === minimumButNotZero &&
        a[i] > n
      ) {
        ret = a[i];
      }
    }

    return ret;
  }

  /**
   *
   * @param {Array} a
   * @param {Number} n
   */
  function getClosestGreaterNumberNInArray(a, n) {
    /**
     * - n = -1
     * --------0  1 2  3 4
     * - a = [-1,-3,5,-2,4]
     * - ret = 4 = a[4]
     * + i = 4
     *   + a[i] > n && a[i] < ret  ? ret = a[i]
     *   + ret  = a[4] = 4
     * + i = 3
     *   + a[i] > n && a[i] < ret  ? ret = a[i]
     * + i = 2
     * + i = 1
     * + i = 0
     *
     *  - n = -1
     * --------0  1 2  3 4
     * - a = [-1,-3,5,-2,4,-1,-1]
     * - ret = -1
     */
    let ret = Number.POSITIVE_INFINITY;
    let is;

    for (let i = a.length - 1; i >= 0; --i) {
      for (let j = a.length - 1; j >= 0; --j) {
        if (a[j] > n && a[j] < ret) {
          ret = a[j];
        }
      }
    }

    return ret;
  }

  let minimumNumberIncreasinger = getArrayMinimumNumber(a);

  let startIndexIncreasinger = 0;

  let ret = new Array(a.length);

  for (let i = a.length - 1; i >= 0; --i) {
    ret[startIndexIncreasinger] = minimumNumberIncreasinger;
    minimumNumberIncreasinger = getClosestGreaterNumberNInArray(
      a,
      minimumNumberIncreasinger
    );
    startIndexIncreasinger++;
  }

  return ret;
}

/**
 *
 * @param {Array} a
 * @param {any} e
 *
 */
function reversePush(a, e) {
  /**
   * -------0 1 2
   * - a = [1,2,3]
   * - e = 4
   * ---------0 1 2 3
   * - ret = [4,1,2,3]
   */
  const ret = new Array(a.length + 1);

  ret[0] = e;

  for (let i = ret.length - 1; i >= 1; --i) {
    ret[i] = a[i - 1];
  }

  return ret;
}

function test1() {
  const a1 = [1, 2, 5, 3, 4];
  console.log(
    bringIncreasinglyElementToTheIncreasinglyIndexAscendingOrderSort(a1)
  );
}

function test2() {
  const a2 = [-1, 2, -5, 3, -4];
  console.log(
    bringIncreasinglyElementToTheIncreasinglyIndexAscendingOrderSort(a2)
  );
}

function test3() {
  const a3 = [1, 2, 5, 3, 4, 5, 4, 3, 2, 1];
  console.log(
    bringIncreasinglyElementToTheIncreasinglyIndexAscendingOrderSort(a3)
  );
}

function test4() {
  const a4 = [-1, 2, -5, 3, -4, -1, -5, -4, 2, 3];
  console.log(
    bringIncreasinglyElementToTheIncreasinglyIndexAscendingOrderSort(a4)
  );
}

function test5() {
  const a5 = generateArray(9);
  console.log(
    bringIncreasinglyElementToTheIncreasinglyIndexAscendingOrderSort(a5)
  );
}

{
  // test1();
  // test2();
  test3();
  // test4();
  // test5();
}
