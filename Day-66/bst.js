class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BST {
    constructor() {
      this.root = null;
    }
  
    insert (value) {
      const newNode = new Node(value);
      if (!this.root) {
        this.root = newNode;
        return;
      } else {
        let currentNode = this.root;
        while(true) {
          if (value < currentNode.value) {
            if (!currentNode.left) {
              currentNode.left = newNode;
              return this;
            }
            currentNode = currentNode.left;
          } else {
            if (!currentNode.right) {
              currentNode.right = newNode;
              return this;
            }
            currentNode = currentNode.right;
          }
        }
      }
    }
  
    lookup (value) {
      if (!this.root) {
        return null;
      } else {
        let currentNode = this.root;
        while(true) {
          if (value < currentNode.value) {
            if (!currentNode.left) {
              return null;
            }
            currentNode = currentNode.left;
          } else if (value > currentNode.value) {
            if (!currentNode.right) {
              return null;
            }
            currentNode = currentNode.right;
          } else if (value === currentNode.value) {
            return currentNode;
          }
        }
      }
    }
  
  }
  
  const bst = new BST();
  bst.insert(9);
  bst.insert(18);
  bst.insert(90);
  bst.insert(2);
  bst.insert(4);
  bst.insert(10);
  // JSON.stringify(bst);
  bst.lookup(18);
  
  