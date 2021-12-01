class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  prepand(value) {
    const newNode = {
      value: value,
      next: this.head,
    };
    this.head = newNode;
    this.length++;
  }
  traverse() {
    let node = this.head;
    while (node) {
      console.log(node.value);
      node = node.next;
    }
  }
}
const myLinkedList = new LinkedList(10);
myLinkedList.append(20);
myLinkedList.append(30);
myLinkedList.append(40);
myLinkedList.append(50);
myLinkedList.append(60);
myLinkedList.append(70);
myLinkedList.prepand(-10);
myLinkedList.prepand(-20);
myLinkedList.traverse();
console.log(myLinkedList);
