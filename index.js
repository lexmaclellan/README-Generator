// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];

let dataToWrite = "";

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log("File written successfully.")
    );
}

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
            {
                name: 'installation',
                message: 'What is the installation process?'
            },
            {
                name: 'usage',
                message: 'Explain how to use the app:'
            },
            {
                name: 'credits',
                message: 'List any collaborators or third-party assets:'
            },
            {
                name: 'license',
                message: 'Enter license information:'
            },
            {
                name: 'contributing',
                message: 'How can others contribute to this project?'
            },
            {
                name: 'tests',
                message: 'What tests can be performed with this app?'
            },
            {
                name: 'github',
                message: 'Enter the link to your Github:'
            },
            {
                name: 'email',
                message: 'Enter your email address:'
            },
        ])
        .then(answers => {
            dataToWrite = `# ${answers.title}

## Description

${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [How to Contribute](#contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${answers.installation}

## Usage

${answers.usage}

## Credits

${answers.credits}

## License

${answers.license}

## Contribute

${answers.contributing}

## Tests

${answers.tests}

## Questions

I can be reached for additional questions by email at ${answers.email} or on Github at ${answers.github}.`;

            writeToFile("README.md", dataToWrite);
        })
}

// Function call to initialize app
init();
