// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [];

let sectionTitle = "";
let sectionDescription = "";
const sectionTableOfContents = [];
let sectionInstallation = "";
let sectionUsage = "";
let sectionLicense = "";
let sectionContributing = "";
let sectionTests = "";
let sectionQuestions = "";

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt ([
            {
                name: 'title',
                message: 'Enter the title of your project:'
            },
            {
                name: 'description',
                message: 'Enter a description:'
            },
        ])
        .then(answers => {
            sectionTitle = answers.title;
            sectionDescription = answers.description;
            
        })
}

// Function call to initialize app
init();
