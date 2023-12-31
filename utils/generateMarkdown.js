// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  var license = data.license.split(" ").join("_");
  return `# ${data.title}
## Description
${data.description}
## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
## Usage
  ![website](../images/${data.usage})
## Installation
${data.installation}
## License
  ![license](https://img.shields.io/badge/License-${license}-blue)
## features
${data.features}
## Questions
  - ${data.email}
  - [github](https://github.com/${data.credits})
## Tests
${data.tests}
`;
}
// generateMarkdown()
module.exports = generateMarkdown;
