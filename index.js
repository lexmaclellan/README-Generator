// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt ([
            {
                name: 'description',
                message: 'Enter a description:'
            },
        ])
        .then(answers => {
            console.info('Description: ', answers.description)
        })
}

// Function call to initialize app
init();
