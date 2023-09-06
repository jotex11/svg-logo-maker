// Importing inqirer, fs, and shapes 
const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/shapes");

// Function to ask user questions 
async function promptUser() {
    const shapeChoice = {
        type: 'list',
        message: "Select your preferred shape:",
        choices: ['Circle', 'Square', 'Triangle'],
        name: 'shapeType'
    };
    const shapeColor = {
        type: 'input',
        message: "Choose your shape color (enter keyword or hexadecimal):",
        name: 'shapeColorType'
    }
    const textChoice = {
        type: 'input',
        message: "Enter up to three letters for logo:",
        name: 'textType'
    };
    const textColorChoice = {
        type: 'input',
        message: "Choose your desired text color (enter keyword or hexadecimal):",
        name: 'textColor'
    };
    const answers = await inquirer.prompt([
        shapeChoice,
        shapeColor,
        textChoice,
        textColorChoice
    ]);

    // Creates a shape based off user choice
    let shape; 
    switch(answers.shapeType) {
        case 'Circle':
            shape = new Circle();
            break;
        case 'Square':
            shape = new Square();
            break;
        case 'Triangle':
            shape = new Triangle();
            break;
    }

    // Sets colors and text based off answer given 
    shape.setColor(answers.shapeColorType);
    shape.setText(answers.textType, answers.textColor);

    const shapeMade = shape.render();
    console.log('svg code:', shapeMade);

    fs.writeFile("logo.svg", shapeMade, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Logo successfully created!")
        }
    })
}

// Callback function
promptUser();