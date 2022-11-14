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
        type: 'input',
        message: 'Installation Instructions:',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Usage:',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Screenshot Filename: (in ./assets/images)',
        name: 'screenshot'
    },
    {
        type: 'input',
        message: 'Alt Text for Screenshot: ',
        name: 'alttext',
    },
    {
        type: 'input',
        message: 'Credits:',
        name: 'credits'
    },
    {
        type: 'input',
        message: 'Testing:',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'Email Address:',
        name: 'email'
    },
    {
        type: 'input',
        message: 'GitHub Username:',
        name: 'gituser'
    },
    {
        type: 'list',
        message: 'Choose a license:',
        choices: ["CCO Attribution 4.0 Intl", "GNU GPLv2", "GNU GPLv3", "MIT", "None"],
        name: 'license'
    }
]).then((response) =>{

    const readmeMD = gmd.generateMarkdown(response);

    fs.writeFile('README.md', readmeMD, (err)=>{
        err ? console.error(err) : console.log('README file has been created!');
    } );

})