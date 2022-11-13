const inquirer = require('inquirer');
const fs = require('fs');
const gmd = require('./generateMarkdown.js');

inquirer.prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'list',
        message: 'Choose a license:',
        choices: ["MIT", "Stuffed Crust", "Pan", "none"],
        name: 'license'
    }
]).then((response) =>{

    const readmeMD = gmd.generateMarkdown(response);

    fs.writeFile('README.md', readmeMD, (err)=>{
        err ? console.error(err) : console.log('README file has been created!');
    } );

})