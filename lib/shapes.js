// lib/shapes.js

class Shape {
    constructor() {
      this.color = "";
    }
  
    setColor(color) {
      this.color = color;
    }
  
  }
  
  class Triangle extends Shape {
    render() {
    }
  }
  
  class Circle extends Shape {
    render() {
    }
  }
  
  class Square extends Shape {
    render() {
    }
  }
  
  module.exports = {
    Shape,
    Triangle,
    Circle,
    Square,
  };
  