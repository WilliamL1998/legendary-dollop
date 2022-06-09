// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of this project?",
        name: "title"
    },
    {
        type: "input",
        message: "Give a short description of this project:",
        name: "description"
    },
    {
        type: "input",
        message: "What are the installation instructions for this project?",
        name: "installation"
    },
    {
        type: "input",
        message: "What are the usage instructions for this project?",
        name: "usage"
    },
    {
        type: "input",
        message: "What are the contribution guidelines for this project?",
        name: "contributing"
    },
    {
        type: "input",
        message: "What are the test instructions for this project?",
        name: "tests"
    },
    {
        type: "checkbox",
        message: "What is the license used for this project?",
        choices: ["The Unlicense", "Boost Software License 1.0", "MIT License", "Apache License 2.0", "Mozilla Public License 2.0", "GNU LGPLv3", "GNU GPLv3", "GNU AGPLv3", "None"],
        name: "license"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
    );
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(data => {
            writeToFile("README.md", generateMarkdown(data))
        })
}

// Function call to initialize app
init();
