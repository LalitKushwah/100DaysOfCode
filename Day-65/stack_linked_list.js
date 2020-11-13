class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor() {
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
  
    peek() {
      return this.top;
    }
  
    push(value) {
      const node = new Node(value);
      if (!this.length) {
        this.top = node;
        this.bottom = node;
      } else {
        const temp = this.top;
        this.top = node;
        this.top.next = temp;
      }
      this.length++;
      return this;
    }
  
    pop() {
      if(!this.top) {
        return null;
      }
      if (this.top === this.bottom) {
        this.bottom = null;
      }
      this.top = this.top.next;
      this.length--;
    }
  }
  const stack = new Stack();
  stack.push('Google');
  stack.push('Youtube');
  stack.push('Gmail');
  stack.peek();
  stack.pop();
  stack.pop();
  stack.pop();
  console.log(stack)

  /**
   *  Output: 
   *  Stack {
   *    top: Node { value: 'Youtube', next: Node { value: 'Google', next: null } },
   *     bottom: Node { value: 'Google', next: null },
   *    length: 2
   * 
   * 
   */