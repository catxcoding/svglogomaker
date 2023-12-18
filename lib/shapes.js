// shapes.js

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
    throw new Error('Method "render" must be implemented by subclasses');
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" stroke="${this.textColor}" />`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="50,0 100,100 0,100" fill="${this.color}" stroke="${this.textColor}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect width="100" height="100" fill="${this.color}" stroke="${this.textColor}" />`;
  }
}

module.exports = { Circle, Triangle, Square };
