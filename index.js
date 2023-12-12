// index.js
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const { Triangle, Circle, Square } = require('./lib/shapes');

class LogoMaker {
  constructor() {
    // Object to store user input
    this.userInput = {};
    // Path to the "examples" directory
    this.examplesDir = path.join(__dirname, 'examples');
  }

  // Prompt the user for input
  async getUserInput() {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the text:',
        validate: (input) => {
          if (input.length > 3) {
            return 'Please enter up to three characters.';
          }
          return true;
        },
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color (keyword or hexadecimal):',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (keyword or hexadecimal):',
      },
    ]);
  }

  // Create the corresponding shape based on user choice
  createShape() {
    let shape;
    switch (this.userInput.shape) {
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

    // Set colors for the shape
    shape.setColor(this.userInput.shapeColor);
    shape.setTextColor(this.userInput.textColor);

    return shape;
  }

  // Generate SVG file based on the given shape
  generateSVGFile(shape) {
    const svgString = shape.render();

    // Save the SVG string to the examples directory
    const fileName = `example_${Date.now()}.svg`;
    const filePath = path.join(this.examplesDir, fileName);

    try {
      fs.writeFileSync(filePath, svgString);
      console.log(`Generated ${fileName} in the examples directory`);
    } catch (error) {
      console.error('Error writing SVG file:', error.message);
    }
  }

  // Run the logo maker application
  async run() {
    this.userInput = await this.getUserInput();
    const shape = this.createShape();
    this.generateSVGFile(shape);
  }
}

// Instantiate and run the LogoMaker
const logoMaker = new LogoMaker();
logoMaker.run();
