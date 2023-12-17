// shapes.test.js
const { Circle, Triangle, Square } = require('./shapes');

describe('Circle Class', () => {
  test('render method should return SVG string for Circle', () => {
    const circle = new Circle();
    circle.setColor('blue');
    circle.setTextColor('white');
    expect(circle.render()).toEqual('<circle cx="50" cy="50" r="50" fill="blue" stroke="white" />');
  });
});

describe('Triangle Class', () => {
  test('render method should return SVG string for Triangle', () => {
    const triangle = new Triangle();
    triangle.setColor('green');
    triangle.setTextColor('black');
    expect(triangle.render()).toEqual('<polygon points="50,0 100,100 0,100" fill="green" stroke="black" />');
  });
});

describe('Square Class', () => {
  test('render method should return SVG string for Square', () => {
    const square = new Square();
    square.setColor('red');
    square.setTextColor('yellow');
    expect(square.render()).toEqual('<rect width="100" height="100" fill="red" stroke="yellow" />');
  });
});
