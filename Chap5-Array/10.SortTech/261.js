/**
 * Problem: Let's sort the positive value in one-dimensional array
 * of number in ascending order, negative values keep the same value
 * and their position
 * 
 * Understanding the problem
 * 
  const testCase1 = [3,-1,1,4,-2,5]; // [1,-1,3,4,-2,5]
  const testCase2 = [-1,-2,1,3,2,5,4,-2]; // [-1,-2, 1,2,3,4,5 , -2]
 * 
 * Approach
 * + step 1: implement heap sort - done
 * + step 2: 
 *  + traverse input array - done 
 *    + save positive value and save it's index - done
 * + step 3: sort the positive values in any order - done
 * + step 4:
 *   + traverse input array
 *     + traverse indexes array 
 *       + if indexes[j] = index 
 *         + replace old a[i] value with new positive asceding sorted value
 * 
 */

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  parentIndex = (index) => {
    return Math.floor((index - 1) / 2);
  };

  leftChildIndex = (index) => {
    return 2 * index + 1;
  };

  rightChildIndex = (index) => {
    return 2 * index + 2;
  };

  swap = (i, j) => {
    const temporary = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temporary;
  };

  insert = (newNode) => {
    this.heap.push(newNode);
    let index = this.heap.length - 1;
    let parentNodeIndex = this.parentIndex(index);
    while (
      this.heap[parentNodeIndex] &&
      this.heap[parentNodeIndex] < this.heap[index]
    ) {
      this.swap(parentNodeIndex, index);
      index = this.parentIndex(index);
      parentNodeIndex = this.parentIndex(index);
    }
  };

  delete = () => {
    const delNode = this.heap.shift();
    this.heap.unshift(this.heap.pop());
    let index = 0;
    let leftChild = this.leftChildIndex(index);
    let rightChild = this.rightChildIndex(index);

    while (
      (this.heap[leftChild] && this.heap[leftChild] > this.heap[index]) ||
      (this.heap[rightChild] && this.heap[rightChild] > this.heap[index])
    ) {
      let max = leftChild;
      if (this.heap[rightChild] > max) {
        max = this.heap[rightChild];
      }
      this.swap(max, index);

      index = max;
      leftChild = this.leftChildIndex(max);
      rightChild = this.rightChildIndex(max);
    }

    return delNode;
  };
}

/**
 *
 * @param {Array} a
 */
function heapSort(a) {
  const sorted = [];
  const heap = new MaxHeap();

  let length = a.length;

  for (let i = length - 1; i >= 0; --i) {
    heap.insert(a[i]);
  }

  for (let i = length - 1; i >= 0; --i) {
    sorted.push(heap.delete());
  }

  return sorted;
}

/**
 *
 * @param {Array} a
 */
function bubbleSort(a) {
  for (let i = a.length - 1; i >= 0; --i) {
    for (let j = i - 1; j >= 0; --j) {
      if (a[j] > a[i]) {
        const temporary = a[i];
        a[i] = a[j];
        a[j] = temporary;
      }
    }
  }
  return a;
}

/**
 *
 * @param {Array} a
 */
function E261(a) {
  let positiveValues = [];
  const indexes = [];

  for (let i = a.length - 1; i >= 0; --i) {
    if (a[i] >= 0) {
      positiveValues.push(a[i]);
      indexes.push(i);
    }
  }

  positiveValues = bubbleSort(positiveValues);

  for (let i = a.length - 1; i >= 0; --i) {
    for (let j = indexes.length - 1; j >= 0; --j) {
      if (indexes[j] === i) {
        a[i] = positiveValues[positiveValues.length - 1];
        positiveValues.pop();
      }
    }
  }

  return a;
}

function test1() {
  const testCase1 = [3, -1, 1, 4, -2, 5]; // [1,-1,3,4,-2,5]
  const testCase2 = [-1, -2, 1, 3, 2, 5, 4, -2]; // [-1,-2, 1,2,3,4,5 , -2]

  console.log(E261(testCase1));
  console.log(E261(testCase2));
}

{
  test1();
}
