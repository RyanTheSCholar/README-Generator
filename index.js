// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { default: Choices } = require('inquirer/lib/objects/choices');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "what is Your-Project-Title?",
    name: "title",
  },
  {
    type: "input",
    message: "what is your description?",
    name: "description",
  },
  {
    type: "input",
    message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    name: "installation",
  },
  {
    type: "input",
    message: "type in the image name for the input make sure file path looks like ./images/USER-INPUT-HERE",
    name: "usage",
  },
  {
    type: "list",
    message: "What license did you use?",
    name: "license",
    choices: ["MIT", "Apache", "ISC", "Microsoft Public", "None"]
  },
  {
    type: "input",
    message: "What is your GitHub username? This is for yourself",
    name: "credits"
  },
  {
    type: "input",
    message: "If your project has a lot of features, list them here",
    name: "features"
  },
  {
    type: "input",
    message: "If you created an application or package and would like others to contribute. Enter Your Email or source of contact",
    name: "email"
  },
  {
    type: "input",
    message: "if you had any tests write them here.",
    name: "tests"
  },
];
// TODO: Create a function to write README file
inquirer.prompt(questions )
.then((answer) => {
  console.log(answer);
  const result = generateMarkdown(answer);
  writeToFile("./output/README.md", result)
});
function writeToFile(fileName, data) {
    fs.writeFile(fileName, (data), (err) => 
    err ? console.log(err) : console.log("Success"))
}
