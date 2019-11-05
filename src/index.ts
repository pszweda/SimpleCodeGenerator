#!/usr/bin/env node
import templates from "./templates";
import fs from 'fs';
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
        type: 'list',
        name: 'template',
        message: 'Select template to generate?',
        choices: templates.templates.map((item) => {
            return item.name;
        })
      },
      {
        type: 'input',
        name: 'componentName',
        message: "Provide component name",
      },
  ])
  .then((answers: {template: string, componentName: string}) => {    
    const selectedTemplate: any = templates.templates.find((template) => template.name === answers.template);

    selectedTemplate.files.forEach((template: {name: string, template: string}) => {
        const dir = './' + answers.componentName;
        let fileData = template.template.replace(new RegExp('{componentName}', 'g'), answers.componentName); 

        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
            console.log('Directory created.');
        }

        let fileName = template.name.replace(new RegExp('{componentName}', 'g'), answers.componentName);

        fs.writeFile(dir + '/' + fileName, fileData, (err) => {
            console.log('The file ' + fileName + ' has been saved!');
        });
    });
  });
