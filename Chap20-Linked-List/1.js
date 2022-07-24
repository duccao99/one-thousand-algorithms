/**
 * Problem: Implement Linked List
 *
 *
 * Understanding The Problem
 * + Head -> B -> C -> D -> null
 *
 * + Head
 *   + data
 *   + next
 *
 * + B
 *   + data
 *   + next
 *
 * + C
 *   + data
 *   + next
 *
 * + D
 *   + data
 *   + next
 *
 * + null
 *
 * + head
 *   + data: 1
 *   + next: B
 * + B
 *   + data: 2
 *   + next: C
 * + C
 *   + data: 3
 *   + next: D
 * + D
 *   + data: 4
 *   + next: null
 *
 * + head: {
 *   data: 1
 *   next: {
 *     data:2
 *     next:  {
 *      data: 3
 *      next: {
 *        data:4
 *        next:null
 *      }
 *     }
 *   }
 * }
 *
 *
 *
 */

class SinglyLinkedListNode {
  /**
   *
   * @param {any} data
   * @param {object|null} next
   *
   */
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class SinglyLinkedList {
  /**
   *
   * @param {SinglyLinkedListNode} head
   */
  constructor(head) {
    this.head = head;
  }

  logPureSinglyLinkedList = () => {
    console.log(this.head);
  };

  linearTraverseSinglyLinkedList = () => {
    let head = this.head;

    for (;;) {
      console.log(head.data);
      if (head.next === null) {
        break;
      }

      head = head.next;
    }
  };

  linearTraverseLogDataAndNextNode = () => {
    let currentTraverseNode = this.head;

    console.log(currentTraverseNode);
    for (;;) {
      console.log("data: ", currentTraverseNode.data);
      console.log("next node: ", currentTraverseNode.next);
      console.log("\n");

      if (currentTraverseNode.next === null) {
        break;
      }

      currentTraverseNode = currentTraverseNode.next;
    }
  };
}

const D = new SinglyLinkedListNode(4, null);
const C = new SinglyLinkedListNode(3, D);
const B = new SinglyLinkedListNode(2, C);
const A = new SinglyLinkedListNode(1, B);
const Head = new SinglyLinkedListNode(0, A);

const linkedList = new SinglyLinkedList(Head);
console.log("Linear Traverse Singly Linked List");
linkedList.linearTraverseSinglyLinkedList();
linkedList.logPureSinglyLinkedList();
linkedList.linearTraverseLogDataAndNextNode();
