// shapes.js

// Base class for all shapes
class Shape {
  constructor() {
    this.color = '';
    this.textColor = '';
  }

  setColor(color) {
    this.color = color;
  }

  setTextColor(textColor) {
    this.textColor = textColor;
  }

  render() {
    // Abstract method to be implemented by subclasses
    throw new Error('Method "render" must be implemented by subclasses');
  }
}


// Circle class
class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}


// Triangle class extending Shape
class Triangle extends Shape {
  render() {
    return `<polygon points="50,0 100,100 0,100" fill="${this.color}" stroke="${this.textColor}" />`;
  }
}

// Square class extending Shape
class Square extends Shape {
  render() {
    return `<rect width="100" height="100" fill="${this.color}" stroke="${this.textColor}" />`;
  }
}

// Exporting the classes using CommonJS syntax
module.exports = { Circle, Triangle, Square };
