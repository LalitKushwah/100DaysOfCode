// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  const newLinkedList = new LinkedList(0);
  let currentNode = newLinkedList;
  let carry = 0;

  let nodeOne = linkedListOne;
  let nodeTwo = linkedListTwo;

  while (nodeOne || nodeTwo || carry) {
    const firstValue = nodeOne ? nodeOne.value : 0;
    const secondValue = nodeTwo ? nodeTwo.value : 0;
    const sum = firstValue + secondValue + carry;
    const value = sum % 10;
    const newNode = new LinkedList(value);

    currentNode.next = newNode;
    currentNode = newNode;

    carry = Math.floor(sum / 10);

    nodeOne = nodeOne ? nodeOne.next : null;
    nodeTwo = nodeTwo ? nodeTwo.next : null;
  }

  return newLinkedList.next;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.sumOfLinkedLists = sumOfLinkedLists;
