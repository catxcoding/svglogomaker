// index.js
const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');
const generateSVGFile = require('./lib/svgGenerator');

async function getUserInput() {
  const userInput = {};

  // Prompt for text
  const textResponse = await inquirer.prompt({
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for the text:',
    validate: (input) => {
      if (input.length > 3) {
        return 'Please enter up to three characters.';
      }
      return true;
    },
  });
  userInput.text = textResponse.text;

  // Prompt for text color
  const textColorResponse = await inquirer.prompt({
    type: 'input',
    name: 'textColor',
    message: 'Enter text color (keyword or hexadecimal):',
  });
  userInput.textColor = textColorResponse.textColor;

  // Prompt for shape
  const shapeResponse = await inquirer.prompt({
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['circle', 'triangle', 'square'],
  });
  userInput.shape = shapeResponse.shape;

  // Prompt for shape color
  const shapeColorResponse = await inquirer.prompt({
    type: 'input',
    name: 'shapeColor',
    message: 'Enter shape color (keyword or hexadecimal):',
  });
  userInput.shapeColor = shapeColorResponse.shapeColor;

  return userInput;
}

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
  shape.setTextColor(userInput.textColor);

  // Generate the SVG string
  const svgString = shape.render();

  // Write the SVG string to a file
  try {
    fs.writeFileSync('logo.svg', svgString);
    console.log('Generated logo.svg');
  } catch (error) {
    console.error('Error writing SVG file:', error.message);
  }
}

// Call the function to start the application
runLogoMaker();
