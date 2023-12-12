// index.js
const getUserInput = require('./lib/userInput');
const { Triangle, Circle, Square } = require('./lib/shapes');

async function runLogoMaker() {
  // Get user input
  const userInput = await getUserInput();

  // Create the corresponding shape based on user choice
  let shape;
  switch (userInput.shape) {
    case 'circle':
      shape = new Circle();
      break;
    case 'triangle':
      shape = new Triangle();
      break;
    case 'square':
      shape = new Square();
      break;
    default:
      console.error('Invalid shape choice');
      return;
  }

  // Set colors
  shape.setColor(userInput.shapeColor);
  
  // Set text color
  shape.setTextColor(userInput.textColor);

  // Generate the SVG string
  const svgString = shape.render();

  console.log(svgString);
}

// Call the function to start the application
runLogoMaker();
