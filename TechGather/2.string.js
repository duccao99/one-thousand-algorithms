/**
 *
 * @param {Array} a
 * @param {any} e
 *
 */
function push(a, e) {
  /**
   * - a = [1,2,3]
   * - e = 4
   * - ret = [1,2,3,4]
   */
  const ret = new Array(a.length + 1);
  ret[ret.length - 1] = e;
  for (let i = ret.length - 2; i >= 0; --i) {
    ret[i] = a[i];
  }
  return ret;
}

/**
 *
 * @param {Array} a
 * @param {Number} pos
 */
function removeArrayElementAtPosition(a, pos) {
  /**
   * -------0 1 2 3
   * - a = [1,2,3,4]
   * - pos = 2
   * ---------0 1 2
   * - ret = [1,2,4]
   */
  const ret = new Array(a.length - 1);
  for (let i = pos - 1; i >= 0; --i) {
    ret[i] = a[i];
  }
  for (let j = ret.length - 1; j >= pos; --j) {
    ret[j] = a[j + 1];
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

/**
 *
 * @param {Array} a
 */
function shift(a) {
  /**
   * -------0 1 2 3
   * - a = [1,2,3,4]
   * ---------0 1 2
   * - ret = [2,3,4]
   */
  const ret = new Array(a.length - 1);
  for (let i = ret.length - 1; i >= 0; --i) {
    ret[i] = a[i + 1];
  }
  return ret;
}

/**
 *
 * @param {Array} a
 */
function pop(a) {
  /**
   * -------0 1 2
   * - a = [1,2,3]
   * ---------0 1
   * - ret = [1,2]
   */
  const ret = new Array(a.length - 1);
  for (let i = ret.length - 1; i >= 0; --i) {
    ret[i] = a[i];
  }
  return ret;
}

/**
 *
 * @param {Array} a
 * @param {string} key
 *
 */
function join(a, key) {
  let ret = "";
  for (let i = a.length - 1; i >= 0; --i) {
    ret += a[a.length - 1 - i] + key;
  }
  return ret;
}

function stringLinearTraverse() {
  // 1. String linear traverse
  console.log(`String linear traverse`);
  const s = "12345";
  for (let i = 0; i < s.length; ++i) {
    console.log(s[i]);
  }
}

function stringReverseTraverse() {
  // 2. String reverse traverse
  console.log(`String reverse traverse`);
  for (let i = s.length - 1; i >= 0; i--) {
    console.log(s[i]);
  }
}

/**
 *
 * @param {string} s
 */
function stringLeftTrim(s) {
  /**
   * 3. string left trim tech
   * - s = "      abf   de f  "
   * - ret = "abf   de f  "
   */
  let arrayCharacters = new Array(s.length);

  for (let i = s.length - 1; i >= 0; --i) {
    arrayCharacters[i] = s[i];
  }

  while (arrayCharacters[0] === " ") {
    arrayCharacters = shift(arrayCharacters);
    // do exactly k times, don't have redundant
  }

  return {
    arrayCharacters: arrayCharacters,
    string: join(arrayCharacters, ""),
  };
}
/**
 *
 * @param {string} s
 */
function stringRightTrim(s) {
  /**
   * 4. string right trim tech
   * - s = "      abf   de f  "
   * - ret = "      abf   de f"
   */
  let arrayCharacters = [];
  for (let i = s.length - 1; i >= 0; --i) {
    arrayCharacters[i] = s[i];
  }
  while (arrayCharacters[arrayCharacters.length - 1] === " ") {
    arrayCharacters = pop(arrayCharacters);
  }
  return {
    arrayCharacters: arrayCharacters,
    string: join(arrayCharacters, ""),
  };
}

/**
 *
 * @param {string} s
 */
function stringTrim(s) {
  /**
   * 5. string trim tech
   * - s = "   abc  de     f    "
   * - ret = "abc de f"
   *
   */
  const leftTrim = stringLeftTrim(s).string;
  const rightTrim = stringRightTrim(leftTrim).string;
  let arrayCharacters = new Array(rightTrim.length);
  for (let i = rightTrim.length - 1; i >= 0; --i) {
    arrayCharacters[i] = rightTrim[i];
  }

  let i = 0;
  while (i <= arrayCharacters.length - 1) {
    console.log("arrayCharacters: ", arrayCharacters[i]);
    if (arrayCharacters[i] === " " && arrayCharacters[i + 1] === " ") {
      arrayCharacters = removeArrayElementAtPosition(arrayCharacters, i);
      i--;
    }
    i++;
  }

  return {
    arrayCharacters: arrayCharacters,
    string: join(arrayCharacters, ""),
  };
}

{
  const s = "   abc  de     f    ";
  // console.log(stringLeftTrim(s));
  // console.log(stringRightTrim(s));

  console.log(stringTrim(s));
}
