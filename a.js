// Index: 0 1 2 3 4
//        1 2 3 4 5

function mergeUnsortedArray(left, right) {
  /**
   *  left = [1, 3, 5, 2, 4]
   *  right = [2, 4, 1, 3, 5]
   *  sortedItems = []
   * 
   *  left.length = 5
   *  right.length = 5
   * 
   * + 5 && 5 = 5 = still loop
   *  + left[0] <= right[0]
   *  + 1 <= 2 -> true 
   *    + sortedItems = [1]
   *    + left =  [3, 5, 2, 4]
   *    + right = [2, 4, 1, 3, 5]
   * 
   * 
   * + 4 && 5 = 5 = still loop
   *    + left[0] > right[0]
   *    + 3 > 2
   *      + sortedItems = [1,2]
   *      + left =  [3, 5, 2, 4]
   *      + right = [4, 1, 3, 5]
   * 
   * + 4 && 4 = 4 = still loop
   *    + left[0] <= right[0]
   *    + 3 <= 4
   *      + sortedItems = [1,2,3]
   *      + left =  [5, 2, 4]
   *      + right = [4, 1, 3, 5]
   * 
   * + 3 && 4 = 4 = still loop
   *    + left[0] > right[0]
   *    + 5 > 4
   *      + sortedItems = [1,2,3,4]
   *      + left =  [5, 2, 4]
   *      + right = [1, 3, 5]
   * 
   * + 3 && 3 = 3 = still loop
   *    + left[0] > right[0]
   *    + 5 > 1
   *      + sortedItems = [1,2,3,4,1]
   *      + left =  [5, 2, 4]
   *      + right = [3, 5]
   * 
   * + 3 && 2 = 3 = still loop
   *    + left[0] > right[0]
   *    + 5 > 3
   *      + sortedItems = [1,2,3,4,1,3]
   *      + left =  [5, 2, 4]
   *      + right = [5]
   * 
   * + 3 && 1 = 3 = still loop
   *    + left[0] <= right[0]
   *    + 5 <= 5
   *      + sortedItems = [1,2,3,4,1,3,5]
   *      + left =  [2, 4]
   *      + right = [5]
   * 
   * + 2 && 1 = 2 = still loop
   *    + left[0] <= right[0]
   *    + 2 <= 5
   *      + sortedItems = [1,2,3,4,1,3,5,2]
   *      + left =  [4]
   *      + right = [5]
   * 
   * + 1 && 1 = 1 = still loop
   *    + left[0] <= right[0]
   *    + 4 <= 5
   *      + sortedItems = [1,2,3,4,1,3,5,2,4]
   *      + left =  []
   *      + right = [5]
   * 
   * + 0 && 1 = 0 = stop loop
   *      + sortedItems = [1,2,3,4,1,3,5,2,4]
   *      + left =  []
   *      + right = [5]
   *  
   * ret = [...sortedItems,...left,...right]
   * ret = [1,2,3,4,1,3,5,2,4,5]
   */
  const sortedItems = [];

  while (left.length && right.length) {
    // while still exists left element || right element 
    // then do something

    if (left[0] <= right[0]) {
      sortedItems.push(left[0]);
      left.shift();
    }

    if (left[0] > right[0]) {
      sortedItems.push(right[0]);
      right.shift();
    }
  }


  console.log("left: ", left);
  console.log("right: ", right);
  console.log("sortedItems: ", sortedItems);

  // return [...sortedItems, ...left, ...right];
}
const left = [1, 3, 5, 2, 4];
const right = [2, 4, 1, 3, 5];

mergeUnsortedArray(left, right);
