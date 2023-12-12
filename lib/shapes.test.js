// lib/shapes.test.js
const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle Class', () => {
  test('renders a triangle SVG string with the correct color', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });
});

describe('Circle Class', () => {
  test('renders a circle SVG string with the correct color', () => {
    const circle = new Circle();
    circle.setColor('red');
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
  });
});

describe('Square Class', () => {
  test('renders a square SVG string with the correct color', () => {
    const square = new Square();
    square.setColor('green');
    expect(square.render()).toEqual('<rect x="20" y="20" width="160" height="160" fill="green" />');
  });
});
