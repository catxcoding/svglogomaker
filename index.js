const inquirer = require('inquirer'); // Import the 'inquirer' library for user prompts
const fs = require('fs'); // Import the 'fs' library for file system operations
const path = require('path'); // Import the 'path' library for path-related operations
const { Triangle, Circle, Square } = require('./lib/shapes.js'); // Import shape classes

class LogoMaker {
    constructor() {
        this.userInput = {}; // Object to store user input
        this.examplesDir = path.join(__dirname, 'examples'); // Path to the "examples" directory
    }

    async getUserInput() {
        // User input prompt configuration
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
                return null;
        }

        shape.setColor(this.userInput.shapeColor);
        shape.setTextColor(this.userInput.textColor);

        console.log(shape); // Debugging line to check the shape's properties

        return shape;
    }

    generateSVGFile(shape) {
        const shapeSvg = shape.render();
        const textSvg = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.userInput.textColor}">${this.userInput.text}</text>`;
        const svgString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n  ${shapeSvg}\n  ${textSvg}\n</svg>`;
    
        const fileName = `logo.svg`;
        const filePath = path.join(this.examplesDir, fileName);
    
        try {
            fs.writeFileSync(filePath, svgString);
            console.log(`Generated ${fileName} in the examples directory`);
        } catch (error) {
            console.error('Error writing SVG file:', error.message);
        }
    }    

    async run() {
        this.userInput = await this.getUserInput();
        const shape = this.createShape();

        if (shape) {
            this.generateSVGFile(shape);
        } else {
            console.log('Shape creation failed. Please try again.');
        }
    }
}

const logoMaker = new LogoMaker();
logoMaker.run();
