// TODO: Include packages needed for this application
const requiredInfo = require('./utils/generateMarkdown');
const fs = require("fs");
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [
{
    type: "checkbox",
    name: "license",
    message: "Choose which licensing you would like to apply to your project",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0","EPL 2.0", "BSD2", "none"]
},
{
    type: "input",
    name: "title",
    message: "What is the title of your project?",
},
{
    type: "input",
    name: "description",
    message: "Provide a description of your project",
},
{
    type: "input",
    name: "installation",
    message: "How do you install the project?",
},
{
    type: "input",
    name: "usage",
    message: "Provide an explanation of how to use your project and anything that might be needed to use your project.",
},
{
    type: "input",
    name: "tests",
    message: "Did you create any tests for the project?",
},
{
    type: "input",
    name: "contributing",
    message: "If you would like other developers to contribute please provide a guideline on how to do so.",
},
{
    type: "input",
    name: "screenshot",
    message: "Provide the relative path to the image you would like to use",
},
{
    type: "input",
    name: "projectlink",
    message: "If your project has a link to it please provide it if not type N/A",
},
{
    type: "input",
    name: "repolink",
    message: "Please provide a link to repo",
},
];




// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success! Checkout new README file.'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses)=>{
        console.log("Creating README file...");
        writeToFile('./product/README.md',requiredInfo({...responses}));
    });
}

// Function call to initialize app
init();
