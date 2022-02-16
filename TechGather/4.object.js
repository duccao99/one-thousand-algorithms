function objectAsHashTable() {
  // 1. Object as Hash Table tech
  const object = {};

  const a = [1, 2, 2, 2, 3, 4, 5, 5];

  for (let i = 0; i < a.length; ++i) {
    object[a[i]] = (object[a[i]] || 0) + 1;
  }

  console.log(object);
}

function linearTraverseObjectTech() {
  // 2. Linear traverse object tech
  const object = { 1: 1, 2: 3, 3: 1, 4: 1, 5: 2 };

  console.log("");
  for (const key in object) {
    console.log(`key: ${key}`);
    console.log(`value: ${object[key]}`);
  }
}

function removeObjectKeyTech() {
  // 3. Remove object key tech
  let object = {
    cow: "boo",
    cat: "meoo",
    dog: "goal goal",
  };

  const key = "dog";
  delete object[key];

  console.log(object);
}

function checkIfKeyInObject() {
  // 4. Check if a key in object tech
  const object = {
    a: 1,
    b: 2,
  };

  console.log("1" in object); // false
  console.log("a" in object); // true
}

function traverseToMidCompareTwoSides() {
  // 5. Check if a key in object tech

  /**
   *
   * @param {Object} object
   */
  function getTotalObjectKeys(object) {
    let count = 0;
    for (const key in object) count++;
    return count;
  }

  const object = { 0: 1, 1: 2, 2: 2, 3: 1 };

  const totalObjectKeys = getTotalObjectKeys(object);

  const mid = Math.round(totalObjectKeys / 2);

  let count = 0;
  for (const key in object) {
    if (count === mid) {
      break;
    }

    // Do something
    const leftSide = object[key];
    // const rightSide = ..
    count++;
  }
}

/**
 *
 * @param {object} object
 */
function reverseObjectKeyValueTech(object) {
  let ret = {};
  let keys = [];
  let values = [];

  for (const key in object) {
    keys.push(key);
    values.push(object[key]);
  }

  for (let i = keys.length - 1; i >= 0; --i) {
    ret[keys[i]] = values[i];
  }

  return ret;
}

{
  // removeObjectKeyTech();
  console.log(reverseObjectKeyValueTech({ a: 1, b: 2, c: 3, d: 4 }));
}
