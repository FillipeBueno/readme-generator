// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## License:
  [${data.license}.](https://choosealicense.com/licenses/${data.license})
  ## Description
  ${data.description}
  ## Table of contents:
  * [Description](#Description)
  * [Usage](#Usage)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)
  ## Installation
  To install necessary dependencies, run the following command ${data.dependencies}.
  ## Usage
  ${data.usage}.
  ## License
  This project is licensed under the ${data.license}.
  ## Contributing
  ${data.contributing}.
  ## Tests
  ${data.test}.
  ## Questions
  If you have any question about the repo contact me directly at ${data.email}. You can find more of my work at [${data.gitHub}](https://github.com/${data.gitHub}).

`;
}

module.exports = generateMarkdown;
