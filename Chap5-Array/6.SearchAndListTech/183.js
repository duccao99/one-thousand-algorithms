/**
 * Problem: List all the position where it's value was the 
 * greatest value of an array number
 * 
 * Understanding the problem:
 * + [] -> []
 * + [1, 2, 1] -> 1
 * + [1, 2, 3, 4, 5, 5, 4, 3, 5] -> 4 5 8
 *  
 */




/**
 * 
 * @param {Array} a 
 * @param {Number} i 
 * @param {Number} j 
 */
function swap(a, i, j) {
  const temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

/**
 * 
 * @param {Array} a 
 */
function bubbleSortNoRef(a) {
  /**
   * nhe noi len - nang chim xuong
   */
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; ++j) {
      if (a[j] <= a[i]) {
        // neu nhe thi noi len
        swap(a, j, i);
      }
    }
  }

  return a;
}

/**
 * 
 * @param {Array} a 
 */
function bubbleSortRef(array) {
  /**
   * nhe noi len - nang chim xuong
   */
  const a = [...array];

  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; ++j) {
      if (a[j] <= a[i]) {
        // neu nhe thi noi len
        swap(a, j, i);
      }
    }
  }

  return a;
}


/**
 * 
 * @param {Array} a 
 */
function arrayMaxElement(a) {
  if (a.length === 0) {
    return 'No max element out there';
  }
  return bubbleSortRef(a)[a.length - 1];
}

/**
 * 
 * @param {Array} a 
 */
function E183(a) {
  const ret = [];
  const aMaxElement = arrayMaxElement(a);

  a.forEach((e, i) => e === aMaxElement ? ret.push(i) : void 0);

  return ret;
}


{
  const a = [];
  const b = [1, 2, 1];
  const c = [1, 2, 3, 4, 5, 5, 4, 3, 5];




  console.log(E183(a));
  console.log(E183(b));
  console.log(E183(c));

}