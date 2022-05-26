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
 * @param {number} length
 */
function generateRandomString(length) {
  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let ret = "";

  for (let i = 0; i < length; ++i) {
    ret += characters.charAt(generateRandomNumber(0, characters.length - 1));
  }

  return ret;
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

function labelForCharacterPracticeTech() {
  /**
   * 6. Label for characters tech
   *
   *
   */
  const s = `
  a = 1     A = 10
  b = 2     B = 20
  c = 3     C = 30
  d = 4     D = 40
  e = 5     E = 50
  f = 6     F = 60
  g = 7     G = 70
  h = 8     H = 80
  i = 9     I = 90
  j = 10    J = 100
  k = 11    K = 110
  l = 12    L = 120
  m = 13    M = 130
  n = 14    N = 140
  o = 15    O = 150
  p = 16    P = 160
  q = 17    Q = 170
  r = 18    R = 180
  s = 19    S = 190
  t = 20    T = 200
  u = 21    U = 210
  v = 22    V = 220
  w = 23    W = 230
  x = 24    X = 240
  y = 25    Y = 250
  z = 26    Z = 260

  0 = 0
  1 = 1
  2 = 2
  3 = 3
  4 = 4
  5 = 5
  6 = 6
  7 = 7
  8 = 8
  9 = 9 
`;

  const data = [];

  for (let i = 0; i <= s.length - 1; i++) {
    if (isNaN(+s[i])) {
      if (s[i] !== "=") {
        data.push({
          character: s[i],
          labelNumber: +(s[i + 4] + s[i + 5] + s[i + 6]),
        });
      }
    }
  }

  for (let i = 0; i <= 9; ++i) {
    data.push({
      character: `${i}`,
      labelNumber: +i,
    });
  }

  return data;
}

/**
 *
 * @param {number} length
 */
function generateRandomString(length) {
  /**
   * 7. generate random string tech
   *
   */

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let ret = "";

  for (let i = 0; i < length; ++i) {
    ret += characters.charAt(generateRandomNumber(0, characters.length - 1));
  }

  return ret;
}

{
  const s = "   abc  de     f    ";
  // console.log(stringLeftTrim(s));
  // console.log(stringRightTrim(s));

  // console.log(stringTrim(s));
  console.log(labelForCharacterPracticeTech());
}
