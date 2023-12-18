const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user


const questions = [
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'gitHubUserName',
        },
        {
            type: 'input',
            message: 'what is your email address?',
            name: 'emailAddress',
        },
        {
            type: 'input',
            message: 'what is your project name?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'please write a short description you your project?',
            name: 'projectDescriptioon',

        },
        {
            type: 'list',
            message: 'what kind of of license should your project have?',
            name: 'license',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3','None'],
        },
        {
            type: 'input',
            message: 'What commands should be run to install dependencies?',
            name: 'dependencies',
            
        },
        {
            type: 'input',
            message: 'what command should be run to run tests?',
            name: 'test',
        },
        {
            type: 'input',
            message: 'what does the user need to know aboout using the repo?',
            name: 'usage',            
        },
        {
            type: 'input',
            message: 'what does the user need to know aboout contributing to the repo?',
            name: 'usage',
        }

    ]) .then((response) => {
        console.log(response);

    })]


   



// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {


}

// function call to initialize program
init();
