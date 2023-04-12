const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.head = null;
  }

  root() {
    return this.head;
  }

  add(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
    }
    else {
      let n = this.head;
      let find = false;
      while (!find) {
        if (node.data < n.data) {
          if (n.left) n = n.left;
          else {
            n.left = node;
            find = true;
          }
        }
        else if (node.data > n.data) {
          if (n.right) n = n.right;
          else {
            n.right = node;
            find = true;
          }
        }
      }
    }
  }

  has(value) {
    let find = false;
    let n = this.head;
    if (value === n.data) return true;
    while (!find && (n.left != null || n.right != null)) {
      if (value < n.data) {
        if (n.left && n.left.data === value) find = true;
        else if (n.left) n = n.left;
        else break;
      }
      else if (value > n.data) {
        if (n.right && n.right.data === value) find = true;
        else if (n.right) n = n.right;
        else break;
      }
    }
    return find;
  }

  find(value) {
    let find = false;
    let n = this.head;
    let res;
    if (value === n.data) return n;
    while (!find && (n.left != null || n.right != null)) {
      if (value < n.data) {
        if (n.left && n.left.data === value) {
          find = true;
          res = n.left;
        }
        else if (n.left) n = n.left;
        else break;
      }
      else if (value > n.data) {
        if (n.right && n.right.data === value) {
          find = true;
          res = n.right;
        }
        else if (n.right) n = n.right;
        else break;
      }
    }
    if (!find) return null;
    else return res;
  }

  remove(value) {
    let find = false;
    let n = this.head;
    let res;
    let ifLeft = false;
    if (value != n.data) {
      while (!find && (n.left != null || n.right != null)) { //find node with value
        if (value < n.data) {
          if (n.left && n.left.data === value) {
            find = true;
            res = n.left;
            ifLeft = true;
          }
          else if (n.left) n = n.left;
          else break;
        }
        else if (value > n.data) {
          if (n.right && n.right.data === value) {
            find = true;
            res = n.right;
          }
          else if (n.right) n = n.right;
          else break;
        }
      }
    }
    else {
      res = n;
      this.head = n.right;
      find = true;
    }
    if (find) {
      if (res.left === null && res.right === null) { //if its leaf
        if (!ifLeft) n.right = null;
        else n.left = null;
      }
      else if (res.left === null) {
        if (n != res) { //not root
          if (!ifLeft) n.right = res.right;
          else n.left = res.right;
        }
        else {
          this.head = res.right;
        }
      }
      else if (res.right === null) {
        if (n != res) { //not root
          if (!ifLeft) n.right = res.left;
          else n.left = res.left;
        }
        else{
          this.head = res.left;
        }
      }
      else { //if has two children
        let n1 = res.right;
        let add = false;
        let node = res.left;
        while (!add) {
          if (node.data < n1.data) {
            if (n1.left) n1 = n1.left;
            else {
              n1.left = node;
              add = true;
            }
          }
          else if (node.data > n1.data) {
            if (n1.right) n1 = n1.right;
            else {
              n1.right = node;
              add = true;
            }
          }
        }
        if (!ifLeft) n.right = res.right;
        else n.left = res.right;
      }
    }
  }

  min() {
    let n = this.head;
    let res = n.data;
    while(n.left){
      n = n.left;
      res = n.data;
    }
    return res;
  }

  max() {
    let n = this.head;
    let res = n.data;
    while(n.right){
      n = n.right;
      res = n.data;
    }
    return res;
  }
}

module.exports = {
  BinarySearchTree
};