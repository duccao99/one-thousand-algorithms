/**
 * Hacker Rank Problem: Linked List Get Node Value
 *
 */
const SinglyLinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

const SinglyLinkedList = class {
  constructor(head = null, tail = null) {
    this.head = head;
    this.tail = tail;
  }

  insertNode(nodeData) {
    const node = new SinglyLinkedListNode(nodeData);

    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
  }
};

/**
 *
 * @param {SinglyLinkedList} singlyLinkedList
 */
function getSinglyLinkedListLength(singlyLinkedList) {
  let traverseNode = singlyLinkedList;
  let ret = 0;

  while (traverseNode !== null) {
    ret++;
    traverseNode = traverseNode.next;
  }

  return ret;
}

/**
 *
 * @param {SinglyLinkedListNode} node
 */
function logSinglyLinkedList(node) {
  while (node !== null) {
    console.log(node.data);
    node = node.next;
  }
}

const nodeData1 = 3;
const nodeData2 = 2;
const nodeData3 = 1;

const singlyLinkedList = new SinglyLinkedList();

/**
 *  1 -> null
 *  Singly Linked List
 *  + head = 1 -> null
 *  + tail = 1 -> null
 *
 */
singlyLinkedList.insertNode(nodeData1);
singlyLinkedList.insertNode(nodeData2);
singlyLinkedList.insertNode(nodeData3);

/**
 *
 * @param {SinglyLinkedList} singlyLinkedList
 * @param {number} positionFromTail
 */
function f(singlyLinkedList, positionFromTail) {
  const headNode = singlyLinkedList.head;
  let countBackwards = getSinglyLinkedListLength(headNode) - 1;
  let traverseNode = headNode;

  while (traverseNode !== null) {
    if (positionFromTail === countBackwards) {
      console.log(`Node ${countBackwards}: data ${traverseNode.data}`);
      break;
    }

    countBackwards--;
    traverseNode = traverseNode.next;
  }
}

const positionFromTail = 2;

f(singlyLinkedList, positionFromTail);
