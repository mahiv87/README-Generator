// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a short description of the project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How to install the project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use the project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license do you want to use?',
        choices: ['MIT', 'Apache-2.0', 'GPL-3.0'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the instructions for contribution?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions for your project?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((responses) => {
        writeToFile('./README.md', generateMarkdown(responses))
    })
}

// Function call to initialize app
init();
