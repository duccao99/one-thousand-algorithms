/**
 *
 * @param {number} length
 */
function generateRandomString(length) {
  /**
   * Problem: generate random string 1
   * + length: 10
   * + ret = "abcdef1230"
   *
   * Understanding The Problem
   * + number string: "0123456789"
   * + character string: "abcdefghijklmnopqrstuvwxyz"
   *
   * Approach
   * + random character
   *   + random character in number string
   *   + random character in character string
   *
   * + traverse string = number string + character string
   *   + min index: 0
   *   + max index: traverse string length - 1
   *
   * + random string = traverseString[randomIndex]
   *   + randomIndex >= 0 && randomIndex <= max index
   *
   * + generate random number between min index and max index
   *   + ret = traverseString[randomNumber]
   *
   */
  const numberString = "0123456789";
  const characterString = "abcdefghijklmnopqrstuvwxyz";
  const traverseString = numberString + characterString;
  const minIndex = 0;
  const maxIndex = traverseString.length - 1;

  let ret = "";

  for (let i = length; i >= 1; --i) {
    const randomIndex = generateRandomNumber(minIndex, maxIndex);
    const randomCharacter = traverseString[randomIndex];
    ret += randomCharacter;
  }

  return ret;
}
