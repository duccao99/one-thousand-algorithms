/**
 * Problem: Sort the perfect-number in one-dimensional array of number 
 * in descending order, other values keep the same value and their position
 * 
 * Understanding the problem
 * - perfect number: 
 * - 6
 * + divisors < 6: 1, 2, 3
 * + sum: 1 + 2 + 3 = 6
 * 
 * - 28
 * + divisors < 28: 1 2 4 7 14
 * + sum: 1 + 2 + 4 + 7 + 14 = 28
 * 
  const testCase1 = [1,6,3,28,5]; // [1,28,3,6,5]
  const testCase2 = [6,28,1,4,5]; // [28,6,1,4,5]
  const testCase3 = [28,1,4,3,6]; // [28,1,4,3,6]
  const testCase4 = [1,2,6,5,28,7]; // [1,2,28,5,6,7]
 * 
 * Approach
 * + step 1: write function to get number divisors - done
 * + step 2: write function to check perfect number - done
 * + step 3: learn heap sort - done
 * + step 4: traverse input array, save pefect number, save index - done
 * + step 5: sort the perfect number array - done
 * + step 6: 
 *   + traverse input array
 *     + traverse indexes array
 *       + if i = indexes[j]
 *         + replace array old value by sorted perfect number
 *         + remove replaced sorted value
 * 
 * 
 */

/**
 *
 * @param {Number} n
 */
function getNumberDivisors(n) {
  const divisors = [];
  for (let i = n - 1; i >= 1; i--) if (n % i === 0) divisors.push(i);
  return divisors;
}

/**
 *
 * @param {Number} n
 */
function isPerfectNumber(n) {
  const divisors = getNumberDivisors(n);

  let sum = 0;

  for (let i = divisors.length - 1; i >= 0; --i) sum += divisors[i];

  return sum === n;
}

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

  swapNode = (i, j) => {
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
      this.swapNode(index, parentNodeIndex);
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
      this.heap[rightChild] > this.heap[index]
    ) {
      let max = leftChild;
      if (this.heap[rightChild] && this.heap[rightChild] > max) {
        max = this.heap[rightChild];
      }
      this.swapNode(max, index);
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
function HeapSort(a) {
  const sorted = [];
  const heap = new MaxHeap();

  let length = a.length;

  for (let i = length - 1; i >= 0; --i) {
    heap.insert(a[length - i - 1]);
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
function E259(a) {
  let perfectNumbers = [];
  const indexes = [];

  for (let i = a.length - 1; i >= 0; --i) {
    if (isPerfectNumber(a[i])) {
      perfectNumbers.push(a[i]);
      indexes.push(i);
    }
  }

  perfectNumbers = HeapSort(perfectNumbers);

  for (let i = a.length - 1; i >= 0; --i) {
    for (let j = indexes.length - 1; j >= 0; --j) {
      if (indexes[j] === i) {
        a[i] = perfectNumbers[perfectNumbers.length - 1];
        perfectNumbers.pop();
      }
    }
  }

  return a;
}

function test1() {
  const testCase1 = [1, 6, 3, 28, 5]; // [1,28,3,6,5]
  const testCase2 = [6, 28, 1, 4, 5]; // [28,6,1,4,5]
  const testCase3 = [28, 1, 4, 3, 6]; // [28,1,4,3,6]
  const testCase4 = [1, 2, 6, 5, 28, 7]; // [1,2,28,5,6,7]

  console.log(E259(testCase1));
  console.log(E259(testCase2));
  console.log(E259(testCase3));
  console.log(E259(testCase4));
}

{
  test1();
}
