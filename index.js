// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of the application?",
        name: "title",
    },
    {
        type: "input",
        message: "Describe the application",
        name: "description",
    },
    {
        type: "input",
        message: "What npm was installed to use these packages?",
        name: "installation",
    },
    {
        type: "usage",
        message: "What is the usage?",
        name: "usage",
    },
    {
        type: "input",
        message: "How can you contribute?",
        name: "contributing"
    },
    {
        type: "input",
        message: "test the markdown for the README",
        name: "test"
    },
    {
        type: "list",
        message: "Choose license for this application",
        name: "license",
        choices: ["MIT", "Mozilla", "ISC", "BOOST", "none"]
    }
];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => {
        fs.writeFileSync("readmetxt.md", generateMarkdown(data))
    })
}

// Function call to initialize app
init();
