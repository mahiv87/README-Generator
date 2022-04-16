// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      badge = `![License](https://img.shields.io/badge/License-MIT-yellow.svg)`;
      break;
    case 'Apache-2.0':
      badge = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
      break;
    case 'GPL-3.0':
      badge = `![License](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
      break;

    default:
      badge = '';
      break;
  };
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      link = `[${license}](https://opensource.org/licenses/MIT)`;
      break;
    case 'Apache-2.0':
      link = `[${license}](http://www.apache.org/licenses/LICENSE-2.0)`;
      break;
    case 'GPL-3.0':
      link = `[${license}](https://www.gnu.org/licenses/gpl-3.0)`;
      break;

    default:
      link = '';
      break;
  };
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'MIT':
      notice = `Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n
      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
      INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
      PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
      FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
      OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
      DEALINGS IN THE SOFTWARE.\n
      ${renderLicenseLink(license)}`;
      break;
    case 'Apache-2.0':
      notice = `Licensed under the Apache License, Version 2.0 (the "License");
      you may not use this file except in compliance with the License.
      You may obtain a copy of the License at\n   
      ${renderLicenseLink(license)}\n   
      Unless required by applicable law or agreed to in writing, software
      distributed under the License is distributed on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      See the License for the specific language governing permissions and
      limitations under the License.`;
      break;
    case 'GPL-3.0':
      notice = `This program is free software: you can redistribute it and/or modify
      it under the terms of the GNU General Public License as published by
      the Free Software Foundation, either version 3 of the License, or
      (at your option) any later version.\n  
      This program is distributed in the hope that it will be useful,
      but WITHOUT ANY WARRANTY; without even the implied warranty of
      MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
      GNU General Public License for more details.\n  
      You should have received a copy of the GNU General Public License
      along with this program.  If not, see ${renderLicenseLink(license)}.`;
      break;
  
    default:
      notice = '';
      break;
  };
  return notice; 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${renderLicenseSection(data.license)}

## Contributing 

${data.contributing}

## Test

${data.tests}

## Questions

[GitHub](https://github.com/${data.github})
${data.email}

`
};

module.exports = generateMarkdown;
