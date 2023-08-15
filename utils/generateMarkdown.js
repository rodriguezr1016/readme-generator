// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }else{
  return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `\n * [License](#license)\n`;
  }else{
  return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License
    
      Licensed under the ${license} license.`;
  }else{
  return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Table of Contents
* [Description](#description)
* [Usage](#usage)
* [Contributors](#contributors)
* [Testing](#tests)
## Installation
  ${data.installation}
  
${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  
## Description
  ${data.description}
## Deployed Application URL
  ${data.projectlink}
## Link to Repo
  ${data.repolink}
## Screenshot
  ![alt-text](${data.screenshot})
## How to Use This Application:
  ${data.usage}
## Contributors
  ${data.contributing}
## Testing
  ${data.tests}

`;
}

module.exports = generateMarkdown;
