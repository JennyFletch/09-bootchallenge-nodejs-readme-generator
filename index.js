const inquirer = require('inquirer');
const fs = require('fs');
require('./generateMarkdown.js');


inquirer.prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'enterName',
    },
]).then((response) =>{

    const {enterName} = response;
    
    /* .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!') */

    const readmeMD = `# This is ${enterName}'s README file.`;

    fs.writeFile('README.md', `${readmeMD}`, (err)=>{
        return console.log("done!");
    } );

})