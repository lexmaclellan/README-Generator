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
                type: 'list',
                name: 'license',
                message: 'Enter license information:',
                choices: ['Apache', 'BSD', 'Creative Commons', 'MIT']
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

${getLicenseInfo(answers.license)}

## Contribute

${answers.contributing}

## Tests

${answers.tests}

## Questions

I can be reached for additional questions by email at ${answers.email} or on Github at ${answers.github}.`;

            writeToFile("README.md", dataToWrite);
        })
}

function getLicenseInfo(license) {
    switch (license) {
        case "Apache":
            return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        case "BSD":
            return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
        case "Creative Commons":
            return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
        case "MIT":
            return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    }
}

// Function call to initialize app
init();
