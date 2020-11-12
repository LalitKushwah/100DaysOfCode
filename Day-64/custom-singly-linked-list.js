// linked list

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class SinglyLinkedList {
    constructor(value) {
      this.head = new Node(value);
      this.tail = this.head;
      this.length = 1;
    }
  
    // O(1)
    append(value) {
      const newNode = new Node(value);
      this.tail.next = newNode;
      this.tail = newNode; // this.tail = this.tail.next
      this.length++;
    }
  
    printList() {
      const temp = [];
      let curr = this.head;
      while(curr) {
        temp.push(curr.value)
        curr = curr.next;
      }
      return temp;
    }
  
    // O(1)
    prepand(value) {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
  
    // O (n)
    insert(index, value) {
      if (index >= this.length) {
        this.append(value);
      }
      if (index === 0) {
        this.prepand(value);
      }
  
      const tempNode = this.traverseToIndex(1);
      const newNode = new Node(value);
      const preNode = tempNode.next;
      tempNode.next = newNode;
      newNode.next = preNode;
    }
  
    traverseToIndex(index) {
      let i = 0;
      let temp = this.head;
      while(i < index) {
        temp = temp.next;
        i++;
      }
      return temp;
    }
  
  }
  
  const myLinkedList = new SinglyLinkedList(10);
  myLinkedList.append(20);
  myLinkedList.append(30);
  myLinkedList.prepand(-10);
  myLinkedList.insert(2, 50);
  myLinkedList.insert(2, 100);
  myLinkedList.insert(100, 100);
  
  myLinkedList.printList();
  