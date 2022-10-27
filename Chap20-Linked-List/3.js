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
 * @param {SinglyLinkedListNode} node
 */
function logSinglyLinkedList(node) {
  while (node !== null) {
    console.log(node.data);
    node = node.next;
  }
}

const nodeData1 = 1;
const nodeData2 = 2;
const nodeData3 = 3;
const nodeData4 = 4;

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
singlyLinkedList.insertNode(nodeData4);
