const a = [
  [1, 4],
  [1, 2, 3, 4],
  [1, 4],
  [1, 2],
];

/**
 *
 * @param {Array} a
 */
function removeDuplicatedNumber(a) {
  const hashmap = {};
  for (let i = a.length - 1; i >= 0; --i) {
    hashmap[a[i]] = (hashmap[a[i]] || 0) + 1;
  }
  console.log("hashmap: ", hashmap);

  const ret = [];
  for (const key in hashmap) {
    ret.push(key);
  }
  return ret;
}

console.log(removeDuplicatedNumber(a));
