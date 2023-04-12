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
  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    let node = new ListNode(value);

    if (!this.head){
      this.head = node;
    } 
    else{
      let n = this.head;
      while (n.next) {
        n = n.next;
      }
      n.next = node;
    }
  }

  dequeue() {
    let temp = this.head;
    this.head = this.head.next;
    return temp.value;
  }
}

module.exports = {
  Queue
};