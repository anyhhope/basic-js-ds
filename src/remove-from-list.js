const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param { } l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(list, k) {
  let cur = list;
  let head = null;
  while(cur.next){
    if(cur.value != k){
      let node = new ListNode(cur.value);
      if (!head){
        head = node;
      } 
      else{
        let n = head;
        while (n.next) {
          n = n.next;
        }
        n.next = node;
      }
    }
    cur = cur.next;
  }
  if(cur.value != k){
    let node = new ListNode(cur.value);
    let n = head;
    while (n.next) {
      n = n.next;
    }
    n.next = node;
  }
  return head;
}

module.exports = {
  removeKFromList
};

function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}

const initial = convertArrayToList([1, 2, 3]);
const expected = convertArrayToList([1, 2, 4, 5]);

let res = removeKFromList(initial, 3)