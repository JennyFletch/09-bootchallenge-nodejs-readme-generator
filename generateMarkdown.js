// Include license text from licenses file
const lic = require('./licenses.js');



// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

    switch (license) {
        case "CCO Attribution 4.0 Intl":
            var readmeBadge = '[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)';
            break;
   
        case "GNU GPLv2":
            var readmeBadge = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
            break;

        case "GNU GPLv3":
            var readmeBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
            break;
         
        case "MIT":
            var readmeBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            break;
            
        default:
            var readmeBadge = '';
            break;
    }

    return readmeBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

    switch (license) {
        case "CCO Attribution 4.0 Intl":
            var licenseLink = '<https://creativecommons.org/licenses/by/4.0/legalcode>';
            break;
   
        case "GNU GPLv2":
            var licenseLink = '<https://choosealicense.com/licenses/gpl-2.0/>';
            break;

        case "GNU GPLv3":
            var licenseLink = '<https://choosealicense.com/licenses/gpl-3.0/>';
            break;
         
        case "MIT":
            var licenseLink = '<https://choosealicense.com/licenses/mit/>';
            break;
            
        default:
            var licenseLink = '';
            break;
    }

    return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

    if(license === "None") {
        var readmeLicense = '### This project is unlicensed.';
    } else {
        var readmeLicense = `### This project is licensed under the terms of the **${license} License**.`;
    }

    // Display the license content
    switch (license) {
        case "CCO Attribution 4.0 Intl":
            readmeLicense += lic.ccoAtt4IntlLicense;
            break;
        
        case "GNU GPLv2":
            readmeLicense += lic.gnuGPLv2License;
            break;

        case "GNU GPLv3":
            readmeLicense += lic.gnuGPLv3License;
            break;

        case "MIT":
            readmeLicense += lic.mitLicense;
            break;
        
        default:
            break;
    }



    
    return readmeLicense;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
    const readmeLicense = renderLicenseSection(data.license);
    const readmeBadge = renderLicenseBadge(data.license);
    const licenseLink = renderLicenseLink(data.license);

    var readmeString = `# ${data.title} ${readmeBadge} \n`;
    readmeString += `${data.description} \n \ \n`;
    readmeString += `## Table of Contents \n \ \n`; 
    readmeString += '* [Installation](#installation) \n';
    readmeString += '* [Usage](#usage) \n';
    readmeString += '* [Credits](#credits) \n';
    readmeString += '* [Tests](#tests) \n';
    readmeString += '* [Questions](#questions) \n';
    readmeString += '* [License](#license) \n  \ \n';
    readmeString += `## Installation \n \ \n`; 
    readmeString += `## Usage \n \ \n`; 
    readmeString += `## Credits \n \ \n`; 
    readmeString += `## Tests \n \ \n`; 
    readmeString += `## Questions \n \ \n`; 
    readmeString += `## License \n \ \n`;
    readmeString += `${readmeLicense}\n`; 
    readmeString += `${licenseLink} \n`;

    return readmeString;
}

module.exports = { generateMarkdown };