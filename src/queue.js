const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  getUnderlyingList() {
    let nodeList = new ListNode(this);
  }

  enqueue(value) {
    let node = new ListNode(value);

    if (this.size === 0) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node
    }

    this.size += 1;
  }

  dequeue() {
    let elToDelete = this.first.value;

    if (this.first === this.last) {
      this.first = null
      this.last = null
    }

    this.first = this.first.next;
    this.size -= 1;

    return elToDelete
  }
}

module.exports = {
  Queue
};
