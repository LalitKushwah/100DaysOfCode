class Stack {
    stack = [];
  
    push(value) {
      this.stack.push(value);
    }
  
    pop() {
      this.stack.splice(this.stack.length-1,1);
    }
  
    peek() {
      if (this.stack.length) {
        return this.stack[this.stack.length-1];
      } else {
        return null;
      }
    }
  }
  
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  stack.push(30);
  stack.push(40);
  stack.pop()
  stack.pop()
  stack.peek();
  // console.log(stack)