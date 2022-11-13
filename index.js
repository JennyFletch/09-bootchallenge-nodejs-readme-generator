const inquirer = require('inquirer');
const fs = require('fs');
const gmd = require('./generateMarkdown.js');

inquirer.prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
]).then((response) =>{

    /* .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!') */
    
    // const {enterName} = response;
    // const readmeMD = `# This is ${enterName}'s README file.`;

    const readmeMD = gmd.generateMarkdown(response);

    fs.writeFile('README.md', readmeMD, (err)=>{
        err ? console.error(err) : console.log('README file has been created!');
    } );

})