/**
 * Heap Sort
 *
 * - A. Binary Heap
 * + Parent Node is either greater than Child Node or smaller than Child Node
 * + A Binary Tree
 *

 *
 * + Use array as a Binary Heap data structure
 *   + Parent Node: i
 *   + Left child: 2 x i + 1
 *   + Right child: 2 x i + 2
 *
 *
 *--------0 1 2 3 4 5 6 7---------
 * - a = [1,3,2,5,4,7,9,8]
 * + i = 3 - parent node a[3] = 5
 *   + j = 2 x i + 1 - left child = a[7] = 8
 *   + k = 2 x i + 2 - right child = a[8] = null
 *
 *
 * Binary Heap
 *           5
 *          /
 *         8
 *
 *
 * + i = 1 - parent node = a[1] = 3
 *   + j = 2 x i + 1 = 3, left child = a[3] = 5
 *   + k = 2 x i + 2 = 4, right child = a[4] = 4
 *
 * + Given child node index: 3
 *   + parent node index: (3-1)/2 = 1
 * 
 * + Given child node index: 4
 *   + parent node index: (4-1)/2 = floor(1.5) = 1
 * 
 * 
 * Binary Heap
 *         3
 *        / \
 *       5   4
 *      /
 *     8
 *
 *
 * B. Heapify
 * + Reshaping at Node position'th
 * 
 * - Binary Tree
 *          10
 *         /  \
 *        30  100
 *       /
 *      20
 * 
 * - Heapify at 30
 *         10
 *        /  \
 *      20   100
 *     /
 *    30
 *     
 */

class MaxHeap {
  /**
   *  - Max Binary Heap
   *  + Parent node value is greater than child node value
   *  + Example:
   *           9
   *          / \
   *         6   7
   *        / \  /
   *       3  2  5
   *
   *
   */
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
    /**
     * - Insert a new node to heap
     * + insert at the rightmost on the bottom level
     * + compare it value with parent node, bubbles up
     *
     *          50
     *       /      \
     *      43      38
     *     /  \    /  \
     *    22  39  27   1
     *   /  \ /
     *  3  12 45(*) (insert at the rightmost on bottom level)
     *
     * ------- bubbles up
     *          50
     *       /      \
     *      43      38
     *     /  \    /  \
     *    22  45(*)27  1
     *   /  \ /
     *  3  12 39(*)
     *
     *
     *
     *          50
     *       /      \
     *      45(*)   38
     *     /  \    /  \
     *    22  43(*)27  1
     *   /  \ /
     *  3  12 39
     *
     *
     *
     *
     *
     *
     *
     *
     */
    this.heap.push(newNode);
    let index = this.heap.length - 1;
    let parentNodeIndex = this.parentIndex(index);

    while (
      this.heap[parentNodeIndex] &&
      this.heap[parentNodeIndex] < this.heap[index]
    ) {
      this.swapNode(parentNodeIndex, index);
      index = this.parentIndex(index);
      parentNodeIndex = this.parentIndex(index);

      // parentNodeIndex = this.parentIndex(parentNodeIndex);
    }
  };

  delete = () => {
    /**
     * - a heap only allows the deletion of the root element
     * - move the last node to the root then bubble this misplaced value down
     *
     *
     *            50  (root)                                 12
     *           /  \                                       /  \
     *         43    38                                   43    38
     *        /  \  /  \                                 /  \  /  \
     *      22  39 27   1  --- Move the last node      22   39 27  1
     *     /  \                to root                /
     *    3   12 (last node)                         3
     *
     *
     *   ------ Bubbling the misplaced value down --------
     *           43(*)                            43
     *          /  \                            /    \
     *        12(*) 38                        39(*)    38
     *       /  \  /  \                      /  \     /  \
     *     22   39 27  1   ---------        22 12(*) 27   1
     *    /                                /
     *   3                                3
     *
     *
     * - root: i
     * - left: 2 x i + 1
     * - right: 2 x i + 2
     *
     * - root: 0
     * - left: 1
     * - right: 2
     *
     * - root: 1
     * - left: 3
     * - right: 4
     *
     * - root: 2
     * - left: 5
     * - right: 6
     *
     *--------0 1 2 3 4------
     * - a = [5,4,1,3,2]
     * i = 0       5
     *            / \
     *           4   1
     *          / \
     *         3   2
     *
     * - delete()
     *             2                  4                4
     *            / \                / \              / \
     *           4   1    ----      2   1   ---      3   1
     *          /                  /                /
     *         3                  3                2
     * - result: [4,3,1,2]
     */

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
  const heap1 = new MaxHeap();
  /**
   * - a = [1,2,3,4,5]
   * - len = 5
   * + i = len - 1 = 4
   * + len - i - 1 = 5 - 4 - 1 = 0
   * + len - i - 1 = 5 - 3 - 1 = 1
   *
   *
   */

  let length = a.length;

  for (let i = length - 1; i >= 0; --i) {
    heap1.insert(a[length - i - 1]);
  }

  for (let i = length - 1; i >= 0; --i) {
    sorted.push(heap1.delete());
  }

  return sorted;
}

{
  const a1 = [5, 4, 1, 3, 2];
  console.log(HeapSort(a1));
}
