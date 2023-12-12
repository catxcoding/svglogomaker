// lib/userInput.js
const inquirer = require('inquirer');

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

module.exports = getUserInput;
