class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  
  // Method
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.calcArea()); // 100

console.log(square.hasOwnProperty('calcArea'));
console.log(square.hasOwnProperty('width'));
// Compile above code in babeljs.io