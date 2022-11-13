// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

    if(license === "None") {
        var readmeLicense = '';
    } else {
        var readmeLicense = `## This project is licensed under the terms of the ${license} License.`;
    }
    return readmeLicense;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
    const readmeLicense = renderLicenseSection(data.license);

    var readmeString = `# ${data.title} \n\n`;
    readmeString += `## ${data.description} \n\n`; 
    readmeString += `## Table of Contents \n\n`; 
    readmeString += `## Installation \n\n`; 
    readmeString += `## Usage \n\n`; 
    readmeString += `## Credits \n\n`; 
    readmeString += `## Tests \n\n`; 
    readmeString += `## Questions \n\n`; 
    readmeString += `${readmeLicense} \n\n`; 

    return readmeString;
}

module.exports = { generateMarkdown };