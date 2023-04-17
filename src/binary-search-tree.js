const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootProp = null;
  }

  root() {
    return this.rootProp
  }

  add(data) {
    this.rootProp = addWithin(this.rootProp, data)

    function addWithin(node, data) {
      if (!node) {
        return new Node(data)
      }

      if (node.data === data) {
        return node
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data)
      } else {
        node.right = addWithin(node.right, data)
      }

      return node;
    }
  }

  has(data) {
    return searchWithin(this.rootProp, data);

    function searchWithin(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ? searchWithin(node.left, data) : searchWithin(node.right, data)
    }
  }

  find(data) {
    return findWithin(this.rootProp, data)

    function findWithin(node, data) {
      if(!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      return data < node.data ? findWithin(node.left, data) : findWithin(node.right, data)
    }
  }

  remove(data) {
    this.rootProp = removeValue(this.rootProp, data);

    function removeValue(node, data) {
      if (!node) {
        return;
      }

      if (data < node.data) {
        node.left = removeValue(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeValue(node.right, data);
        return node;
      } else {
        if(!node.left && !node.right) {
          return null;
        }

        if(!node.left) {
          node = node.right;
          return node;
        }

        if(!node.right) {
          node = node.left;
          return node;
        }

        let minElFromRight = node.right;
        while(minElFromRight.left) {
          minElFromRight = minElFromRight.left
        }
        node.data = minElFromRight.data;

        node.right = removeValue(node.right, minElFromRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.rootProp) {
      return null;
    }

    let node = this.rootProp;
    while(node.left) {
      node = node.left
    }

    return node.data
  }

  max() {
    if(!this.rootProp) {
      return null;
    }

    let node = this.rootProp;
    while(node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};