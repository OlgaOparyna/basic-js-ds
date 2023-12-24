const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  root() {
    this.root = null;
  }

  add(data) {
    let newList = addNodeList(this.root, data);
    this.root = newList;
    function addNodeList(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data){
        return node;
      }

      if (data < node.data){
        node.left = addNodeList(node.left, data)
      } else {
        node.right = addNodeList(node.right, data)
      }
    return node;
    }
  }

  has(data) {
    return searchNodeList (this.root, data);

    function searchNodeList (node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data){
        return true;
      }

      return data < node.data ?
      searchNodeList(node.left, data) :
      searchNodeList(node.right, data)
    }
  }

  find(data) {
    let currentNode = this.root
    
    while (currentNode) {
      if (data === currentNode.data) {
        return currentNode
      }
      if (data < currentNode.data) {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }
    return false
  }

  remove(data) {
    this.root = removeNodeList (this.root, data);

    function removeNodeList (node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data){
        node.left = removeNodeList(node.left, data)
        return node;
      } else if (node.data < data) {
        node.right = removeNodeList(node.right, data)
        return node;
      } else {
        if (!node.left && !node.right){
          return null;
        }

        if (!node.left){
          node = node.right;
          return node;
        }

        if (!node.right){
          node = node.left;
          return node;
        }

        let minListRight = node.rigth;
        while (!minListRight.left){
          minListRight = minListRight.left
        }
        node.data = minListRight.data;
        node.right = removeNodeList(node.right, minListRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.root){
      return;
    }

    let currentNode = this.root
    while (currentNode.left) {
      currentNode = currentNode.left
    }
      return currentNode.data
  }

  max() {
    if (!this.root){
      return;
    }

    let currentNode = this.root
    while (currentNode.right) {
      currentNode = currentNode.right
    }
    return currentNode.data
  }
}

module.exports = {
  BinarySearchTree
};