const inquirer = require('inquirer');
const fs = require('fs');
const gmd = require('./generateMarkdown.js');

inquirer.prompt([
    {
        type: 'input',
        message: 'Project Title:',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Description:',
        name: 'description'
    },
    {
        type: 'list',
        message: 'Choose a license:',
        choices: ["GNU GPLv2", "GNU GPLv3", "MIT", "Open Software 3.0", "None"],
        name: 'license'
    }
]).then((response) =>{

    const readmeMD = gmd.generateMarkdown(response);

    fs.writeFile('README.md', readmeMD, (err)=>{
        err ? console.error(err) : console.log('README file has been created!');
    } );

})