// Custom array implementation using class

class MyArray {
    constructor() {
      this.data = {};
      this.length = 0;
    }
    
    // O(1)
    get(index) {
      return this.data[index];
    }
  
    // O(1)
    push(item) {
      this.data[this.length] = item;
      this.length++;
    }
  
    // O(1)
    pop() {
      delete this.data[this.length -1];
      this.length--;
    }
  
    // O(n) because of shifting
    delete(index) {
      const item = this.data[index];
      if (!item) return `index not found`
      this.shiftArray(index);
      return item;
    }
  
    shiftArray(index) {
      for (let i = index; i < this.length - 1; i++) {
        this.data[i] = this.data[i+1];
      }
      delete this.data[this.length-1];
      this.length--;
    }
  }
  
  const myArrayObj = new MyArray();
  myArrayObj.push(1);
  myArrayObj.push(2);
  myArrayObj.push(3);
  myArrayObj.push(4);
  myArrayObj.delete(100);
  // myArrayObj.delete(1);
  console.log(myArrayObj);
  
  